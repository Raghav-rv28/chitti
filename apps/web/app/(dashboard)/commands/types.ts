export interface Command {
  id: string;
  enabled: boolean;
  name: string;
  description: string;
  userLevel: "viewer" | "moderator" | "owner";
  cooldown: number;
}
export interface CommandReturned {
  id: string;
  userId: string;
  enabled?: boolean;
  cooldown?: number;
  requiredUserLevel: any;
  trigger: string;
  response: string;
  createdAt: Date;
}
