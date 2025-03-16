import { ProfileProfessionalSettings } from "../../components/profile-professional-settings"

export default function ProfileProfessionalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your professional information and work details.</p>
      </div>
      <ProfileProfessionalSettings />
    </div>
  )
}

