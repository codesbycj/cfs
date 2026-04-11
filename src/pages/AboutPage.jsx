import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  UsersRound,
  TimerReset,
  Lightbulb,
  CheckCircle2,
  Quote,
  Star,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import PartnersMarquee from '../components/PartnersMarquee'
import supportImg from '../assets/support.jpg'
import groundImg from '../assets/ground.jpg'
import securityImg from '../assets/security.jpg'
import governmentImg from '../assets/government.jpg'
import backgroundImg from '../assets/background.jpg'

const galleryImages = [
  { src: supportImg, alt: 'Flight operations team' },
  { src: groundImg, alt: 'Ground handling crew' },
  { src: securityImg, alt: 'Aviation security briefing' },
  { src: governmentImg, alt: 'Executive coordination' },
]

const features = [
  {
    icon: UsersRound,
    title: 'Trusted partners',
    text: 'Global network of aviation specialists backing every mission.',
  },
  {
    icon: TimerReset,
    title: 'On-time, every time',
    text: '24/7/365 operations desk tracking every movement to the minute.',
  },
  {
    icon: Lightbulb,
    title: 'Full-service solutions',
    text: 'From permits to post-flight — one partner, every touchpoint.',
  },
]

const evolution = [
  {
    year: '2005',
    title: 'Founded in Lagos',
    text: 'Started as a focused airlines support and aviation-allied services company.',
  },
  {
    year: '2012',
    title: 'Global partner network',
    text: 'Expanded into UAE, USA, UK, China and across Africa.',
  },
  {
    year: '2018',
    title: 'Cargo GSA operations',
    text: 'Became General Sales Agents for airlines and freight forwarders into Nigeria.',
  },
  {
    year: 'Today',
    title: 'Best-in-class in Nigeria',
    text: 'Trusted by VIP operators, the UN, embassies, militaries and cargo airlines.',
  },
]

const testimonials = [
  {
    quote:
      "We've worked with CFS for over a year. Every permit, every turnaround, every debrief — detailed, well-organized and painfully on time.",
    name: 'Eliana M. Thompson',
    role: 'Charter Operations Lead',
    rating: 5,
    tone: 'from-blue-600 to-blue-800',
  },
  {
    quote:
      "I've been with them for a year. Everything is super organized, clearly documented and honestly just a relief to coordinate with into Lagos.",
    name: 'Penelope N. Harris',
    role: 'Freight Forwarder',
    rating: 4,
    tone: 'from-sky-600 to-blue-700',
  },
  {
    quote:
      "Been using their service for a year now. Everything's sharp, well-structured, and without a doubt the best ground partner we've had in Nigeria.",
    name: 'Amelia K. Hamilton',
    role: 'VIP Charter Broker',
    rating: 5,
    tone: 'from-cyan-600 to-blue-700',
  },
]

