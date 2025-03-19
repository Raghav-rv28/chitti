"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Eye } from "lucide-react";
import { User } from "@repo/database";

export default function GoLive() {
  const [isLive, setIsLive] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn && user?.emailAddresses?.[0]?.emailAddress) {
        try {
          // Import the function dynamically to avoid server/client mismatch
          const { getUserInfo } = await import("@/actions/queries");
          const userInfo = await getUserInfo(
            user.emailAddresses[0].emailAddress,
          );
          setUserData(userInfo);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isSignedIn, user]);

  if (!isSignedIn || !isLoaded) return null;

  const attemptGoingLive = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/youtube/start-stream/?channelId=${userData?.id}`,
        { method: "POST" }, // Using POST is typically better for actions that change state
      );
      setIsLive(response.status === 200);
    } catch (error) {
      console.error("Error starting stream:", error);
    }
  };

  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">
        Good Afternoon, {userData?.username}
      </h2>
      <div className="flex items-center space-x-2">
        <Button onClick={attemptGoingLive} disabled={!userData?.id}>
          {isLive ? (
            <span className="flex items-center gap-2">
              Watching <Eye className="h-4 w-4" />
            </span>
          ) : (
            "Start Monitoring"
          )}
        </Button>
      </div>
    </div>
  );
}
