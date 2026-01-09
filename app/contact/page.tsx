import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { CampaignForm } from "@/components/contact/campaign-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Velqa Technologies LLC",
  description:
    "Get in touch with Velqa Technologies. Contact our USA or Pakistan offices, submit a general inquiry, or apply for an enterprise BPO campaign.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <ContactForm />
                <CampaignForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
