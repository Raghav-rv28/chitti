"use client";

import { useEffect, useState } from "react";

export function UsersList({ userId }: { userId: string }) {
  const [users, setUsers] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/top-viewers/${userId}`,
        ); // Adjust the API endpoint as necessary
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = (await response.json()) as {
          success: boolean;
          data: { [key: string]: number };
        };
        console.log(data);
        setUsers(data.data); // Assuming the API returns { success: true, data: users }
      } catch (err) {
        console.log(err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-[300px] flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : Object.keys(users).length > 0 ? (
        <ul className="list-disc">
          {Object.entries(users).map(([userId, count]) => (
            <li key={userId} className="text-center text-muted-foreground">
              {userId} - {count}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-muted-foreground">
          No active users at the moment.
        </div>
      )}
    </div>
  );
}
