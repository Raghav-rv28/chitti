"use client";

import { useState } from "react";
import { Check, ExternalLink, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SettingsTabs } from "./settings-tabs";
import { Badge } from "@/components/ui/badge";
import { notFound, useRouter } from "next/navigation";
import { RedirectToSignIn, useUser } from "@clerk/nextjs";

const integrationsTabs = [
  { value: "services", label: "Services", href: "/settings/integrations" },
  { value: "oauth", label: "OAuth Apps", href: "/settings/integrations/oauth" },
  {
    value: "webhooks",
    label: "Webhooks",
    href: "/settings/integrations/webhooks",
  },
];
const providers = [
  {
    id: "youtube",
    name: "Youtube",
    icon: Youtube,
    description:
      "Connect your Youtube account to get our live stream assistance!",
    connected: false,
    connectedAt: null,
  },
];

export function IntegrationsSettings() {
  const [connectedProviders, setConnectedProviders] = useState(
    providers.reduce(
      (acc, provider) => {
        acc[provider.id] = provider.connected;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  console.log(isSignedIn, user);
  const email = user?.emailAddresses[0].emailAddress;
  const handleToggleConnection = (providerId: string) => {
    if (providerId === "youtube" && email !== undefined) {
      router.push(`http://localhost:3000/youtube/auth/?email=${email}`);

      setConnectedProviders((prev) => ({
        ...prev,
        [providerId]: !prev[providerId],
      }));
    }
  };

  if (!isSignedIn) return <RedirectToSignIn />;
  return (
    <div className="space-y-6">
      {/* <SettingsTabs tabs={integrationsTabs} /> */}

      <div className="grid gap-6">
        {providers.map((provider) => (
          <Card key={provider.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <provider.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">{provider.name}</CardTitle>
                  {connectedProviders[provider.id] && (
                    <p className="text-xs text-muted-foreground">
                      {provider.connectedAt}
                    </p>
                  )}
                </div>
              </div>
              {connectedProviders[provider.id] && (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Check className="mr-1 h-3 w-3" /> Connected
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground mt-2">
                {provider.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between border-t bg-muted/50 p-3">
              <Button
                variant={
                  connectedProviders[provider.id] ? "destructive" : "default"
                }
                onClick={() => handleToggleConnection(provider.id)}
                size="sm"
              >
                {connectedProviders[provider.id] ? "Disconnect" : "Connect"}
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
