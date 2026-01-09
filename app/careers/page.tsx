import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CultureSection } from "@/components/careers/culture-section"
import { BenefitsSection } from "@/components/careers/benefits-section"
import { JobListings } from "@/components/careers/job-listings"
import { ApplicationForm } from "@/components/careers/application-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Velqa Technologies LLC",
  description:
    "Join Velqa Technologies and build a rewarding career in customer experience. Explore opportunities in customer support, quality assurance, team leadership, and more.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CareersHero />
        <CultureSection />
        <BenefitsSection />
        <JobListings />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  )
}
