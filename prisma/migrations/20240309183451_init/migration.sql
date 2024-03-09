-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Fish', 'Invertebrate', 'Benthic', 'FishFamily', 'Coral', 'Seagrass');

-- CreateEnum
CREATE TYPE "UVCLevel" AS ENUM ('Indicator', 'Expert', 'NA');

-- CreateTable
CREATE TABLE "Species" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "category" "Category" NOT NULL,
    "uvcLevel" "UVCLevel",
    "imageCount" INT4 NOT NULL,
    "details" STRING,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);
