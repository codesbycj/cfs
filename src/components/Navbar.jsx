import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ArrowRight,
  Plane,
  HeartPulse,
  Users,
  Compass,
  FileCheck,
  Package,
  Fuel,
  Sparkles,
} from 'lucide-react'
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <div className="fixed top-4 sm:top-7 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 lg:px-0">
      <nav className="relative w-[90%] lg:w-[60%] rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-white text-lg sm:text-2xl font-bold">CFS Logistics</Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <li><Link to="/about" className="hover:text-blue-300 transition">About Us</Link></li>

            <li
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 hover:text-blue-300 transition"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>
            </li>

            <li><Link to="/contact" className="hover:text-blue-300 transition">Contact Us</Link></li>
          </ul>

          {/* CTA Button */}
          <a
            href="#"
            className="hidden md:inline-block bg-blue-800 hover:bg-blue-900 text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition"
          >
            Get A Quote
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mega menu - spans full navbar width */}
        <div
          onMouseEnter={openServices}
          onMouseLeave={scheduleClose}
          className={`hidden md:block absolute left-0 right-0 top-full pt-4 transition-all duration-300 z-50 ${
            servicesOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-[0_24px_60px_rgba(10,37,64,0.18)] border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
              {/* Left: services grid */}
              <div className="p-6 lg:p-7">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800 mb-4 px-2">
                  All services
                </div>
                <ul className="grid grid-cols-2 gap-1.5">
                  {services.map((service) => {
                    const Icon = iconMap[service.slug] || Plane
                    return (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <span className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover/item:bg-blue-100 transition-colors">
                            <Icon className="w-4 h-4 text-blue-800" strokeWidth={1.75} />
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[#0a2540] leading-tight mb-0.5 group-hover/item:text-blue-800 transition-colors">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-gray-500 leading-snug line-clamp-2">
                              {service.tagline}
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Right: featured card */}
              <div className="relative bg-linear-to-br from-[#0a2540] via-blue-900 to-[#0a2540] p-6 lg:p-7 flex flex-col overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-2.5 py-1 mb-4">
                    <Sparkles className="w-3 h-3 text-blue-300" />
                    <span className="text-[9px] font-bold text-blue-200 uppercase tracking-wider">24/7 desk</span>
                  </div>
                  <h4 className="text-white text-lg font-bold leading-tight mb-2">
                    Need a custom plan?
                  </h4>
                  <p className="text-blue-200/80 text-xs leading-relaxed mb-6">
                    Our team builds tailored aviation solutions for any mission, fleet or cargo.
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setServicesOpen(false)}
                  className="relative mt-auto inline-flex items-center justify-center gap-1.5 bg-white text-[#0a2540] hover:bg-blue-50 text-xs font-semibold px-4 py-3 rounded-lg transition-colors group/cta"
                >
                  Talk to our team
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-100 px-6 lg:px-7 py-3 bg-gray-50">
              <span className="text-[11px] text-gray-500">
                Trusted by VIP operators, the UN, embassies & cargo airlines
              </span>
              <Link
                to="/services"
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-800 hover:gap-2 transition-all"
              >
                View all
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/10 px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-1 text-white/90 text-base font-medium">
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-3 px-3 rounded-lg hover:bg-white/10 hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-3 px-3 rounded-lg hover:bg-white/10 hover:text-blue-300 transition cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="pl-3 py-1 space-y-1 border-l border-white/10 ml-3">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className="block py-2 px-3 text-sm rounded-lg hover:bg-white/10 hover:text-blue-300 transition"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-3 px-3 rounded-lg hover:bg-white/10 hover:text-blue-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 block text-center bg-blue-800 hover:bg-blue-900 text-white text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
