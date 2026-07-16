-- CreateTable
CREATE TABLE "IndustryNews" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "IndustryNews_pkey" PRIMARY KEY ("id")
);
