import { AppSidebar } from "../../components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import type React from "react";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
// import { currentUser } from "@clerk/nextjs/server";
// import { getUserInfo } from "@/actions/queries";
// import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let userDB;
  // const user = await currentUser();
  // if (user && user.emailAddresses[0].emailAddress !== null) {
  //   userDB = await getUserInfo(user.emailAddresses[0].emailAddress);
  // }
  // if (userDB === null) {
  //   redirect("http://localhost:5673/auth");
  // }
  // console.log(userDB);
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                  <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                    {/* <Breadcrumb> */}
                    {/*   <BreadcrumbList> */}
                    {/*     <BreadcrumbItem className="hidden md:block"> */}
                    {/*       <BreadcrumbLink href="#"> */}
                    {/*         Building Your Application */}
                    {/*       </BreadcrumbLink> */}
                    {/*     </BreadcrumbItem> */}
                    {/*     <BreadcrumbSeparator className="hidden md:block" /> */}
                    {/*     <BreadcrumbItem> */}
                    {/*       <BreadcrumbPage>Data Fetching</BreadcrumbPage> */}
                    {/*     </BreadcrumbItem> */}
                    {/*   </BreadcrumbList> */}
                    {/* </Breadcrumb> */}
                  </div>
                </header>
                <main>{children}</main>
              </SidebarInset>
            </SidebarProvider>
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
