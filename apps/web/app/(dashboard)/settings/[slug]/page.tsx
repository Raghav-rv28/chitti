import { notFound } from "next/navigation";
import { ProfileSettings } from "../components/profile-settings";
import { SecuritySettings } from "../components/security-settings";
import { BillingSettings } from "../components/billing-settings";
import { NotificationsSettings } from "../components/notifications-settings";
import { IntegrationsSettings } from "../components/integrations-settings";
import { ApiSettings } from "../components/api-settings";
import { HelpSettings } from "../components/help-settings";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Define the valid slugs
const validSlugs = [
  "profile",
  "security",
  "billing",
  "notifications",
  "integrations",
  "api",
  "help",
];

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate the slug
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Render the appropriate component based on the slug
  const renderSettingsComponent = () => {
    switch (slug) {
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      case "billing":
        return <BillingSettings />;
      case "notifications":
        return <NotificationsSettings />;
      case "integrations":
        return <IntegrationsSettings />;
      case "api":
        return <ApiSettings />;
      case "help":
        return <HelpSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-5 text-center w-full">
        <h1 className="text-2xl font-bold tracking-tight">
          {slug.charAt(0).toUpperCase() + slug.slice(1)} Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your {slug} settings and preferences.
        </p>
      </div>
      <Suspense fallback={<Skeleton />}>{renderSettingsComponent()}</Suspense>
    </div>
  );
}
