import Image from "next/image"
import { Target, Heart, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Customer First",
    description:
      "Every decision we make starts with the customer experience. We're passionate about exceeding expectations.",
  },
  {
    icon: Heart,
    title: "People Matter",
    description: "We invest in our team's growth and well-being. Happy employees create happy customers.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We encourage curiosity and provide opportunities for skill development and career advancement.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "We succeed together. Our diverse team brings different perspectives that make us stronger.",
  },
]

export function CultureSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">A Place Where You Can Thrive</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Velqa Technologies, we believe in creating an environment where talent flourishes. Our culture is built
              on respect, growth, and a shared commitment to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you&apos;re just starting your career or looking to take the next step, we provide the training,
              support, and opportunities you need to succeed.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/professional-woman-with-headset-smiling-customer-s.jpg"
                  alt="Team member"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/professional-man-at-computer-technical-support-spe.jpg"
                  alt="Team member"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/young-professional-team-meeting-collaboration-dive.jpg"
                  alt="Team collaboration"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/diverse-business-team-meeting-in-modern-conference.jpg" alt="Team culture at Velqa - modern conference meeting" className="w-full h-auto" />
            </div>
            {/* Overlay cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {values.map((value) => (
                <div key={value.title} className="p-4 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <value.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
