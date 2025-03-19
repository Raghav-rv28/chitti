/*
  Warnings:

  - You are about to drop the column `liveChatId` on the `Chat` table. All the data in the column will be lost.
  - Made the column `viewerId` on table `StreamLogs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_liveChatId_fkey";

-- DropForeignKey
ALTER TABLE "StreamLogs" DROP CONSTRAINT "StreamLogs_viewerId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "liveChatId",
ADD COLUMN     "broadcastId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "StreamLogs" ALTER COLUMN "messageDetails" SET DEFAULT '{}',
ALTER COLUMN "viewerId" SET NOT NULL,
ALTER COLUMN "eventDetails" SET DEFAULT '{}';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "statistics" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "Viewer" ADD COLUMN     "banned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "bannedTimePeriod" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_broadcastId_fkey" FOREIGN KEY ("broadcastId") REFERENCES "StreamChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
