import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyInfo } from "@/components/about/company-info"
import { MissionVision } from "@/components/about/mission-vision"
import { GlobalPresence } from "@/components/about/global-presence"
import { Timeline } from "@/components/about/timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Velqa Technologies LLC",
  description:
    "Learn about Velqa Technologies LLC - a USA-registered enterprise BPO company with global operations. Discover our mission, vision, and commitment to excellence.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <CompanyInfo />
        <MissionVision />
        <Timeline />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  )
}
