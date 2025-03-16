import { google } from "googleapis";
import "dotenv/config";
import { saveTokens } from "../providers/youtube/auth";
import { OAuth2Client } from "google-auth-library";
/**
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */
export const createOAuth2Client = (channelId: string): OAuth2Client => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.YOUR_CLIENT_ID,
    process.env.YOUR_CLIENT_SECRET,
    process.env.YOUR_REDIRECT_URL,
  );
  if (channelId !== "") {
    oauth2Client.on("tokens", (tokens) => {
      saveTokens(channelId, tokens);
    });
  }
  return oauth2Client;
};
