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

async function seedIndices() {
  console.log("Fetching and seeding Indian Metal & Steel indices data...");

  const indices = [
    {
      source: "Tata nexarc",
      material: "TMT Rebars (Fe 500D)",
      region: "Bengaluru (Peenya)",
      price: 54500,
      unit: "per Ton",
      change: 1.2,
    },
    {
      source: "SteelonCall",
      material: "Mild Steel Billets",
      region: "Chennai (Jigani)",
      price: 48200,
      unit: "per Ton",
      change: 0.8,
    },
    {
      source: "BigMint",
      material: "Sponge Iron Index",
      region: "Mumbai Hub",
      price: 32100,
      unit: "per Ton",
      change: -0.4,
    },
    {
      source: "Ministry WPI",
      material: "Metal & Steel WPI Index",
      region: "National Average",
      price: 142.6,
      unit: "index points",
      change: 2.1,
    },
  ];

  try {
    // Clear old indices
    await prisma.$executeRawUnsafe('TRUNCATE TABLE "IndianMetalIndex" RESTART IDENTITY;');

    await prisma.indianMetalIndex.createMany({
      data: indices,
    });

    console.log("Indian Metal & Steel indices successfully seeded!");
  } catch (err) {
    console.error("Failed to seed Indian Metal indices:", err);
  } finally {
    await prisma.$disconnect();
  }
}

seedIndices();
