import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8 sticky top-24">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <a href="tel:+15551234567" className="font-medium text-foreground hover:text-primary">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href="mailto:info@velqatechnologies.com" className="font-medium text-foreground hover:text-primary">
                info@velqatechnologies.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Support Hours</p>
              <p className="font-medium text-foreground">24/7 Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* USA Office */}
      <div className="p-6 rounded-xl bg-muted/50 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-secondary" />
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">USA HEADQUARTERS</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground">1463 Coffeen Avenue STE 1200</p>
            <p className="text-foreground">Sheridan, Wyoming 82801</p>
            <p className="text-muted-foreground text-sm mt-1">United States</p>
          </div>
        </div>
      </div>

      {/* Pakistan Office */}
      <div className="p-6 rounded-xl bg-muted/50 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-secondary" />
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">PAKISTAN OPERATIONS</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <p className="text-foreground">Business District Operations Center</p>
            <p className="text-foreground">Lahore, Punjab</p>
            <p className="text-muted-foreground text-sm mt-1">Pakistan</p>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="p-6 rounded-xl bg-primary text-primary-foreground">
        <h4 className="font-semibold mb-4">Need Immediate Assistance?</h4>
        <p className="text-sm text-primary-foreground/80 mb-4">
          Our support team is available 24/7 to help with urgent inquiries.
        </p>
        <a
          href="tel:+15551234567"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
        >
          <Phone className="h-4 w-4" />
          Call Us Now
        </a>
      </div>
    </div>
  )
}
