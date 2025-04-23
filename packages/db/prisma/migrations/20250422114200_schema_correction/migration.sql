-- AlterTable
ALTER TABLE "Modals" ALTER COLUMN "falaiRequestId" DROP NOT NULL,
ALTER COLUMN "falaiResponseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OutputImage" ALTER COLUMN "falaiRequestId" DROP NOT NULL,
ALTER COLUMN "falaiResponseId" DROP NOT NULL;
