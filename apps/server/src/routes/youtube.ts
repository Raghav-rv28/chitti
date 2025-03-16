import { Router, Request, Response } from "express";
// import path, { join } from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { CustomRequest } from "../config/types.js";
import { randomHex } from "../providers/youtube/auth";
import { createOAuth2Client } from "../config/auth";
import { google } from "googleapis";
import { onboardUser } from "../helper/onboarding";
import { addStreamer, findActiveChat, interval } from "../helper/chat-polling";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = join(dirname(__filename), "..");
const router: Router = Router();
const stateStore: Record<string, boolean> = {};
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
  stateStore[state] = true;
  const oauth2Client = createOAuth2Client(req.query.channelId as string);
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
  if (!state || !stateStore[state as string]) {
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
      onboardUser(
        {
          userId: user.id,
          username: user?.snippet?.title,
          statistics: user?.statistics,
        },
        tokens,
      );
    }
    res.redirect("http://localhost:3001/dashboard");
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).send("Authentication failed.");
  }
});

router.get("/start-stream/", async (req: Request, res: Response) => {
  const { channelId } = req.query;
  const liveChatId = await findActiveChat(channelId as string);
  if (liveChatId !== null) {
    await addStreamer(channelId as string, liveChatId);
    interval.ref();
  } else {
    res.sendStatus(500);
  }
  res.sendStatus(200);
});

///**
// * OBS Overlay Page
// */
//router.get("/overlay/:channelId", (req: CustomRequest, res: Response) => {
//  const { channelId } = req.params;
//  const filePath = path.join(__dirname, "public", "index.html");
//  let html = fs.readFileSync(filePath, "utf-8");
//  html = html.replace("{{channelId}}", channelId);
//  res.send(html);
//});

export const youtubeRouter = router;
