"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Command, CommandReturned } from "../types";

interface CommandEditorProps {
  command: CommandReturned | null;
  isOpen: boolean;
  isDefault?: boolean;
  onClose: () => void;
  onSave: (command: CommandReturned) => void;
}

export function CommandEditor({
  command,
  isOpen,
  isDefault = false,
  onClose,
  onSave,
}: CommandEditorProps) {
  const [editedCommand, setEditedCommand] = useState<CommandReturned | null>(
    null,
  );

  // Reset form when command changes or dialog opens
  useEffect(() => {
    console.log(command, isOpen, isDefault);
    if (isOpen && command) {
      setEditedCommand({ ...command });
    }
  }, [isOpen, command, isDefault]);

  const handleSave = () => {
    if (editedCommand) {
      onSave(editedCommand);
    }
    onClose();
  };

  const updateField = (
    field: keyof CommandReturned,
    value: number | string,
  ) => {
    if (editedCommand) {
      setEditedCommand({
        ...editedCommand,
        [field]: value,
      });
    }
  };

  if (!editedCommand) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isDefault ? "Edit Default Command" : "Edit Custom Command"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="trigger">Trigger</Label>
            <Input
              id="trigger"
              value={editedCommand.trigger}
              onChange={(e) => updateField("trigger", e.target.value)}
              readOnly={isDefault}
              className={isDefault ? "opacity-70" : ""}
            />
          </div>
          <p>Is this working?</p>
          <div className="grid gap-2">
            <Label htmlFor="response">Response</Label>
            <Input
              id="response"
              value={editedCommand.response}
              onChange={(e) => updateField("response", e.target.value)}
              placeholder="What does this command do?"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="requiredUserLevel">Required User-Level</Label>
            <Select
              value={editedCommand.requiredUserLevel}
              onValueChange={(value) => updateField("requiredUserLevel", value)}
            >
              <SelectTrigger id="userLevel">
                <SelectValue placeholder="Select user level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="viewer">Viewer</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
                <SelectItem value="owner">Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="cooldown">Cooldown (seconds)</Label>
            <Input
              id="cooldown"
              type="number"
              value={editedCommand.cooldown}
              onChange={(e) =>
                updateField("cooldown", Number.parseInt(e.target.value) || 0)
              }
              min={0}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
