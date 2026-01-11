import { BarChart3 } from "lucide-react"
import { ServicePageTemplate } from "@/components/services/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CX Quality & Monitoring | Velqa Technologies LLC",
  description:
    "Dedicated quality assurance teams monitor customer interactions through call audits, scorecards, and continuous performance reviews.",
}

const features = [
  {
    title: "QA Frameworks",
    description:
      "Dedicated quality assurance teams monitor customer interactions through call audits, scorecards, and continuous performance reviews to ensure service consistency and CX improvement.",
  },
  {
    title: "Performance Scorecards",
    description:
      "Comprehensive scorecards evaluate agent performance across multiple dimensions including accuracy, professionalism, compliance, and customer satisfaction.",
  },
  {
    title: "Call Audits",
    description:
      "Regular call audits identify coaching opportunities, ensure policy adherence, and maintain quality standards across all customer interactions.",
  },
  {
    title: "Measurable Outcomes",
    description:
      "CX performance is measured using clearly defined KPIs including CSAT, FCR, AHT, and SLA adherence, enabling continuous optimization.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Data-driven insights from quality monitoring drive continuous improvement initiatives, agent coaching, and process optimization.",
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ongoing compliance monitoring ensures adherence to regulatory requirements, data protection standards, and industry-specific guidelines.",
  },
]

const benefits = [
  "Improve customer satisfaction scores consistently",
  "Identify and address performance gaps proactively",
  "Ensure compliance with regulatory requirements",
  "Drive continuous service improvement",
  "Reduce customer complaints and escalations",
  "Optimize operational efficiency with data insights",
]

const slaCommitments = [
  "100% call monitoring coverage",
  "Quality score target of 95%+",
  "Monthly QA reporting and insights",
  "Agent coaching within 48 hours of audit",
  "Compliance audit score above 98%",
  "Real-time performance dashboards",
]

const faqs = [
  {
    question: "What KPIs do you track for CX performance?",
    answer:
      "We track CSAT (Customer Satisfaction Score), FCR (First Contact Resolution), AHT (Average Handle Time), SLA adherence, quality scores, compliance metrics, and NPS (Net Promoter Score).",
  },
  {
    question: "How often are quality audits conducted?",
    answer:
      "We conduct daily quality audits with a minimum of 5-10% of interactions reviewed per agent. High-risk or compliance-sensitive interactions receive 100% monitoring.",
  },
  {
    question: "How do you use quality data for improvement?",
    answer:
      "Quality data drives targeted agent coaching, process refinements, training updates, and strategic initiatives. We provide regular reports with actionable insights and improvement recommendations.",
  },
  {
    question: "Can we customize quality scorecards?",
    answer:
      "Yes, we develop customized scorecards aligned with your specific quality standards, brand guidelines, and business objectives while maintaining industry best practices.",
  },
  {
    question: "How do you ensure compliance monitoring?",
    answer:
      "We implement compliance-specific monitoring criteria, regular audits, documented procedures, and ongoing training to ensure adherence to regulatory requirements and data protection standards.",
  },
]

const relatedServices = [
  { title: "Inbound Customer Support", href: "/services/inbound-support" },
  { title: "Technical & Help Desk Support", href: "/services/technical-support" },
  { title: "Multi-Channel CX Operations", href: "/services/multi-channel" },
]

export default function CXQualityPage() {
  return (
    <ServicePageTemplate
      icon={BarChart3}
      title="CX Quality & Monitoring"
      subtitle="Quality-Driven Excellence"
      description="Dedicated quality assurance teams monitor customer interactions through call audits, scorecards, and continuous performance reviews to ensure service consistency and CX improvement. Measurable outcomes through clearly defined KPIs."
      features={features}
      benefits={benefits}
      slaCommitments={slaCommitments}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
