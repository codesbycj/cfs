import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Plane,
  HeartPulse,
  Users,
  Compass,
  FileCheck,
  Package,
  Fuel,
  Clock,
  ShieldCheck,
  Phone,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { services, getService } from '../data/services'

const iconMap = {
  'vip-aircraft-charter': Plane,
  'air-ambulance': HeartPulse,
  'passenger-services': Users,
  'flight-support': Compass,
  permits: FileCheck,
  'cargo-services': Package,
  'aircraft-fueling': Fuel,
}

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = iconMap[service.slug] || Plane
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-[#0a2540] via-blue-900 to-[#0a2540] pt-32 pb-32 sm:pb-40 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 max-w-5xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <Icon className="w-3.5 h-3.5 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-blue-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro with image */}
      <section className="relative -mt-24 sm:-mt-32 lg:-mt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Overview</div>
                  <div className="text-sm text-gray-500">What we deliver</div>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{service.intro}</p>
              {service.closing && (
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-5">{service.closing}</p>
              )}
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-0 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a2540]/80 via-[#0a2540]/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                    <Clock className="w-4 h-4 text-blue-200 mb-2" />
                    <div className="text-white text-sm font-semibold">24/7/365</div>
                    <div className="text-blue-100/70 text-xs">Always available</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                    <ShieldCheck className="w-4 h-4 text-blue-200 mb-2" />
                    <div className="text-white text-sm font-semibold">Certified</div>
                    <div className="text-blue-100/70 text-xs">Best-in-class</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 space-y-10 lg:space-y-12">
          {service.sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-sm font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight">
                  {section.title}
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <span className="text-[#0a2540] text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="rounded-3xl bg-linear-to-br from-[#0a2540] via-blue-900 to-blue-800 p-10 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Ready to book {service.title.toLowerCase()}?
                </h2>
                <p className="text-blue-200/80 text-base sm:text-lg leading-relaxed">
                  Share your itinerary and our team will respond within 2 hours with a tailored plan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg"
                >
                  Get a quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+2348000000000"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-800" />
                <span className="text-sm font-semibold text-blue-800">More services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a2540] leading-tight">
                Explore what else we offer
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:gap-3 transition-all duration-200"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {related.map((item) => {
              const ItemIcon = iconMap[item.slug] || Plane
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <ItemIcon className="w-4 h-4 text-blue-800" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0a2540] mb-2 group-hover:text-blue-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{item.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 group-hover:gap-3 transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}

export default ServiceDetailPage
