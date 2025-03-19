import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopCommands } from "@/app/(dashboard)/dashboard/components/top-commands";
import { UsersList } from "@/app/(dashboard)/dashboard/components/users-list";
import { Component } from "@/components/custom/chart";
import GoLive from "./components/go-live";
import { Suspense } from "react";
import Loading from "../loading";
import Summary from "@/app/(dashboard)/dashboard/components/summary";

export default async function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Suspense fallback={<Loading />}>
          <GoLive />
        </Suspense>
        <div className="text-muted-foreground">
          Here&apos;s a quick 7-day overview of your channel.
        </div>
        <Summary />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>TOP COMMANDS</CardTitle>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<Loading />}>
                  <TopCommands />
                </Suspense>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>USERS</CardTitle>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<Loading />}>
                  <UsersList />
                </Suspense>
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
