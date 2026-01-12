import { FileText } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Back-Office Operations | Velqa Technologies LLC",
  description: "Process-led back-office operations including data management, CRM administration, and document processing.",
}

const features = [
  {
    title: "Data Management",
    description:
      "Accurate, high-volume data entry and management for various formats including forms, documents, databases, and spreadsheets.",
  },
  {
    title: "CRM Operations",
    description: "Maintain clean, updated customer records, manage data hygiene, and ensure CRM system accuracy with integrated tool stack.",
  },
  {
    title: "Document Processing",
    description: "Digitization, organization, indexing, and management of business documents and records with secure handling protocols.",
  },
  {
    title: "Tools & Platforms",
    description: "CRM systems for data tracking, document management platforms, analytics tools, and secure data handling systems for streamlined operations.",
  },
  {
    title: "Compliance & Security",
    description: "GDPR-aligned processes, documented procedures, and controlled access environments ensure data privacy and regulatory compliance.",
  },
  {
    title: "Reporting & Analytics",
    description: "Regular business reports, data analysis, and dashboard creation to support decision-making with measurable KPIs.",
  },
  {
    title: "Quality Assurance",
    description:
      "Dedicated QA teams conduct regular quality audits on data processing to ensure accuracy, consistency, and adherence to guidelines.",
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
    question: "What types of data processing do you handle?",
    answer:
      "We handle various data processing needs including invoice processing, form data, survey responses, product listings, customer information, and more. Both structured and unstructured data.",
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
  { title: "Order & Account Management", href: "/services/order-account-management" },
  { title: "Inbound Customer Support", href: "/services/inbound-support" },
  { title: "Multi-Channel CX Operations", href: "/services/multi-channel" },
]

export default function BackOfficeOperationsPage() {
  return (
    <ServicePageTemplate
      icon={FileText}
      title="Back-Office Operations"
      subtitle="Process-Led Operations"
      description="Process-led back-office operations including data management, CRM administration, and document processing to streamline business operations and free up your team for strategic initiatives."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
