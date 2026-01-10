import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const services = [
  { name: "Call Center & BPO", href: "/services/call-center" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "Email Support", href: "/services/email-support" },
  { name: "Live Chat Support", href: "/services/live-chat" },
  { name: "Order Management", href: "/services/order-management" },
  { name: "Back-Office Services", href: "/services/back-office" },
]

const company = [
  { name: "About Us", href: "/about", external: false },
  { name: "Industries", href: "/industries", external: false },
  { name: "Velqa Publishers", href: "https://velqapublishers.com/index.html", external: true },
  { name: "Careers", href: "/careers", external: false },
  { name: "Contact", href: "/contact", external: false },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-5 inline-block shadow-lg border-2 border-white/20">
              <img 
                src="/logo.jpg" 
                alt="Velqa Technologies Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Enterprise-grade BPO and customer experience solutions. Delivering exceptional service quality with 24/7
              global support.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              {/* USA Office */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">USA HEADQUARTERS</span>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    1463 Coffeen Avenue STE 1200
                    <br />
                    Sheridan, Wyoming 82801, US
                  </span>
                </div>
              </div>

              {/* Pakistan Office */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">PAKISTAN OPERATIONS</span>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Business District Operations Center<br />
                    Karachi, Pakistan
                  </span>
                </div>
              </div>

              {/* Thailand Office */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">THAILAND OPERATIONS</span>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Sukhumvit Business Center, Floor 15<br />
                    142 Sukhumvit Road, Khlong Toei<br />
                    Bangkok 10110, Thailand
                  </span>
                </div>
              </div>

              {/* Vietnam Office */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">VIETNAM OPERATIONS</span>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    District 1 Business Hub<br />
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>Velqatechnologies@outlook.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>Velqapublishers@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Velqa Technologies LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
