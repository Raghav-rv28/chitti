"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import React from "react";

export default function GoLive({ id }: { id: string | undefined }) {
  const [isLive, setIsLive] = React.useState(false);

  const AttemptGoingLive = async () => {
    const response = await fetch(
      `http://localhost:3000/youtube/start-stream?channelId=${id}`,
    );
    setIsLive(response.status === 200);
  };
  return (
    <div>
      <Button onClick={async () => await AttemptGoingLive()}>
        {isLive ? (
          <>
            Watching
            <Eye />
          </>
        ) : (
          <>Start Monitoring</>
        )}
      </Button>
    </div>
  );
}
