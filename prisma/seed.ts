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

import { prisma } from "../src/lib/prisma-client";


async function main() {
  console.log("Seeding database...");

  // Clean old data
  await prisma.industryNews.deleteMany();
  await prisma.structuralRisk.deleteMany();
  await prisma.pricingRecommendation.deleteMany();
  await prisma.marketSignal.deleteMany();
  await prisma.shipmentStep.deleteMany();
  await prisma.shipment.deleteMany();
  await prisma.order.deleteMany();
  await prisma.material.deleteMany();
  await prisma.inventoryItem.deleteMany();
  await prisma.cncMachineTelemetry.deleteMany();
  await prisma.indianMetalIndex.deleteMany();

  // 1. Seed Materials
  const materialAluminium = await prisma.material.create({
    data: {
      name: "Aluminium Alloy (6061)",
      currentCost: 380,
      marketCost: 427.12,
      supplier: "Bommasandra Metal Casting",
    },
  });

  const materialSteel = await prisma.material.create({
    data: {
      name: "Steel Rods (Mild)",
      currentCost: 58000,
      marketCost: 61480,
      supplier: "Peenya Steel Distributor",
    },
  });

  // 2. Seed Orders
  await prisma.order.createMany({
    data: [
      {
        id: "ORD-221",
        client: "Client X",
        margin: "14.2%",
        materialId: materialSteel.id,
      },
      {
        id: "ORD-214",
        client: "Client Y",
        margin: "9.5%",
        materialId: materialAluminium.id,
      },
    ],
  });

  // 3. Seed Shipments and ShipmentSteps
  const shipment1 = await prisma.shipment.create({
    data: {
      materialId: materialSteel.id,
      qty: "15 Tons",
      supplier: "Peenya Steel Distributor",
      currentNode: "Distributor Node (Bengaluru Outer Ring)",
      eta: "July 20 (4 Days Delay)",
      status: "delayed",
      gemmaAnnotation:
        "Steel batch stuck at distributor stage — 4 day delay risk. This creates a liquidity bottleneck for Order #221. Consider executing buffer pricing (+2.5% markup) to hedge against delayed cash collection.",
    },
  });

  await prisma.shipmentStep.createMany({
    data: [
      { shipmentId: shipment1.id, name: "Mine/Mill", status: "completed", sequence: 1 },
      { shipmentId: shipment1.id, name: "Distributor", status: "delayed", sequence: 2 },
      { shipmentId: shipment1.id, name: "Regional Supplier", status: "pending", sequence: 3 },
      { shipmentId: shipment1.id, name: "Warehouse", status: "pending", sequence: 4 },
      { shipmentId: shipment1.id, name: "CNC Facility", status: "pending", sequence: 5 },
    ],
  });

  const shipment2 = await prisma.shipment.create({
    data: {
      materialId: materialAluminium.id,
      qty: "5 Tons",
      supplier: "Bommasandra Metal Casting",
      currentNode: "Warehouse Node (Jigani Industrial)",
      eta: "July 17 (On Time)",
      status: "on-time",
      gemmaAnnotation:
        "Aluminium alloy supply is secure at standard rate. Standard margins are valid for this batch.",
    },
  });

  await prisma.shipmentStep.createMany({
    data: [
      { shipmentId: shipment2.id, name: "Mine/Mill", status: "completed", sequence: 1 },
      { shipmentId: shipment2.id, name: "Distributor", status: "completed", sequence: 2 },
      { shipmentId: shipment2.id, name: "Regional Supplier", status: "completed", sequence: 3 },
      { shipmentId: shipment2.id, name: "Warehouse", status: "on-time", sequence: 4 },
      { shipmentId: shipment2.id, name: "CNC Facility", status: "pending", sequence: 5 },
    ],
  });

  // 4. Seed MarketSignals
  await prisma.marketSignal.create({
    data: {
      title: "Global Steel Index Surges 6% Post Import Tariff Adjustment",
      source: "MetalBulletin News",
      date: "2 hours ago",
      relevance: "high",
      tag: "Directly affects Mild Steel Rod order pricing (Order #221)",
      desc: "Supplier costs for Mild Steel Rods are set to escalate by ₹3,400/ton by next week.",
      materialId: materialSteel.id,
    },
  });

  await prisma.marketSignal.create({
    data: {
      title: "Bengaluru EV Parts Cluster Demand Increases by 30% YoY",
      source: "EconomicTimes Industry",
      date: "1 day ago",
      relevance: "medium",
      tag: "Long-term risk: 30% of your tooling output is ICE-specific",
      desc: "Traditional engine components face shrinking order volume. Shift to EV casing casting recommended.",
      materialId: materialSteel.id,
    },
  });

  await prisma.marketSignal.create({
    data: {
      title: "Bommasandra Power Grid Announces 4-Hour Scheduled Daily Maintenance",
      source: "BESCOM Notification",
      date: "2 days ago",
      relevance: "high",
      tag: "Affects CNC facility operational overhead costs",
      desc: "Generator fuel backup costs will rise by ₹150/hour, reducing net margins on batch casting orders.",
      materialId: materialAluminium.id,
    },
  });

  // 5. Seed PricingRecommendations
  await prisma.pricingRecommendation.create({
    data: {
      id: "REC-01",
      trigger: "Mild Steel Cost index +6.3% in Peenya Cluster",
      action: "Increase Price by +3.4% on Mild Steel products for new batches",
      confidence: "high",
      reasoning: [
        "Supplier raw steel quotes rose by ₹3,600/ton yesterday.",
        "Your current net margin on Mild Steel parts is 11.2%, which is close to your critical safety margin (10.0%).",
        "Client sensitivity analysis indicates a price elasticity of -0.4, allowing a +3.4% pass-through markup without order volume deterioration.",
      ],
      accepted: false,
      rejected: false,
      expanded: false,
      orderId: "ORD-221",
    },
  });

  await prisma.pricingRecommendation.create({
    data: {
      id: "REC-02",
      trigger: "BESCOM 4-Hr power maintenance surcharge added",
      action: "Apply ₹40/batch operational energy buffer surcharge",
      confidence: "medium",
      reasoning: [
        "CNC operational backup diesel generator runs cost ₹150 extra per hour.",
        "This surcharge directly prevents a 1.2% gross margin bleed on current scheduled batch runs.",
      ],
      accepted: false,
      rejected: false,
      expanded: false,
      orderId: "ORD-214",
    },
  });

  // 6. Seed StructuralRisks
  await prisma.structuralRisk.create({
    data: {
      trend: "ICE Part Production",
      status: "Softening Demand",
      title: "Transition Risk: Traditional Engine Cylinder casting",
      description: "Based on market forecast models, traditional ICE parts orders from Tier-1 auto-component distributors are projected to soften by 30% over the next 18 months due to accelerating EV adoption in Bengaluru's local clusters.",
      gemmaAdvisory: "We recommend diversifying CNC production towards EV structural casings and heat sinks. 45% of your current milling tooling setup can be reprofiled without requiring major capital investments.",
      materialId: materialSteel.id,
    },
  });

  // 7. Seed IndustryNews
  await prisma.industryNews.createMany({
    data: [
      {
        title: "Peenya Industrial Area notified as special investment region; industry bodies laud move",
        source: "The Hindu",
        date: "1 hour ago",
        summary: "Karnataka declares Peenya Industrial Area as Special Investment Region, aiming to boost infrastructure, investment, and job creation.",
        category: "Infrastructure",
        image: "https://th-i.thgim.com/public/incoming/s8gx6b/article69684096.ece/alternates/LANDSCAPE_1200/DJI_0032.jpg",
        url: "https://www.thehindu.com/news/cities/bangalore/peenya-industrial-area-notified-as-special-investment-region-industry-bodies-laud-move/article69682390.ece"
      },
      {
        title: "IMTEX Forming 2026 inaugurated at BIEC in Bengaluru",
        source: "The Hindu",
        date: "3 hours ago",
        summary: "The exhibition features cutting-edge technologies in presses, bending, welding, laser systems, robotics, and automation, reflecting sheet-metal processing innovation.",
        category: "Manufacturing",
        image: "https://th-i.thgim.com/public/incoming/2y2mmx/article70536447.ece/alternates/LANDSCAPE_1200/2026-01-21T131301Z_1479325586_RC2U4FA867TG_RTRMADP_3_INDIA-RBI-ECONOMY.JPG",
        url: "https://www.thehindu.com/news/cities/bangalore/imtex-forming-2026-inaugurated-at-biec-in-bengaluru/article70534695.ece"
      },
      {
        title: "KERC approves APR true-up; consumers to see bill adjustments from May across Karnataka",
        source: "The Hindu",
        date: "1 day ago",
        summary: "KERC approves a true-up, increasing electricity bills by 56 paise per unit from May 2026 for Karnataka consumers.",
        category: "Power Tariff",
        image: "https://th-i.thgim.com/public/incoming/juy89y/article70875363.ece/alternates/LANDSCAPE_1200/IMG_4499.jpg",
        url: "https://www.thehindu.com/news/cities/bangalore/kerc-approves-apr-true-up-consumers-to-see-bill-adjustments-from-may-across-karnataka/article70874202.ece"
      },
      {
        title: "Government clears 55 projects worth ₹7,506 crore, to create over 28,000 jobs in Karnataka",
        source: "The Hindu",
        date: "2 days ago",
        summary: "Of these, 41 projects will be located outside Bengaluru, as part of the Beyond Bengaluru initiative to decentralize industrial growth.",
        category: "Industrial Projects",
        image: "https://th-i.thgim.com/public/incoming/ghf5ns/article71125133.ece/alternates/LANDSCAPE_1200/Karnataka-readyG1HFM2S2O.3.jpg.jpg",
        url: "https://www.thehindu.com/news/national/karnataka/government-clears-55-projects-worth-7506-crore-to-create-over-28000-jobs-in-karnataka/article71123280.ece"
      }
    ]
  });

  // 8. Seed InventoryItems
  await prisma.inventoryItem.createMany({
    data: [
      {
        name: "Solid Carbide End Mills (4-Flute, 12mm)",
        category: "Tooling",
        sku: "TL-EM-CAR-12",
        quantity: 45,
        unit: "pcs",
        location: "Cabinet B, Shelf 3",
        minThreshold: 15,
        status: "In Stock",
        image: "/inventory/carbide-end-mill.png"
      },
      {
        name: "Aluminum 6061-T6 Raw Blocks (150x150x50mm)",
        category: "Raw Material",
        sku: "RM-AL-6061-150",
        quantity: 12,
        unit: "pcs",
        location: "Raw Stock Area, Rack A-2",
        minThreshold: 20,
        status: "Low Stock",
        image: "/inventory/aluminum-blocks.png",
        materialId: materialAluminium.id
      },
      {
        name: "Machined Aerospace Brackets (Grade A-5)",
        category: "Finished",
        sku: "FG-AE-BRKT-A5",
        quantity: 180,
        unit: "pcs",
        location: "Finished Goods Vault, Bin 7",
        minThreshold: 50,
        status: "In Stock",
        image: "/inventory/aerospace-bracket.png"
      },
      {
        name: "Machined EV Battery Housing Casings (Model S-3)",
        category: "WIP",
        sku: "WP-EV-BATT-S3",
        quantity: 4,
        unit: "pcs",
        location: "Assembly Bay 2",
        minThreshold: 10,
        status: "Low Stock",
        image: "/inventory/battery-housing.png",
        materialId: materialAluminium.id
      }
    ]
  });

  // Write default sentiment to sentiment.json to ensure database seeds align with files
  try {
    const sentimentPath = path.join(process.cwd(), "src/lib/sentiment.json");
    const dir = path.dirname(sentimentPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      sentimentPath,
      JSON.stringify(
        {
          pressureTrend: "📈 Strong Upward Trend",
          threatDescription: "Combined calculations from raw metal hikes (+4% domestic steel quotes in Peenya), regional freight logistics delays (+1-2 days), and Karnataka energy maintenance scheduled outages suggest a margin threat of ~3.2% bleed if price pass-through markups are delayed.",
          advisoryAction: "Initiate a +3.4% markup strategy immediately on all upcoming Mild Steel fabrication batches in Peenya clusters to shield baseline margins."
        },
        null,
        2
      ),
      "utf-8"
    );
    console.log("Sentiment file seeded successfully!");
  } catch (err) {
    console.error("Failed to seed sentiment file:", err);
  }

  // 9. Seed IndianMetalIndex
  await prisma.indianMetalIndex.createMany({
    data: [
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
    ]
  });

  // 10. Seed CncMachineTelemetry (AI4I 2020 Predictive Maintenance samples)
  await prisma.cncMachineTelemetry.createMany({
    data: [
      { machineId: "M14860", airTemp: 298.1, processTemp: 308.6, rotationalSpeed: 1551, torque: 42.8, toolWear: 0, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14861", airTemp: 298.2, processTemp: 308.7, rotationalSpeed: 1667, torque: 32.4, toolWear: 3, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14862", airTemp: 298.1, processTemp: 308.5, rotationalSpeed: 1498, torque: 49.4, toolWear: 5, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14863", airTemp: 298.2, processTemp: 308.6, rotationalSpeed: 1500, torque: 45.7, toolWear: 7, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14864", airTemp: 298.2, processTemp: 308.7, rotationalSpeed: 1434, torque: 55.2, toolWear: 12, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14890", airTemp: 298.9, processTemp: 309.1, rotationalSpeed: 1410, torque: 65.7, toolWear: 191, machineFailure: true, twf: true, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14891", airTemp: 298.9, processTemp: 309.0, rotationalSpeed: 1324, torque: 75.3, toolWear: 203, machineFailure: true, twf: false, hdf: false, pwf: false, osf: true, rnf: false },
      { machineId: "M14900", airTemp: 299.1, processTemp: 309.2, rotationalSpeed: 1250, torque: 80.0, toolWear: 215, machineFailure: true, twf: true, hdf: false, pwf: false, osf: true, rnf: false },
      { machineId: "M14865", airTemp: 298.1, processTemp: 308.6, rotationalSpeed: 1511, torque: 40.5, toolWear: 15, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14866", airTemp: 298.2, processTemp: 308.7, rotationalSpeed: 1620, torque: 34.0, toolWear: 18, machineFailure: false, twf: false, hdf: false, pwf: false, osf: false, rnf: false },
      { machineId: "M14912", airTemp: 299.5, processTemp: 310.1, rotationalSpeed: 1350, torque: 70.2, toolWear: 220, machineFailure: true, twf: true, hdf: true, pwf: false, osf: false, rnf: false },
    ]
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
