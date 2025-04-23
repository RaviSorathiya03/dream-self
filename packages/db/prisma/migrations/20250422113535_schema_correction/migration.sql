/*
  Warnings:

  - Added the required column `falaiRequestId` to the `OutputImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `falaiResponseId` to the `OutputImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OutputImage" ADD COLUMN     "falaiRequestId" TEXT NOT NULL,
ADD COLUMN     "falaiResponseId" TEXT NOT NULL;
