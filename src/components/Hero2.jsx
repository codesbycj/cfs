import { useState } from 'react'
import groundImg from '../assets/ground.jpg'
import supportImg from '../assets/support.jpg'
import securityImg from '../assets/security.jpg'
import governmentImg from '../assets/government.jpg'

const services = [
  {
    id: 1,
    title: 'Ground Handling',
    subtitle: 'Global Operations',
    description:
      'Over almost 30 years, our 24/7 team has set the benchmark for ground handling excellence on a global scale. Every client receives a tailored, world-class experience.',
    image: groundImg,
    stat: '30+',
    statLabel: 'Years of Excellence',
  },
  {
    id: 2,
    title: 'Flight Support',
    subtitle: 'Worldwide Network',
    description:
      'Our Operations department has built trust-based partnerships with agents worldwide, delivering the most efficient flight support services whenever and wherever you need them.',
    image: supportImg,
    stat: '120+',
    statLabel: 'Global Partners',
  },
  {
    id: 3,
    title: 'Aviation Security',
    subtitle: 'Mission Critical',
    description:
      'Flight safety assurance has always been essential to our Security Services division. Our teams undergo intensive, government-certified training to protect every operation.',
    image: securityImg,
    stat: '24/7',
    statLabel: 'Active Protection',
  },
  {
    id: 4,
    title: 'Government & Executive',
    subtitle: 'Special Operations',
    description:
      'Certified expertise in ground and flight support for governmental and military flights. Our special operations team delivers with precision, discretion, and speed.',
    image: governmentImg,
    stat: '40+',
    statLabel: 'Countries Served',
  },
]

function Hero2() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-[#060b18] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-600/70 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Precision-Driven Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Interactive showcase */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left - Tabs */}
          <div className="lg:w-[40%] flex flex-col gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActive(index)}
                className={`group relative text-left px-6 py-5 rounded-xl transition-all duration-300 cursor-pointer ${
                  active === index
                    ? 'bg-white/[0.07] border border-white/10'
                    : 'hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs uppercase tracking-widest mb-1 transition-colors ${
                      active === index ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {service.subtitle}
                    </p>
                    <h3 className={`text-xl font-semibold transition-colors ${
                      active === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow indicator */}
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      active === index
                        ? 'text-blue-600 translate-x-0 opacity-100'
                        : 'text-gray-600 -translate-x-2 opacity-0 group-hover:opacity-50'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Active indicator bar */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-blue-600 transition-all duration-300 ${
                    active === index ? 'h-10 opacity-100' : 'h-0 opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right - Content display */}
          <div className="lg:w-[60%] lg:pl-12">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Image */}
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                {services.map((service, index) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      active === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-[#060b18] via-[#060b18]/40 to-transparent" />

                {/* Stat badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 text-center">
                  <p className="text-2xl font-bold text-white">{services[active].stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-blue-600/80">{services[active].statLabel}</p>
                </div>
              </div>

              {/* Info panel */}
              <div className="relative bg-white/[0.03] px-8 py-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {services[active].title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {services[active].description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition group"
                >
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '30+', label: 'Years Experience' },
            { value: '120+', label: 'Global Partners' },
            { value: '45+', label: 'Countries' },
            { value: '24/7', label: 'Operations' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero2
