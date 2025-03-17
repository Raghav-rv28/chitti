import { notFound } from "next/navigation";

import type { Metadata } from "next";
import Filters from "../components/filters";
import Links from "../components/links";

export const metadata: Metadata = {
  title: "Chat Moderation",
  description: "Manage chat restrictions and spam filters",
};

export default function ChatModerationPage({
  params,
}: {
  params: { slug: string };
}) {
  // Render the appropriate component based on the slug
  switch (params.slug) {
    case "filters":
      return <Filters />;
    case "links":
      return <Links />;
    default:
      notFound();
  }
}
