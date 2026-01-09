import { Laptop } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech & SaaS Support | Velqa Technologies LLC",
  description:
    "Technical support and customer success solutions for technology and SaaS companies including onboarding, troubleshooting, and retention.",
}

const challenges = [
  "Providing technical support across varying skill levels",
  "Managing user onboarding for complex products",
  "Handling subscription and billing inquiries",
  "Reducing churn with proactive customer success",
  "Supporting integrations and API-related issues",
  "Managing feature requests and bug reports effectively",
]

const solutions = [
  {
    title: "Technical Support Tiers",
    description: "L1-L3 support structure handling everything from basic questions to complex technical issues.",
  },
  {
    title: "Customer Onboarding",
    description:
      "Guided onboarding assistance to help new users achieve value quickly and reduce time-to-first-success.",
  },
  {
    title: "Subscription Management",
    description:
      "Handle upgrades, downgrades, billing issues, and renewal conversations to maximize customer lifetime value.",
  },
  {
    title: "Bug Triage",
    description: "Structured bug reporting and triage to ensure issues are documented and escalated appropriately.",
  },
  {
    title: "Proactive Outreach",
    description:
      "Customer health monitoring and proactive engagement to prevent churn and identify upsell opportunities.",
  },
  {
    title: "Documentation Support",
    description: "Help maintain and improve knowledge bases and documentation based on support interactions.",
  },
]

const benefits = [
  "Reduce first response time for technical issues by 70%",
  "Improve user onboarding completion rates significantly",
  "Lower churn with proactive customer success outreach",
  "Handle complex technical queries with trained specialists",
  "Scale support with your product growth seamlessly",
  "Integrate with your existing tools (Intercom, Zendesk, etc.)",
]

const caseStudy = {
  title: "B2B SaaS Platform Success",
  challenge:
    "A growing B2B SaaS company needed to scale technical support without compromising quality, while also improving their onboarding completion rates.",
  solution:
    "We deployed a dedicated team of technically-trained agents, implemented a tiered support structure, and created guided onboarding assistance programs.",
  results: [
    "85% faster ticket resolution",
    "45% higher onboarding completion",
    "30% reduction in churn",
    "NPS improved by 25 points",
  ],
}

export default function TechSaaSPage() {
  return (
    <IndustryPageTemplate
      icon={Laptop}
      name="Tech & SaaS"
      subtitle="Industry Solutions"
      description="Technical support and customer success solutions built for technology companies. From complex troubleshooting to proactive retention, we help your users succeed with your product."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
