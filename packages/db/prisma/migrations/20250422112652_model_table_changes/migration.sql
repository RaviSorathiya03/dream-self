/*
  Warnings:

  - Added the required column `falaiResponseId` to the `Modals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Modals` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ModelTrainingStatus" AS ENUM ('Pending', 'Generated', 'Failed');

-- AlterTable
ALTER TABLE "Modals" ADD COLUMN     "falaiRequestId" TEXT,
ADD COLUMN     "falaiResponseId" TEXT NOT NULL,
ADD COLUMN     "status" "ModelTrainingStatus" NOT NULL,
ADD COLUMN     "tensorPath" TEXT,
ADD COLUMN     "triggerWord" TEXT;
