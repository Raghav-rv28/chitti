/*
  Warnings:

  - You are about to drop the column `viewerId` on the `Viewer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,userChannelId,streamChatId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Viewer_viewerId_userChannelId_streamChatId_key";

-- AlterTable
ALTER TABLE "Viewer" DROP COLUMN "viewerId";

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_id_userChannelId_streamChatId_key" ON "Viewer"("id", "userChannelId", "streamChatId");
