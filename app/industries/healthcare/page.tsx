import { Heart } from "lucide-react"
import { IndustryPageTemplate } from "@/components/industries/industry-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Support Services | Velqa Technologies LLC",
  description:
    "HIPAA-aware patient support services including appointment scheduling, patient inquiries, and healthcare customer service.",
}

const challenges = [
  "Maintaining HIPAA compliance in all patient interactions",
  "Communicating with empathy during sensitive situations",
  "Managing appointment scheduling across providers",
  "Handling insurance and billing inquiries",
  "Supporting patients with varying health literacy levels",
  "Managing high call volumes during health events",
]

const solutions = [
  {
    title: "Patient Scheduling",
    description: "Appointment booking, rescheduling, and reminders integrated with your practice management system.",
  },
  {
    title: "Patient Support Line",
    description:
      "Empathetic first-line support for patient inquiries, prescription refill requests, and general questions.",
  },
  {
    title: "Insurance Verification",
    description: "Pre-authorization support, insurance verification, and benefits explanation for patients.",
  },
  {
    title: "Post-Visit Follow-up",
    description: "Outreach calls for appointment reminders, satisfaction surveys, and care coordination.",
  },
  {
    title: "Medical Records Requests",
    description: "Process and track medical records release requests following proper authorization procedures.",
  },
  {
    title: "Telehealth Support",
    description: "Technical assistance for patients accessing virtual care platforms and telehealth appointments.",
  },
]

const benefits = [
  "HIPAA-trained agents with healthcare experience",
  "Empathetic communication training for sensitive topics",
  "Integration with major EHR and practice management systems",
  "Multilingual support for diverse patient populations",
  "24/7 availability for patient support lines",
  "Detailed documentation for compliance purposes",
]

const caseStudy = {
  title: "Multi-Location Medical Group",
  challenge:
    "A growing medical group with 15+ locations struggled to manage patient scheduling and inquiries efficiently, leading to missed appointments and patient frustration.",
  solution:
    "We deployed a centralized patient services team handling scheduling, inquiries, and follow-up calls across all locations with EHR integration.",
  results: [
    "30% reduction in no-shows",
    "Patient satisfaction up 28%",
    "40% more calls handled",
    "Staff freed for clinical work",
  ],
}

export default function HealthcarePage() {
  return (
    <IndustryPageTemplate
      icon={Heart}
      name="Healthcare"
      subtitle="Industry Solutions"
      description="Compassionate, compliant patient support services that enhance the healthcare experience. We help healthcare organizations improve patient engagement while maintaining strict privacy standards."
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  )
}
