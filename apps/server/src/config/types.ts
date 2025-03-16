import { WebSocketServer, WebSocket } from "ws";
import { Request } from "express";

export interface CustomRequest extends Request {
  wss?: WebSocketServer;
}

export interface AlertData {
  username: string;
  amount: string | null;
  type: "SuperChat" | "Donation" | "Message";
  message: string;
}
export interface ClientConnection {
  ws: WebSocket;
  channelId: string;
}
