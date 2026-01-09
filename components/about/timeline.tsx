const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Velqa Technologies LLC established in the United States with a vision to transform BPO services.",
  },
  {
    year: "2020",
    title: "Pakistan Operations",
    description: "Opened our strategic operations center in Pakistan, enabling 24/7 global coverage.",
  },
  {
    year: "2021",
    title: "Enterprise Partnerships",
    description: "Secured major enterprise clients and began managing Walmart-level campaigns.",
  },
  {
    year: "2022",
    title: "Velqa Publishers Launch",
    description: "Launched our digital publishing division under the Velqa Publishers DBA.",
  },
  {
    year: "2023",
    title: "500+ Team Members",
    description: "Grew our team to over 500 skilled professionals across multiple locations.",
  },
  {
    year: "2024",
    title: "50M+ Interactions",
    description: "Milestone achievement of handling 50 million+ customer interactions.",
  },
]

export function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
            Building Excellence, One Milestone at a Time
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <span className="text-sm font-bold text-secondary">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-secondary md:-translate-x-1/2 mt-1" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
