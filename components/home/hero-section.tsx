"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh text-primary-foreground" style={{ backgroundColor: 'hsl(222 84% 5%)' }} itemScope itemType="https://schema.org/Service">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222_84%_5%)] via-[hsl(222_47%_11%)] to-[hsl(217_33%_17%)]" />
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,102,0,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59,130,246,0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 1.2}s`,
              background: i % 2 === 0 ? 'hsl(24 100% 50% / 0.3)' : 'hsl(217 91% 60% / 0.3)',
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <AnimatedSection delay={0} direction="down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 mb-8 hover-glow">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
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
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase relative z-10 text-white"
                  interval={3000}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed" itemProp="description">
                Comprehensive business process outsourcing solutions designed to elevate your customer operations and drive business growth through exceptional service delivery.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide">KEY FEATURES:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Key service features">
                  {[
                    "Call Center & BPO Services",
                    "Email & Chat Support", 
                    "Order Management & Returns",
                    "24/7 Global Multichannel Support"
                  ].map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-200 animate-slide-up bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-orange-500/30 transition-colors"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      role="listitem"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0" aria-hidden="true" />
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
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent btn-ripple"
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
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl border border-gray-200" itemScope itemType="https://schema.org/Rating">
              <div className="text-3xl font-bold text-orange-500" itemProp="ratingValue">99.8%</div>
              <div className="text-sm text-gray-600" itemProp="name">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-shimmer" aria-hidden="true" />
    </section>
  )
}
