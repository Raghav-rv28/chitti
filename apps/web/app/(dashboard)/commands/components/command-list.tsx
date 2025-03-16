"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2, Search } from "lucide-react";
import { CommandEditor } from "./command-editor";
import { Command } from "../types";

interface CommandListProps {
  commands: Command[];
  isDefault?: boolean;
  onUpdateCommand: (command: Command) => void;
  onToggleCommand: (id: string, enabled: boolean) => void;
  onDeleteCommand?: (id: string) => void;
}

export function CommandList({
  commands,
  isDefault = false,
  onUpdateCommand,
  onToggleCommand,
  onDeleteCommand,
}: CommandListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [editingCommand, setEditingCommand] = useState<Command | null>(null);

  const filteredCommands = commands.filter(
    (command) =>
      command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Enabled</TableHead>
              <TableHead className="w-[180px]">Command</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[120px]">User-Level</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCommands.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No commands found.
                </TableCell>
              </TableRow>
            ) : (
              filteredCommands.map((command) => (
                <TableRow key={command.id}>
                  <TableCell>
                    <Switch
                      checked={command.enabled}
                      onCheckedChange={(checked) =>
                        onToggleCommand(command.id, checked)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{command.name}</TableCell>
                  <TableCell className="max-w-md">
                    {command.description}
                  </TableCell>
                  <TableCell>{command.userLevel}</TableCell>
                  <TableCell>
                    <div className="flex justify-end space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingCommand(command)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      {!isDefault && onDeleteCommand && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onDeleteCommand(command.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {filteredCommands.length} of {commands.length} commands
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>

      <CommandEditor
        command={editingCommand}
        isOpen={!!editingCommand}
        isDefault={isDefault}
        onClose={() => setEditingCommand(null)}
        onSave={onUpdateCommand}
      />
    </div>
  );
}
