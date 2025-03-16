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
import type { Command } from "../types";

interface CommandEditorProps {
  command: Command | null;
  isOpen: boolean;
  isDefault?: boolean;
  onClose: () => void;
  onSave: (command: Command) => void;
}

export function CommandEditor({
  command,
  isOpen,
  isDefault = false,
  onClose,
  onSave,
}: CommandEditorProps) {
  const [editedCommand, setEditedCommand] = useState<Command | null>(null);

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

  const updateField = (field: keyof Command, value: number | string) => {
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={editedCommand.name}
              onChange={(e) => updateField("name", e.target.value)}
              readOnly={isDefault}
              className={isDefault ? "opacity-70" : ""}
            />
          </div>
          <p>Is this working?</p>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={editedCommand.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="What does this command do?"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="userLevel">Required User-Level</Label>
            <Select
              value={editedCommand.userLevel}
              onValueChange={(value) => updateField("userLevel", value)}
            >
              <SelectTrigger id="userLevel">
                <SelectValue placeholder="Select user level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Everyone">Everyone</SelectItem>
                <SelectItem value="Moderator">Moderator</SelectItem>
                <SelectItem value="Owner">Owner</SelectItem>
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
