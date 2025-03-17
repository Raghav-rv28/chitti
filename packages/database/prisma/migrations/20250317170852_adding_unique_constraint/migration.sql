/*
  Warnings:

  - A unique constraint covering the columns `[userChannelId,streamChatId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Viewer_userChannelId_streamChatId_key" ON "Viewer"("userChannelId", "streamChatId");
