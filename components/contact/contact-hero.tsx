import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/professional-call-center-floor-with-agents-working.jpg"
          alt="Velqa Technologies support center"
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
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{"Let's"} Start a Conversation</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Whether you have a question about our services, pricing, or want to discuss a potential partnership,
              {"we're"} here to help. Reach out and {"let's"} explore how Velqa can transform your customer experience.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-primary-foreground/20">
              <Image
                src="/professional-customer-service-agent-with-headset-s.jpg"
                alt="Contact Velqa Technologies"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* Floating contact card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-5 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">24/7 Support</div>
                  <div className="font-semibold text-foreground">Ready to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
