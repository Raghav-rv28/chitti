/*
  Warnings:

  - The primary key for the `Viewer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id,viewerId,userChannelId,streamChatId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.
  - The required column `viewerId` was added to the `Viewer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_viewerId_fkey";

-- DropIndex
DROP INDEX "Viewer_id_userChannelId_streamChatId_key";

-- AlterTable
ALTER TABLE "Viewer" DROP CONSTRAINT "Viewer_pkey",
ADD COLUMN     "viewerId" TEXT NOT NULL,
ADD CONSTRAINT "Viewer_pkey" PRIMARY KEY ("viewerId");

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_id_viewerId_userChannelId_streamChatId_key" ON "Viewer"("id", "viewerId", "userChannelId", "streamChatId");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("viewerId") ON DELETE SET NULL ON UPDATE CASCADE;
