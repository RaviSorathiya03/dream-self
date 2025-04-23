/*
  Warnings:

  - A unique constraint covering the columns `[falaiRequestId]` on the table `Modals` will be added. If there are existing duplicate values, this will fail.
  - Made the column `falaiRequestId` on table `Modals` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Modals" ALTER COLUMN "falaiRequestId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Modals_falaiRequestId_key" ON "Modals"("falaiRequestId");
