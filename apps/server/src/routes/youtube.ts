import { Router, Request, Response } from "express";
import path from "path";
import fs from "fs";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { CustomRequest } from "../config/types.js";
import {
  getOAuth2ClientForUser,
  randomHex,
  saveTokens,
} from "../providers/youtube/auth";
import { createOAuth2Client } from "../config/auth";
import { google } from "googleapis";
import { onboardUser } from "../helper/onboarding";
import { addStreamer, findActiveChat, interval } from "../helper/chat-polling";
import { CustomRequest } from "../config/types";
import { getStream, saveStream } from "../queries/queries";
import { reseller } from "googleapis/build/src/apis/reseller";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = join(dirname(__filename), "..");
const router: Router = Router();
const stateStore: Record<string, string> = {};
const youtube = google.youtube("v3");
// Middleware for authentication (Stubbed for now)
const authenticateUser = (req: Request, res: Response, next: Function) => {
  // TODO: Implement authentication logic (JWT)
  next();
};

/**
 * Oauth2.0
 */
router.get("/auth", async (req: Request, res: Response) => {
  const scopes = [
    "https://www.googleapis.com/auth/youtube.readonly",
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.force-ssl",
  ];
  const state = randomHex(); // Generate random state
  stateStore[state] = req.query.email as string;
  const oauth2Client = createOAuth2Client("");
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    prompt: "consent",
    include_granted_scopes: true,
    state: state, // Pass state for CSRF protection
  });
  res.redirect(authorizationUrl);
});

/**
 * callback
 * TODO: redirect back to client
 * save profile info in DB.
 */
router.get("/callback", async (req: Request, res: Response) => {
  const { code, state } = req.query;
  if (!state || !((state as string) in stateStore)) {
    res.status(400).send("Invalid state parameter.");
  }
  try {
    const oauth2Client = createOAuth2Client("");
    const { tokens } = await oauth2Client.getToken(code as string);
    oauth2Client.setCredentials(tokens);

    const userProfile = await youtube.channels.list({
      auth: oauth2Client,
      part: ["id", "snippet", "statistics"],
      mine: true,
    });
    const items = userProfile.data?.items ?? [];
    const user = items[0];
    if (user && user.id) {
      await onboardUser({
        userId: user.id,
        email: stateStore[state as string],
        username: user?.snippet?.title,
        statistics: user?.statistics,
      });
      saveTokens(user.id, tokens);
    }
    res.redirect("http://localhost:3001/dashboard");
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).send("Authentication failed.");
  }
});

router.post("/start-stream/", async (req: Request, res: Response) => {
  const { channelId } = req.query;
  const { liveChatId, broadcastId } = await findActiveChat(channelId as string);
  if (liveChatId !== null && broadcastId !== null) {
    await addStreamer(channelId as string, liveChatId, broadcastId);
    interval.ref(); // FIX:this will cause bugs when hit by multiple users.
  } else {
    res.sendStatus(500);
  }
  res.status(200).redirect("http://localhost:3001/dashboard");
});

//NOTE: wont work if broadcast is not active
router.post(
  "/update-stream-description",
  async (req: Request, res: Response) => {
    const { channelId, broadcastId: broadcastId, description } = req.body;
    const stream = await getStream(broadcastId, channelId);
    if (!stream) {
      return res.status(404).send("Stream not found"); // Handle missing stream
    }
    console.log(broadcastId, channelId);
    const oauth2Client: any = await getOAuth2ClientForUser(channelId as string);
    try {
      const response = await youtube.liveBroadcasts.update({
        auth: oauth2Client,
        part: ["snippet"],
        requestBody: {
          id: broadcastId,
          snippet: {
            description: description,
            scheduledStartTime: stream.startTime.toISOString(),
          },
        },
      });
      console.log(response.status);
      if (response) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).send("Internal Server Error"); // Send error response
    }
  },
);

/**
 * OBS Overlay Page
 */
router.get("/overlay/:channelId", (req: CustomRequest, res: Response) => {
  const { channelId } = req.params;
  const filePath = path.join(__dirname, "public", "index.html");
  let html = fs.readFileSync(filePath, "utf-8");
  html = html.replace("{{channelId}}", channelId);
  res.send(html);
});

export const youtubeRouter = router;
