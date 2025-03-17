-- CreateTable
CREATE TABLE "Moderation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "general" JSONB,
    "spamConfig" JSONB,
    "links" JSONB,
    "blacklist" JSONB,

    CONSTRAINT "Moderation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Moderation" ADD CONSTRAINT "Moderation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
