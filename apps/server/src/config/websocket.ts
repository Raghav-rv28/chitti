import { WebSocketServer, WebSocket } from "ws";
import { AlertData, ClientConnection } from "./types";

const clients: ClientConnection[] = [];

function setupWebsocketServer(port: number): WebSocketServer {
  try {
    const wss = new WebSocketServer({ port });
    console.log(`WebSocket server initialized on port ${port}`);

    wss.on("connection", (ws: WebSocket, req) => {
      try {
        const urlParams = new URL(req.url || "", `http://${req.headers.host}`)
          .searchParams;
        const channelId = urlParams.get("channelId");

        if (!channelId) {
          ws.close();
          return;
        }

        console.log(`New WebSocket connection for streamer: ${channelId}`);
        clients.push({ ws, channelId });

        ws.on("message", (message) => {
          try {
            // Handle incoming messages if needed
            console.log(`Received message from ${channelId}`);
          } catch (err) {
            console.error(`Error handling message: ${err instanceof Error ? err.message : String(err)}`);
          }
        });

        ws.on("error", (error) => {
          console.error(`WebSocket error for ${channelId}: ${error.message}`);
          removeClient(ws);
        });

        ws.on("close", () => {
          console.log(`WebSocket closed for streamer: ${channelId}`);
          removeClient(ws);
        });
      } catch (err) {
        console.error(`Error handling connection: ${err instanceof Error ? err.message : String(err)}`);
        if (ws.readyState === WebSocket.OPEN) {
          ws.close();
        }
      }
    });

    return wss;
  } catch (err) {
    console.error(`Failed to setup WebSocket server: ${err instanceof Error ? err.message : String(err)}`);
    throw err;
  }
}

function sendAlert(
  channelId: string,
  alertData: AlertData,
  wss?: WebSocketServer,
) {
  if (wss !== undefined) {
    try {
      const message = JSON.stringify({ channelId, alertData });
      let clientCount = 0;
      
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
          clientCount++;
        }
      });
      
      console.log(`Alert sent to ${clientCount} clients for channel ${channelId}`);
    } catch (err) {
      console.error(`Error sending alert: ${err instanceof Error ? err.message : String(err)}`);
    }
  } else {
    console.error("WebSocket server not available!");
  }
}

function removeClient(ws: WebSocket): void {
  const index = clients.findIndex((client) => client.ws === ws);
  if (index !== -1) {
    clients.splice(index, 1);
  }
}

export { setupWebsocketServer, sendAlert };
