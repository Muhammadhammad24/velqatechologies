import { MessageSquare } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inbound Customer Support | Velqa Technologies LLC",
  description:
    "CX-driven inbound operations with compliance-first approach and industry-trained agents for exceptional customer experiences.",
}

const features = [
  {
    title: "24/7 Availability",
    description:
      "Round-the-clock CX-driven inbound operations ensure your customers always reach trained professionals, regardless of time zone or location.",
  },
  {
    title: "Compliance-First Operations",
    description:
      "Compliance-ready inbound support operations with controlled access environments, documented SOPs, and data-handling protocols.",
  },
  {
    title: "Vertical Expertise",
    description:
      "Industry-trained agents who understand customer expectations, workflows, and regulatory requirements specific to your sector.",
  },
  {
    title: "Escalation Management",
    description:
      "Structured escalation workflows ensure complex issues reach the right specialists quickly with full context and documentation.",
  },
  {
    title: "Quality-Monitored Interactions",
    description:
      "Every customer interaction is quality-monitored through call audits, scorecards, and continuous performance reviews.",
  },
  {
    title: "Account Management",
    description:
      "Dedicated account managers provide strategic oversight, regular reporting, and continuous optimization recommendations.",
  },
]

const benefits = [
  "Improve customer satisfaction scores by 25% or more",
  "Reduce customer churn with proactive support strategies",
  "Build brand loyalty through consistent, quality interactions",
  "Access detailed customer insights and trend analysis",
  "Flexible staffing models to match your business needs",
  "Seamless brand integration with custom scripting",
]

const slaCommitments = [
  "Average hold time under 60 seconds",
  "First contact resolution rate above 75%",
  "Customer satisfaction target of 92%+",
  "Escalation response within 4 hours",
  "Monthly business reviews and reporting",
  "Dedicated quality assurance manager",
]

const faqs = [
  {
    question: "How do you ensure compliance in customer interactions?",
    answer:
      "We implement controlled access environments, documented SOPs, regular compliance training, and data-handling protocols aligned with industry regulations including GDPR, CCPA, and sector-specific requirements.",
  },
  {
    question: "What industries do your agents specialize in?",
    answer:
      "Our agents receive vertical-specific training for e-commerce, healthcare, financial services, technology, and telecommunications sectors, understanding unique workflows and regulatory requirements.",
  },
  {
    question: "How do you measure customer satisfaction?",
    answer:
      "We implement post-interaction surveys (CSAT), Net Promoter Score (NPS) tracking, quality call scoring, and regular customer feedback analysis to measure and improve satisfaction.",
  },
  {
    question: "What CRM systems do you work with?",
    answer:
      "We have experience with Salesforce, Zendesk, HubSpot, Freshdesk, ServiceNow, and most major CRM platforms. Our team can adapt to your existing tools or recommend solutions.",
  },
  {
    question: "Do you offer multilingual support?",
    answer:
      "Yes, we offer support in multiple languages including English, Spanish, and French. Additional languages can be accommodated based on volume requirements.",
  },
]

const relatedServices = [
  { title: "Technical & Help Desk Support", href: "/services/technical-support" },
  { title: "Multi-Channel CX Operations", href: "/services/multi-channel" },
  { title: "CX Quality & Monitoring", href: "/services/cx-quality" },
]

export default function InboundSupportPage() {
  return (
    <ServicePageTemplate
      icon={MessageSquare}
      title="Inbound Customer Support"
      subtitle="CX-Driven Operations"
      description="CX-driven inbound operations with compliance-first approach and industry-trained agents. Our dedicated teams deliver quality-monitored customer interactions that build lasting relationships and drive satisfaction."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
