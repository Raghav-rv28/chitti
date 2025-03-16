"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Github, Twitter, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SettingsTabs } from "./settings-tabs"

const profileTabs = [
  { value: "personal", label: "Personal Info", href: "/settings/profile" },
  { value: "professional", label: "Professional", href: "/settings/profile/professional" },
  { value: "social", label: "Social Profiles", href: "/settings/profile/social" },
]

const socialFormSchema = z.object({
  twitter: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
})

type SocialFormValues = z.infer<typeof socialFormSchema>

// This simulates user data that would come from your database
const defaultValues: Partial<SocialFormValues> = {
  twitter: "https://twitter.com/shadcn",
  github: "https://github.com/shadcn",
  instagram: "https://instagram.com/shadcn",
  facebook: "https://facebook.com/shadcn",
}

export function ProfileSocialSettings() {
  const [isPending, setIsPending] = useState(false)

  const form = useForm<SocialFormValues>({
    resolver: zodResolver(socialFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: SocialFormValues) {
    setIsPending(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsPending(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <SettingsTabs tabs={profileTabs} />

      <Card>
        <CardHeader>
          <CardTitle>Social Profiles</CardTitle>
          <CardDescription>Add links to your social profiles.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Your Twitter URL" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Your GitHub URL" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Your Instagram URL" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Your Facebook URL" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Saving..." : "Save changes"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

