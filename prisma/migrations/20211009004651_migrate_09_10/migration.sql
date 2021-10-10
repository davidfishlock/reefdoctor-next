-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Fish', 'Invertebrate', 'Benthic', 'FishFamily', 'Coral', 'Seagrass');

-- CreateEnum
CREATE TYPE "UVCLevel" AS ENUM ('Indicator', 'Expert');

-- CreateTable
CREATE TABLE "Species" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "uvcLevel" "UVCLevel",
    "imageCount" INTEGER NOT NULL,
    "details" TEXT,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);
