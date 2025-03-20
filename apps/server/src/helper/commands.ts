import { google } from "googleapis";
import { getCommand, logCommandDetails } from "../queries/commands";
import { timeoutUser, removeUserTimeout } from "./timeout-utils";
import { Timeout } from "./types";
import { getViewerByUsername } from "../queries/viewer";
import { getStream, saveStream } from "../queries/queries";
import { sendChatMessage } from "./chat-polling";
const youtube = google.youtube("v3");

/**
 * Check if a user is a moderator or owner of the channel
 * TODO: add a local cache of moderation data so we dont hit youtube api so much.
 */
export async function isModeratorOrOwner(
  channelId: string,
  viewerId: string,
  activeStreamers: Record<string, any>,
): Promise<boolean> {
  try {
    // Channel owner check
    if (channelId === viewerId) {
      return true;
    }

    // Safety check for necessary data
    if (
      !activeStreamers[channelId]?.oauthClient ||
      !activeStreamers[channelId]?.liveChatId
    ) {
      console.error(
        "Missing OAuth client or broadcastId for channel",
        channelId,
      );
      return false;
    }

    // Moderator check
    const response = await youtube.liveChatModerators.list({
      auth: activeStreamers[channelId].oauthClient,
      part: ["snippet"],
      liveChatId: activeStreamers[channelId].liveChatId,
    });

    // Validate response structure
    if (!response || !response.data || !Array.isArray(response.data.items)) {
      console.error("Invalid response structure from YouTube API");
      return false;
    }

    const moderators = response.data.items.map((item) => {
      if (item?.snippet?.moderatorDetails?.channelId) {
        return item.snippet.moderatorDetails.channelId;
      }
      return "";
    });

    return moderators.includes(viewerId);
  } catch (error) {
    console.error("Error checking moderator status:", error);
    return false;
  }
}

/**
 * Execute an action command (mod/owner only)
 */
export async function executeActionCommand(
  channelId: string,
  viewerId: string,
  targetUsername: string,
  targetChannelId: string,
  command: string,
  args: string[],
  activeStreamers: Record<string, any>,
  hasPermission: boolean,
): Promise<string | undefined> {
  let response: string | undefined;

  switch (command) {
    case "untimeout":
    case "removeban": {
      if (!hasPermission) {
        return "You don't have permission to use this command.";
      }
      if (args.length < 1) {
        return "Please specify a username.";
      }

      // In this case, we need to determine the target by command args
      const commandTargetUsername = args.join(" ");
      // This is where we'd need to look up the user, but we'll use the provided one
      // if the command target matches

      try {
        // Remove timeout for that user
        const wasRemoved = await removeUserTimeout(channelId, targetChannelId);

        if (!wasRemoved) {
          response = `User ${commandTargetUsername} is not currently in timeout.`;
        }
      } catch (error) {
        console.error("Error removing timeout:", error);
        response = "Failed to remove timeout. Please try again.";
      }
      // Log command details
      return response;
    }

    case "timeout": {
      if (!hasPermission) {
        return "You don't have permission to use this command.";
      }
      if (args.length < 1) {
        return "Please specify a username.";
      }

      // Check if the last argument is a number (duration)
      const lastArg = args[args.length - 1];
      let durationSeconds = 300; // Default to 5 minutes
      let usernameArgs = args;

      if (!isNaN(parseInt(lastArg, 10))) {
        durationSeconds = parseInt(lastArg, 10);
        usernameArgs = args.slice(0, -1); // Remove the duration from username args
      }

      // Handle username correctly by removing duration if present
      const commandTargetUsername = usernameArgs.join(" ").toLowerCase();
      if (!commandTargetUsername.trim()) {
        return "Please specify a username.";
      }
      const bannedUserId = (await getViewerByUsername(commandTargetUsername))
        ?.externalId;
      if (!bannedUserId) {
        return "User not found.";
      }

      try {
        // Create a timeout config
        const timeoutConfig: Timeout = {
          timeoutEnabled: true,
          timeoutDurationSeconds: durationSeconds,
          timeoutMessage: `You have been timed out for ${durationSeconds} seconds.`,
        };

        // Timeout the user
        await timeoutUser(
          channelId,
          bannedUserId,
          activeStreamers[channelId].liveChatId,
          timeoutConfig,
        );
      } catch (error) {
        console.error("Error timing out user:", error);
        response = "Failed to timeout user.";
      }
      return response;
    }
    case "marker": {
      if (!hasPermission) {
        return "You don't have permission to use this command.";
      }

      const description = args.slice().join(" ");

      try {
        const stream = await getStream(
          activeStreamers[channelId].broadcastId,
          channelId,
        );
        const updatedDescription = `${stream?.description || ""}\n\n${description}`;
        await saveStream(
          channelId,
          activeStreamers[channelId].liveChatId,
          stream?.startTime || new Date(),
          stream?.title || "",
          { monitorStream: {} },
          activeStreamers[channelId].broadcastId,
          updatedDescription,
        );
        return `Marker(${description}) created successfully at ${new Date().toISOString()}`;
      } catch (error) {
        console.error("Error creating marker:", error);
        return "Failed to create marker.";
      }
    }

    default:
      return undefined;
  }
}

/**
 * Handle chat commands that start with !
 */
export async function handleCommands(
  channelId: string,
  viewerId: string,
  messagerName: string,
  displayMessage: string,
  messageId: string,
  activeStreamers: Record<string, any>,
): Promise<boolean> {
  const response = false;
  try {
    if (!displayMessage.startsWith("!")) {
      return response;
    }

    const parts = displayMessage.slice(1).split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    const hasPermission = await isModeratorOrOwner(
      channelId,
      viewerId,
      activeStreamers,
    );

    if (!command) {
      return response;
    }

    const actionResponse = await executeActionCommand(
      channelId,
      viewerId,
      messagerName,
      viewerId,
      command,
      args,
      activeStreamers,
      hasPermission,
    );

    // Log command details

    if (actionResponse) {
      logCommandDetails(
        channelId,
        viewerId,
        activeStreamers[channelId].broadcastId,
        command,
        actionResponse,
        hasPermission,
        args,
        { messagerName },
        messageId,
      );
      sendChatMessage(channelId, actionResponse);
      return true;
    }

    // Check user-defined commands in DB
    const commandData = await getCommand(channelId, command);
    if (commandData?.response) {
      logCommandDetails(
        channelId,
        viewerId,
        activeStreamers[channelId].broadcastId,
        command,
        commandData.response,
        hasPermission,
        args,
        { messagerName },
        messageId,
      );
      sendChatMessage(channelId, commandData.response);
      return true;
    }

    return response;
  } catch (error) {
    console.error("Error handling command:", error);
    return false;
  }
}
