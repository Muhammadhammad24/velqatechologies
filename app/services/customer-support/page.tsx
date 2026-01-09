import { MessageSquare } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Support Services | Velqa Technologies LLC",
  description:
    "Professional 24/7 customer support with dedicated agents, escalation handling, and comprehensive account management.",
}

const features = [
  {
    title: "24/7 Phone Support",
    description:
      "Round-the-clock availability ensures your customers always reach a live agent, regardless of time zone or location.",
  },
  {
    title: "Dedicated Support Teams",
    description:
      "Exclusive teams trained specifically on your products, services, and brand voice for consistent customer experiences.",
  },
  {
    title: "Escalation Management",
    description:
      "Structured escalation workflows ensure complex issues reach the right specialists quickly and are resolved efficiently.",
  },
  {
    title: "Account Management",
    description:
      "Dedicated account managers provide strategic oversight, regular reporting, and continuous optimization recommendations.",
  },
  {
    title: "Customer Retention",
    description:
      "Proactive retention programs identify at-risk customers and implement save strategies to maintain loyalty.",
  },
  {
    title: "Feedback Collection",
    description:
      "Systematic customer feedback gathering and analysis to drive service improvements and product development insights.",
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
    question: "How do you train agents on our products?",
    answer:
      "We develop comprehensive training programs in collaboration with your team, including product deep-dives, brand guidelines, scenario-based training, and ongoing knowledge base updates.",
  },
  {
    question: "Can you handle technical product support?",
    answer:
      "Yes, we provide tiered technical support from basic troubleshooting to advanced technical issues. Our agents receive specialized training for technical products and software.",
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
  { title: "Call Center & BPO", href: "/services/call-center" },
  { title: "Email Support", href: "/services/email-support" },
  { title: "Live Chat Support", href: "/services/live-chat" },
]

export default function CustomerSupportPage() {
  return (
    <ServicePageTemplate
      icon={MessageSquare}
      title="Customer Support"
      subtitle="Support Excellence"
      description="Professional customer support services that build lasting relationships and drive satisfaction. Our dedicated teams become true ambassadors of your brand, delivering exceptional experiences with every interaction."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
