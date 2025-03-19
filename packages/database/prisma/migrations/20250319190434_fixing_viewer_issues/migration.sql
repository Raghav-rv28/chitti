/*
  Warnings:

  - A unique constraint covering the columns `[viewerId,userChannelId,streamChatId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Viewer_id_userChannelId_streamChatId_key";

-- AlterTable
ALTER TABLE "Viewer" ADD COLUMN     "viewerId" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_viewerId_userChannelId_streamChatId_key" ON "Viewer"("viewerId", "userChannelId", "streamChatId");
