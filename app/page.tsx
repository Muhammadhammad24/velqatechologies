import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { IndustriesSection } from "@/components/home/industries-section"
import { CTASection } from "@/components/home/cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOME PAGE | Enterprise BPO & Customer Experience Solutions | Velqa Technologies LLC",
  description: "🏆 Enterprise BPO & Customer Experience Solutions - Call Center & BPO Services, Email & Chat Support, Order Management & Returns, 24/7 Global Multichannel Support. Trusted by Fortune 500 companies with 99.8% satisfaction rate.",
  keywords: [
    "enterprise BPO solutions", "customer experience solutions", "call center BPO services", "email chat support",
    "order management returns", "24/7 global multichannel support", "professional customer service",
    "Fortune 500 BPO partner", "USA Pakistan operations", "99.8% satisfaction rate", "scalable customer support",
    "multilingual support services", "technical support outsourcing", "inbound outbound call center",
    "business process outsourcing", "cost effective BPO", "enterprise grade support", "customer service excellence"
  ],
  openGraph: {
    title: "HOME PAGE | Enterprise BPO & Customer Experience Solutions",
    description: "🏆 Call Center & BPO Services, Email & Chat Support, Order Management & Returns, 24/7 Global Multichannel Support",
    images: [
      {
        url: "/professional-call-center-floor-with-agents-working.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Enterprise BPO & Customer Experience Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOME PAGE | Enterprise BPO & Customer Experience Solutions",
    description: "🏆 Call Center & BPO Services, Email & Chat Support, Order Management & Returns, 24/7 Global Multichannel Support",
    images: ["/professional-call-center-floor-with-agents-working.jpg"],
  },
  alternates: {
    canonical: "https://velqatechnologies.com",
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Velqa Technologies LLC - Enterprise BPO Solutions',
    description: 'Award-winning BPO services trusted by Fortune 500 companies. 24/7 enterprise customer support with 99.8% satisfaction rate.',
    url: 'https://velqatechnologies.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Velqa Technologies LLC',
      url: 'https://velqatechnologies.com',
      logo: 'https://velqatechnologies.com/logo.jpg',
      description: 'Enterprise BPO and customer experience solutions provider',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5'
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '5',
        highPrice: '25',
        offerCount: '6',
        availability: 'https://schema.org/InStock'
      }
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://velqatechnologies.com'
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
        <main className="flex-1" role="main" aria-label="Main content">
          <HeroSection />
          <StatsSection />
          <ServicesOverview />
          <WhyChooseUs />
          <IndustriesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
