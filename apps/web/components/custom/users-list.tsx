"use client";

import { useState } from "react";

export function UsersList() {
  const [isLoading] = useState(true);

  return (
    <div className="h-[300px] flex items-center justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          No active users at the moment.
        </div>
      )}
    </div>
  );
}
