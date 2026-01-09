import Image from "next/image"
import { Users, MapPin, Clock } from "lucide-react"

export function CareersHero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/diverse-team-of-professionals-in-modern-office-cel.jpg"
          alt="Velqa Technologies team"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Build Your Career at Velqa Technologies
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Join a global team of customer experience professionals delivering exceptional service for leading brands.
              Grow your skills, advance your career, and make a real impact.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="h-5 w-5 text-secondary" />
                <span>500+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>USA & Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="h-5 w-5 text-secondary" />
                <span>Flexible Schedules</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-primary-foreground/20">
              <img
                src="/diverse-professional-team-collaborating-in-modern-.jpg"
                alt="Velqa Technologies careers - diverse professional team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
