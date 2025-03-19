"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface CommandData {
  command: string;
  count: number;
}

// Accept userId as a prop
interface TopCommandsProps {
  userId: string;
}

export function TopCommands({ userId }: TopCommandsProps) {
  const [topCommands, setTopCommands] = useState<CommandData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch data if user is signed in
    if (!isLoading) return;

    const fetchTopCommands = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/top-commands/${userId}`, // Use the new API endpoint
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const result = (await response.json()) as {
          success: boolean;
          data: CommandData[];
        };
        console.log(result);
        setTopCommands(result.data);
      } catch (err) {
        console.error("Failed to fetch top commands:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopCommands();
  }, [isLoading, userId]); // Keep userId as a dependency

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
              <span className="font-medium">!{cmd.command}</span>
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
