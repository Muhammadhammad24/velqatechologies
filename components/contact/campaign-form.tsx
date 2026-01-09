"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, CheckCircle } from "lucide-react"

const campaignTypes = [
  "Inbound Call Center",
  "Outbound Sales",
  "Customer Support",
  "Technical Support",
  "Back-Office Operations",
  "Multi-Channel Support",
]

const teamSizes = ["1-10 agents", "11-50 agents", "51-100 agents", "100+ agents"]

export function CampaignForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-secondary/10 border border-secondary/30 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Application Received</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your campaign application. Our enterprise team will review your requirements and contact you
          within 48 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Campaign
        </Button>
      </div>
    )
  }

  return (
    <div className="p-8 rounded-xl bg-secondary/10 border border-secondary/30">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
          <Briefcase className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Enterprise Campaign Application</h2>
      </div>
      <p className="text-muted-foreground mb-6">
        Looking for a dedicated BPO team? Submit your campaign requirements for a custom proposal.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="campContactName">Contact Name *</Label>
            <Input id="campContactName" placeholder="Jane Smith" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="campCompany">Company Name *</Label>
            <Input id="campCompany" placeholder="Enterprise Corp." required />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="campEmail">Business Email *</Label>
            <Input id="campEmail" type="email" placeholder="jane@enterprise.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="campPhone">Phone Number *</Label>
            <Input id="campPhone" type="tel" placeholder="+1 (555) 000-0000" required />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="campaignType">Campaign Type *</Label>
            <Select required>
              <SelectTrigger id="campaignType">
                <SelectValue placeholder="Select campaign type" />
              </SelectTrigger>
              <SelectContent>
                {campaignTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamSize">Team Size Required *</Label>
            <Select required>
              <SelectTrigger id="teamSize">
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                {teamSizes.map((size) => (
                  <SelectItem key={size} value={size.toLowerCase().replace(/\s+/g, "-")}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="campRequirements">Campaign Requirements *</Label>
          <Textarea
            id="campRequirements"
            placeholder="Describe your campaign goals, timeline, and specific requirements..."
            rows={5}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Campaign Application"}
        </Button>
      </form>
    </div>
  )
}
