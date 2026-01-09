import { FileText } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Back-Office & Data Services | Velqa Technologies LLC",
  description: "Professional data entry, CRM management, document processing, and administrative support services.",
}

const features = [
  {
    title: "Data Entry Services",
    description:
      "Accurate, high-volume data entry for various formats including forms, documents, databases, and spreadsheets.",
  },
  {
    title: "CRM Management",
    description: "Maintain clean, updated customer records, manage data hygiene, and ensure CRM system accuracy.",
  },
  {
    title: "Document Processing",
    description: "Digitization, organization, indexing, and management of business documents and records.",
  },
  {
    title: "Administrative Support",
    description: "Virtual assistant services including scheduling, correspondence, research, and general admin tasks.",
  },
  {
    title: "Reporting & Analytics",
    description: "Regular business reports, data analysis, and dashboard creation to support decision-making.",
  },
  {
    title: "Database Management",
    description: "Database cleanup, deduplication, enrichment, and ongoing maintenance for data quality.",
  },
]

const benefits = [
  "Reduce administrative overhead and costs",
  "Improve data accuracy and consistency",
  "Free up your team for strategic work",
  "Scale back-office operations efficiently",
  "Access skilled professionals without hiring",
  "Maintain compliance with data handling standards",
]

const slaCommitments = [
  "Data entry accuracy rate of 99%+",
  "Same-day processing for standard requests",
  "Daily data quality audits",
  "Secure handling of sensitive information",
  "Flexible scheduling for batch processing",
  "Regular progress reporting",
]

const faqs = [
  {
    question: "What types of data entry do you handle?",
    answer:
      "We handle various data entry needs including invoice processing, form data, survey responses, product listings, customer information, and more. Both structured and unstructured data.",
  },
  {
    question: "How do you ensure data accuracy?",
    answer:
      "We implement double-entry verification for critical data, regular quality audits, automated validation checks, and continuous training for our data processing team.",
  },
  {
    question: "What CRM systems do you work with?",
    answer:
      "We have expertise in Salesforce, HubSpot, Zoho, Microsoft Dynamics, and most popular CRM platforms. Our team can adapt to your specific system and processes.",
  },
  {
    question: "How do you handle confidential data?",
    answer:
      "We follow strict data security protocols including access controls, encrypted transmissions, NDAs, and compliance with relevant regulations. All staff undergo background checks.",
  },
  {
    question: "Can you handle project-based work?",
    answer:
      "Yes, we offer both ongoing support and project-based engagements for data migration, cleanup projects, one-time processing needs, and special initiatives.",
  },
]

const relatedServices = [
  { title: "Order Management", href: "/services/order-management" },
  { title: "Customer Support", href: "/services/customer-support" },
  { title: "Email Support", href: "/services/email-support" },
]

export default function BackOfficePage() {
  return (
    <ServicePageTemplate
      icon={FileText}
      title="Back-Office & Data Services"
      subtitle="Operations Support"
      description="Professional back-office services that handle the essential behind-the-scenes work of your business. From data entry to administrative support, we help you maintain operational efficiency."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
