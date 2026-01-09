import { Target, Eye, TrendingUp } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="p-8 rounded-xl bg-background border border-border/50">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses worldwide with exceptional customer experience solutions that drive growth, build
              loyalty, and create lasting value through innovation, integrity, and operational excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl bg-background border border-border/50">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in enterprise BPO services, recognized for our unwavering commitment to quality,
              our innovative approach to customer engagement, and our contribution to client success.
            </p>
          </div>

          {/* Growth Goals */}
          <div className="p-8 rounded-xl bg-background border border-border/50">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Growth Goals</h3>
            <p className="text-muted-foreground leading-relaxed">
              To expand our service offerings, strengthen our global presence, and continuously invest in our people and
              technology to deliver even greater value to our clients and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
