import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessagesSquare, Package, FileText, ArrowRight, CheckCircle2, Shield, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BPO & CX Services | Enterprise Customer Experience Solutions | Velqa Technologies LLC",
  description:
    "🏆 Enterprise-grade BPO & CX services built on quality frameworks, compliance-ready operations, advanced tool stacks, and performance-driven KPIs for measurable business outcomes.",
  keywords: [
    "BPO services", "CX operations", "customer experience solutions", "enterprise BPO",
    "quality frameworks", "compliance ready", "CX tool stack", "measurable outcomes",
    "professional customer service", "24/7 support services", "enterprise solutions"
  ],
  openGraph: {
    title: "BPO & CX Services | Enterprise Customer Experience Solutions",
    description: "🏆 Enterprise-grade CX operations with quality frameworks and measurable outcomes",
    images: [
      {
        url: "/modern-call-center-office-with-agents-wearing-head.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Enterprise BPO & CX Services",
      },
    ],
  },
}

const services = [
  {
    icon: Phone,
    title: "Inbound Customer Support",
    description:
      "CX-driven inbound operations with compliance-first approach, controlled access environments, and industry-trained agents who understand customer expectations and regulatory requirements.",
    features: ["24/7 Availability", "Compliance-Ready Operations", "Vertical Expertise", "Quality Monitoring", "SLA Management"],
    href: "/services/inbound-support",
    image: "/professional-call-center-floor-with-agents-working.jpg",
  },
  {
    icon: Settings,
    title: "Technical & Help Desk Support",
    description:
      "Process-led service delivery with CRM systems for interaction tracking, ticketing platforms for escalation, call monitoring tools, and secure data handling systems. Intelligent call routing ensures first-call resolution with comprehensive KPI tracking (FCR, AHT, CSAT, SLA compliance).",
    features: ["Tools & Platforms", "Smart Call Routing", "KPIs & Metrics", "Real-time Analytics", "Knowledge Base"],
    href: "/services/technical-support",
    image: "/professional-man-at-computer-technical-support-spe.jpg",
  },
  {
    icon: MessagesSquare,
    title: "Multi-Channel CX Operations",
    description:
      "Unified CX platforms enable seamless customer interactions across voice, email, chat, and messaging channels. Integrated CRM systems, ticketing platforms, and analytics tools track FCR, AHT, CSAT, and SLA compliance across all channels for measurable outcomes.",
    features: [
      "Omnichannel Support",
      "Tools & Platforms",
      "KPIs & Metrics",
      "Performance Tracking",
      "Channel Analytics",
    ],
    href: "/services/multi-channel",
    image: "/professional-woman-with-headset-smiling-customer-s.jpg",
  },
  {
    icon: BarChart3,
    title: "CX Quality & Monitoring",
    description:
      "Dedicated QA frameworks with compliance-first operations under GDPR-aligned processes. Industry-trained agents with vertical expertise deliver measurable outcomes through clearly defined KPIs. Integrated CX tool stack supports analytics, reporting, and continuous improvement cycles.",
    features: ["QA Frameworks", "Compliance & Security", "Tool Stack", "Vertical Expertise", "Measurable Outcomes"],
    href: "/services/cx-quality",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg",
  },
  {
    icon: Package,
    title: "Order & Account Management",
    description:
      "End-to-end order tracking, account management, and returns processing with streamlined workflows and real-time system integration.",
    features: ["Order Tracking", "Account Management", "Returns Processing", "System Integration", "Workflow Automation"],
    href: "/services/order-account-management",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg",
  },
  {
    icon: FileText,
    title: "Back-Office Operations",
    description:
      "Process-led back-office operations with CRM systems, document management platforms, and analytics tools. GDPR-aligned processes with documented procedures and controlled access environments ensure compliance and security. Dedicated QA teams monitor data accuracy and quality.",
    features: ["Data Management", "Tools & Platforms", "Compliance & Security", "Quality Assurance", "Reporting Analytics"],
    href: "/services/back-office-operations",
    image: "/diverse-team-of-professionals-in-modern-office-cel.jpg",
  },
]

export default function BPOCXServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'BPO & CX Services - Velqa Technologies',
    description: 'Enterprise-grade BPO & CX services with quality frameworks and measurable outcomes',
    url: 'https://velqatechnologies.com/services/bpo-cx-services',
    mainEntity: {
      '@type': 'ItemList',
      name: 'BPO & CX Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `https://velqatechnologies.com${service.href}`,
          image: `https://velqatechnologies.com${service.image}`,
          provider: {
            '@type': 'Organization',
            name: 'Velqa Technologies LLC'
          }
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/modern-call-center-office-with-agents-wearing-head.jpg"
              alt="Enterprise BPO & CX operations environment"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">BPO & CX Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                Enterprise-Grade CX Operations
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Our BPO & CX services are built on enterprise-grade quality frameworks, compliance-ready operations, advanced CX tool stacks, and performance-driven KPIs to deliver measurable business outcomes.
              </p>
              
              {/* Enterprise Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">QA Frameworks</h3>
                    <p className="text-xs text-primary-foreground/70">Dedicated quality assurance teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Compliance Readiness</h3>
                    <p className="text-xs text-primary-foreground/70">Controlled access environments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                  <Settings className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Tool Stack</h3>
                    <p className="text-xs text-primary-foreground/70">Advanced CX platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Measurable Outcomes</h3>
                    <p className="text-xs text-primary-foreground/70">Performance-driven KPIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <article
                  key={service.href}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`aspect-video rounded-xl bg-muted/50 border border-border overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - Enterprise CX operations`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your CX Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation and discover how our enterprise-grade BPO & CX services can deliver measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/industries">View Industries</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  )
}
