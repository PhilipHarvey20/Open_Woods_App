-- CreateTable
CREATE TABLE "GeneratePrice" (
    "id" SERIAL NOT NULL,
    "Activity" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Acreage" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratePrice_pkey" PRIMARY KEY ("id")
);
