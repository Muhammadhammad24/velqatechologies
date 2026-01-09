"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

const positions = [
  "Customer Support Agent",
  "Email & Chat Support Executive",
  "Team Lead - Customer Support",
  "Quality Assurance Analyst",
  "Workforce Trainer",
  "Other",
]

const experienceLevels = ["No Experience (Fresher)", "Less than 1 year", "1-2 years", "2-5 years", "5+ years"]

export function ApplicationForm() {
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
      <section className="py-20 bg-primary text-primary-foreground" id="application-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-primary-foreground/80 mb-8">
              Thank you for your interest in joining Velqa Technologies. Our HR team will review your application and
              contact you within 5-7 business days if your profile matches our requirements.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground" id="application-form">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Apply Now</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Start Your Journey</h2>
            <p className="text-primary-foreground/80">
              Fill out the form below to apply for a position at Velqa Technologies.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-primary-foreground">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-primary-foreground">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@email.com"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position" className="text-primary-foreground">
                  Position Applying For *
                </Label>
                <Select required>
                  <SelectTrigger
                    id="position"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                  >
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position.toLowerCase().replace(/\s+/g, "-")}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-primary-foreground">
                  Experience Level *
                </Label>
                <Select required>
                  <SelectTrigger
                    id="experience"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                  >
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase().replace(/\s+/g, "-")}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-primary-foreground">
                Resume/CV *
              </Label>
              <div className="relative">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground file:bg-secondary file:text-secondary-foreground file:border-0 file:rounded file:px-4 file:py-1 file:mr-4 file:cursor-pointer"
                />
              </div>
              <p className="text-xs text-primary-foreground/60">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverLetter" className="text-primary-foreground">
                Cover Letter / Why do you want to join Velqa?
              </Label>
              <Textarea
                id="coverLetter"
                placeholder="Tell us about yourself, your relevant experience, and why you&apos;re interested in this role..."
                rows={5}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability" className="text-primary-foreground">
                Availability & Shift Preference
              </Label>
              <Textarea
                id="availability"
                placeholder="What shifts can you work? When is your earliest available start date?"
                rows={3}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-primary-foreground/60 text-center">
              By submitting this form, you agree to our privacy policy and consent to being contacted regarding job
              opportunities.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
