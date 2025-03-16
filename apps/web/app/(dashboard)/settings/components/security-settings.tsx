"use client"

import { useState } from "react"
import { KeyRound, Shield, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { SettingsTabs } from "./settings-tabs"

const securityTabs = [
  { value: "general", label: "General", href: "/settings/security" },
  { value: "passwords", label: "Passwords", href: "/settings/security/passwords" },
  { value: "2fa", label: "Two-Factor Auth", href: "/settings/security/2fa" },
]

export function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [activityAlertsEnabled, setActivityAlertsEnabled] = useState(true)
  const [ipRestrictionEnabled, setIpRestrictionEnabled] = useState(false)

  return (
    <div className="space-y-6">
      <SettingsTabs tabs={securityTabs} />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Account Access</CardTitle>
            </div>
            <CardDescription>Control how you authenticate with your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex-1 space-y-1">
                <Label htmlFor="two-factor" className="font-medium">
                  Two-factor authentication
                </Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch id="two-factor" checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="flex-1 space-y-1">
                <Label htmlFor="activity-alerts" className="font-medium">
                  Login activity alerts
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive alerts when there is unusual activity on your account
                </p>
              </div>
              <Switch id="activity-alerts" checked={activityAlertsEnabled} onCheckedChange={setActivityAlertsEnabled} />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="flex-1 space-y-1">
                <Label htmlFor="ip-restriction" className="font-medium">
                  IP restrictions
                </Label>
                <p className="text-sm text-muted-foreground">Restrict account access to specific IP addresses</p>
              </div>
              <Switch id="ip-restriction" checked={ipRestrictionEnabled} onCheckedChange={setIpRestrictionEnabled} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Sessions</CardTitle>
            </div>
            <CardDescription>Manage your active sessions and devices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Current session</p>
                  <p className="text-sm text-muted-foreground">MacBook Pro • San Francisco, CA • Active now</p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Current
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">iPhone 13</p>
                  <p className="text-sm text-muted-foreground">New York, NY • Last active 2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Windows PC</p>
                  <p className="text-sm text-muted-foreground">Austin, TX • Last active 3 days ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle>Danger Zone</CardTitle>
            </div>
            <CardDescription>Irreversible and destructive actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

