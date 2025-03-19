"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import { MessageSquare, Command, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Define proper type for summary data
interface SummaryData {
  message_count: number;
  command_count: number;
  timeout_count: number;
  stream_count: number;
}

export default function Summary() {
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    // Only fetch data if user is signed in
    if (!isLoaded || !isSignedIn) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Import dynamically to avoid server/client mismatch
        const { getUserInfo } = await import("@/actions/queries");

        if (!user?.emailAddresses?.[0]?.emailAddress) {
          throw new Error("Email address not found");
        }

        const userData = await getUserInfo(user.emailAddresses[0].emailAddress);

        if (!userData?.id) {
          throw new Error("User ID not found");
        }

        const response = await fetch(
          `http://localhost:3000/api/users/get-summary/${userData.id}`,
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();
        setSummary(result.data[0]); // Access first item in the array returned by raw query
      } catch (err) {
        console.error("Failed to fetch summary:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isSignedIn, isLoaded, user]);

  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Messages</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-24" />
          ) : error ? (
            <div className="text-sm text-red-500">Error loading data</div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {summary?.message_count || 0}
              </div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Commands</CardTitle>
          <Command className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-24" />
          ) : error ? (
            <div className="text-sm text-red-500">Error loading data</div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {summary?.command_count || 0}
              </div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Timeouts</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-8 w-24" />
          ) : error ? (
            <div className="text-sm text-red-500">Error loading data</div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                {summary?.timeout_count || 0}
              </div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
