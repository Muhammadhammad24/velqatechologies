import { ShoppingCart } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-commerce & Retail Support | Velqa Technologies LLC",
  description:
    "Specialized BPO solutions for e-commerce and retail businesses including order management, returns processing, and customer support.",
}

const challenges = [
  "Managing high volumes during sales events and peak seasons",
  "Processing returns and refunds efficiently while maintaining satisfaction",
  "Providing consistent support across multiple sales channels",
  "Handling shipping inquiries and delivery issues promptly",
  "Managing product questions and pre-sales support",
  "Maintaining customer loyalty in competitive markets",
]

const solutions = [
  {
    title: "Order Management",
    description: "Complete order lifecycle support from placement to delivery, including modifications and tracking.",
  },
  {
    title: "Returns & Refunds",
    description:
      "Efficient returns processing with RMA management, following your policies while keeping customers happy.",
  },
  {
    title: "Pre-Sales Support",
    description: "Product inquiries, sizing help, and purchase assistance to convert browsers into buyers.",
  },
  {
    title: "Peak Season Scaling",
    description: "Rapid team scaling for Black Friday, holidays, and promotional events with trained seasonal support.",
  },
  {
    title: "Multi-Channel Support",
    description: "Unified customer experience across your website, marketplaces, and social commerce channels.",
  },
  {
    title: "Review Management",
    description: "Monitor and respond to customer reviews, turning feedback into improvement opportunities.",
  },
]

const benefits = [
  "Scale support 3x during peak seasons without quality drops",
  "Reduce cart abandonment with real-time chat assistance",
  "Process returns 50% faster with streamlined workflows",
  "Maintain 95%+ CSAT scores during high-volume periods",
  "24/7 coverage for global customer bases",
  "Seamless integration with major e-commerce platforms",
]

const caseStudy = {
  title: "Global Fashion Retailer Case Study",
  challenge:
    "A fast-growing fashion e-commerce brand struggled to handle 5x volume increases during sales events, leading to long wait times and customer complaints.",
  solution:
    "We implemented a scalable support model with dedicated seasonal agents, proactive chat support, and streamlined returns processing integrated with their Shopify store.",
  results: [
    "60% reduction in response time",
    "40% fewer cart abandonments",
    "98% CSAT during Black Friday",
    "3x volume handled",
  ],
}

export default function EcommercePage() {
  return (
    <IndustryPageTemplate
      icon={ShoppingCart}
      name="E-commerce & Retail"
      subtitle="Industry Solutions"
      description="Specialized support for online retailers that drives sales, handles peak volumes, and creates loyal customers. From order management to returns processing, we're your e-commerce success partner."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
