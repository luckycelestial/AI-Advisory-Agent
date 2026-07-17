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

import { getNeo4jDriver, closeNeo4jDriver } from "../src/lib/neo4j-client";

async function seedNeo4j() {
  console.log("Seeding Neo4j Industry Graph...");
  const driver = getNeo4jDriver();
  const session = driver.session();

  try {
    // Clear old data
    await session.run("MATCH (n) DETACH DELETE n");
    console.log("Old graph entities cleared.");

    // Create companies
    const companies = [
      { id: "C01", name: "Peenya Precision CNC Ltd", revenue: "₹45 Cr", employeeCount: 120, margin: "14.2%" },
      { id: "C02", name: "Karnataka Die Castings", revenue: "₹30 Cr", employeeCount: 85, margin: "12.8%" },
      { id: "C03", name: "Jigani Auto Components", revenue: "₹65 Cr", employeeCount: 210, margin: "15.0%" },
      { id: "C04", name: "Hoskote Machining Solutions", revenue: "₹18 Cr", employeeCount: 50, margin: "11.5%" },
      { id: "C05", name: "Oragadam Metal Works", revenue: "₹110 Cr", employeeCount: 350, margin: "13.5%" },
      { id: "C06", name: "Chennai Foundry Group", revenue: "₹95 Cr", employeeCount: 280, margin: "12.0%" },
      { id: "C07", name: "Chakan Tooling Pro", revenue: "₹80 Cr", employeeCount: 190, margin: "14.8%" },
      { id: "C08", name: "Deccan Forgings Ltd", revenue: "₹55 Cr", employeeCount: 140, margin: "13.0%" }
    ];

    for (const c of companies) {
      await session.run(
        `CREATE (c:Company {
          id: $id,
          name: $name,
          revenue: $revenue,
          employeeCount: $employeeCount,
          margin: $margin
        })`,
        c
      );
    }
    console.log("Seeded companies.");

    // Create materials
    const materials = [
      { name: "TMT Rebars (Steel)", price: "₹54,500/ton" },
      { name: "Aluminium Alloy (6061)", price: "₹380/kg" },
      { name: "Mild Steel Billets", price: "₹48,200/ton" }
    ];

    for (const m of materials) {
      await session.run(
        `CREATE (m:Material {
          name: $name,
          price: $price
        })`,
        m
      );
    }
    console.log("Seeded materials.");

    // Create locations (clusters)
    const locations = [
      { name: "Bengaluru (Peenya)" },
      { name: "Bengaluru (Jigani)" },
      { name: "Chennai (Oragadam)" },
      { name: "Pune (Chakan)" }
    ];

    for (const l of locations) {
      await session.run(
        `CREATE (l:ClusterRegion {
          name: $name
        })`,
        l
      );
    }
    console.log("Seeded cluster locations.");

    // Build LOCATED_IN relations
    const locationsMapping = [
      { company: "Peenya Precision CNC Ltd", loc: "Bengaluru (Peenya)" },
      { company: "Karnataka Die Castings", loc: "Bengaluru (Peenya)" },
      { company: "Jigani Auto Components", loc: "Bengaluru (Jigani)" },
      { company: "Hoskote Machining Solutions", loc: "Bengaluru (Jigani)" },
      { company: "Oragadam Metal Works", loc: "Chennai (Oragadam)" },
      { company: "Chennai Foundry Group", loc: "Chennai (Oragadam)" },
      { company: "Chakan Tooling Pro", loc: "Pune (Chakan)" },
      { company: "Deccan Forgings Ltd", loc: "Pune (Chakan)" }
    ];

    for (const m of locationsMapping) {
      await session.run(
        `MATCH (c:Company {name: $company}), (l:ClusterRegion {name: $loc})
         CREATE (c)-[:LOCATED_IN]->(l)`,
        m
      );
    }

    // Build USES_MATERIAL relations
    const materialMapping = [
      { company: "Peenya Precision CNC Ltd", mat: "TMT Rebars (Steel)" },
      { company: "Jigani Auto Components", mat: "Mild Steel Billets" },
      { company: "Karnataka Die Castings", mat: "Aluminium Alloy (6061)" },
      { company: "Hoskote Machining Solutions", mat: "Mild Steel Billets" },
      { company: "Oragadam Metal Works", mat: "TMT Rebars (Steel)" },
      { company: "Chennai Foundry Group", mat: "Mild Steel Billets" },
      { company: "Chakan Tooling Pro", mat: "Aluminium Alloy (6061)" },
      { company: "Deccan Forgings Ltd", mat: "Mild Steel Billets" }
    ];

    for (const m of materialMapping) {
      await session.run(
        `MATCH (c:Company {name: $company}), (mat:Material {name: $mat})
         CREATE (c)-[:USES_MATERIAL]->(mat)`,
        m
      );
    }

    // Build COMPETES_WITH relations
    const competitors = [
      { c1: "Peenya Precision CNC Ltd", c2: "Jigani Auto Components" },
      { c1: "Jigani Auto Components", c2: "Oragadam Metal Works" },
      { c1: "Oragadam Metal Works", c2: "Chakan Tooling Pro" },
      { c1: "Chakan Tooling Pro", c2: "Peenya Precision CNC Ltd" },
      { c1: "Karnataka Die Castings", c2: "Chakan Tooling Pro" },
      { c1: "Chennai Foundry Group", c2: "Karnataka Die Castings" },
      { c1: "Deccan Forgings Ltd", c2: "Hoskote Machining Solutions" }
    ];

    for (const comp of competitors) {
      await session.run(
        `MATCH (a:Company {name: $c1}), (b:Company {name: $c2})
         CREATE (a)-[:COMPETES_WITH]->(b)
         CREATE (b)-[:COMPETES_WITH]->(a)`,
        comp
      );
    }
    console.log("Seeded competitor connections.");

    console.log("Neo4j Industry Graph successfully seeded!");
  } catch (err) {
    console.error("Failed to seed Neo4j:", err);
  } finally {
    await session.close();
    await closeNeo4jDriver();
  }
}

seedNeo4j();
