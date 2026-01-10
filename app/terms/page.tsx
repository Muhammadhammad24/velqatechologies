import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Velqa Technologies LLC",
  description: "Terms of Service for Velqa Technologies LLC - Guidelines for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing or using the Velqa Technologies LLC website and services, you agree to be bound by these
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Velqa Technologies LLC provides business process outsourcing (BPO) and customer experience solutions.
                  Specific service terms are outlined in individual service agreements with clients.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate information when submitting forms</li>
                  <li>Use our website and services lawfully</li>
                  <li>Not attempt to interfere with the website&apos;s operation</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content on this website, including text, graphics, logos, and software, is the property of Velqa
                  Technologies LLC and is protected by applicable intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Velqa Technologies LLC shall not be liable for any indirect, incidental, special, or consequential
                  damages arising from the use of our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the United States.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us at: Velqatechnologies@outlook.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
