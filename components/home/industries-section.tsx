"use client"

import Link from "next/link"
import { ShoppingCart, Laptop, Landmark, Heart, Store, Layers, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    href: "/industries/ecommerce",
    image: "/diverse-business-team-meeting-in-modern-conference.jpg"
  },
  {
    icon: Laptop,
    name: "Tech & SaaS",
    href: "/industries/tech-saas",
    image: "/professional-man-at-computer-technical-support-spe.jpg"
  },
  {
    icon: Landmark,
    name: "Finance & Insurance",
    href: "/industries/finance",
    image: "/new-york-city-skyline-modern-business-district-sun.jpg"
  },
  {
    icon: Heart,
    name: "Healthcare",
    href: "/industries/healthcare",
    image: "/professional-customer-service-agent-with-headset-s.jpg"
  },
  {
    icon: Store,
    name: "Marketplace Sellers",
    href: "/industries/marketplace",
    image: "/modern-call-center-office-with-agents-wearing-head.jpg"
  },
  {
    icon: Layers,
    name: "Digital Products",
    href: "/industries/digital-products",
    image: "/modern-corporate-office-building-glass-facade-prof.jpg"
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Specialized Solutions Across Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            Our industry-specific expertise ensures tailored solutions that address unique challenges and regulatory
            requirements.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.href} delay={index * 0.08}>
              <Link
                href={industry.href}
                className="group p-8 rounded-lg bg-white border border-gray-200 hover:bg-secondary hover:border-secondary text-left transition-all duration-200 block h-full relative overflow-hidden"
              >
                {/* Background Image - Only on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-white/60 transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                    <industry.icon className="h-6 w-6 text-gray-600 group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary mb-3 uppercase tracking-wide">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-primary/80">
                    Specialized solutions for {industry.name.toLowerCase()} industry requirements.
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors group"
          >
            Explore All Industries
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
