"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CommandList } from "./command-list";
import { CommandEditor } from "./command-editor";
import type { Command, CommandReturned } from "../types";

// Sample custom commands
const customCommandsData: Command[] = [
  {
    id: "custom-1",
    enabled: true,
    name: "!discord",
    description: "Displays a link to join our Discord server",
    userLevel: "Everyone",
    cooldown: 30,
  },
  {
    id: "custom-2",
    enabled: true,
    name: "!socials",
    description: "Shows links to all social media profiles",
    userLevel: "Everyone",
    cooldown: 30,
  },
];

// New command template
const newCommandTemplate: Command = {
  id: "",
  enabled: true,
  name: "!",
  description: "",
  userLevel: "Everyone",
  cooldown: 30,
};

export default function CustomCommands({
  commands,
}: {
  commands: CommandReturned[];
}) {
  const [customCommands, setCustomCommands] =
    useState<Command[]>(customCommandsData);
  const [isCreating, setIsCreating] = useState(false);
  const [newCommand, setNewCommand] = useState<Command>({
    ...newCommandTemplate,
    id: `custom-${Date.now()}`,
  });

  const handleCreateCommand = () => {
    setNewCommand({
      ...newCommandTemplate,
      id: `custom-${Date.now()}`,
    });
    setIsCreating(true);
  };

  const handleSaveNewCommand = (command: Command) => {
    setCustomCommands([...customCommands, command]);
    setIsCreating(false);
  };

  const handleUpdateCommand = (updatedCommand: Command) => {
    setCustomCommands(
      customCommands.map((command) =>
        command.id === updatedCommand.id ? updatedCommand : command,
      ),
    );
  };

  const handleToggleCommand = (id: string, enabled: boolean) => {
    setCustomCommands(
      customCommands.map((command) =>
        command.id === id ? { ...command, enabled } : command,
      ),
    );
  };

  const handleDeleteCommand = (id: string) => {
    setCustomCommands(customCommands.filter((command) => command.id !== id));
  };

  return (
    <div className="py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Custom Commands</h2>
        <Button onClick={handleCreateCommand} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Command
        </Button>
      </div>

      <CommandList
        commands={customCommands}
        onUpdateCommand={handleUpdateCommand}
        onToggleCommand={handleToggleCommand}
        onDeleteCommand={handleDeleteCommand}
      />

      <CommandEditor
        command={newCommand}
        isOpen={isCreating}
        onClose={() => setIsCreating(false)}
        onSave={handleSaveNewCommand}
      />
    </div>
  );
}
