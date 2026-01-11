import { MessagesSquare } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Multi-Channel CX Operations | Velqa Technologies LLC",
  description:
    "Unified CX platforms enable seamless customer interactions across voice, email, chat, and messaging channels with real-time reporting.",
}

const features = [
  {
    title: "Omnichannel Support",
    description:
      "Seamless customer interactions across voice, email, chat, and messaging channels with unified conversation history and context.",
  },
  {
    title: "Unified CX Platform",
    description:
      "Unified CX platforms enable consistent service delivery across all channels, ensuring customers receive the same quality experience regardless of contact method.",
  },
  {
    title: "Real-time Reporting",
    description:
      "Real-time reporting and performance tracking provide visibility into channel performance, agent productivity, and customer satisfaction metrics.",
  },
  {
    title: "Channel Analytics",
    description:
      "Comprehensive analytics on channel usage, customer preferences, response times, and satisfaction scores for data-driven optimization.",
  },
  {
    title: "Proactive Engagement",
    description:
      "Strategic engagement triggers initiate conversations based on customer behavior, increasing conversions and reducing abandonment.",
  },
  {
    title: "Chatbot Integration",
    description:
      "Seamless handoff between AI chatbots and human agents for optimal efficiency while maintaining quality customer experience.",
  },
]

const benefits = [
  "Increase customer satisfaction with channel flexibility",
  "Reduce response times across all channels",
  "Handle multiple interactions simultaneously",
  "Lower support costs with efficient routing",
  "Capture comprehensive customer interaction data",
  "Provide consistent brand experience across channels",
]

const slaCommitments = [
  "Voice response time under 30 seconds",
  "Email response within 4 hours",
  "Chat response within 30 seconds",
  "Customer satisfaction target of 90%+",
  "24/7 multi-channel availability",
  "Real-time performance dashboards",
]

const faqs = [
  {
    question: "What channels do you support?",
    answer:
      "We support voice (phone), email, live chat, SMS, social media messaging (Facebook, Twitter, Instagram), WhatsApp, and other messaging platforms based on your requirements.",
  },
  {
    question: "How do you maintain consistency across channels?",
    answer:
      "Our unified CX platform provides agents with complete customer history across all channels, standardized response templates, and comprehensive training to ensure consistent service quality.",
  },
  {
    question: "Can customers switch between channels seamlessly?",
    answer:
      "Yes, our omnichannel approach maintains conversation context when customers switch channels, eliminating the need to repeat information and improving experience.",
  },
  {
    question: "What CX platforms do you use?",
    answer:
      "We work with Zendesk, Salesforce Service Cloud, Freshdesk, Intercom, and other leading unified CX platforms that enable seamless multi-channel operations.",
  },
  {
    question: "How do you measure multi-channel performance?",
    answer:
      "We track channel-specific metrics (response times, resolution rates, satisfaction scores) and overall CX performance through unified dashboards and regular reporting.",
  },
]

const relatedServices = [
  { title: "Inbound Customer Support", href: "/services/inbound-support" },
  { title: "Technical & Help Desk Support", href: "/services/technical-support" },
  { title: "CX Quality & Monitoring", href: "/services/cx-quality" },
]

export default function MultiChannelPage() {
  return (
    <ServicePageTemplate
      icon={MessagesSquare}
      title="Multi-Channel CX Operations"
      subtitle="Unified Customer Experience"
      description="Unified CX platforms enable seamless customer interactions across voice, email, chat, and messaging channels, supported by real-time reporting and performance tracking for optimal customer experience."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
