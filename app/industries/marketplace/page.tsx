import { Store } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketplace Seller Support | Velqa Technologies LLC",
  description:
    "Specialized support for Amazon, eBay, and marketplace sellers including customer service, review management, and policy compliance.",
}

const challenges = [
  "Managing customer inquiries across multiple marketplaces",
  "Maintaining seller metrics and account health",
  "Responding to reviews and feedback promptly",
  "Navigating different marketplace policies and requirements",
  "Handling A-to-Z claims and buyer disputes",
  "Managing inventory and shipping inquiries at scale",
]

const solutions = [
  {
    title: "Multi-Marketplace Support",
    description: "Unified customer service across Amazon, eBay, Walmart, and other marketplace platforms.",
  },
  {
    title: "Seller Metrics Management",
    description:
      "Proactive monitoring and response strategies to maintain excellent seller ratings and account health.",
  },
  {
    title: "Review Management",
    description:
      "Monitor, respond to, and request reviews following marketplace guidelines to build seller reputation.",
  },
  {
    title: "Dispute Resolution",
    description: "Handle A-to-Z claims, chargebacks, and buyer disputes to protect your account standing.",
  },
  {
    title: "Returns & Refunds",
    description:
      "Process marketplace returns following platform policies while minimizing loss and maintaining satisfaction.",
  },
  {
    title: "Policy Compliance",
    description: "Stay up-to-date with marketplace policy changes and ensure all communications remain compliant.",
  },
]

const benefits = [
  "Expertise across Amazon, eBay, Walmart, and more",
  "Protect and improve your seller metrics",
  "24-hour response times to maintain account health",
  "Reduce negative feedback and A-to-Z claims",
  "Scale during peak marketplace selling seasons",
  "Native speakers for international marketplace expansion",
]

const caseStudy = {
  title: "High-Volume Amazon Seller",
  challenge:
    "A top Amazon seller processing 1000+ orders daily was struggling to maintain their account health metrics due to slow customer response times.",
  solution:
    "We implemented a dedicated Amazon specialist team providing same-day responses, proactive review management, and streamlined returns processing.",
  results: [
    "Response time under 8 hours",
    "A-to-Z claims down 65%",
    "Seller rating improved to 98%",
    "Review score increased 0.4 stars",
  ],
}

export default function MarketplacePage() {
  return (
    <IndustryPageTemplate
      icon={Store}
      name="Marketplace Sellers"
      subtitle="Industry Solutions"
      description="Specialized support for marketplace sellers that protects your account health and grows your reputation. We understand the unique demands of selling on Amazon, eBay, Walmart, and beyond."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
