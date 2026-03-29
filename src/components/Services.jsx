import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import groundImg from '../assets/ground.jpg'
import supportImg from '../assets/support.jpg'
import securityImg from '../assets/security.jpg'
import governmentImg from '../assets/government.jpg'

const services = [
  {
    title: 'Ground Handling',
    description: 'Comprehensive ground support services ensuring seamless aircraft turnaround and cargo operations.',
    image: groundImg,
  },
  {
    title: 'Flight Support',
    description: 'End-to-end flight planning and coordination with trusted partners across the globe.',
    image: supportImg,
  },
  {
    title: 'Aviation Security',
    description: 'Government-certified security teams delivering mission-critical protection for every operation.',
    image: securityImg,
  },
  {
    title: 'Executive Services',
    description: 'Premium logistics for governmental and executive flights with precision and discretion.',
    image: governmentImg,
  },
]

const cardStyles = {
  left: {
    transform: 'translateX(-60%) scale(0.75) rotate(-4deg)',
    opacity: 0.5,
    filter: 'blur(2px)',
    zIndex: 1,
  },
  center: {
    transform: 'translateX(0) scale(1) rotate(0deg)',
    opacity: 1,
    filter: 'blur(0px)',
    zIndex: 10,
  },
  right: {
    transform: 'translateX(60%) scale(0.75) rotate(4deg)',
    opacity: 0.5,
    filter: 'blur(2px)',
    zIndex: 1,
  },
  hiddenLeft: {
    transform: 'translateX(-120%) scale(0.6) rotate(-6deg)',
    opacity: 0,
    filter: 'blur(4px)',
    zIndex: 0,
  },
  hiddenRight: {
    transform: 'translateX(120%) scale(0.6) rotate(6deg)',
    opacity: 0,
    filter: 'blur(4px)',
    zIndex: 0,
  },
}

function getPosition(index, active, total) {
  const diff = ((index - active) % total + total) % total
  if (diff === 0) return 'center'
  if (diff === 1) return 'right'
  if (diff === total - 1) return 'left'
  if (diff <= total / 2) return 'hiddenRight'
  return 'hiddenLeft'
}

function Services() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? services.length - 1 : i - 1))
  const next = () => setActive((i) => (i === services.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-800" />
            <span className="text-sm font-semibold text-blue-800">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            Reliable expertise to drive your<br />greatest success
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          {services.map((service, index) => {
            const position = getPosition(index, active, services.length)
            const style = cardStyles[position]

            return (
              <div
                key={service.title}
                className="absolute w-[300px] sm:w-[400px] lg:w-[520px] h-[340px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-xl"
                style={{
                  ...style,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-8">
                  <h3 className="text-white font-bold text-lg lg:text-2xl mb-1 lg:mb-2">{service.title}</h3>
                  <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-1/2 -translate-x-[190px] sm:-translate-x-[230px] lg:-translate-x-[290px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-800 text-white flex items-center justify-center shadow-lg hover:bg-blue-900 transition cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute left-1/2 translate-x-[150px] sm:translate-x-[190px] lg:translate-x-[250px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-800 text-white flex items-center justify-center shadow-lg hover:bg-blue-900 transition cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
