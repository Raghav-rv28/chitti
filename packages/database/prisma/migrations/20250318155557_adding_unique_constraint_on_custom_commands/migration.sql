/*
  Warnings:

  - A unique constraint covering the columns `[id,userChannelId,streamChatId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Viewer_userChannelId_streamChatId_key";

-- AlterTable
ALTER TABLE "CustomCommand" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'some descripton',
ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_id_userChannelId_streamChatId_key" ON "Viewer"("id", "userChannelId", "streamChatId");
