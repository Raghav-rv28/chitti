import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { prisma } from "@repo/database";
import { userRouter } from "./routes/users";
import { youtubeRouter } from "./routes/youtube";

// Load environment variables
dotenv.config();

const app: any = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/users", userRouter);
app.use("/", youtubeRouter);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");

  // Close database connection
  await prisma.$disconnect();
  console.log("Database connection closed");

  process.exit(0);
});

export default app;
