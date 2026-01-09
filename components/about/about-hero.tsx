import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/modern-corporate-office-building-glass-facade-prof.jpg"
          alt="Velqa Technologies headquarters"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Velqa</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Pioneering Excellence in Customer Experience
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Velqa Technologies LLC is a USA-registered enterprise delivering world-class BPO and customer experience
              solutions. With operations spanning the United States and Pakistan, we combine global reach with local
              expertise.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-primary-foreground/20">
              <img src="/diverse-professional-team-collaborating-in-modern-.jpg" alt="Velqa Technologies team" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
