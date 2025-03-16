import { redirect } from "next/navigation"

export default function SettingsPage() {
  // Redirect to the profile settings by default
  redirect("/settings/profile")
}

