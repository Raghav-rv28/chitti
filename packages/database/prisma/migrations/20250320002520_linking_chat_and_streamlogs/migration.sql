/*
  Warnings:

  - You are about to drop the column `eventDetails` on the `StreamLogs` table. All the data in the column will be lost.
  - Added the required column `streamLogsId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "streamLogsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StreamLogs" DROP COLUMN "eventDetails",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_streamLogsId_fkey" FOREIGN KEY ("streamLogsId") REFERENCES "StreamLogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
