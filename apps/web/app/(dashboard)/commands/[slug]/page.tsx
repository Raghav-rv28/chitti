import { notFound } from "next/navigation";
import { NavTabs } from "../components/nav-tabs";
import { getCommands } from "@/actions/customCommands";
import DefaultCommands from "../components/default-components";
import CustomCommands from "../components/custom-commands";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate the slug
  if (slug !== "default" && slug !== "custom") {
    notFound();
  }

  const commands = await getCommands("test");

  return (
    <div className="container max-w-6xl py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Commands</h1>
        <p className="text-muted-foreground">
          Commands are used to trigger responses in chat.
        </p>
      </div>

      <NavTabs />
      {slug === "default" && <DefaultCommands commands={commands} />}
      {slug === "custom" && <CustomCommands commands={commands} />}
    </div>
  );
}
