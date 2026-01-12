import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { BookOpen, PenTool, TrendingUp, Globe, Users, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Velqa Publishers | Digital Publishing Division",
  description:
    "Velqa Publishers is the digital publishing division of Velqa Technologies LLC, specializing in content creation, digital publishing, and monetization strategies.",
}

const services = [
  {
    icon: BookOpen,
    title: "Professional Editing",
    description:
      "Refining your voice through expert line editing, copy editing, and meticulous proofreading.",
  },
  {
    icon: PenTool,
    title: "Custom Book Design",
    description: "Creating eye-catching book covers and professional interior formatting for both print and digital versions.",
  },
  {
    icon: Globe,
    title: "Printing & Production",
    description: "High-quality paperback, hardcover, and specialized printing options, including yearbooks.",
  },
  {
    icon: TrendingUp,
    title: "Global Distribution",
    description: "Seamlessly listing your work on Amazon, Bookshop, and Print-on-Demand networks.",
  },
  {
    icon: BookOpen,
    title: "Digital Conversion",
    description: "Transforming your manuscript into high-standard eBooks with fixed layouts and multi-platform compatibility.",
  },
  {
    icon: Users,
    title: "Author Marketing",
    description: "Boosting visibility through metadata optimization, ads, and physical promotional materials like bookmarks and posters.",
  },
]

const capabilities = [
  "Self-Publishing Guidance",
  "Global E-Books Distribution",
  "Line & Copy Editing",
  "Hardcover & Paperback Printing",
  "eBook Conversion & Layout",
  "Audiobook Production",
  "Metadata & SEO for Authors",
  "Translation Services",
]

export default function VelqaPublishersPage() {
  // Velqa Publishers official website
  const velqaPublishersWebsite = "https://velqapublishers.com"
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Redirect Banner - Prominent CTA */}
        <div className="bg-gradient-to-r from-secondary via-orange-500 to-secondary py-4 sticky top-0 z-40 shadow-lg animate-pulse-glow">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-secondary-foreground animate-bounce" />
                <div className="text-center sm:text-left">
                  <p className="text-secondary-foreground font-bold text-lg">Visit Our Official Publishing Portal</p>
                  <p className="text-secondary-foreground/90 text-sm">Explore our full catalog and author services</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase shadow-xl hover:scale-105 transition-transform"
              >
                <a href={velqaPublishersWebsite} target="_blank" rel="noopener noreferrer">
                  GO TO VELQA PUBLISHERS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/diverse-team-of-professionals-in-modern-office-cel.jpg"
              alt="Velqa Publishers digital publishing workspace"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
                <span className="text-sm font-medium">A Division of Velqa Technologies LLC</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase tracking-wide">
                <span className="text-secondary">VELQA</span> PUBLISHERS
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-2">
                <span className="font-semibold text-secondary">Empowering Authors from Manuscript to Marketplace</span>
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Velqa Publishers is a full-service publishing division dedicated to bringing your stories to life. We provide end-to-end support for independent authors, offering professional editing, custom design, high-quality printing, and global distribution strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase">
                  <Link href="/contact">
                    PARTNER WITH US
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-bold uppercase"
                >
                  <Link href="/about">LEARN ABOUT VELQA</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Your Partner in Professional Publishing
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Velqa Publishers operates as a specialized division under Velqa Technologies LLC, bridging the gap between creative writing and professional production. Our mission is to provide independent authors with the same high-quality resources available to traditional publishing houses.
                  </p>
                  <p>
                    By combining traditional craftsmanship in book printing with modern digital distribution, we ensure your work reaches readers in every format—whether they prefer a hardcover book, an eBook, or an audiobook.
                  </p>
                </div>
              </div>
              
              {/* Stats and Trust Indicators */}
              <div className="space-y-8">
                {/* Stats Section */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
                  <h3 className="text-2xl font-bold text-center text-foreground mb-8">Velqa Publishers at a Glance</h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary/30 flex items-center justify-center mb-3">
                        <div>
                          <div className="text-2xl font-bold text-primary">50K+</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Independent authors published</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full border-4 border-secondary/30 flex items-center justify-center mb-3">
                        <div>
                          <div className="text-2xl font-bold text-secondary">5000+</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Five-star Trustpilot reviews</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full border-4 border-orange-500/30 flex items-center justify-center mb-3">
                        <div>
                          <div className="text-2xl font-bold text-orange-500">100+</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Global retail partners</p>
                    </div>
                  </div>
                  
                  {/* Media Logos */}
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-center text-sm text-muted-foreground mb-4">As seen on</p>
                    <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                      <span className="text-lg font-bold text-foreground px-3 py-1 border-r border-border/50">NBC</span>
                      <span className="text-lg font-bold text-foreground px-3 py-1 border-r border-border/50">CBS</span>
                      <span className="text-lg font-bold text-foreground px-3 py-1 border-r border-border/50">The New York Times</span>
                      <span className="text-lg font-bold text-foreground px-3 py-1">Newsweek</span>
                    </div>
                  </div>
                </div>
                
                {/* Published Books Showcase */}
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                    <h4 className="text-center font-semibold text-foreground mb-4">Published Works Showcase</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {/* Book 1 */}
                      <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/book1.webp" 
                          alt="Published book cover 1" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Book 2 */}
                      <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/book2.webp" 
                          alt="Published book cover 2" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Book 3 */}
                      <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/book3.webp" 
                          alt="Published book cover 3" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Book 4 */}
                      <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/book4.webp" 
                          alt="Published book cover 4" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">Diverse genres from independent authors worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">Publishing Services</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive support for every stage of your author journey
              </p>
            </div>
            
            {/* Circular Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center group">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105 shadow-md">
                    <service.icon className="h-12 w-12 md:h-16 md:w-16 text-primary transition-colors group-hover:text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Capabilities</h2>
                <p className="text-muted-foreground text-lg">
                  Full-Service Expertise Across the Publishing Lifecycle
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Publish Your Book?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Visit our official Velqa Publishers website to explore our complete catalog, submit your manuscript, and discover how we can help bring your story to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                >
                  <a href={velqaPublishersWebsite} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    VISIT VELQA PUBLISHERS WEBSITE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/60 text-sm mb-4">Or contact us for partnership opportunities</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                    <Link href="/contact">
                      Start a Conversation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Link href="/about">About Velqa Technologies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
