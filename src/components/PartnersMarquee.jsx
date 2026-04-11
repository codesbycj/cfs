import {
  Plane,
  ShieldCheck,
  Package,
  Warehouse,
  Globe2,
  Compass,
  PlaneTakeoff,
  Truck,
  Anchor,
} from 'lucide-react'

const partners = [
  { name: 'FAAN', icon: Plane },
  { name: 'NCAA', icon: ShieldCheck },
  { name: 'NAHCO', icon: Package },
  { name: 'SAHCO', icon: Warehouse },
  { name: 'IATA', icon: Globe2 },
  { name: 'ICAO', icon: Compass },
  { name: 'Emirates Cargo', icon: PlaneTakeoff },
  { name: 'DHL Express', icon: Truck },
  { name: 'Qatar Airways', icon: Anchor },
]

function PartnersMarquee({
  eyebrow = 'Trusted by',
  heading = "Companies we've worked with",
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 mb-10 lg:mb-14">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800 mb-4">
          {eyebrow}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight max-w-3xl">
          {heading}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden border-y border-gray-100 py-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee w-max">
          {[...partners, ...partners, ...partners].map((partner, idx) => {
            const Icon = partner.icon
            return (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center gap-3 mx-8 lg:mx-12 shrink-0 text-[#0a2540]"
              >
                <Icon className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.75} />
                <span className="text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PartnersMarquee
