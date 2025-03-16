"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Briefcase, Building, GraduationCapIcon as Graduation, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SettingsTabs } from "./settings-tabs"

const profileTabs = [
  { value: "personal", label: "Personal Info", href: "/settings/profile" },
  { value: "professional", label: "Professional", href: "/settings/profile/professional" },
  { value: "social", label: "Social Profiles", href: "/settings/profile/social" },
]

const professionalFormSchema = z.object({
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  department: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
})

type ProfessionalFormValues = z.infer<typeof professionalFormSchema>

// This simulates user data that would come from your database
const defaultValues: Partial<ProfessionalFormValues> = {
  company: "Acme Inc",
  jobTitle: "Senior Developer",
  department: "Engineering",
  experience: "8 years",
  education: "B.S. Computer Science",
}

export function ProfileProfessionalSettings() {
  const [isPending, setIsPending] = useState(false)

  const form = useForm<ProfessionalFormValues>({
    resolver: zodResolver(professionalFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfessionalFormValues) {
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
          <CardTitle>Professional Information</CardTitle>
          <CardDescription>Update your career and work-related information.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Your company" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Your job title" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Department or team" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Experience</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Years of experience" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Graduation className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-10" placeholder="Your highest education" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end"></CardFooter>
      </Card>
    </div>
  )
}

