"use client";

import * as React from "react";
import {
  Bell,
  CircuitBoard,
  Settings,
  SquareTerminal,
  Youtube,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { useUser } from "@clerk/nextjs";

const data = {
  user: {
    name: "raghav rudhra",
    email: "raghavrudhra28@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Alerts",
      url: "#",
      icon: Bell,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Default",
          url: "/alerts",
        },
        {
          title: "Custom",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Security",
          url: "/settings/security",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
        {
          title: "Api",
          url: "/settings/api",
        },
        {
          title: "Help",
          url: "/settings/help",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: CircuitBoard,
    },
    {
      name: "Commands/Triggers",
      url: "/commands",
      icon: SquareTerminal,
    },
    {
      name: "Streams",
      url: "/streams",
      icon: Youtube,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarHeader>
          <NavUser />
        </SidebarHeader>
        <NavMain items={data.navMain} projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
