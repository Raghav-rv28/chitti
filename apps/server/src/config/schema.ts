import { z } from "zod";

/*
 * NOTE: generate these schema from typescript types.
 * flow will be like this:->
 * Typescript Type > https://transform.tools/typescript-to-zod > paste the schema here and use it.
 */

const testAlertSchema = z.object({
  userId: z.string(),
  alertData: z.object({
    username: z.string(),
    amount: z.string().nullable(),
    type: z.union([
      z.literal("SuperChat"),
      z.literal("Donation"),
      z.literal("Message"),
    ]),
    message: z.string(),
  }),
});

const startStreamSchema = z.object({
  channelId: z.string().min(5, "Channel ID must be at least 5 characters long"),
});

export { startStreamSchema, testAlertSchema };
