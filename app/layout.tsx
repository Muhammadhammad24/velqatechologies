import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const geistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL('https://velqatechnologies.com'),
  title: {
    default: "Velqa Technologies LLC | #1 Enterprise BPO & Customer Experience Solutions",
    template: "%s | Velqa Technologies LLC"
  },
  description:
    "🏆 Award-winning BPO services trusted by Fortune 500 companies. 24/7 enterprise call center, customer support, email & chat support, order management. 99.8% satisfaction rate. USA & Pakistan operations. Get free consultation today!",
  keywords: [
    "BPO services", "call center outsourcing", "customer support services", "enterprise BPO", 
    "24/7 customer support", "email support outsourcing", "live chat support", "order management BPO",
    "back office services", "telemarketing services", "customer experience solutions", "business process outsourcing",
    "offshore customer support", "inbound call center", "outbound call center", "technical support outsourcing",
    "multilingual customer support", "e-commerce customer service", "SaaS customer support", "healthcare BPO",
    "finance customer support", "insurance BPO services", "marketplace seller support", "digital products support",
    "Velqa Technologies", "USA BPO company", "Pakistan call center", "enterprise customer service",
    "professional BPO solutions", "scalable customer support", "cost-effective outsourcing"
  ],
  authors: [{ name: "Velqa Technologies LLC" }],
  creator: "Velqa Technologies LLC",
  publisher: "Velqa Technologies LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js 14",
  applicationName: "Velqa Technologies",
  referrer: "origin-when-cross-origin",
  category: "Business Process Outsourcing",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/faviconesvg.svg", type: "image/svg+xml" },
      { url: "/favicone.png", sizes: "32x32", type: "image/png" },
      { url: "/favicone.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicone.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/faviconesvg.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velqatechnologies.com",
    siteName: "Velqa Technologies LLC",
    title: "Velqa Technologies LLC | #1 Enterprise BPO & Customer Experience Solutions",
    description: "🏆 Award-winning BPO services trusted by Fortune 500 companies. 24/7 enterprise customer support with 99.8% satisfaction rate. USA & Pakistan operations.",
    images: [
      {
        url: "/professional-call-center-floor-with-agents-working.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Professional Call Center Operations",
        type: "image/jpeg",
      },
      {
        url: "/modern-call-center-office-with-agents-wearing-head.jpg",
        width: 1200,
        height: 630,
        alt: "Velqa Technologies - Modern BPO Operations",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VelqaTech",
    creator: "@VelqaTech",
    title: "Velqa Technologies LLC | #1 Enterprise BPO Solutions",
    description: "🏆 Award-winning BPO services trusted by Fortune 500 companies. 24/7 customer support with 99.8% satisfaction rate.",
    images: ["/professional-call-center-floor-with-agents-working.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://velqatechnologies.com",
    languages: {
      'en-US': 'https://velqatechnologies.com',
      'en-GB': 'https://velqatechnologies.com/en-gb',
    },
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'facebook-domain-verification': 'your-facebook-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Velqa Technologies LLC',
    alternateName: 'Velqa Technologies',
    url: 'https://velqatechnologies.com',
    logo: 'https://velqatechnologies.com/logo.jpg',
    description: 'Award-winning BPO services trusted by Fortune 500 companies. 24/7 enterprise customer support with 99.8% satisfaction rate.',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Velqa Technologies Founders'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        email: 'info@velqatechnologies.com',
        contactType: 'customer service',
        availableLanguage: ['English'],
        areaServed: 'Worldwide'
      }
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '1463 Coffeen Avenue STE 1200',
        addressLocality: 'Sheridan',
        addressRegion: 'Wyoming',
        postalCode: '82801',
        addressCountry: 'US',
        description: 'USA Headquarters'
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressRegion: 'Pakistan',
        description: 'Pakistan Operations Center'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/velqa-technologies',
      'https://twitter.com/VelqaTech',
      'https://www.facebook.com/VelqaTechnologies'
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'BPO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Call Center & BPO Services',
            description: 'Comprehensive inbound and outbound call center services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Customer Support Services',
            description: 'Professional 24/7 customer support solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Email Support Services',
            description: 'Efficient email support and ticket resolution'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Velqa Technologies" />
        <meta name="application-name" content="Velqa Technologies" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
