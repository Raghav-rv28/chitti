import { notFound } from "next/navigation";
import { getCommands } from "@/actions/customCommands";
import CustomCommands from "./components/custom-commands";
import { currentUser } from "@clerk/nextjs/server";
import { getUserInfo } from "@/actions/queries";

export default async function Page() {
  const userClerk = await currentUser();
  let user;
  const email = userClerk?.emailAddresses[0].emailAddress;
  if (email) {
    user = await getUserInfo(email);
  }
  if (user?.id === undefined) {
    return notFound();
  }
  const commands = await getCommands(user?.id);

  return (
    <div className="container max-w-6xl py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Commands</h1>
        <p className="text-muted-foreground">
          Commands are used to trigger responses in chat.
        </p>
      </div>

      <CustomCommands commands={commands} userId={user?.id} />
    </div>
  );
}
