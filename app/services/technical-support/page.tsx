import { Settings } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical & Help Desk Support | Velqa Technologies LLC",
  description:
    "Process-led service delivery with integrated CX tools for real-time issue resolution and analytics.",
}

const features = [
  {
    title: "Tiered Support Structure",
    description:
      "Multi-tier technical support from basic troubleshooting to advanced technical issues, ensuring efficient resolution at the appropriate level.",
  },
  {
    title: "Integrated Tool Stack",
    description:
      "Integrated CX tools including ticketing systems, remote support platforms, and internal dashboards for real-time issue resolution and analytics.",
  },
  {
    title: "Remote Assistance",
    description:
      "Remote desktop support and screen-sharing capabilities enable agents to diagnose and resolve technical issues efficiently.",
  },
  {
    title: "Knowledge Base Management",
    description:
      "Comprehensive knowledge base creation and maintenance to enable self-service and consistent agent responses.",
  },
  {
    title: "Real-time Analytics",
    description:
      "Real-time dashboards provide visibility into ticket volumes, resolution times, and performance metrics for continuous optimization.",
  },
  {
    title: "Escalation Protocols",
    description:
      "Defined escalation paths ensure complex technical issues reach specialized engineers with full context and documentation.",
  },
]

const benefits = [
  "Reduce mean time to resolution (MTTR) significantly",
  "Improve first contact resolution rates",
  "Access to trained technical professionals",
  "24/7 technical support coverage",
  "Detailed analytics and performance reporting",
  "Seamless integration with existing tools",
]

const slaCommitments = [
  "Tier 1 response within 15 minutes",
  "Tier 2 escalation within 2 hours",
  "First contact resolution above 70%",
  "Customer satisfaction target of 90%+",
  "Real-time ticket tracking and reporting",
  "Monthly performance reviews",
]

const faqs = [
  {
    question: "What ticketing systems do you integrate with?",
    answer:
      "We integrate with Zendesk, Freshdesk, ServiceNow, Jira Service Management, and most major ticketing platforms. Our technical team ensures seamless data flow and system connectivity.",
  },
  {
    question: "What level of technical support do you provide?",
    answer:
      "We provide Tier 1-3 technical support covering basic troubleshooting, software configuration, hardware diagnostics, and complex technical issues requiring specialized expertise.",
  },
  {
    question: "How do you handle after-hours support?",
    answer:
      "We offer 24/7 technical support with dedicated night shift teams, on-call escalation protocols, and seamless handoffs between shifts to ensure continuous coverage.",
  },
  {
    question: "Can you support multiple products or platforms?",
    answer:
      "Yes, our agents receive comprehensive training on your specific products, software, and platforms. We can support multiple product lines with specialized teams.",
  },
  {
    question: "How do you measure technical support quality?",
    answer:
      "We track resolution times, first contact resolution rates, customer satisfaction scores, ticket reopening rates, and conduct regular quality audits on technical interactions.",
  },
]

const relatedServices = [
  { title: "Inbound Customer Support", href: "/services/inbound-support" },
  { title: "Multi-Channel CX Operations", href: "/services/multi-channel" },
  { title: "CX Quality & Monitoring", href: "/services/cx-quality" },
]

export default function TechnicalSupportPage() {
  return (
    <ServicePageTemplate
      icon={Settings}
      title="Technical & Help Desk Support"
      subtitle="Process-Led Service Delivery"
      description="Process-led service delivery with integrated CX tools including ticketing systems, remote support platforms, and real-time dashboards for efficient issue resolution and comprehensive analytics."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
