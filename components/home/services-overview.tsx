"use client"

import Link from "next/link"
import { Phone, MessageSquare, Mail, MessagesSquare, Package, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

const services = [
  {
    icon: Phone,
    title: "Call Center & BPO",
    description:
      "Comprehensive inbound and outbound call center services with IVR, technical support, and telemarketing capabilities.",
    href: "/services/call-center",
    image: "/professional-call-center-floor-with-agents-working.jpg"
  },
  {
    icon: MessageSquare,
    title: "Customer Support",
    description:
      "Professional phone support with escalation handling, 24/7 availability, and dedicated account management.",
    href: "/services/customer-support",
    image: "/friendly-customer-support-representative-helping-c.jpg"
  },
  {
    icon: Mail,
    title: "Email Support",
    description:
      "Efficient ticket resolution, refund processing, and escalation workflows for seamless email management.",
    href: "/services/email-support",
    image: "/professional-man-at-computer-technical-support-spe.jpg"
  },
  {
    icon: MessagesSquare,
    title: "Live Chat Support",
    description: "Real-time customer engagement with chatbot integration and multilingual support capabilities.",
    href: "/services/live-chat",
    image: "/professional-woman-with-headset-smiling-customer-s.jpg"
  },
  {
    icon: Package,
    title: "Order Management",
    description: "End-to-end order tracking, returns processing, and RMA workflow management.",
    href: "/services/order-management",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg"
  },
  {
    icon: FileText,
    title: "Back-Office Services",
    description: "Data entry, CRM management, and administrative support to streamline your operations.",
    href: "/services/back-office",
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
            Comprehensive BPO Solutions for Modern Enterprises
          </h2>
          <p className="text-muted-foreground text-lg">
            From customer-facing interactions to back-office operations, we provide end-to-end support that drives
            customer satisfaction and operational efficiency.
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
