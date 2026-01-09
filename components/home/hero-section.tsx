"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { MagneticButton } from "@/components/ui/magnetic-button"

const highlights = ["24/7 Global Support", "Enterprise-Grade Quality", "Dedicated Account Managers"]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground" itemScope itemType="https://schema.org/Service">
      <div className="absolute inset-0">
        <img
          src="/modern-call-center-office-with-agents-wearing-head.jpg"
          alt="Professional call center environment with agents providing 24/7 customer support services"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="object-cover opacity-20 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          }}
        />
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary/30 animate-particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <AnimatedSection delay={0} direction="down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-8 hover-glow">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium" itemProp="availability">Available 24/7 Worldwide</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mb-6 relative">
                <AnimatedText 
                  texts={[
                    "ENTERPRISE BPO & CUSTOMER EXPERIENCE SOLUTIONS",
                    "PROFESSIONAL BUSINESS PROCESS OUTSOURCING",
                    "WORLD-CLASS CUSTOMER SUPPORT SERVICES", 
                    "ENTERPRISE-GRADE BPO SOLUTIONS"
                  ]}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase relative z-10 text-secondary"
                  interval={3000}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed" itemProp="description">
                Comprehensive business process outsourcing solutions designed to elevate your customer operations and drive business growth through exceptional service delivery.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wide">KEY FEATURES:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Key service features">
                  {[
                    "Call Center & BPO Services",
                    "Email & Chat Support", 
                    "Order Management & Returns",
                    "24/7 Global Multichannel Support"
                  ].map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-primary-foreground/90 animate-slide-up bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      role="listitem"
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Call to action buttons">
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold btn-ripple animate-pulse-glow"
                    aria-label="Start your customer support campaign with Velqa Technologies"
                  >
                    <Link href="/contact">
                      Start Your Campaign
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent btn-ripple"
                    aria-label="Explore our BPO and customer support services"
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-female-call-center-agent-with-headset.jpg"
                alt="Professional female customer service representative with headset providing excellent customer support"
                width={600}
                height={400}
                loading="eager"
                className="w-full h-auto"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-lg border border-border" itemScope itemType="https://schema.org/Rating">
              <div className="text-3xl font-bold text-primary" itemProp="ratingValue">99.8%</div>
              <div className="text-sm text-muted-foreground" itemProp="name">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-shimmer" aria-hidden="true" />
    </section>
  )
}
