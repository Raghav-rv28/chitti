import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { prisma } from "@repo/database";
import { userRouter } from "./routes/users";
import { youtubeRouter } from "./routes/youtube";
import { setupWebsocketServer } from "./config/websocket";
import { WebSocketServer } from "ws";

// Load environment variables
dotenv.config();

const app: any = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const WS_PORT = process.env.WS_PORT ? parseInt(process.env.WS_PORT) : 8080;

// Initialize WebSocket server
let wss: WebSocketServer;
try {
  wss = setupWebsocketServer(WS_PORT);
  console.log(`WebSocket server running on port ${WS_PORT}`);
} catch (error) {
  console.error(`Failed to start WebSocket server: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

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
  res.status(200).json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    websocket: wss ? "connected" : "disconnected"
  });
});

// Routes
app.use("/api/users", userRouter);
app.use("/youtube", youtubeRouter);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");

  // Close WebSocket server
  if (wss) {
    try {
      wss.close(() => {
        console.log("WebSocket server closed");
      });
    } catch (error) {
      console.error(`Error closing WebSocket server: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Close HTTP server
  server.close(() => {
    console.log("HTTP server closed");
  });

  // Close database connection
  try {
    await prisma.$disconnect();
    console.log("Database connection closed");
  } catch (error) {
    console.error(`Error disconnecting from database: ${error instanceof Error ? error.message : String(error)}`);
  }

  process.exit(0);
});

// Also handle SIGINT (Ctrl+C)
process.on("SIGINT", () => {
  console.log("SIGINT received");
  process.emit("SIGTERM");
});

export { wss }; // Export WebSocket server for use in other modules
export default app;
