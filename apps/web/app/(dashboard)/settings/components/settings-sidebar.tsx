"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Key, CreditCard, Bell, LinkIcon, Shield, HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const settingsLinks = [
  {
    title: "Account",
    links: [
      { href: "/settings/profile", label: "Profile", icon: User },
      { href: "/settings/security", label: "Security", icon: Key },
      { href: "/settings/billing", label: "Billing", icon: CreditCard },
      { href: "/settings/notifications", label: "Notifications", icon: Bell },
    ],
  },
  {
    title: "Connections",
    links: [
      { href: "/settings/integrations", label: "Integrations", icon: LinkIcon },
      { href: "/settings/api", label: "API", icon: Shield },
    ],
  },
  {
    title: "Support",
    links: [{ href: "/settings/help", label: "Help & Support", icon: HelpCircle }],
  },
]

export function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      {settingsLinks.map((section) => (
        <div key={section.title} className="space-y-3">
          <div className="text-sm font-medium text-muted-foreground px-2">{section.title}</div>
          <ul className="space-y-1">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

