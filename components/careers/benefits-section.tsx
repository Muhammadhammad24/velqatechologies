import { DollarSign, GraduationCap, Clock, Heart, TrendingUp, Users, Coffee, Globe } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Industry-competitive salaries with performance bonuses and incentives.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Comprehensive training programs and continuous learning opportunities.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Multiple shift options to fit your lifestyle and personal commitments.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Medical coverage and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths with regular promotions and internal mobility.",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative workspace with supportive colleagues and management.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Paid time off, holidays, and policies that respect your personal time.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work with international clients and gain diverse industry experience.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Benefits & Perks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">Why People Love Working Here</h2>
          <p className="text-muted-foreground text-lg">
            We offer more than just a job - we offer a career with meaningful benefits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-xl bg-background border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
