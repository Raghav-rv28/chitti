"use client";

import { useState } from "react";
import { CommandList } from "./command-list";
import type { Command, CommandReturned } from "../types";

// Sample default commands
const defaultCommandsData: Command[] = [
  {
    id: "1",
    enabled: true,
    name: "!commands",
    description:
      "Allows users to get a list of commands and moderators to manage commands",
    userLevel: "Everyone",
    cooldown: 10,
  },
  {
    id: "2",
    enabled: true,
    name: "!commercial",
    description:
      "Runs a commercial/ad on your stream (if your channel is eligible)",
    userLevel: "Owner",
    cooldown: 10,
  },
  {
    id: "3",
    enabled: true,
    name: "!filters",
    description: "Allows moderators to manage spam filters within chat",
    userLevel: "Moderator",
    cooldown: 10,
  },
  {
    id: "4",
    enabled: true,
    name: "!game",
    description:
      "Shows the stream's current game, and allows moderators to modify it",
    userLevel: "Everyone",
    cooldown: 10,
  },
  {
    id: "5",
    enabled: true,
    name: "!marker",
    description:
      "Create a stream marker in your Twitch channel to easily return to later.",
    userLevel: "Moderator",
    cooldown: 10,
  },
  {
    id: "6",
    enabled: true,
    name: "!poll",
    description: "Allows you to make a strawpoll within chat",
    userLevel: "Moderator",
    cooldown: 10,
  },
  {
    id: "7",
    enabled: true,
    name: "!regulars",
    description: "Allows moderators to manage channel regulars",
    userLevel: "Moderator",
    cooldown: 10,
  },
  {
    id: "8",
    enabled: true,
    name: "!songs",
    description:
      "Provides users in the chat with the ability to request songs.",
    userLevel: "Everyone",
    cooldown: 10,
  },
  {
    id: "9",
    enabled: false,
    name: "!tags",
    description: "Edit your stream's tags to improve discoverability.",
    userLevel: "Moderator",
    cooldown: 10,
  },
  {
    id: "10",
    enabled: true,
    name: "!title",
    description: "Shows the stream title, and allows moderators to modify it",
    userLevel: "Everyone",
    cooldown: 10,
  },
  {
    id: "11",
    enabled: true,
    name: "!winner",
    description: "Chooses a random user in chat as a winner",
    userLevel: "Moderator",
    cooldown: 10,
  },
];

export default function DefaultCommands({
  commands,
}: {
  commands: CommandReturned[];
}) {
  const [defaultCommands, setDefaultCommands] =
    useState<Command[]>(defaultCommandsData);

  const handleUpdateCommand = (updatedCommand: Command) => {
    setDefaultCommands(
      defaultCommands.map((command) =>
        command.id === updatedCommand.id ? updatedCommand : command,
      ),
    );
  };

  const handleToggleCommand = (id: string, enabled: boolean) => {
    setDefaultCommands(
      defaultCommands.map((command) =>
        command.id === id ? { ...command, enabled } : command,
      ),
    );
  };

  return (
    <div className="py-4">
      <CommandList
        commands={defaultCommands}
        isDefault={true}
        onUpdateCommand={handleUpdateCommand}
        onToggleCommand={handleToggleCommand}
      />
    </div>
  );
}
