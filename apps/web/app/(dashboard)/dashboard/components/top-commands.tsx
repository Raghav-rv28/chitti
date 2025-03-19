"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface CommandData {
  commandType: string;
  count: number;
}
export function TopCommands() {
  const [topCommands, setTopCommands] = useState<CommandData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    async function fetchTopCommands() {
      setIsLoading(true);
      try {
        const response = await fetch("./mock.json"); // Adjust API route as needed
        const data = (await response.json()) as CommandData[];
        setTopCommands(data);
      } catch (error) {
        console.error("Failed to fetch commands:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTopCommands();
  }, []);

  const totalPages = Math.ceil(topCommands.length / pageSize);
  const paginatedCommands = topCommands.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: pageSize }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-4 w-6" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      ) : paginatedCommands.length > 0 ? (
        <ul className="space-y-2">
          {paginatedCommands.map((cmd, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
            >
              <span className="font-medium">{cmd.commandType}</span>
              <span className="text-sm text-muted-foreground">
                {cmd.count} uses
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-muted-foreground py-6">
          No commands have been used yet.
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="icon"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <span className="text-sm text-muted-foreground">
            {page} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      )}
    </div>
  );
}
