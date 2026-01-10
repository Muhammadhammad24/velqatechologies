"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const services = [
  { name: "Call Center & BPO", href: "/services/call-center" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "Email Support", href: "/services/email-support" },
  { name: "Live Chat Support", href: "/services/live-chat" },
  { name: "Order Management", href: "/services/order-management" },
  { name: "Back-Office Services", href: "/services/back-office" },
]

const industries = [
  { name: "E-commerce & Retail", href: "/industries/ecommerce" },
  { name: "Tech & SaaS", href: "/industries/tech-saas" },
  { name: "Finance & Insurance", href: "/industries/finance" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Marketplace Sellers", href: "/industries/marketplace" },
  { name: "Digital Products", href: "/industries/digital-products" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden md:block bg-primary text-primary-foreground transition-all duration-300 overflow-hidden",
          scrolled ? "max-h-0 py-0" : "max-h-20 py-2",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Phone className="h-3 w-3" />
              +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Mail className="h-3 w-3" />
              Velqatechnologies@outlook.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-80">📍 1463 Coffeen Avenue STE 1200, Sheridan, WY 82801, US</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium animate-pulse-glow">
              24/7 Support Available
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Velqa Technologies Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-bold text-foreground/80 hover:text-foreground transition-colors group uppercase tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-bold text-foreground/80 hover:text-foreground transition-colors group uppercase tracking-wide">
                SERVICES
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 animate-scale-in">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full font-medium uppercase">
                    ALL SERVICES
                  </Link>
                </DropdownMenuItem>
                <div className="my-1 h-px bg-border" />
                {services.map((service, index) => (
                  <DropdownMenuItem
                    key={service.href}
                    asChild
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Link href={service.href} className="w-full uppercase">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-bold text-foreground/80 hover:text-foreground transition-colors group uppercase tracking-wide">
                INDUSTRIES
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 animate-scale-in">
                <DropdownMenuItem asChild>
                  <Link href="/industries" className="w-full font-medium uppercase">
                    ALL INDUSTRIES
                  </Link>
                </DropdownMenuItem>
                <div className="my-1 h-px bg-border" />
                {industries.map((industry, index) => (
                  <DropdownMenuItem
                    key={industry.href}
                    asChild
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Link href={industry.href} className="w-full uppercase">
                      {industry.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {[
              { href: "https://velqapublishers.com/index.html", label: "VELQA PUBLISHERS", external: true },
              { href: "/careers", label: "CAREERS", external: false },
              { href: "/contact", label: "CONTACT", external: false },
            ].map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-bold text-foreground/80 hover:text-foreground transition-colors group uppercase tracking-wide"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-bold text-foreground/80 hover:text-foreground transition-colors group uppercase tracking-wide"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-ripple hover:scale-105 transition-transform"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "h-6 w-6 absolute inset-0 transition-all duration-300",
                  mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "h-6 w-6 absolute inset-0 transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border">
            {/* ... existing mobile menu code ... */}
            <Link
              href="/"
              className="text-sm font-bold text-foreground/80 hover:text-foreground animate-slide-up uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: "0.05s" }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold text-foreground/80 hover:text-foreground animate-slide-up uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: "0.1s" }}
            >
              ABOUT
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <span className="text-sm font-bold text-foreground uppercase tracking-wide">SERVICES</span>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ALL SERVICES
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Industries */}
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-sm font-bold text-foreground uppercase tracking-wide">INDUSTRIES</span>
              <div className="pl-4 space-y-2">
                <Link
                  href="/industries"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ALL INDUSTRIES
                </Link>
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://velqapublishers.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-foreground/80 hover:text-foreground animate-slide-up uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: "0.25s" }}
            >
              VELQA PUBLISHERS
            </a>
            <Link
              href="/careers"
              className="text-sm font-bold text-foreground/80 hover:text-foreground animate-slide-up uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: "0.3s" }}
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold text-foreground/80 hover:text-foreground animate-slide-up uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: "0.35s" }}
            >
              CONTACT
            </Link>

            <Button
              asChild
              className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-slide-up font-bold uppercase"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                GET STARTED
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
