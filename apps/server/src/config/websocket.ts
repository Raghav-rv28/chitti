import { WebSocketServer, WebSocket } from "ws";
import { AlertData, ClientConnection } from "./types.js";

const clients: ClientConnection[] = [];

function setupWebsocketServer(port: number): WebSocketServer {
  const wss = new WebSocketServer({ port });
  wss.on("connection", (ws: WebSocket, req) => {
    const urlParams = new URL(req.url!, `http://${req.headers.host}`)
      .searchParams;
    const channelId = urlParams.get("channelId");

    if (!channelId) {
      ws.close();
      return;
    }

    console.log(`New WebSocket connection for streamer: ${channelId}`);
    clients.push({ ws, channelId });

    ws.on("close", () => {
      console.log(`WebSocket closed for streamer: ${channelId}`);
      removeClient(ws);
    });
  });
  return wss;
}

function sendAlert(
  channelId: string,
  alertData: AlertData,
  wss?: WebSocketServer,
) {
  if (wss !== undefined) {
    const message = JSON.stringify({ channelId, alertData });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  } else {
    console.log("WebSocket not Working!");
  }
}

function removeClient(ws: WebSocket): void {
  const index = clients.findIndex((client) => client.ws === ws);
  if (index !== -1) {
    clients.splice(index, 1);
  }
}

export { setupWebsocketServer, sendAlert };
