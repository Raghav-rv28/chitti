import { Clock, Command, MessageSquare } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopCommands } from "@/components/custom/top-commands";
import { UsersList } from "@/components/custom/users-list";
import { Component } from "@/components/custom/chart";
import { DialogDemo } from "@/components/custom/test";

export default function DashboardPage() {
  const user = await;
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Good Afternoon, raghav rudhra
          </h2>
          <div className="flex items-center space-x-2">
            <Button>
              <a href="http://localhost:3000/start-stream">Start Stream</a>
            </Button>
            <DialogDemo />
          </div>
        </div>
        <div className="text-muted-foreground">
          Here&apos;s a quick 7-day overview of your channel.
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commands</CardTitle>
              <Command className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Timeouts</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <Component />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>TOP COMMANDS</CardTitle>
              </CardHeader>
              <CardContent>
                <TopCommands />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>USERS</CardTitle>
              </CardHeader>
              <CardContent>
                <UsersList />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="border-t py-4 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div>Copyright © 2025 NightDev, LLC. All Rights Reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              API Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
