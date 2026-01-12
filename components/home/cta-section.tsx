"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedText } from "@/components/ui/animated-text"

const animatedTexts = [
  "LET'S WORK TOGETHER",
  "LET'S SHINE TOGETHER", 
  "LET'S HAVE FUN TOGETHER",
  "LET'S DO IT TOGETHER"
]

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* 3D Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        {/* 3D Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Floating 3D Cubes */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-secondary/30 transform rotate-45 animate-float" 
               style={{ 
                 animationDelay: '0s',
                 boxShadow: '0 0 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
               }} />
          <div className="absolute top-40 right-32 w-12 h-12 bg-secondary/20 transform rotate-12 animate-float" 
               style={{ 
                 animationDelay: '1s',
                 boxShadow: '0 0 25px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.1)'
               }} />
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-secondary/25 transform -rotate-12 animate-float" 
               style={{ 
                 animationDelay: '2s',
                 boxShadow: '0 0 35px rgba(0,0,0,0.3), inset 0 0 25px rgba(255,255,255,0.1)'
               }} />
          
          {/* 3D Hexagons */}
          <div className="absolute top-60 right-20 w-14 h-14 bg-secondary/30 transform rotate-30 animate-float"
               style={{
                 animationDelay: '0.5s',
                 clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                 boxShadow: '0 0 30px rgba(0,0,0,0.3)'
               }} />
          <div className="absolute bottom-20 right-40 w-10 h-10 bg-secondary/20 transform -rotate-45 animate-float"
               style={{
                 animationDelay: '1.5s',
                 clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                 boxShadow: '0 0 20px rgba(0,0,0,0.2)'
               }} />
        </div>

        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-primary/70" />
        
        {/* Animated Light Rays */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-secondary/40 to-transparent transform -skew-x-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-secondary/30 to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* 3D Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-secondary/40 animate-float"
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 6) * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 4)}s`,
                boxShadow: '0 0 15px rgba(255,255,255,0.3), inset 0 0 10px rgba(255,255,255,0.2)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <AnimatedSection>
            <div className="mb-8 relative">
              {/* 3D Text Shadow Effect */}
              <div className="absolute inset-0 transform translate-x-2 translate-y-2 opacity-30">
                <AnimatedText 
                  texts={animatedTexts}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-primary/50"
                  interval={2500}
                />
              </div>
              <AnimatedText 
                texts={animatedTexts}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase relative z-10 text-secondary"
                interval={2500}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full shadow-lg" 
                 style={{ boxShadow: '0 0 20px rgba(255,255,255,0.5)' }} />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl md:text-2xl font-medium mb-12 leading-relaxed max-w-3xl mx-auto text-primary-foreground/90">
              Ready to transform your business? Partner with Velqa Technologies and discover how our enterprise BPO solutions can drive growth, reduce costs, and elevate customer satisfaction.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
                >
                  <Link href="/contact">
                    GET STARTED NOW
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-4 rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
                  style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.2)' }}
                >
                  <Link href="tel:+19146390318">
                    <Phone className="mr-3 h-5 w-5" />
                    CALL US NOW
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Trust indicators with 3D effect */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "24/7", label: "Global Support" },
                { number: "99.8%", label: "Satisfaction Rate" },
                { number: "500+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2 relative">
                  <div className="absolute inset-0 bg-secondary/10 rounded-lg transform rotate-3 scale-105 opacity-50" />
                  <div className="relative bg-primary/20 backdrop-blur-sm rounded-lg p-4 border border-secondary/30">
                    <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom 3D gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-secondary to-transparent"
           style={{ boxShadow: '0 0 20px rgba(255,255,255,0.3)' }} />
    </section>
  )
}
