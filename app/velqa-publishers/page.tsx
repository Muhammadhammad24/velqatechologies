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
    icon: PenTool,
    title: "Content Creation",
    description:
      "Professional content development across multiple formats including articles, guides, ebooks, and multimedia content.",
  },
  {
    icon: BookOpen,
    title: "Digital Publishing",
    description: "End-to-end digital publishing services from concept to distribution across major platforms.",
  },
  {
    icon: TrendingUp,
    title: "Monetization Strategies",
    description: "Revenue optimization through advertising, subscriptions, affiliate marketing, and sponsored content.",
  },
  {
    icon: Globe,
    title: "Platform Management",
    description: "Manage digital presence across websites, blogs, social media, and content platforms.",
  },
  {
    icon: Users,
    title: "Audience Development",
    description: "Build and engage audiences through strategic content marketing and community management.",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Maximize content ROI through analytics-driven optimization and diversified revenue streams.",
  },
]

const capabilities = [
  "SEO-optimized content creation",
  "Multi-platform publishing",
  "Audience analytics and insights",
  "Revenue stream diversification",
  "Content calendar management",
  "Brand partnership facilitation",
  "Social media content strategy",
  "Email newsletter management",
]

export default function VelqaPublishersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Our digital publishing division creates, manages, and monetizes high-quality digital content. From
                content creation to audience development, we help build sustainable digital media businesses.
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
                  Digital Publishing Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Velqa Publishers operates as a DBA (Doing Business As) under Velqa Technologies LLC, representing
                    our expansion into the digital content and publishing space.
                  </p>
                  <p>
                    Leveraging our operational expertise and global team, Velqa Publishers creates and monetizes digital
                    content across multiple platforms and formats. Our approach combines quality content creation with
                    data-driven monetization strategies.
                  </p>
                  <p>
                    Whether {"you're"} looking to establish a digital content presence, optimize existing properties, or
                    explore content partnerships, Velqa Publishers brings the resources and expertise to succeed.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/young-professional-team-meeting-collaboration-dive.jpg" alt="Velqa Publishers content creation team" className="w-full h-auto" />
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
                Comprehensive digital publishing services from content creation to monetization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
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
                  Full-service digital publishing expertise across the content lifecycle.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Interested in Content Partnerships?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Whether {"you're"} looking for content creation services, want to monetize your existing properties, or
                explore acquisition opportunities, {"we'd"} love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
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
        </section>
      </main>
      <Footer />
    </div>
  )
}
