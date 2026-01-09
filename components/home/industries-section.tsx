"use client"

import Link from "next/link"
import { ShoppingCart, Laptop, Landmark, Heart, Store, Layers, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    href: "/industries/ecommerce",
    image: "/young-professional-team-meeting-collaboration-dive.jpg"
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
    image: "/friendly-customer-support-representative-helping-c.jpg"
  },
  {
    icon: Store,
    name: "Marketplace Sellers",
    href: "/industries/marketplace",
    image: "/diverse-professional-team-collaborating-in-modern-.jpg"
  },
  {
    icon: Layers,
    name: "Digital Products",
    href: "/industries/digital-products",
    image: "/diverse-team-of-professionals-in-modern-office-cel.jpg"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.href} delay={index * 0.08}>
              <Link
                href={industry.href}
                className="group p-6 rounded-xl bg-muted/50 hover:bg-primary text-center card-hover relative overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-background/80 group-hover:bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                    <industry.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-bold group-hover:text-primary-foreground transition-colors uppercase tracking-wide">
                    {industry.name}
                  </span>
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
