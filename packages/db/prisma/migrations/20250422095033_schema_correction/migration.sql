/*
  Warnings:

  - Added the required column `imageUrl` to the `OutputImage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OutputImagesStatus" AS ENUM ('Pending', 'Generated', 'Failed');

-- AlterTable
ALTER TABLE "OutputImage" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "status" "OutputImagesStatus" NOT NULL DEFAULT 'Pending';
