import { Auth } from "googleapis";
import { createOAuth2Client } from "../../config/auth";
import { getUserTokens, updateTokens } from "../../queries/queries";
const saveTokens = (userId: string, tokens: any) => {
  console.log(tokens);
  if (tokens.access_token && userId !== null && userId !== undefined) {
    updateTokens(tokens.access_token, userId, tokens.refresh_token);
  }
};

const randomHex = () => {
  const array = new Uint8Array(32); // Create a 32-byte array
  crypto.getRandomValues(array); // Fill it with cryptographically secure random values
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
};

// FIXME: fix auth
// authenticate user if the access token is expired
const getOAuth2ClientForUser = async (
  userId: string,
): Promise<Auth.AuthClient> => {
  // Retrieve the user's tokens
  const tokens = await getUserTokens(userId);
  console.log(tokens);
  if (!tokens) {
    throw new Error("User not authenticated.");
  }
  // Create a new OAuth2 client instance
  const oauth2Client = createOAuth2Client(userId);
  // check if token is expired.
  // Set the user's tokens

  oauth2Client.setCredentials({
    refresh_token: tokens.refreshToken,
    access_token: tokens.accessToken,
    expiry_date: tokens.updatedAt?.getDate(),
  });

  return oauth2Client;
};

export { getOAuth2ClientForUser, saveTokens, getUserTokens, randomHex };
