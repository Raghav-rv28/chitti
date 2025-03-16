"use client";

import {
  BadgeCheck,
  ChevronsUpDown,
  LogIn,
  LogOut,
  Moon,
  Settings,
  Sparkles,
  SquareArrowUpIcon,
  Sun,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { setTheme } = useTheme();
  const clerk = useUser();
  const clerkLogOut = useClerk();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage />
                <AvatarFallback className="rounded-lg">RR</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {clerk.user?.fullName}
                </span>
                <span className="truncate text-xs">
                  {clerk.user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
              <ChevronsUpDown
                suppressHydrationWarning
                className="ml-auto size-4"
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {clerk.user?.fullName}
                  </span>
                  <span className="truncate text-xs">
                    {clerk.user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => clerkLogOut.redirectToUserProfile()}
              >
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <Link href={"/settings"}>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light Mode <Sun />
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark Mode <Moon />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <SignedIn>
              <DropdownMenuItem
                onClick={() => clerkLogOut.signOut({ redirectUrl: "/" })}
              >
                <LogOut />
                Sign Out
              </DropdownMenuItem>
            </SignedIn>
            <SignedOut>
              <DropdownMenuItem
                onClick={() =>
                  clerkLogOut.openSignIn({
                    forceRedirectUrl: "http://localhost:5673/",
                  })
                }
              >
                <LogIn /> Sign In
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  clerkLogOut.openSignUp({
                    forceRedirectUrl: "http://localhost:5673/",
                  })
                }
              >
                <SquareArrowUpIcon /> Sign Up
              </DropdownMenuItem>
            </SignedOut>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
