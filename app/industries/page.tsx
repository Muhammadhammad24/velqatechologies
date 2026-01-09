import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Laptop, Landmark, Heart, Store, Layers, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise BPO Solutions | Velqa Technologies LLC",
  description:
    "🏆 Industry-specific BPO solutions for E-commerce & Retail, Tech & SaaS, Finance & Insurance, Healthcare, Marketplace Sellers, and Digital Products. Specialized support teams with deep industry expertise.",
  keywords: [
    "industry specific BPO", "ecommerce customer support", "tech SaaS support", "finance BPO services",
    "healthcare customer service", "marketplace seller support", "digital products BPO", "retail customer support",
    "industry specialized outsourcing", "sector specific solutions", "compliance ready BPO", "regulated industry support"
  ],
  openGraph: {
    title: "Industries We Serve | Enterprise BPO Solutions",
    description: "🏆 Industry-specific BPO solutions with specialized support teams and deep industry expertise",
    images: [
      {
        url: "/diverse-business-team-meeting-in-modern-conference.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Industry-Specific BPO Solutions",
      },
    ],
  },
}

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    href: "/industries/ecommerce",
    description:
      "Support for online retailers with order management, customer service, returns handling, and peak season scalability.",
    challenges: ["High volume during sales", "Complex returns", "Multi-channel support", "Inventory queries"],
    image: "/young-professional-team-meeting-collaboration-dive.jpg",
  },
  {
    icon: Laptop,
    name: "Tech & SaaS",
    href: "/industries/tech-saas",
    description:
      "Technical support and customer success for software companies, from onboarding to troubleshooting and retention.",
    challenges: ["Technical complexity", "User onboarding", "Subscription management", "Feature requests"],
    image: "/professional-man-at-computer-technical-support-spe.jpg",
  },
  {
    icon: Landmark,
    name: "Finance & Insurance",
    href: "/industries/finance",
    description:
      "Compliant support services for financial services companies with strict adherence to regulatory requirements.",
    challenges: ["Regulatory compliance", "Sensitive data", "Complex products", "Documentation needs"],
    image: "/new-york-city-skyline-modern-business-district-sun.jpg",
  },
  {
    icon: Heart,
    name: "Healthcare",
    href: "/industries/healthcare",
    description:
      "HIPAA-aware support services for healthcare organizations including appointment scheduling and patient support.",
    challenges: ["Privacy compliance", "Empathetic communication", "Appointment management", "Insurance queries"],
    image: "/friendly-customer-support-representative-helping-c.jpg",
  },
  {
    icon: Store,
    name: "Marketplace Sellers",
    href: "/industries/marketplace",
    description: "Specialized support for Amazon, eBay, and other marketplace sellers managing high-volume operations.",
    challenges: ["Multi-platform", "Review management", "Policy compliance", "Shipping issues"],
    image: "/diverse-professional-team-collaborating-in-modern-.jpg",
  },
  {
    icon: Layers,
    name: "Digital Products",
    href: "/industries/digital-products",
    description:
      "Support for digital product companies including software, courses, subscriptions, and downloadable content.",
    challenges: ["Access issues", "Licensing support", "Technical setup", "Refund policies"],
    image: "/diverse-team-of-professionals-in-modern-office-cel.jpg",
  },
]

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industries We Serve - Velqa Technologies',
    description: 'Industry-specific BPO solutions with specialized support teams and deep industry expertise',
    url: 'https://velqatechnologies.com/industries',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Industries We Serve',
      itemListElement: industries.map((industry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: industry.name,
          description: industry.description,
          url: `https://velqatechnologies.com${industry.href}`,
          image: `https://velqatechnologies.com${industry.image}`,
          provider: {
            '@type': 'Organization',
            name: 'Velqa Technologies LLC'
          }
        }
      }))
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://velqatechnologies.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Industries',
          item: 'https://velqatechnologies.com/industries'
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero - Added background image */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/diverse-business-team-meeting-in-modern-conference.jpg"
              alt="Industries we serve"
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                Specialized Solutions Across Sectors
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Our industry-specific expertise ensures tailored solutions that address unique challenges, regulatory
                requirements, and customer expectations in your sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid - Added image thumbnails */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group overflow-hidden rounded-xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={`${industry.name} - Professional business environment`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 flex items-center justify-center mb-6 transition-colors -mt-14 relative bg-background border border-border shadow-lg">
                      <industry.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Common Challenges:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {industry.challenges.map((challenge) => (
                          <span
                            key={challenge}
                            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                      Explore Solutions
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Industry Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industry-Agnostic Excellence</h2>
              <p className="text-muted-foreground text-lg">
                Regardless of your industry, you benefit from our core capabilities and commitment to excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Trained Industry Specialists",
                "Compliance-Ready Operations",
                "Scalable Team Models",
                "Custom Process Design",
                "Quality Monitoring",
                "Dedicated Account Management",
                "24/7 Support Options",
                "Data Security Standards",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg bg-background">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{"Don't"} See Your Industry?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              We work with businesses across many sectors. Contact us to discuss how we can tailor our services to your
              specific industry needs.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  )
}
