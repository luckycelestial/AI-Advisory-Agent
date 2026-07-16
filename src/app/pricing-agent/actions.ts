"use server";

import { prisma } from "@/lib/prisma-client";

export async function getRecommendations() {
  const recommendations = await prisma.pricingRecommendation.findMany();
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
    orderBy: {
      id: "asc",
    },
  });
}

export async function getStructuralRisks() {
  return prisma.structuralRisk.findMany({
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
