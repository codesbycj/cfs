import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Plane,
  HeartPulse,
  Users,
  Compass,
  FileCheck,
  Package,
  Fuel,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { services } from '../data/services'

const iconMap = {
  'vip-aircraft-charter': Plane,
  'air-ambulance': HeartPulse,
  'passenger-services': Users,
  'flight-support': Compass,
  permits: FileCheck,
  'cargo-services': Package,
  'aircraft-fueling': Fuel,
}

// Bento sizing for lg screens (4-col grid, 3 rows)
const bentoClass = [
  'lg:col-span-2 lg:row-span-2', // 0: VIP Charter - big featured
  'lg:col-span-2 lg:row-span-1', // 1: Air Ambulance - wide
  'lg:col-span-1 lg:row-span-1', // 2: Passenger
  'lg:col-span-1 lg:row-span-1', // 3: Flight Support
  'lg:col-span-2 lg:row-span-1', // 4: Permits - wide
  'lg:col-span-1 lg:row-span-1', // 5: Cargo
  'lg:col-span-1 lg:row-span-1', // 6: Fueling
]

function ServicesPage() {
  return (
    <div className="overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Minimal hero */}
      <section className="pt-36 sm:pt-40 lg:pt-44 pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-800" />
            <span className="text-sm font-semibold text-blue-800">What we do</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] leading-tight mb-5 tracking-tight">
            Our services
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            End-to-end aviation services covering VIP charter, medical evacuation, permits,
            cargo, fueling and more — delivered 24/7/365 across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Bento grid - box style */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-24 rounded-t-[2.5rem] lg:rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px] gap-4 lg:gap-5">
            {services.map((service, idx) => {
              const Icon = iconMap[service.slug] || Plane
              const isFeatured = idx === 0
              const isWide = bentoClass[idx].includes('col-span-2') && !isFeatured

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)] hover:shadow-[0_12px_40px_rgba(10,37,64,0.15)] hover:-translate-y-1 transition-all duration-300 ${bentoClass[idx]}`}
                >
                  {isFeatured ? (
                    /* Large 2x2 featured - vertical with big image */
                    <div className="flex flex-col h-full">
                      <div className="relative h-[55%] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5 text-blue-800" />
                        </div>
                      </div>
                      <div className="flex-1 p-6 lg:p-8 flex flex-col">
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#0a2540] leading-tight mb-3 group-hover:text-blue-800 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-auto">
                          {service.tagline}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 group-hover:gap-3 transition-all duration-300">
                          Learn more
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ) : isWide ? (
                    /* Wide 2x1 - horizontal with image on left */
                    <div className="flex h-full">
                      <div className="relative w-[42%] overflow-hidden shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-4 h-4 text-blue-800" />
                        </div>
                      </div>
                      <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
                        <h3 className="text-lg lg:text-xl font-bold text-[#0a2540] leading-tight mb-2 group-hover:text-blue-800 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs lg:text-sm leading-relaxed line-clamp-2 mb-3">
                          {service.tagline}
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-blue-800 group-hover:gap-3 transition-all duration-300">
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Regular 1x1 - vertical with image on top */
                    <div className="flex flex-col h-full">
                      <div className="relative h-[55%] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-4 h-4 text-blue-800" />
                        </div>
                      </div>
                      <div className="flex-1 p-5 flex flex-col">
                        <h3 className="text-base lg:text-lg font-bold text-[#0a2540] leading-tight mb-1.5 group-hover:text-blue-800 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-auto">
                          {service.tagline}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-800 group-hover:gap-3 transition-all duration-300">
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="rounded-3xl bg-linear-to-br from-[#0a2540] via-blue-900 to-blue-800 p-10 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Let's make your next flight effortless.
                </h2>
                <p className="text-blue-200/80 text-base sm:text-lg leading-relaxed">
                  Share your itinerary and our team will respond within 2 hours with a
                  tailored plan for your operation.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shrink-0"
              >
                Request a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage
