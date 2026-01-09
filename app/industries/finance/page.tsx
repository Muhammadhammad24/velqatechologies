import { Landmark } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance & Insurance Support | Velqa Technologies LLC",
  description:
    "Compliant customer support services for financial services and insurance companies with strict regulatory adherence.",
}

const challenges = [
  "Maintaining strict regulatory compliance (SOC 2, PCI-DSS)",
  "Handling sensitive financial data securely",
  "Explaining complex financial products clearly",
  "Managing high-stakes customer interactions",
  "Processing documentation accurately and efficiently",
  "Navigating diverse compliance requirements across regions",
]

const solutions = [
  {
    title: "Compliance-First Operations",
    description: "All processes designed with regulatory requirements in mind, including SOC 2 and PCI-DSS compliance.",
  },
  {
    title: "Account Servicing",
    description: "Handle account inquiries, balance questions, transaction disputes, and account maintenance requests.",
  },
  {
    title: "Claims Processing Support",
    description: "Assist with claims intake, status updates, documentation requirements, and claims-related inquiries.",
  },
  {
    title: "Document Verification",
    description: "Accurate verification of financial documents, applications, and supporting materials.",
  },
  {
    title: "Fraud Prevention Support",
    description: "Alert handling, suspicious activity reporting, and customer verification procedures.",
  },
  {
    title: "Policy Servicing",
    description: "Insurance policy inquiries, coverage explanations, endorsement processing, and renewal support.",
  },
]

const benefits = [
  "SOC 2 Type II certified operations",
  "Agents trained on financial services regulations",
  "Secure handling of PII and financial data",
  "Detailed audit trails for all interactions",
  "Custom compliance training for your requirements",
  "Experience with major banking and insurance workflows",
]

const caseStudy = {
  title: "Regional Insurance Provider",
  challenge:
    "A regional insurance company needed to improve policy servicing response times while maintaining strict compliance and handling a backlog of claims inquiries.",
  solution:
    "We implemented a compliance-certified support team with specialized training on insurance products, integrated with their policy management system.",
  results: [
    "50% faster claims response",
    "100% compliance audit pass rate",
    "35% cost reduction",
    "Customer retention improved 20%",
  ],
}

export default function FinancePage() {
  return (
    <IndustryPageTemplate
      icon={Landmark}
      name="Finance & Insurance"
      subtitle="Industry Solutions"
      description="Compliance-first customer support for financial services and insurance companies. We understand the regulatory requirements and sensitivity that defines your industry."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
