// Schema updated: Invalidate cached global instance to load new model fields
import { PrismaClient } from "../generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function initializePrisma() {
  if (typeof window !== "undefined") return;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);

  if (process.env.NODE_ENV === "production") {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient({ adapter });
    }
  } else {
    // Force recreation to pick up updated fields on schema models
    if (globalForPrisma.prisma) {
      (globalForPrisma.prisma as any).$disconnect().catch(() => {});
      globalForPrisma.prisma = undefined as any;
    }
    globalForPrisma.prisma = new PrismaClient({ adapter });
  }
}

// Proxy wrapper dynamically resolves to the latest initialized prisma client
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    if (typeof window !== "undefined") return null;

    initializePrisma();

    const activeInstance = globalForPrisma.prisma;
    if (!activeInstance) return undefined;

    const value = (activeInstance as any)[prop];
    if (typeof value === "function") {
      return value.bind(activeInstance);
    }
    return value;
  },
});
