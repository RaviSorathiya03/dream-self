/*
  Warnings:

  - A unique constraint covering the columns `[falaiRequestId]` on the table `OutputImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OutputImage_falaiRequestId_key" ON "OutputImage"("falaiRequestId");
