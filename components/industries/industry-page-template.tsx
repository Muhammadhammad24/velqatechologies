import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface IndustryService {
  title: string
  description: string
}

interface IndustryPageProps {
  icon: LucideIcon
  name: string
  subtitle: string
  description: string
  challenges: string[]
  solutions: IndustryService[]
  benefits: string[]
  caseStudy?: {
    title: string
    challenge: string
    solution: string
    results: string[]
  }
  heroImage?: string
  backgroundImage?: string
}

export function IndustryPageTemplate({
  icon: Icon,
  name,
  subtitle,
  description,
  challenges,
  solutions,
  benefits,
  caseStudy,
  heroImage,
  backgroundImage,
}: IndustryPageProps) {
  // Function to get appropriate image based on industry name - USING EXISTING WORKING IMAGES
  const getIndustryImage = () => {
    const nameLower = name.toLowerCase()
    
    if (nameLower.includes('ecommerce') || nameLower.includes('retail')) {
      return '/young-professional-team-meeting-collaboration-dive.jpg'
    } else if (nameLower.includes('tech') || nameLower.includes('saas')) {
      return '/professional-man-at-computer-technical-support-spe.jpg'
    } else if (nameLower.includes('finance') || nameLower.includes('insurance')) {
      return '/new-york-city-skyline-modern-business-district-sun.jpg'
    } else if (nameLower.includes('healthcare')) {
      return '/friendly-customer-support-representative-helping-c.jpg'
    } else if (nameLower.includes('marketplace')) {
      return '/diverse-professional-team-collaborating-in-modern-.jpg'
    } else if (nameLower.includes('digital')) {
      return '/diverse-team-of-professionals-in-modern-office-cel.jpg'
    } else {
      return '/professional-female-call-center-agent-with-headset.jpg'
    }
  }

  const getIndustryBackground = () => {
    const nameLower = name.toLowerCase()
    
    if (nameLower.includes('ecommerce') || nameLower.includes('retail')) {
      return '/diverse-business-team-meeting-in-modern-conference.jpg'
    } else if (nameLower.includes('tech') || nameLower.includes('saas')) {
      return '/modern-call-center-office-with-agents-wearing-head.jpg'
    } else if (nameLower.includes('finance') || nameLower.includes('insurance')) {
      return '/modern-corporate-office-building-glass-facade-prof.jpg'
    } else if (nameLower.includes('healthcare')) {
      return '/professional-woman-with-headset-smiling-customer-s.jpg'
    } else if (nameLower.includes('marketplace')) {
      return '/professional-call-center-floor-with-agents-working.jpg'
    } else if (nameLower.includes('digital')) {
      return '/lahore-pakistan-modern-business-district-skyline.jpg'
    } else {
      return '/professional-call-center-agent-with-headset-talkin.jpg'
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
              src={backgroundImage || getIndustryBackground()}
              alt={`${name} industry background`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-wide">{name}</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">{description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase">
                  <Link href="/contact">
                    GET INDUSTRY SOLUTIONS
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
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Industry Challenges
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  We Understand Your Challenges
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every industry has unique customer service challenges. Our specialized teams are trained to handle the
                  specific needs and complexities of {name.toLowerCase()} businesses.
                </p>
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-square rounded-xl bg-muted/50 border border-border overflow-hidden">
                <img
                  src={heroImage || getIndustryImage()}
                  alt={`${name} industry professional environment`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">Tailored for {name}</h2>
              <p className="text-muted-foreground text-lg">
                Industry-specific services designed to address your unique requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => (
                <Card key={solution.title} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why {name} Companies Choose Velqa
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        {caseStudy && (
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Success Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">{caseStudy.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3 text-secondary">The Challenge</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-secondary">Our Solution</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <h3 className="font-semibold mb-4 text-secondary">Results</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {caseStudy.results.map((result) => (
                      <div
                        key={result}
                        className="p-4 rounded-lg bg-primary-foreground/10 text-center text-primary-foreground"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Elevate Your {name} Customer Experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our industry specialists for a customized solution that addresses your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
