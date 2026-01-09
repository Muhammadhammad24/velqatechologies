import { MessagesSquare } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Live Chat Support Services | Velqa Technologies LLC",
  description:
    "Real-time customer engagement with professional live chat support, chatbot integration, and multilingual capabilities.",
}

const features = [
  {
    title: "Real-time Chat Support",
    description:
      "Instant customer engagement with skilled agents who provide immediate assistance and resolve issues in real-time.",
  },
  {
    title: "Chatbot Integration",
    description:
      "Seamless handoff between AI chatbots and human agents for optimal efficiency and customer experience.",
  },
  {
    title: "Proactive Engagement",
    description:
      "Strategic chat triggers initiate conversations with visitors based on behavior, increasing conversions and reducing abandonment.",
  },
  {
    title: "Multilingual Support",
    description:
      "Chat agents fluent in multiple languages ensure effective communication with your global customer base.",
  },
  {
    title: "Co-browsing Capability",
    description:
      "Visual assistance through co-browsing helps agents guide customers through complex processes or troubleshooting.",
  },
  {
    title: "Chat Analytics",
    description:
      "Comprehensive analytics on chat volume, wait times, satisfaction scores, and agent performance for continuous improvement.",
  },
]

const benefits = [
  "Increase website conversion rates by up to 40%",
  "Reduce cart abandonment with timely intervention",
  "Handle multiple chats simultaneously for efficiency",
  "Lower support costs compared to phone support",
  "Capture leads and customer data during interactions",
  "Provide instant answers to common questions",
]

const slaCommitments = [
  "Chat response time under 30 seconds",
  "Chat satisfaction score target of 90%+",
  "First contact resolution above 70%",
  "Agent concurrent chat handling optimized",
  "24/7 availability option",
  "Real-time monitoring dashboard",
]

const faqs = [
  {
    question: "What chat platforms do you support?",
    answer:
      "We work with Intercom, Zendesk Chat, LiveChat, Drift, Olark, and most major chat platforms. We can also integrate with custom solutions.",
  },
  {
    question: "How many chats can an agent handle at once?",
    answer:
      "Our agents typically handle 2-4 concurrent chats depending on complexity. This is optimized based on your specific use case and quality requirements.",
  },
  {
    question: "Can you integrate with our chatbot?",
    answer:
      "Yes, we excel at hybrid support models where our agents seamlessly take over from chatbots when human assistance is needed, maintaining full conversation context.",
  },
  {
    question: "Do you offer proactive chat services?",
    answer:
      "Yes, we can implement proactive chat strategies with customized triggers based on visitor behavior, page views, time on site, and other parameters.",
  },
  {
    question: "How do you ensure chat quality?",
    answer:
      "We monitor chat transcripts, measure customer satisfaction after each interaction, and provide regular agent coaching based on performance metrics and quality scores.",
  },
]

const relatedServices = [
  { title: "Customer Support", href: "/services/customer-support" },
  { title: "Email Support", href: "/services/email-support" },
  { title: "Call Center & BPO", href: "/services/call-center" },
]

export default function LiveChatPage() {
  return (
    <ServicePageTemplate
      icon={MessagesSquare}
      title="Live Chat Support"
      subtitle="Real-time Engagement"
      description="Instant, professional live chat support that engages visitors, converts browsers to buyers, and resolves issues in real-time. Our agents deliver fast, friendly assistance that keeps customers coming back."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
