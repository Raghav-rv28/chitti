"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsTabsProps {
  tabs: {
    value: string;
    label: string;
    href: string;
  }[];
  baseUrl?: string;
}

export function SettingsTabs({ tabs }: SettingsTabsProps) {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full mb-6">
      <TabsList className="w-full justify-start bg-muted">
        {tabs.map((tab) => {
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              asChild
              className="data-[state=active]:bg-background relative px-6"
            >
              <Link href={tab.href}>{tab.label}</Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
