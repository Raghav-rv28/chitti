"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CommandList } from "./command-list";
import { CommandEditor } from "./command-editor";
import type { CommandReturned } from "../types";
import {
  saveNewCommand,
  updateCommand,
  deleteCommand,
} from "@/actions/customCommands";
import { toast } from "sonner";

// New command template
const newCommandTemplate: CommandReturned = {
  userId: "",
  createdAt: new Date(),
  id: "",
  enabled: true,
  trigger: "!",
  response: "",
  requiredUserLevel: "Everyone",
  cooldown: 30,
};

export default function CustomCommands({
  userId = "",
  commands,
}: {
  commands: CommandReturned[];
  userId: string;
}) {
  const [customCommands, setCustomCommands] =
    useState<CommandReturned[]>(commands);
  const [isCreating, setIsCreating] = useState(false);
  const [newCommand, setNewCommand] = useState<CommandReturned>({
    ...newCommandTemplate,
    id: `custom-${Date.now()}`,
  });
  const [loading, setLoading] = useState(false);

  const handleCreateCommand = () => {
    setNewCommand({
      ...newCommandTemplate,
      id: `custom-${Date.now()}`,
    });
    setIsCreating(true);
  };

  const handleSaveNewCommand = async (command: CommandReturned) => {
    setLoading(true);
    try {
      const savedCommand = await saveNewCommand(command, userId);
      setCustomCommands([...customCommands, savedCommand]);
      toast("Command saved successfully.");
    } catch (error) {
      toast("Failed to save command.");
    } finally {
      setLoading(false);
      setIsCreating(false);
    }
  };

  const handleUpdateCommand = async (updatedCommand: CommandReturned) => {
    setLoading(true);
    try {
      const savedCommand = await updateCommand(updatedCommand);
      setCustomCommands(
        customCommands.map((command) =>
          command.id === savedCommand.id ? savedCommand : command,
        ),
      );
      toast("Command updated successfully.");
    } catch (error) {
      toast("Failed to update command.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleCommand = (id: string, enabled: boolean) => {
    setCustomCommands(
      customCommands.map((command) =>
        command.id === id ? { ...command, enabled } : command,
      ),
    );
  };

  const handleDeleteCommand = async (id: string) => {
    setLoading(true);
    try {
      await deleteCommand(id);
      setCustomCommands(customCommands.filter((command) => command.id !== id));
      toast("Command deleted successfully.");
    } catch (error) {
      toast("Failed to delete command.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Custom Commands</h2>
        <Button onClick={handleCreateCommand} size="sm" disabled={loading}>
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
        loading={loading}
      />
    </div>
  );
}
