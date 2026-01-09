"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Coverage" },
  { value: "500+", label: "Skilled Agents" },
  { value: "50M+", label: "Interactions Handled" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1} direction="up">
              <div className="text-center group hover-lift p-4 rounded-lg transition-all">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
