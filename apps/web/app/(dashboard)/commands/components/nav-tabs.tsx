"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2 border-b pb-2">
      <Link href="/commands/custom">
        <Button
          variant="ghost"
          className={cn(
            "text-base font-medium",
            pathname === "/commands/custom" && "bg-muted",
          )}
        >
          Custom
        </Button>
      </Link>
      <Link href="/commands/default">
        <Button
          variant="ghost"
          className={cn(
            "text-base font-medium",
            pathname === "/commands/default" && "bg-muted",
          )}
        >
          Default
        </Button>
      </Link>
    </div>
  );
}
