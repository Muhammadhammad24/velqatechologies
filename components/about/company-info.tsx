import Image from "next/image"
import { Building2, FileCheck, Globe2, Scale } from "lucide-react"

const details = [
  {
    icon: Building2,
    title: "Company Name",
    value: "Velqa Technologies LLC",
  },
  {
    icon: FileCheck,
    title: "Registration",
    value: "Registered in the United States",
  },
  {
    icon: Globe2,
    title: "Operations",
    value: "USA & Pakistan",
  },
  {
    icon: Scale,
    title: "DBA",
    value: "Velqa Publishers (Digital Publishing Division)",
  },
]

export function CompanyInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Velqa Technologies LLC is a premier Business Process Outsourcing (BPO) company headquartered in the
                United States. We specialize in delivering enterprise-grade customer experience solutions that help
                businesses scale their operations while maintaining exceptional service quality.
              </p>
              <p>
                Our strategic operations center in Pakistan enables us to provide cost-effective, 24/7 support coverage
                without compromising on quality. With a team of over 500 skilled professionals, we handle millions of
                customer interactions across multiple channels.
              </p>
              <p>
                Under our DBA &ldquo;Velqa Publishers,&rdquo; we also operate a digital publishing division that creates and
                monetizes digital content, showcasing our diversified business approach.
              </p>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden">
              <Image
                src="/diverse-business-team-meeting-in-modern-conference.jpg"
                alt="Velqa Technologies team collaboration"
                width={500}
                height={300}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Right side - Details grid with image */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
              <Image
                src="/professional-call-center-floor-with-agents-working.jpg"
                alt="Velqa Technologies operations center"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {details.map((detail) => (
                <div key={detail.title} className="p-6 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{detail.title}</h3>
                  <p className="font-semibold text-foreground">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
