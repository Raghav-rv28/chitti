/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `CustomCommand` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CustomCommand_trigger_key";

-- CreateIndex
CREATE UNIQUE INDEX "CustomCommand_userId_id_key" ON "CustomCommand"("userId", "id");
