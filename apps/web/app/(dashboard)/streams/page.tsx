import { getStreams } from "@/actions/streamActions";
import { StreamSelector } from "./components/stream-selector";
import { currentUser } from "@clerk/nextjs/server";
import { getUserInfo } from "@/actions/queries";
import { notFound } from "next/navigation";

export default async function LogsPage() {
  const userClerk = await currentUser();
  let user;
  const email = userClerk?.emailAddresses[0].emailAddress;
  if (email) {
    user = await getUserInfo(email);
  }
  if (user?.id === undefined) {
    return notFound();
  }
  // Fetch all streams for the user
  const streams = await getStreams(user?.id ?? "");

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stream Logs</h1>
        <p className="text-muted-foreground">
          View chat messages from your previous streams.
        </p>
      </div>

      {streams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-semibold mb-2">No streams found</h2>
          <p className="text-muted-foreground">
            You haven't streamed yet or there are no records of your streams.
          </p>
        </div>
      ) : (
        <StreamSelector streams={streams} />
      )}
    </div>
  );
}
