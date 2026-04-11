import { useState } from 'react'
import { Phone, MapPin, MessageCircle, Send, Mail, Clock } from 'lucide-react'
import contactHeroImg from '../assets/ground.jpg'

const services = [
  'Ground Handling',
  'Flight Support',
  'Freight Forwarding',
  'Aviation Security',
  'Government Executive',
  'Other',
]

function Contact() {
  const [selectedServices, setSelectedServices] = useState([])

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Hero: split copy + image */}
      <div className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-32 mb-16 sm:mb-20 lg:mb-28">
        {/* Right image - full height of hero, anchored to right edge */}
        <div className="lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[45%] order-first lg:order-last mb-10 lg:mb-0 mx-5 lg:mx-0">
          <div className="relative h-80 lg:h-full w-full overflow-hidden">
            <img
              src={contactHeroImg}
              alt="CFS Logistics operations"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a2540]/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left content */}
        <div className="relative max-w-8xl mx-auto w-full px-5 sm:px-8 lg:px-12">
          <div className="lg:max-w-[55%] lg:pr-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] leading-[1.05] tracking-tight mb-5 max-w-xl">
              Get in touch with us
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mb-10 lg:mb-12">
              Our friendly team is here to help. Reach out by phone, email or through our
              contact form, we'll get back to you promptly and make your next flight mission
              smooth from start to finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)]">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <Phone className="w-4 h-4 text-blue-800" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-[#0a2540] mb-1">Phone</h3>
                <a href="tel:+2348000000000" className="text-sm text-gray-500 hover:text-[#0a2540] transition">
                  +234 800 000 0000
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)]">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <Mail className="w-4 h-4 text-blue-800" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-[#0a2540] mb-1">Email</h3>
                <a
                  href="mailto:info@cfslogistics.com"
                  className="text-sm text-gray-500 hover:text-[#0a2540] transition break-all"
                >
                  info@cfslogistics.com
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)]">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="w-4 h-4 text-blue-800" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-[#0a2540] mb-1">Address</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Murtala Muhammed Airport, Lagos, Nigeria
                </p>
              </div>

              {/* Opening hours */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)]">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <Clock className="w-4 h-4 text-blue-800" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-[#0a2540] mb-1">Opening hours</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  24/7/365 operations desk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form section wrapper */}
      <div className="pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left decorative panel */}
              <div className="hidden lg:flex lg:col-span-2 bg-linear-to-br from-[#0a2540] via-blue-900 to-blue-800 p-10 flex-col justify-between relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Send us a message
                  </h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="relative space-y-6 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">Quick Response</p>
                      <p className="text-blue-200/70 text-xs">Average response time under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">24/7 Support</p>
                      <p className="text-blue-200/70 text-xs">We're always here to help you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Send className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">Expert Team</p>
                      <p className="text-blue-200/70 text-xs">Dedicated logistics professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                      Phone number
                    </label>
                    <div className="flex">
                      <select className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl px-3 py-3.5 text-sm text-[#0a2540] focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 transition appearance-none">
                        <option>NG</option>
                        <option>US</option>
                        <option>UK</option>
                        <option>GH</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className="w-full bg-gray-50 border border-gray-200 rounded-r-xl px-4 py-3.5 text-sm text-[#0a2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your project or logistics needs..."
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0a2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 focus:bg-white transition resize-y"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0a2540] mb-3">
                      Services
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {services.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-2.5 cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-200 border ${
                            selectedServices.includes(service)
                              ? 'bg-blue-50 border-blue-800/30 text-blue-900'
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => toggleService(service)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800/20 accent-blue-800"
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white py-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 active:scale-[0.99]"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