const team = [
  { name: 'Vincent Amajor', role: 'Founder & CEO', tone: 'from-blue-600 to-blue-800' },
  { name: 'Maria Chen', role: 'Head of Operations', tone: 'from-sky-600 to-blue-700' },
  { name: 'David Okafor', role: 'Flight Operations', tone: 'from-blue-700 to-indigo-800' },
  { name: 'Sarah Adeyemi', role: 'Cargo & Freight', tone: 'from-cyan-600 to-blue-700' },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

function AboutPage() {
  const [step, setStep] = useState(0)
  const prevStep = () => setStep((i) => (i === 0 ? evolution.length - 1 : i - 1))
  const nextStep = () => setStep((i) => (i === evolution.length - 1 ? 0 : i + 1))
  const current = evolution[step]

  return (
    <div className="overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gray-50 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-14 lg:pb-16 overflow-hidden">
        {/* decorative arc */}
        <svg
          className="hidden lg:block absolute top-20 right-0 w-[520px] h-[520px] text-gray-200/70 pointer-events-none"
          viewBox="0 0 520 520"
          fill="none"
        >
          <circle cx="520" cy="260" r="260" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="520" cy="260" r="200" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Top: heading */}
        <div className="relative max-w-7xl mx-auto px-5 lg:px-16 pb-12 lg:pb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0a2540] leading-[1.05] tracking-tight max-w-4xl">
            Where precision meets<br className="hidden sm:block" /> efficiency in every flight
          </h1>
        </div>

        {/* Bottom: edge-to-edge infinite marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages].map((image, idx) => (
              <div
                key={`${image.alt}-${idx}`}
                className="relative overflow-hidden w-55 sm:w-70 lg:w-125 h-75 sm:h-95 lg:h-110 mx-1.5 sm:mx-2 lg:mx-2.5 rounded-2xl lg:rounded-3xl shrink-0"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a2540]" />
            <span className="text-xs font-semibold text-[#0a2540]">Who we are</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-[1.15] tracking-tight mb-8 max-w-6xl mx-auto">
            We're more than a logistics vendor — we're your partner in making every flight
            seamless, secure and on-schedule from start to finish.
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-14 lg:mb-16">
            We go beyond coordination, providing support and expertise to make your aviation
            operations smooth, secure and stress-free from permits to post-flight.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 max-w-3xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  <Icon className="w-11 h-11 text-[#0a2540] mb-5" strokeWidth={1.25} />
                  <h3 className="text-sm font-semibold text-[#0a2540] mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-50">{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Split: image + dark evolution card */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-5 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch w-full">
            {/* Left: image with testimonial card */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-110 lg:min-h-125">
              <img
                src={backgroundImg}
                alt="CFS Logistics operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a2540]/50 via-[#0a2540]/10 to-transparent" />

              {/* Testimonial card bottom-left */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(10,37,64,0.18)] border border-gray-100">
                <p className="text-[#0a2540] text-sm leading-snug mb-3">
                  "Success grows from small steps, strong belief and steady dedication."
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-[10px]">VA</span>
                  </div>
                  <div className="text-[11px] text-gray-500">
                    <span className="font-semibold text-[#0a2540]">Vincent Amajor</span>, Founder & CEO
                  </div>
                </div>
              </div>
            </div>

            {/* Right: dark evolution carousel */}
            <div className="relative rounded-3xl bg-linear-to-br from-[#0a2540] via-blue-950 to-[#061a30] p-8 sm:p-10 lg:p-12 overflow-hidden flex flex-col min-h-110 lg:min-h-125">
              {/* Background glows */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Giant decorative year */}
              <div className="absolute -top-4 right-4 sm:right-8 lg:right-10 pointer-events-none select-none">
                <span className="block text-[120px] sm:text-[160px] lg:text-[200px] font-bold leading-none tracking-tighter bg-linear-to-b from-white/[0.08] to-transparent bg-clip-text text-transparent">
                  {current.year}
                </span>
              </div>

              {/* Top row: label + step counter */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  <span className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.15em]">The journey</span>
                </div>
                <div className="text-white/50 text-xs font-mono tabular-nums">
                  <span className="text-white font-semibold">{String(step + 1).padStart(2, '0')}</span>
                  <span className="mx-1">/</span>
                  <span>{String(evolution.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Heading */}
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white leading-tight mb-8 max-w-md">
                Our path of continuous evolution
              </h3>

              {/* Active content */}
              <div className="relative flex-1 flex flex-col justify-center pb-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-blue-300" />
                  <span className="text-blue-300 text-[11px] font-bold uppercase tracking-[0.15em]">{current.year}</span>
                </div>
                <h4 className="text-white text-2xl sm:text-3xl font-bold leading-[1.15] tracking-tight mb-3 max-w-md">
                  {current.title}
                </h4>
                <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed max-w-md">
                  {current.text}
                </p>
              </div>

              {/* Footer: progress bar + year pills + arrows */}
              <div className="relative mt-8 flex items-end justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="relative h-[3px] bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-linear-to-r from-blue-400 to-blue-200 rounded-full transition-all duration-500"
                      style={{ width: `${((step + 1) / evolution.length) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    {evolution.map((item, idx) => (
                      <button
                        key={item.year}
                        type="button"
                        onClick={() => setStep(idx)}
                        className={`text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                          idx === step ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {item.year}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-11 h-11 rounded-full bg-white text-[#0a2540] hover:bg-blue-50 flex items-center justify-center transition cursor-pointer shadow-[0_8px_24px_rgba(191,219,254,0.2)]"
                    aria-label="Next step"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        {/* subtle grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0a2540 1px, transparent 1px), linear-gradient(to bottom, #0a2540 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-16">
          <div className="mb-12 lg:mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800 mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] leading-[1.05] tracking-tight">
              Happy clients feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_8px_32px_rgba(10,37,64,0.08)] hover:shadow-[0_16px_48px_rgba(10,37,64,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-10 h-10 text-blue-800 mb-6" fill="currentColor" strokeWidth={0} />

                <p className="text-[#0a2540] text-base sm:text-lg leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-[#0a2540] font-bold text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{testimonial.role}</div>
                    <div className="flex items-center gap-0.5 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < testimonial.rating ? 'text-blue-800' : 'text-gray-200'
                          }`}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${testimonial.tone} flex items-center justify-center shrink-0 shadow-md`}
                  >
                    <span className="text-white font-bold text-sm tracking-wide">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-28 mt-20">
        <div className="max-w-8xl mx-auto px-5 lg:px-16">
          <div className="relative rounded-3xl overflow-hidden min-h-110 lg:min-h-125 flex items-center justify-center">
            {/* Background image */}
            <img
              src={supportImg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0a2540]/75 via-[#0a2540]/65 to-[#0a2540]/85" />

            {/* Content */}
            <div className="relative text-center px-6 sm:px-10 py-16 sm:py-20 lg:py-24 max-w-5xl ">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a2540]" />
                <span className="text-xs font-semibold text-[#0a2540]">Start your journey</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Let's make your next flight<br className="hidden sm:block" /> effortless and worry-free.
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0a2540] hover:bg-blue-50 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
                >
                  Contact our team
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-white hover:text-blue-200 px-5 py-3.5 text-sm font-semibold transition-all duration-300 group"
                >
                  Get a quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  )
}

export default AboutPage
