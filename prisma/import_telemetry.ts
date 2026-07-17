import fs from "fs";
import path from "path";

// Simple manual .env parser
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const parts = trimmed.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let val = parts.slice(1).join("=").trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      process.env[key] = val;
    }
  }
}

import { PrismaClient } from "../src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const CSV_URL = "https://archive.ics.uci.edu/ml/machine-learning-databases/00601/ai4i2020.csv";

async function downloadAndSeed() {
  console.log(`Downloading CNC dataset from ${CSV_URL}...`);
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }
    const text = await response.text();
    console.log("Download complete. Parsing CSV...");

    const lines = text.split("\n");
    // Skip header line
    const header = lines[0].split(",");
    console.log("CSV Header structure:", header);

    const normalRows: any[] = [];
    const failureRows: any[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Handle standard comma split (dataset has simple columns)
      const cols = line.split(",");
      if (cols.length < 14) continue;

      const airTempK = parseFloat(cols[3]);
      const procTempK = parseFloat(cols[4]);
      const speed = parseFloat(cols[5]);
      const torque = parseFloat(cols[6]);
      const wear = parseFloat(cols[7]);
      const failure = parseInt(cols[8]) === 1;
      const twf = parseInt(cols[9]) === 1;
      const hdf = parseInt(cols[10]) === 1;
      const pwf = parseInt(cols[11]) === 1;
      const osf = parseInt(cols[12]) === 1;
      const rnf = parseInt(cols[13]) === 1;
      const machineId = cols[1]; // e.g. M14860

      const row = {
        machineId,
        airTemp: airTempK,
        processTemp: procTempK,
        rotationalSpeed: speed,
        torque,
        toolWear: wear,
        machineFailure: failure,
        twf,
        hdf,
        pwf,
        osf,
        rnf,
      };

      if (failure) {
        failureRows.push(row);
      } else {
        normalRows.push(row);
      }
    }

    console.log(`Found ${normalRows.length} normal runs and ${failureRows.length} failure runs.`);

    // Sample 40 normal runs and 40 failure runs for rich UI experience
    const sampleNormal = normalRows.slice(0, 40);
    const sampleFailure = failureRows.slice(0, 40);
    const allSamples = [...sampleNormal, ...sampleFailure];

    console.log(`Seeding ${allSamples.length} selected telemetry rows to database...`);

    // Clean existing telemetry
    await prisma.$executeRawUnsafe('TRUNCATE TABLE "CncMachineTelemetry" RESTART IDENTITY;');

    await prisma.cncMachineTelemetry.createMany({
      data: allSamples,
    });

    console.log("Telemetry database seeding completed successfully!");
  } catch (err) {
    console.error("Telemetry seeding failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

downloadAndSeed();
