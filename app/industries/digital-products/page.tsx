import { Layers } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Products Support | Velqa Technologies LLC",
  description:
    "Support solutions for digital product companies including software, courses, subscriptions, and downloadable content.",
}

const challenges = [
  "Providing instant access and delivery support",
  "Handling licensing and activation issues",
  "Managing subscription and billing inquiries",
  "Supporting diverse technical environments",
  "Navigating refund policies for digital goods",
  "Preventing and addressing piracy concerns",
]

const solutions = [
  {
    title: "Access & Delivery Support",
    description:
      "Help customers access their digital purchases, including download links, login issues, and delivery problems.",
  },
  {
    title: "License Management",
    description: "Handle license key issues, activation problems, and device limit inquiries for software products.",
  },
  {
    title: "Subscription Support",
    description:
      "Manage subscription inquiries, upgrades, cancellations, and billing questions for recurring products.",
  },
  {
    title: "Technical Setup Help",
    description: "Guide customers through installation, configuration, and getting started with digital products.",
  },
  {
    title: "Course & Content Support",
    description:
      "Support for online courses, ebooks, and digital content including access, progress, and completion issues.",
  },
  {
    title: "Refund Processing",
    description:
      "Handle refund requests following your digital product policies while maintaining customer relationships.",
  },
]

const benefits = [
  "24/7 support for instant digital delivery expectations",
  "Technical agents who understand digital product ecosystems",
  "Experience with major platforms (Gumroad, Teachable, etc.)",
  "Flexible policies for digital product nuances",
  "Proactive engagement to reduce access issues",
  "Integration with your delivery and licensing systems",
]

const caseStudy = {
  title: "Online Education Platform",
  challenge:
    "A course creator with 50,000+ students struggled to handle access issues and student inquiries, impacting completion rates and reviews.",
  solution:
    "We provided dedicated support for student onboarding, technical issues, and course progress support integrated with their Teachable platform.",
  results: [
    "Response time under 2 hours",
    "Course completion up 35%",
    "Refund requests down 40%",
    "5-star reviews increased 50%",
  ],
}

export default function DigitalProductsPage() {
  return (
    <IndustryPageTemplate
      icon={Layers}
      name="Digital Products"
      subtitle="Industry Solutions"
      description="Support solutions designed for digital product businesses. From software licensing to online courses, we help your customers get the most from their digital purchases."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
