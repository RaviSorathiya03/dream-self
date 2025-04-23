/*
  Warnings:

  - Added the required column `zipUrl` to the `Modals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Modals" ADD COLUMN     "zipUrl" TEXT NOT NULL;
