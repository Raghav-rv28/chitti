/*
  Warnings:

  - You are about to drop the `Analytics` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ChatEvents" AS ENUM ('command', 'timeout');

-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_userId_fkey";

-- DropTable
DROP TABLE "Analytics";

-- CreateTable
CREATE TABLE "StreamLogs" (
    "id" TEXT NOT NULL,
    "messageDetails" JSONB NOT NULL,
    "viewerId" TEXT,
    "broadcastId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "eventType" "ChatEvents" NOT NULL,
    "eventDetails" JSONB NOT NULL,

    CONSTRAINT "StreamLogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_broadcastId_fkey" FOREIGN KEY ("broadcastId") REFERENCES "StreamChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
