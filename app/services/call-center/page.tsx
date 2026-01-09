import { Phone } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Call Center & BPO Services | Velqa Technologies LLC",
  description:
    "Comprehensive inbound and outbound call center services with IVR systems, technical support, telemarketing, and sales campaigns.",
}

const features = [
  {
    title: "Inbound Call Handling",
    description:
      "Professional agents handle customer inquiries, support requests, and service calls with consistent quality and brand alignment.",
  },
  {
    title: "Outbound Campaigns",
    description:
      "Strategic outbound calling for sales, lead generation, surveys, appointment setting, and customer retention programs.",
  },
  {
    title: "IVR System Management",
    description:
      "Custom Interactive Voice Response systems designed to efficiently route calls and provide self-service options.",
  },
  {
    title: "Technical Support",
    description:
      "Skilled technical agents provide Tier 1-3 support for software, hardware, and IT-related customer issues.",
  },
  {
    title: "Telemarketing Services",
    description:
      "Compliant telemarketing campaigns that generate leads and drive sales while maintaining brand integrity.",
  },
  {
    title: "Quality Monitoring",
    description:
      "Real-time call monitoring, scoring, and coaching to ensure consistent service excellence across all interactions.",
  },
]

const benefits = [
  "Reduce operational costs by up to 60% compared to in-house operations",
  "Scale your team up or down based on seasonal demand",
  "Access to trained professionals without recruitment overhead",
  "24/7 coverage across all time zones",
  "Advanced technology infrastructure without capital investment",
  "Detailed analytics and performance reporting",
]

const slaCommitments = [
  "99.9% system uptime guarantee",
  "Average speed of answer under 20 seconds",
  "First call resolution rate above 80%",
  "Customer satisfaction score target of 90%+",
  "Quality assurance monitoring on 100% of calls",
  "Real-time reporting and dashboard access",
]

const faqs = [
  {
    question: "What types of call center services do you offer?",
    answer:
      "We offer comprehensive inbound and outbound services including customer support, technical helpdesk, sales, telemarketing, appointment setting, surveys, order taking, and after-hours support.",
  },
  {
    question: "How do you ensure call quality?",
    answer:
      "We implement multi-layer quality assurance including real-time monitoring, call recording and scoring, regular agent coaching, and continuous training programs based on performance metrics.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, we integrate with most CRM platforms, ticketing systems, and telephony solutions. Our technical team works with you to ensure seamless data flow and system connectivity.",
  },
  {
    question: "What languages do your agents support?",
    answer:
      "Our primary operations are in English, with support for Spanish, French, and other languages based on client requirements. We can recruit specialized language teams for specific campaigns.",
  },
  {
    question: "How quickly can you scale operations?",
    answer:
      "For existing clients, we can typically scale up by 20-30% within 2-4 weeks. For larger expansions or new campaigns, our standard ramp-up time is 4-8 weeks including training.",
  },
]

const relatedServices = [
  { title: "Customer Support", href: "/services/customer-support" },
  { title: "Live Chat Support", href: "/services/live-chat" },
  { title: "Back-Office Services", href: "/services/back-office" },
]

export default function CallCenterPage() {
  return (
    <ServicePageTemplate
      icon={Phone}
      title="Call Center & BPO Services"
      subtitle="Voice Solutions"
      description="Comprehensive inbound and outbound call center services designed to enhance customer engagement, drive sales, and provide exceptional support. Our skilled agents become an extension of your brand."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
