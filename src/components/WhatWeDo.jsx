import { Package, Truck, Plane } from 'lucide-react'

const features = [
  { icon: Truck, label: 'Quality Moving' },
  { icon: Package, label: 'On-Time Delivery' },
  { icon: Package, label: 'Reliable Service Fee' },
  { icon: Plane, label: '24/7 Online Support' },
]

const services = [
  {
    number: '01',
    icon: Package,
    title: 'Sending parcel',
    description:
      'Thanks to our advanced tech systems and a highly skilled team, including dedicated supply chain specialists.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'Moving anything',
    description:
      'With our cutting-edge infrastructure and expert staff, including professionals focused on supply solutions.',
  },
  {
    number: '03',
    icon: Plane,
    title: 'Air freight',
    description:
      'Backed by top-tier technology and a seasoned team that features specialists in the supply chain sector.',
  },
]

function WhatWeDo() {
  return (
    <section className="bg-gray-50">
      {/* Feature bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5 px-3 sm:px-4 text-center border-b md:border-b-0 border-gray-200 ${
                index % 2 === 0 ? 'border-r border-gray-200' : ''
              } ${index < 2 ? 'md:border-r' : ''} ${index === 2 ? 'md:border-r' : ''}`}
            >
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-800 shrink-0" />
              <span className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-[#0a2540]">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-800">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight mt-4">
            We guarantee fast and<br />safe transport.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {services.map((service) => (
            <div key={service.number} className="text-left">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl border-2 border-blue-800 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-800" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-bold text-[#0a2540] border border-[#0a2540] rounded-full w-8 h-8 flex items-center justify-center">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
