-- CreateTable
CREATE TABLE "StructuralRisk" (
    "id" SERIAL NOT NULL,
    "trend" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gemmaAdvisory" TEXT NOT NULL,

    CONSTRAINT "StructuralRisk_pkey" PRIMARY KEY ("id")
);
