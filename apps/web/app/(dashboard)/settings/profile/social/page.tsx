import { ProfileSocialSettings } from "../../components/profile-social-settings"

export default function ProfileSocialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your social profiles and online presence.</p>
      </div>
      <ProfileSocialSettings />
    </div>
  )
}

