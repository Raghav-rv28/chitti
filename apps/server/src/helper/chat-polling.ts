import { google } from "googleapis";
import { getOAuth2ClientForUser } from "../providers/youtube/auth";
import { getCommands } from "../queries/commands";
import { awardUserPoints } from "../queries/points";
import { saveStream, saveChatMessages } from "../queries/queries";

const activeStreamers: Record<
  string,
  { liveChatId: string; nextPage: string; oauthClient: any }
> = {};
const youtube = google.youtube("v3");

async function addStreamer(channelId: string, liveChatId: string) {
  const auth = await getOAuth2ClientForUser(channelId);
  activeStreamers[channelId] = { liveChatId, nextPage: "", oauthClient: auth };
}

function removeStreamer(channelId: string): void {
  delete activeStreamers[channelId];
  if (activeStreamers[0] === undefined) {
    interval.unref();
  }
}

async function findActiveChat(channelId: string): Promise<string | null> {
  try {
    const auth: any = await getOAuth2ClientForUser(channelId);
    const response: any = await youtube.liveBroadcasts.list({
      auth,
      part: ["snippet"],
      mine: true,
    });
    const items: typeof response.data.items = response.data?.items ?? [];
    if (items.length === 0) {
      console.log("No Active Chat Found");
      return null;
    }

    const latestChat = items[0];

    if (latestChat?.snippet?.liveChatId) {
      console.log("Chat ID Found:", latestChat.snippet.liveChatId);
      saveStream(
        channelId,
        latestChat.snippet.liveChatId,
        latestChat.snippet.actualStartTime,
        latestChat.snippet.title,
      );
      return latestChat.snippet.liveChatId;
    }
    return null;
  } catch (error) {
    console.error("Error fetching active chat:", error);
    return null;
  }
}

async function pollLiveChats(): Promise<void> {
  for (const [channelId, userDetails] of Object.entries(activeStreamers)) {
    try {
      const response = await youtube.liveChatMessages.list({
        auth: userDetails.oauthClient,
        part: ["snippet", "authorDetails"],
        liveChatId: userDetails.liveChatId,
        pageToken: userDetails.nextPage,
      });
      const items: typeof response.data.items = response.data.items;
      console.log("polling", channelId, userDetails.liveChatId);
      if (items) {
        items.forEach((message: any) =>
          processMessage(channelId, message, userDetails.liveChatId),
        );
      }
      if (response.data.nextPageToken) {
        activeStreamers[channelId] = {
          ...activeStreamers[channelId],
          nextPage: response.data.nextPageToken,
        };
      }
    } catch (error) {
      console.error(`Error polling chat for ${channelId}:`, error);
    }
  }
}

async function handleCommands(
  channelId: string,
  viewerId: string,
  displayMessage: string,
) {
  const parts = displayMessage.slice(1).split(" "); // Remove "!" and split by space
  const command = parts[0].toLowerCase();
  // const args = parts.slice(1);
  //
  // //check if commentor is mod or not
  // const response = await youtube.liveChatModerators.list({
  //   auth: activeStreamers[channelId].oauthClient,
  //   part: ["snippet"],
  //   liveChatId: activeStreamers[channelId].liveChatId,
  // });
  // const moderators = response.data.items!.map(
  //   (item) => item.snippet?.moderatorDetails?.channelId || "",
  // );
  // const isModerator = moderators.includes(viewerId);

  // Check user-defined commands in DB
  const customCommand = await getCommands(channelId, command);
  if (customCommand?.response) {
    return customCommand.response;
  }
}

async function triggerTTS(_text: string, _message: any) {
  console.log("testing TTS");
}

/*
 * process live youtube chat messages, checks for commands and alerts.
 * */
function processMessage(
  channelId: string,
  message: any,
  liveChatId: string,
): void {
  const { authorChannelId, displayMessage, type } = message.snippet;
  const { displayName } = message.authorDetails;
  if (displayMessage[0] === "!") {
    handleCommands(channelId, authorChannelId, displayMessage);
  }
  saveChatMessages(
    channelId,
    displayMessage,
    liveChatId,
    authorChannelId,
    type,
    displayName,
  );
  awardUserPoints(
    authorChannelId,
    displayName,
    channelId,
    liveChatId,
    displayMessage,
  );
}

export function clearPollingApi(intervalId: NodeJS.Timeout) {
  if (intervalId) {
    clearInterval(intervalId);
    console.log("Polling interval cleared");
  }
}
const interval = setInterval(pollLiveChats, 5000);

export { addStreamer, findActiveChat, interval, removeStreamer, triggerTTS };
