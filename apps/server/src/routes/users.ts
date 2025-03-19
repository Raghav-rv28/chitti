import express, { Request, Response, Router } from "express";
import { prisma } from "@repo/database";
import { z } from "zod";

const router: Router = express.Router();
interface StreamSummary {
  message_count: number;
  command_count: number;
  timeout_count: number;
  stream_count: number;
}
// Validation schema for user creation
const createUserSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email().optional(),
});

// GET all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// GET user by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(`Error fetching user ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// DELETE user by ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`,
      });
    }

    // Delete user
    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: `User with ID ${id} deleted successfully`,
    });
  } catch (error) {
    console.error(`Error deleting user ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

router.get("/get-summary/:channelId", async (req: Request, res: Response) => {
  const { channelId } = req.params;
  console.log("entering here");
  // Calculate date 7 days ago

  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  try {
    const summaryRaw = await prisma.$queryRaw<StreamSummary[]>`
  WITH recent_streams AS (
    SELECT id
    FROM "StreamChat"
    WHERE "userId" = ${channelId}
    AND "startTime" >= ${sevenDaysAgo}
  )
  SELECT
    (SELECT COUNT(*) FROM "Chat" WHERE "broadcastId" IN (SELECT id FROM recent_streams)) as message_count,
    (SELECT COUNT(*) FROM "StreamLogs" WHERE "broadcastId" IN (SELECT id FROM recent_streams) AND "eventType" = 'command') as command_count,
    (SELECT COUNT(*) FROM "StreamLogs" WHERE "broadcastId" IN (SELECT id FROM recent_streams) AND "eventType" = 'timeout') as timeout_count,
    (SELECT COUNT(*) FROM recent_streams) as stream_count
`;
    const summary = summaryRaw[0]
      ? {
          message_count: Number(summaryRaw[0].message_count),
          command_count: Number(summaryRaw[0].command_count),
          timeout_count: Number(summaryRaw[0].timeout_count),
          stream_count: Number(summaryRaw[0].stream_count),
        }
      : {
          message_count: 0,
          command_count: 0,
          timeout_count: 0,
          stream_count: 0,
        };
    res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to load summary",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const userRouter = router;
