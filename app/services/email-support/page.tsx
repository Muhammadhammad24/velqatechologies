import { Mail } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Support Services | Velqa Technologies LLC",
  description:
    "Professional email support with efficient ticket resolution, refund processing, and streamlined escalation workflows.",
}

const features = [
  {
    title: "Ticket Management",
    description:
      "Organized ticket queues with priority routing, categorization, and SLA-based response time management.",
  },
  {
    title: "Query Resolution",
    description:
      "Skilled agents handle inquiries ranging from product questions to complex technical issues with accuracy and efficiency.",
  },
  {
    title: "Refund Processing",
    description:
      "Streamlined refund and return request handling following your policies while maintaining customer satisfaction.",
  },
  {
    title: "Escalation Workflows",
    description:
      "Defined escalation paths ensure complex issues reach appropriate teams with full context and documentation.",
  },
  {
    title: "Response Templates",
    description: "Brand-aligned response templates with personalization ensure consistent, professional communication.",
  },
  {
    title: "Quality Assurance",
    description:
      "Regular quality audits on email responses ensure accuracy, tone consistency, and adherence to guidelines.",
  },
]

const benefits = [
  "Reduce email backlog and response times significantly",
  "Maintain consistent brand voice across all communications",
  "Handle high volumes efficiently during peak periods",
  "Detailed tracking and reporting on email metrics",
  "Flexible capacity to match seasonal demands",
  "Integration with your existing ticketing systems",
]

const slaCommitments = [
  "First response within 4 hours (standard)",
  "Priority emails responded to within 1 hour",
  "Resolution within 24 hours for standard queries",
  "Quality score target of 95%+ accuracy",
  "Zero backlog maintenance guarantee",
  "Real-time queue visibility and reporting",
]

const faqs = [
  {
    question: "What ticketing systems do you support?",
    answer:
      "We work with Zendesk, Freshdesk, Help Scout, Intercom, Salesforce Service Cloud, and most popular ticketing platforms. We can also work within your existing systems.",
  },
  {
    question: "How do you ensure email quality?",
    answer:
      "Our quality assurance team reviews emails daily, scoring for accuracy, tone, completeness, and policy adherence. Agents receive regular coaching based on QA findings.",
  },
  {
    question: "Can you handle high email volumes?",
    answer:
      "Yes, we have experience managing email volumes from hundreds to tens of thousands per day. Our staffing models scale based on your volume patterns.",
  },
  {
    question: "Do you provide 24/7 email coverage?",
    answer:
      "Yes, we offer round-the-clock email support to ensure your customers receive timely responses regardless of when they reach out.",
  },
  {
    question: "How do you handle sensitive customer data?",
    answer:
      "We follow strict data security protocols including encrypted communications, access controls, and compliance with relevant regulations like GDPR and CCPA.",
  },
]

const relatedServices = [
  { title: "Customer Support", href: "/services/customer-support" },
  { title: "Live Chat Support", href: "/services/live-chat" },
  { title: "Order Management", href: "/services/order-management" },
]

export default function EmailSupportPage() {
  return (
    <ServicePageTemplate
      icon={Mail}
      title="Email Support"
      subtitle="Written Communication"
      description="Professional email support services that ensure timely, accurate, and brand-consistent responses. Our team manages your email queue efficiently, turning customer inquiries into opportunities for satisfaction."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
