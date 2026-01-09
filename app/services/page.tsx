import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessageSquare, Mail, MessagesSquare, Package, FileText, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Enterprise BPO & Customer Experience Solutions | Velqa Technologies LLC",
  description:
    "🏆 Comprehensive BPO and customer experience services: Call Center & BPO, Customer Support, Email & Chat Support, Order Management & Returns, Back-Office Services. 24/7 professional support with 99.8% satisfaction rate.",
  keywords: [
    "BPO services", "call center services", "customer support outsourcing", "email support services",
    "live chat support", "order management BPO", "back office services", "customer experience solutions",
    "professional customer service", "24/7 support services", "enterprise BPO solutions", "outsourcing services",
    "technical support outsourcing", "multilingual customer support", "scalable support solutions"
  ],
  openGraph: {
    title: "Our Services | Enterprise BPO & Customer Experience Solutions",
    description: "🏆 Comprehensive BPO services with 24/7 professional support and 99.8% satisfaction rate",
    images: [
      {
        url: "/modern-call-center-office-with-agents-wearing-head.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Comprehensive BPO Services",
      },
    ],
  },
}

const services = [
  {
    icon: Phone,
    title: "Call Center & BPO Services",
    description:
      "Comprehensive inbound and outbound call center services with IVR systems, technical support, and telemarketing capabilities. We handle everything from sales calls to customer retention campaigns.",
    features: ["Inbound/Outbound Calls", "IVR Management", "Technical Support", "Telemarketing", "Sales Campaigns"],
    href: "/services/call-center",
    image: "/professional-call-center-floor-with-agents-working.jpg",
  },
  {
    icon: MessageSquare,
    title: "Customer Support",
    description:
      "Professional phone support with dedicated agents, escalation handling, 24/7 availability, and comprehensive account management. Build lasting customer relationships with our expert team.",
    features: ["24/7 Phone Support", "Escalation Handling", "Dedicated Agents", "Quality Monitoring", "SLA Management"],
    href: "/services/customer-support",
    image: "/friendly-customer-support-representative-helping-c.jpg",
  },
  {
    icon: Mail,
    title: "Email Support",
    description:
      "Efficient ticket resolution, refund processing, and escalation workflows for seamless email management. Our team ensures fast response times and high customer satisfaction.",
    features: [
      "Ticket Management",
      "Refund Processing",
      "Query Resolution",
      "Escalation Workflows",
      "Response Templates",
    ],
    href: "/services/email-support",
    image: "/professional-man-at-computer-technical-support-spe.jpg",
  },
  {
    icon: MessagesSquare,
    title: "Live Chat Support",
    description:
      "Real-time customer engagement with chatbot integration and multilingual support capabilities. Provide instant assistance and boost conversion rates.",
    features: [
      "Real-time Chat",
      "Chatbot Integration",
      "Multilingual Support",
      "Proactive Engagement",
      "Chat Analytics",
    ],
    href: "/services/live-chat",
    image: "/professional-woman-with-headset-smiling-customer-s.jpg",
  },
  {
    icon: Package,
    title: "Order Management & Returns",
    description:
      "End-to-end order tracking, returns processing, and RMA workflow management. Streamline your fulfillment operations with our comprehensive solutions.",
    features: ["Order Tracking", "Returns Processing", "RMA Management", "Inventory Sync", "Shipping Coordination"],
    href: "/services/order-management",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg",
  },
  {
    icon: FileText,
    title: "Back-Office & Data Services",
    description:
      "Data entry, CRM management, and administrative support to streamline your operations. Free up your core team to focus on strategic initiatives.",
    features: ["Data Entry", "CRM Management", "Document Processing", "Admin Support", "Reporting & Analytics"],
    href: "/services/back-office",
    image: "/diverse-team-of-professionals-in-modern-office-cel.jpg",
  },
]

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Our Services - Velqa Technologies',
    description: 'Comprehensive BPO and customer experience services with 24/7 professional support',
    url: 'https://velqatechnologies.com/services',
    mainEntity: {
      '@type': 'ItemList',
      name: 'BPO Services',
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
          },
          serviceType: 'Business Process Outsourcing',
          areaServed: 'Worldwide',
          availableChannel: {
            '@type': 'ServiceChannel',
            availableLanguage: 'English',
            servicePhone: '+1-555-123-4567',
            serviceUrl: 'https://velqatechnologies.com/contact'
          }
        }
      }))
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://velqatechnologies.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://velqatechnologies.com/services'
        }
      ]
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
        {/* Hero - Added background image */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden" itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0">
            <Image
              src="/modern-call-center-office-with-agents-wearing-head.jpg"
              alt="Velqa Technologies comprehensive BPO services environment"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance" itemProp="name">
                Comprehensive BPO Solutions for Your Business
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed" itemProp="description">
                From customer-facing interactions to back-office operations, we provide end-to-end support that drives
                customer satisfaction and operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services List - Updated with real images */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20" role="list" aria-label="Our BPO services">
              {services.map((service, index) => (
                <article
                  key={service.href}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  itemScope
                  itemType="https://schema.org/Service"
                  role="listitem"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" itemProp="name">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6" itemProp="description">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8" role="list" aria-label={`${service.title} features`}>
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground" role="listitem">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" aria-label={`Learn more about ${service.title}`}>
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`aspect-video rounded-xl bg-muted/50 border border-border overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - Professional BPO service environment`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      itemProp="image"
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
              Ready to Optimize Your Customer Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our services can transform your business.
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
