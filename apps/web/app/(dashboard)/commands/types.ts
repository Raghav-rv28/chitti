export interface Command {
  id: string;
  enabled: boolean;
  name: string;
  description: string;
  userLevel: "Everyone" | "Moderator" | "Owner";
  cooldown: number;
}
export interface CommandReturned {
  id: string;
  userId: string;
  cooldown?: number;
  requiredUserLevel?: string;
  trigger: string;
  response: string;
  createdAt: Date;
}
