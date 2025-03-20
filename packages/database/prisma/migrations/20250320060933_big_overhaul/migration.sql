/*
  Warnings:

  - You are about to drop the column `id` on the `Viewer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Moderation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userChannelId,streamChatId,username]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Viewer_id_viewerId_userChannelId_streamChatId_key";

-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "broadcastId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Viewer" DROP COLUMN "id",
ADD COLUMN     "externalId" TEXT,
ALTER COLUMN "hoursWatched" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Moderation_userId_key" ON "Moderation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_userChannelId_streamChatId_username_key" ON "Viewer"("userChannelId", "streamChatId", "username");
