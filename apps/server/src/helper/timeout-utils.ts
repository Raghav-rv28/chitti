import { Timeout } from "./types";
import { google } from "googleapis";

// YouTube API client
const youtube = google.youtube("v3");

// Store user timeouts in memory
export const userTimeouts: Record<string, number> = {};

// Reference to active streamers
let activeStreamersRef: Record<string, any> = {};

/**
 * Set the reference to active streamers
 */
export function setActiveStreamersReference(
  streamers: Record<string, any>,
): void {
  activeStreamersRef = streamers;
}

/**
 * Check if a user is currently timed out
 */
export function isUserTimedOut(channelId: string, userId: string): boolean {
  const key = `${channelId}:${userId}`;
  const timeoutUntil = userTimeouts[key];

  if (!timeoutUntil) {
    return false;
  }

  // If timeout has expired, clean it up
  if (timeoutUntil < Date.now()) {
    delete userTimeouts[key];
    return false;
  }

  return true;
}

/**
 * Apply a timeout to a user
 * @param channelId the streamer's channelId
 * @param userId the viewer to be timeed out's Id
 */
export async function timeoutUser(
  channelId: string,
  userId: string,
  liveChatId: string,
  timeout: Timeout,
): Promise<void> {
  if (!timeout.timeoutEnabled) {
    return;
  }
  console.log("timeoutUser func channelId", channelId);
  console.log("timeoutUser func viewerId", userId);
  try {
    // Store timeout in memory to prevent further messages until timeout expires
    const timeoutUntil = Date.now() + timeout.timeoutDurationSeconds * 1000;
    userTimeouts[`${channelId}:${userId}`] = timeoutUntil;

    // Return early if there's no OAuth client for this channel
    if (!activeStreamersRef[channelId]?.oauthClient) {
      console.error(
        `Cannot timeout user: no OAuth client for channel ${channelId}`,
      );
      return;
    }

    // Call YouTube API to timeout the user
    await executeYouTubeTimeout(
      channelId,
      userId,
      liveChatId,
      timeout.timeoutDurationSeconds,
      timeout.timeoutMessage,
    );
  } catch (error) {
    console.error(`Error timing out user ${userId} in ${channelId}:`, error);
  }
}

/**
 * Remove a timeout from a user
 */
export async function removeUserTimeout(
  channelId: string,
  userId: string,
): Promise<boolean> {
  const key = `${channelId}:${userId}`;

  if (userTimeouts[key]) {
    delete userTimeouts[key];
    return true;
  }

  return false;
}

/**
 * Clean up expired timeouts
 */
export function cleanupTimeouts(): void {
  const now = Date.now();

  for (const key in userTimeouts) {
    if (userTimeouts[key] < now) {
      delete userTimeouts[key];
    }
  }
}

/**
 * Execute a timeout via YouTube API
 */
async function executeYouTubeTimeout(
  channelId: string,
  userId: string,
  liveChatId: string,
  durationSeconds: number,
  message: string,
): Promise<void> {
  const oauthClient = activeStreamersRef[channelId]?.oauthClient;
  if (!oauthClient) return;
  console.log("final channelId", channelId);
  console.log("final viewerId", userId);
  try {
    // Apply the timeout ban
    // await youtube.liveChatBans.insert({
    //   auth: oauthClient,
    //   part: ["snippet"],
    //   requestBody: {
    //     snippet: {
    //       broadcastId,
    //       type: "temporary",
    //       banDurationSeconds: durationSeconds.toString(),
    //       bannedUserDetails: {
    //         channelId: userId,
    //       },
    //     },
    //   },
    // });

    // Send the timeout message if provided
    if (message) {
      await youtube.liveChatMessages.insert({
        auth: oauthClient,
        part: ["snippet"],
        requestBody: {
          snippet: {
            liveChatId,
            type: "textMessageEvent",
            textMessageDetails: {
              messageText: message,
            },
          },
        },
      });
    }

    console.log(
      `User ${userId} timed out in channel ${channelId} for ${durationSeconds} seconds`,
    );
  } catch (error) {
    console.error("Error executing YouTube timeout:", error);
  }
}
