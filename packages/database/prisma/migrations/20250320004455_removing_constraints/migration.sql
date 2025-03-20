-- DropForeignKey
ALTER TABLE "StreamLogs" DROP CONSTRAINT "StreamLogs_viewerId_fkey";

-- AlterTable
ALTER TABLE "StreamLogs" ALTER COLUMN "viewerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
