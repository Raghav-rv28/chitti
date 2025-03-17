"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Chat } from "@repo/database";

interface ChatTableProps {
  chats: Chat[];
  loading?: boolean;
}

export function ChatTable({ chats, loading = false }: ChatTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter(
    (chat) =>
      chat.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Chat Messages</h2>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages or users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
            disabled={loading}
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Time</TableHead>
                <TableHead className="w-[150px]">Username</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={`loading-${index}`}>
                    <TableCell>
                      <div className="h-5 w-20 bg-muted animate-pulse rounded"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-5 w-24 bg-muted animate-pulse rounded"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-5 w-full bg-muted animate-pulse rounded"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-5 w-16 bg-muted animate-pulse rounded"></div>
                    </TableCell>
                  </TableRow>
                ))
              ) : filteredChats.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    No chat messages found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredChats.map((chat) => (
                  <TableRow key={chat.id}>
                    <TableCell className="font-medium">
                      {format(new Date(chat.timestamp), "h:mm:ss a")}
                    </TableCell>
                    <TableCell>{chat.username}</TableCell>
                    <TableCell className="max-w-md break-words">
                      {chat.message}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getChatTypeClass(chat.chatType)}`}
                      >
                        {chat.chatType}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {loading ? (
            <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
          ) : (
            `Showing ${filteredChats.length} of ${chats.length} messages`
          )}
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
    </div>
  );
}

function getChatTypeClass(chatType: string): string {
  switch (chatType.toLowerCase()) {
    case "user":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "moderator":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "subscriber":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "donation":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "system":
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
}
