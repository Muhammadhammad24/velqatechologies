import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { LucideIcon } from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceFAQ {
  question: string
  answer: string
}

interface ServicePageProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: ServiceFeature[]
  benefits: string[]
  slaCommitments: string[]
  faqs: ServiceFAQ[]
  relatedServices: { title: string; href: string }[]
  heroImage?: string
  backgroundImage?: string
}

export function ServicePageTemplate({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  benefits,
  slaCommitments,
  faqs,
  relatedServices,
  heroImage,
  backgroundImage,
}: ServicePageProps) {
  // Function to get appropriate image based on service title - USING EXISTING WORKING IMAGES
  const getServiceImage = () => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('call center') || titleLower.includes('bpo')) {
      return '/professional-call-center-floor-with-agents-working.jpg'
    } else if (titleLower.includes('customer support')) {
      return '/friendly-customer-support-representative-helping-c.jpg'
    } else if (titleLower.includes('email support')) {
      return '/professional-man-at-computer-technical-support-spe.jpg'
    } else if (titleLower.includes('live chat')) {
      return '/professional-woman-with-headset-smiling-customer-s.jpg'
    } else if (titleLower.includes('order management')) {
      return '/diverse-business-team-meeting-in-modern-conference.jpg'
    } else if (titleLower.includes('back-office')) {
      return '/diverse-team-of-professionals-in-modern-office-cel.jpg'
    } else {
      return '/professional-customer-service-agent-with-headset-s.jpg'
    }
  }

  const getBackgroundImage = () => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('call center') || titleLower.includes('bpo')) {
      return '/modern-call-center-office-with-agents-wearing-head.jpg'
    } else if (titleLower.includes('customer support')) {
      return '/professional-call-center-agent-with-headset-talkin.jpg'
    } else if (titleLower.includes('email support')) {
      return '/modern-corporate-office-building-glass-facade-prof.jpg'
    } else if (titleLower.includes('live chat')) {
      return '/diverse-professional-team-collaborating-in-modern-.jpg'
    } else if (titleLower.includes('order management')) {
      return '/young-professional-team-meeting-collaboration-dive.jpg'
    } else if (titleLower.includes('back-office')) {
      return '/new-york-city-skyline-modern-business-district-sun.jpg'
    } else {
      return '/lahore-pakistan-modern-business-district-skyline.jpg'
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={backgroundImage || getBackgroundImage()}
              alt={`${title} background`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{subtitle}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-wide">{title}</h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">{description}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase">
                    <Link href="/contact">
                      REQUEST A QUOTE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-bold uppercase"
                  >
                    <Link href="tel:+15551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      TALK TO SALES
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-primary-foreground/20">
                  <img
                    src={heroImage || getServiceImage()}
                    alt={`Professional ${title.toLowerCase()} service representative`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Features</h2>
              <p className="text-muted-foreground text-lg">
                Our comprehensive {title.toLowerCase()} solutions are designed to meet your unique business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & SLA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Choose Our {title}</h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA Commitments */}
              <div className="p-8 rounded-xl bg-primary text-primary-foreground">
                <h2 className="text-2xl font-bold mb-6">Our SLA Commitments</h2>
                <div className="space-y-4">
                  {slaCommitments.map((commitment) => (
                    <div key={commitment} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{commitment}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/70">
                    Custom SLAs available for enterprise clients. Contact us for tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="p-6 rounded-xl bg-background border border-border hover:border-secondary/50 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <span className="mt-2 text-sm text-primary flex items-center gap-1 group-hover:text-secondary transition-colors">
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started with {title}?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today for a free consultation and custom quote tailored to your business needs.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
