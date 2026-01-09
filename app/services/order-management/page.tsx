import { Package } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Order Management & Returns | Velqa Technologies LLC",
  description: "End-to-end order tracking, returns processing, RMA management, and shipping coordination services.",
}

const features = [
  {
    title: "Order Tracking",
    description:
      "Comprehensive order status management from placement through delivery, keeping customers informed at every step.",
  },
  {
    title: "Returns Processing",
    description: "Efficient handling of return requests, authorization, and processing following your return policies.",
  },
  {
    title: "RMA Management",
    description:
      "Complete Return Merchandise Authorization workflow management including inspection, disposition, and replacement.",
  },
  {
    title: "Inventory Coordination",
    description:
      "Real-time coordination with your inventory systems to ensure accurate stock levels and availability information.",
  },
  {
    title: "Shipping Support",
    description:
      "Address changes, delivery issues, lost package claims, and carrier coordination for smooth fulfillment.",
  },
  {
    title: "Order Modifications",
    description:
      "Handle order changes, cancellations, and updates efficiently while maintaining customer satisfaction.",
  },
]

const benefits = [
  "Reduce order-related support tickets significantly",
  "Improve customer satisfaction with proactive updates",
  "Streamline returns and reduce processing time",
  "Decrease shipping-related complaints and issues",
  "Free up your team to focus on strategic operations",
  "Maintain accurate order data across systems",
]

const slaCommitments = [
  "Order status inquiries resolved within 5 minutes",
  "Return authorization processed within 24 hours",
  "Shipping issues escalated within 4 hours",
  "Order modification requests handled same-day",
  "99%+ order data accuracy",
  "Daily reconciliation reports",
]

const faqs = [
  {
    question: "What e-commerce platforms do you integrate with?",
    answer:
      "We integrate with Shopify, WooCommerce, Magento, BigCommerce, Amazon Seller Central, and most major e-commerce platforms and order management systems.",
  },
  {
    question: "How do you handle high-volume periods?",
    answer:
      "We plan for seasonal peaks with scalable staffing, extended hours, and optimized workflows. Our team is experienced in handling Black Friday, holiday, and promotional surges.",
  },
  {
    question: "Can you process refunds directly?",
    answer:
      "Based on your authorization levels and policies, our agents can process refunds directly within defined parameters, or escalate to your team for approval.",
  },
  {
    question: "Do you work with multiple carriers?",
    answer:
      "Yes, we have experience with UPS, FedEx, USPS, DHL, and regional carriers. Our team can track shipments, file claims, and coordinate resolutions across carriers.",
  },
  {
    question: "How do you prevent order fraud?",
    answer:
      "We implement verification procedures, flag suspicious orders based on defined criteria, and coordinate with your fraud prevention tools and team.",
  },
]

const relatedServices = [
  { title: "Customer Support", href: "/services/customer-support" },
  { title: "Email Support", href: "/services/email-support" },
  { title: "Back-Office Services", href: "/services/back-office" },
]

export default function OrderManagementPage() {
  return (
    <ServicePageTemplate
      icon={Package}
      title="Order Management & Returns"
      subtitle="Fulfillment Support"
      description="Comprehensive order management services that streamline your fulfillment operations. From order tracking to returns processing, we ensure smooth customer experiences throughout the purchase journey."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
