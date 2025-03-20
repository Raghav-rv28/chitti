export interface Streamer {
  channelId: string;
  broadcastId: string;
}

export interface AlertData {
  username: string;
  amount: string | null;
  type: "SuperChat" | "Donation" | "Message";
  message: string;
}

export interface Tokens {
  refresh_token?: string;
  expiry_date?: number;
  access_token?: string;
  token_type?: string;
  id_token?: string;
  scope?: string;
}
