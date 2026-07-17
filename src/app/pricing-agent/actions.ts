"use server";

import { prisma } from "@/lib/prisma-client";
import fs from "fs";
import path from "path";

const SENTIMENT_FILE_PATH = path.join(process.cwd(), "src/lib/sentiment.json");

export async function getRecommendations() {
  const recommendations = await prisma.pricingRecommendation.findMany({
    include: {
      order: {
        include: {
          material: true
        }
      }
    }
  });
  // Reasoning is stored as JSON in DB. In TS, we map/cast it to string[]
  return recommendations.map((rec: any) => ({
    ...rec,
    reasoning: rec.reasoning as string[],
  }));
}

export async function updateRecommendationStatus(
  id: string,
  status: "accepted" | "rejected"
) {
  return prisma.pricingRecommendation.update({
    where: { id },
    data: {
      accepted: status === "accepted",
      rejected: status === "rejected",
    },
  });
}

export async function getShipments() {
  return prisma.shipment.findMany({
    include: {
      material: true,
      steps: {
        orderBy: {
          sequence: "asc",
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });
}

export async function getMarketSignals() {
  return prisma.marketSignal.findMany({
    include: {
      material: true,
    },
    orderBy: {
      id: "asc",
    },
  });
}

export async function getStructuralRisks() {
  return prisma.structuralRisk.findMany({
    include: {
      material: true,
    },
    orderBy: {
      id: "asc",
    },
  });
}

export async function getIndustryNews() {
  return prisma.industryNews.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function getInventory() {
  return prisma.inventoryItem.findMany({
    include: {
      material: true,
    },
    orderBy: {
      id: "asc",
    },
  });
}

export async function updateInventoryQty(id: number, newQty: number) {
  const item = await prisma.inventoryItem.findUnique({
    where: { id },
  });

  if (!item) {
    throw new Error(`Inventory item with ID ${id} not found`);
  }

  let status = "In Stock";
  if (newQty <= 0) {
    status = "Out of Stock";
  } else if (newQty <= item.minThreshold) {
    status = "Low Stock";
  }

  return prisma.inventoryItem.update({
    where: { id },
    data: {
      quantity: newQty,
      status,
      lastUpdated: new Date(),
    },
  });
}

export async function addInventoryItem(data: {
  name: string;
  category: string;
  sku: string;
  quantity: number;
  unit: string;
  location: string;
  minThreshold: number;
  image: string;
}) {
  let status = "In Stock";
  if (data.quantity <= 0) {
    status = "Out of Stock";
  } else if (data.quantity <= data.minThreshold) {
    status = "Low Stock";
  }

  return prisma.inventoryItem.create({
    data: {
      ...data,
      status,
    },
  });
}

export async function getMaterials() {
  return prisma.material.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function getOrders() {
  return prisma.order.findMany({
    include: {
      material: true,
    },
    orderBy: {
      id: "asc",
    },
  });
}

export async function createOrder(data: {
  id: string;
  client: string;
  margin: string;
  materialId: number;
}) {
  return prisma.order.create({
    data,
    include: {
      material: true,
    },
  });
}

export async function getMarketSentiment() {
  try {
    if (fs.existsSync(SENTIMENT_FILE_PATH)) {
      const data = fs.readFileSync(SENTIMENT_FILE_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Failed to read market sentiment file:", err);
  }
  return {
    pressureTrend: "📈 Strong Upward Trend",
    threatDescription: "Combined calculations from raw metal hikes (+4% domestic steel quotes in Peenya), regional freight logistics delays (+1-2 days), and Karnataka energy maintenance scheduled outages suggest a margin threat of ~3.2% bleed if price pass-through markups are delayed.",
    advisoryAction: "Initiate a +3.4% markup strategy immediately on all upcoming Mild Steel fabrication batches in Peenya clusters to shield baseline margins."
  };
}

export async function triggerGemmaAnalysis() {
  const { runFullGemmaAnalysis } = await import("@/lib/gemini");
  
  const [orders, materials, signals, shipments, structuralRisks] = await Promise.all([
    getOrders(),
    getMaterials(),
    getMarketSignals(),
    getShipments(),
    getStructuralRisks()
  ]);

  const analysis = await runFullGemmaAnalysis(
    orders as any,
    materials as any,
    signals as any,
    shipments as any,
    structuralRisks as any
  );

  // 1. Clear and replace Recommendations
  await prisma.pricingRecommendation.deleteMany();
  const createdRecommendations = await Promise.all(
    analysis.recommendations.map((rec) => {
      const matchingOrder = orders.find(
        (o) =>
          rec.trigger.toLowerCase().includes(o.id.toLowerCase()) ||
          rec.action.toLowerCase().includes(o.id.toLowerCase())
      );
      return prisma.pricingRecommendation.create({
        data: {
          id: rec.id,
          trigger: rec.trigger,
          action: rec.action,
          confidence: rec.confidence,
          reasoning: rec.reasoning as any,
          accepted: false,
          rejected: false,
          expanded: false,
          orderId: matchingOrder ? matchingOrder.id : null,
        },
      });
    })
  );

  // 2. Update Shipment annotations
  await Promise.all(
    analysis.shipmentAnnotations.map((item) =>
      prisma.shipment.update({
        where: { id: item.id },
        data: { gemmaAnnotation: item.annotation }
      })
    )
  );

  // 3. Update Structural Risk advisories
  await Promise.all(
    analysis.structuralRiskAdvisories.map((item) =>
      prisma.structuralRisk.update({
        where: { id: item.id },
        data: { gemmaAdvisory: item.advisory }
      })
    )
  );

  // 4. Update Market Signal tags
  await Promise.all(
    analysis.marketSignalTags.map((item) =>
      prisma.marketSignal.update({
        where: { id: item.id },
        data: {
          relevance: item.relevance,
          tag: item.tag
        }
      })
    )
  );

  // 5. Write Sentiment
  try {
    const dir = path.dirname(SENTIMENT_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(SENTIMENT_FILE_PATH, JSON.stringify(analysis.marketSentiment, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save market sentiment:", err);
  }

  return createdRecommendations.map((rec: any) => ({
    ...rec,
    reasoning: rec.reasoning as string[],
  }));
}

const MOCK_PDF_CONTENT = `
BOMMASANDRA METAL CASTING LTD
Quote ID: BMC-998822
Date: July 26, 2026
Supplier: Bommasandra Metal Casting
--------------------------------------------------
ITEMS DETAILS:
- Aluminium Alloy (6061)
  Qty: 5 Tons
  Current Contract Price: Rs 380 / kg
  Estimated Market Price: Rs 427 / kg
- CNC Machining Fee
  Unit Rate: Rs 1,800 / hr
  Billing Sell Rate: Rs 2,400 / hr

ACTIVE CLIENT COMMITMENTS:
- Order Ref: ORD-214
  Customer: Client Y
  Agreed Target Margin: 9.5%
  Material Needed: Aluminium Alloy (6061)

INVENTORY RE-ORDER DETAILS:
- Item: Aluminum 6061-T6 Raw Blocks (150x150x50mm)
  SKU: RM-AL-6061-150
  Quantity: 32 pcs
  Category: Raw Material
  Location: Raw Stock Area, Rack A-2
  Min Threshold Limit: 20 pcs
  Image: /inventory/aluminum-blocks.png
`;

const MOCK_EXCEL_CONTENT = `
PEENYA STEEL DISTRIBUTORS PVT LTD
Datasheet: Pricing Model 2026 Q2
--------------------------------------------------
Material Costs & Market Index comparisons:
Material Name: Steel Rods (Mild)
- Supplier current cost: Rs 58,000 / ton
- Live market index rate: Rs 61,480 / ton
Supplier name: Peenya Steel Distributor

Additional items list:
- Tooling bits (Jigani Tooling Labs)
  Purchase Cost: Rs 340 / pc
  Selling Price: Rs 400 / pc

Active Orders in processing:
- Order ID: ORD-221
  Client Account: Client X
  Committed Markup Margin: 14.2%
  Material used: Steel Rods (Mild)

Warehouse stock audit list:
- Item: Solid Carbide End Mills (4-Flute, 12mm)
  SKU: TL-EM-CAR-12
  Quantity: 45 pcs
  Category: Tooling
  Location: Cabinet B, Shelf 3
  Min Threshold Limit: 15 pcs
  Image: /inventory/carbide-end-mill.png
`;

export async function importBusinessData(fileType: "excel" | "pdf") {
  const { parseUploadedFileWithGemma } = await import("@/lib/gemini");
  
  const content = fileType === "pdf" ? MOCK_PDF_CONTENT : MOCK_EXCEL_CONTENT;
  const parsed = await parseUploadedFileWithGemma(content);

  // Clear database tables to replace with parsed data
  await prisma.order.deleteMany();
  await prisma.material.deleteMany();
  await prisma.shipmentStep.deleteMany();
  await prisma.shipment.deleteMany();
  await prisma.marketSignal.deleteMany();
  
  const createdMaterials = await Promise.all(
    parsed.materials.map((m) =>
      prisma.material.create({
        data: {
          name: m.name,
          currentCost: m.currentCost,
          marketCost: m.marketCost,
          supplier: m.supplier,
        },
      })
    )
  );

  await Promise.all(
    parsed.orders.map((o) => {
      const matchingMat = createdMaterials.find(
        (m) =>
          m.name.toLowerCase().includes(o.materialName.toLowerCase()) ||
          o.materialName.toLowerCase().includes(m.name.toLowerCase())
      );
      const matId = matchingMat ? matchingMat.id : createdMaterials[0]?.id;
      if (!matId) return Promise.resolve();

      return prisma.order.create({
        data: {
          id: o.id,
          client: o.client,
          margin: o.margin,
          materialId: matId,
        },
      });
    })
  );

  await Promise.all(
    parsed.inventory.map((item) => {
      const matchingMat = createdMaterials.find(
        (m) =>
          m.name.toLowerCase().includes(item.name.toLowerCase()) ||
          item.name.toLowerCase().includes(m.name.toLowerCase())
      );
      return prisma.inventoryItem.upsert({
        where: { sku: item.sku },
        update: {
          name: item.name,
          category: item.category,
          quantity: item.quantity,
          unit: item.unit,
          location: item.location,
          minThreshold: item.minThreshold,
          image: item.image,
          status: item.quantity <= 0 ? "Out of Stock" : (item.quantity <= item.minThreshold ? "Low Stock" : "In Stock"),
          lastUpdated: new Date(),
          materialId: matchingMat ? matchingMat.id : null,
        },
        create: {
          name: item.name,
          category: item.category,
          sku: item.sku,
          quantity: item.quantity,
          unit: item.unit,
          location: item.location,
          minThreshold: item.minThreshold,
          image: item.image,
          status: item.quantity <= 0 ? "Out of Stock" : (item.quantity <= item.minThreshold ? "Low Stock" : "In Stock"),
          lastUpdated: new Date(),
          materialId: matchingMat ? matchingMat.id : null,
        }
      });
    })
  );

  // Re-seed default shipments linked to materials to keep it clean
  const steelMat = createdMaterials.find(m => m.name.toLowerCase().includes("steel"));
  const alumMat = createdMaterials.find(m => m.name.toLowerCase().includes("aluminium") || m.name.toLowerCase().includes("aluminum"));

  if (steelMat) {
    const shipment1 = await prisma.shipment.create({
      data: {
        materialId: steelMat.id,
        qty: "15 Tons",
        supplier: steelMat.supplier,
        currentNode: "Distributor Node (Bengaluru Outer Ring)",
        eta: "July 20 (4 Days Delay)",
        status: "delayed",
        gemmaAnnotation: "Steel batch stuck at distributor stage — 4 day delay risk.",
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

    await prisma.marketSignal.create({
      data: {
        title: "Global Steel Index Surges 6% Post Import Tariff Adjustment",
        source: "MetalBulletin News",
        date: "2 hours ago",
        relevance: "high",
        tag: "Steel rods price surge warning",
        desc: "Supplier costs for Mild Steel Rods are set to escalate by ₹3,400/ton by next week.",
        materialId: steelMat.id,
      },
    });
  }

  if (alumMat) {
    const shipment2 = await prisma.shipment.create({
      data: {
        materialId: alumMat.id,
        qty: "5 Tons",
        supplier: alumMat.supplier,
        currentNode: "Warehouse Node (Jigani Industrial)",
        eta: "July 17 (On Time)",
        status: "on-time",
        gemmaAnnotation: "Aluminium alloy supply is secure at standard rate.",
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
  }

  await triggerGemmaAnalysis();

  return parsed;
}

export async function askGemmaAboutRecommendation(
  recommendationId: string,
  question: string,
  chatHistory: { sender: "user" | "gemma"; text: string }[]
) {
  const { GoogleGenAI } = await import("@google/genai");
  const apiKey = process.env.GEMMA_API_KEY;
  const modelName = process.env.GEMMA_MODEL || "gemma-2-27b-it";
  const modelToUse = modelName === "gemma-31b" ? "gemma-4-31b-it" : modelName;

  if (!apiKey) {
    throw new Error("GEMMA_API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey });

  const [rec, orders, materials, signals, shipments] = await Promise.all([
    prisma.pricingRecommendation.findUnique({ where: { id: recommendationId } }),
    getOrders(),
    getMaterials(),
    getMarketSignals(),
    getShipments(),
  ]);

  if (!rec) {
    throw new Error(`Recommendation ${recommendationId} not found.`);
  }

  const prompt = `
You are FinCent's manufacturing and CNC pricing intelligence agent, powered by Gemma.
The user is asking a question about a specific pricing recommendation.

Recommendation Context:
- ID: ${rec.id}
- Trigger: ${rec.trigger}
- Recommended Action: ${rec.action}
- Confidence: ${rec.confidence}
- Reasoning Trail:
${(rec.reasoning as string[]).map(r => `  - ${r}`).join("\n")}

Active Business Data:
- Materials:
${materials.map(m => `  - ${m.name}: Supplier: ${m.supplier}, Contract Rate: ₹${m.currentCost}, Live Market: ₹${m.marketCost}`).join("\n")}
- Orders:
${orders.map(o => `  - Order ${o.id} (${o.client}): Margin: ${o.margin}, Material: ${o.material.name}`).join("\n")}
- Shipments:
${shipments.map(s => `  - Shipment ${s.material.name} (supplier: ${s.supplier}): status ${s.status}, ETA ${s.eta}, gemmaAnnotation: "${s.gemmaAnnotation}"`).join("\n")}

Chat History:
${chatHistory.map(msg => `${msg.sender === "user" ? "User" : "Gemma"}: ${msg.text}`).join("\n")}

User Question: ${question}

Provide a concise, direct, and professional explanation to the user as their manufacturing intelligence CFO assistant. Do not use formatting like markdown code blocks unless necessary. Keep the tone helpful, sharp, and focused on business margins.
`;

  try {
    const response = await ai.models.generateContent({
      model: modelToUse,
      contents: prompt,
    });
    return response.text || "I could not generate an answer. Please try again.";
  } catch (error) {
    console.error("Gemma chat failed:", error);
    throw error;
  }
}

export async function getCncTelemetry() {
  return prisma.cncMachineTelemetry.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function analyzeTelemetryWithGemma() {
  const { GoogleGenAI } = await import("@google/genai");
  const apiKey = process.env.GEMMA_API_KEY;
  const modelName = process.env.GEMMA_MODEL || "gemma-2-27b-it";
  const modelToUse = modelName === "gemma-31b" ? "gemma-4-31b-it" : modelName;

  if (!apiKey) {
    throw new Error("GEMMA_API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey });

  const telemetry = await prisma.cncMachineTelemetry.findMany({
    where: { machineFailure: true },
    take: 5
  });

  const prompt = `
You are FinCent's manufacturing and CNC pricing intelligence agent, powered by Gemma.
Analyze the following CNC Machine failure events from the AI4I 2020 Predictive Maintenance Dataset:
${telemetry.map(t => `- Machine ${t.machineId}: Air Temp ${t.airTemp}K, Process Temp ${t.processTemp}K, Speed ${t.rotationalSpeed} rpm, Torque ${t.torque} Nm, Tool Wear ${t.toolWear} mins. Failures: ${t.twf ? "Tool Wear Failure" : ""} ${t.hdf ? "Heat Dissipation Failure" : ""} ${t.pwf ? "Power Failure" : ""} ${t.osf ? "Overstrain Failure" : ""}`).join("\n")}

Provide a 3-bullet-point summary advising the CNC shop manager on:
1. Expected failure threshold based on the data.
2. Preventive maintenance or operating speed modifications to avoid sudden downtime.
3. Cost impact estimation (e.g. tool wear limits, downtime overheads).

Keep the advice terse, actionable, and mathematically justified by the numbers in the telemetry.
`;

  try {
    const response = await ai.models.generateContent({
      model: modelToUse,
      contents: prompt,
    });
    return response.text || "No advisory could be generated.";
  } catch (error) {
    console.error("Gemma telemetry analysis failed:", error);
    throw error;
  }
}

export async function getIndianMetalIndices() {
  return prisma.indianMetalIndex.findMany({
    orderBy: {
      id: "asc",
    },
  });
}







