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
import {  StreamLogs } from "@repo/database";

interface LogTableProps {
  logs: StreamLogs[];
  loading?: boolean;
}

export function LogTable({ logs, loading = false }: LogTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLogs = logs.filter(
    (logs) =>
      logs.eventType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      logs?.eventDetails.command.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Stream Logs</h2>
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
                <TableHead className="w-[100px]">Messager</TableHead>
                <TableHead className="w-[180px]">Time</TableHead>
                <TableHead className="w-[150px]">Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="w-[100px]">Response</TableHead>
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
              ) : filteredLogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    No chat messages found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.messageDetails.messagerName}</TableCell>
                    <TableCell className="font-medium">
                      {format(new Date(log.createdAt), "h:mm:ss a")}
                    </TableCell>
                    <TableCell>{log.eventType}</TableCell>
                    <TableCell className="max-w-md break-words">
                      {log.eventDetails.command}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs}`}
                      >
                        {log.eventDetails.response}
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
            `Showing ${filteredLogs.length} of ${logs.length} messages`
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


