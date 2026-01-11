"use client"

import Link from "next/link"
import { Phone, MessageSquare, Settings, MessagesSquare, Package, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

const services = [
  {
    icon: Phone,
    title: "BPO & CX Services",
    description:
      "Enterprise-grade CX operations built on quality frameworks, compliance-ready operations, and performance-driven KPIs.",
    href: "/services/bpo-cx-services",
    image: "/professional-call-center-floor-with-agents-working.jpg"
  },
  {
    icon: MessageSquare,
    title: "Inbound Customer Support",
    description:
      "CX-driven inbound operations with compliance-first approach and industry-trained agents for exceptional experiences.",
    href: "/services/inbound-support",
    image: "/friendly-customer-support-representative-helping-c.jpg"
  },
  {
    icon: Settings,
    title: "Technical & Help Desk Support",
    description:
      "Process-led service delivery with integrated CX tools for real-time issue resolution and analytics.",
    href: "/services/technical-support",
    image: "/professional-man-at-computer-technical-support-spe.jpg"
  },
  {
    icon: MessagesSquare,
    title: "Multi-Channel CX Operations",
    description: "Unified CX platforms enable seamless interactions across voice, email, chat, and messaging channels.",
    href: "/services/multi-channel",
    image: "/professional-woman-with-headset-smiling-customer-s.jpg"
  },
  {
    icon: Package,
    title: "Order & Account Management",
    description: "End-to-end order tracking, account management, and returns processing with streamlined workflows.",
    href: "/services/order-account-management",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg"
  },
  {
    icon: FileText,
    title: "Back-Office Operations",
    description: "Process-led back-office operations including data management, CRM administration, and document processing.",
    href: "/services/back-office-operations",
    image: "/diverse-team-of-professionals-in-modern-office-cel.jpg"
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Enterprise BPO & CX Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Process-led service delivery with quality-monitored customer interactions that drive measurable business outcomes and operational excellence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.href} delay={0.1 * index} direction="up">
              <Link href={service.href} className="group block h-full">
                <Card className="h-full border-border/50 hover:border-secondary/50 card-hover relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors uppercase tracking-wide font-black">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors uppercase">
                      LEARN MORE
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.7} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
