"use client"

import { useState } from "react"
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const jobs = [
  {
    id: 1,
    title: "Customer Support Agent",
    department: "Customer Service",
    location: "Pakistan (Remote Available)",
    type: "Full-time",
    shift: "Multiple Shifts",
    description:
      "Join our front-line team handling customer inquiries via phone, email, and chat. Provide excellent service while representing leading brands.",
    requirements: [
      "Excellent English communication skills (written and verbal)",
      "Strong problem-solving abilities",
      "Customer-focused mindset",
      "Basic computer proficiency",
      "Ability to work in shifts",
    ],
    responsibilities: [
      "Handle inbound customer inquiries professionally",
      "Resolve issues and complaints effectively",
      "Document interactions accurately in CRM",
      "Meet quality and productivity targets",
      "Escalate complex issues appropriately",
    ],
  },
  {
    id: 2,
    title: "Email & Chat Support Executive",
    department: "Customer Service",
    location: "Pakistan (Remote Available)",
    type: "Full-time",
    shift: "Day/Night Shifts",
    description:
      "Specialize in written customer communication through email and live chat platforms. Perfect for those with strong writing skills.",
    requirements: [
      "Exceptional written English skills",
      "Fast and accurate typing (50+ WPM)",
      "Attention to detail",
      "Multi-tasking ability for concurrent chats",
      "Previous customer service experience preferred",
    ],
    responsibilities: [
      "Respond to customer emails within SLA",
      "Handle multiple live chat conversations",
      "Maintain brand voice and tone",
      "Process orders and refunds as needed",
      "Update knowledge base articles",
    ],
  },
  {
    id: 3,
    title: "Team Lead - Customer Support",
    department: "Operations",
    location: "Pakistan",
    type: "Full-time",
    shift: "Rotational",
    description:
      "Lead a team of customer support agents, drive performance, and ensure quality service delivery. Ideal for experienced professionals seeking leadership roles.",
    requirements: [
      "2+ years customer service experience",
      "1+ year in a supervisory role preferred",
      "Strong leadership and coaching abilities",
      "Excellent communication skills",
      "Analytical mindset with attention to metrics",
    ],
    responsibilities: [
      "Supervise team of 10-15 agents",
      "Monitor performance and provide coaching",
      "Handle escalations and complex issues",
      "Conduct team meetings and training",
      "Report on team metrics and KPIs",
    ],
  },
  {
    id: 4,
    title: "Quality Assurance Analyst",
    department: "Quality",
    location: "Pakistan",
    type: "Full-time",
    shift: "Day Shift",
    description:
      "Evaluate and improve customer interactions across all channels. Play a key role in maintaining service excellence and agent development.",
    requirements: [
      "2+ years in BPO/customer service",
      "Experience in quality monitoring",
      "Strong analytical skills",
      "Knowledge of QA methodologies",
      "Excellent attention to detail",
    ],
    responsibilities: [
      "Evaluate calls, emails, and chats",
      "Score interactions against quality criteria",
      "Identify training opportunities",
      "Provide constructive feedback to agents",
      "Generate quality reports and trends",
    ],
  },
  {
    id: 5,
    title: "Workforce Trainer",
    department: "Training",
    location: "Pakistan",
    type: "Full-time",
    shift: "Day Shift",
    description:
      "Design and deliver training programs for new hires and existing team members. Shape the skills and knowledge of our customer service professionals.",
    requirements: [
      "3+ years BPO experience",
      "Previous training/facilitation experience",
      "Strong presentation skills",
      "Ability to create training materials",
      "Patient and supportive approach",
    ],
    responsibilities: [
      "Conduct new hire training programs",
      "Develop training modules and materials",
      "Assess trainee progress and readiness",
      "Provide refresher training as needed",
      "Stay updated on client processes",
    ],
  },
]

export function JobListings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <section className="py-20" id="openings">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Open Positions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">Current Opportunities</h2>
          <p className="text-muted-foreground text-lg">
            Explore our open positions and find the role that matches your skills and career goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-xl border border-border bg-background overflow-hidden">
              <button
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  {expandedJob === job.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedJob === job.id ? "max-h-[1000px]" : "max-h-0",
                )}
              >
                <div className="p-6 pt-0 border-t border-border">
                  <p className="text-muted-foreground mb-6">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      onClick={() => {
                        const form = document.getElementById("application-form")
                        form?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Apply for This Position
                    </Button>
                    <span className="text-sm text-muted-foreground">Shift: {job.shift}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
