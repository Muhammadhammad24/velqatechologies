import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Velqa Technologies LLC",
  description:
    "Privacy Policy for Velqa Technologies LLC - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Velqa Technologies LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and
                  is committed to protecting your personal data. This privacy policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Company information for business inquiries</li>
                  <li>Resume and employment information for job applications</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Respond to inquiries and provide customer service</li>
                  <li>Process job applications</li>
                  <li>Send relevant communications about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have rights regarding your personal data, including the right to
                  access, correct, delete, or port your data. Contact us to exercise these rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy, please contact us at: Velqatechnologies@outlook.com
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
