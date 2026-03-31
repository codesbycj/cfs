import { useState } from 'react'
import { Phone, MapPin, MessageCircle, Send, Mail, Clock, ArrowRight } from 'lucide-react'

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
    <section className="relative overflow-hidden">
      {/* Hero Header */}
      <div className="relative bg-linear-to-br from-[#0a2540] via-blue-900 to-[#0a2540] pt-32 pb-32 sm:pb-40 lg:pb-48">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">We'd love to hear from you</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Contact our team
          </h2>
          <p className="text-blue-200/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Got any questions about our services or scaling your logistics?
            We're here to help. Chat to our friendly team 24/7 and get onboard
            in less than 5 minutes.
          </p>
        </div>
      </div>

      {/* Content - overlaps the hero */}
      <div className="relative -mt-24 sm:-mt-32 lg:-mt-36 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12 lg:mb-16">
            {/* Chat Card */}
            <div className="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540] mb-1.5">Chat with us</h3>
              <p className="text-sm text-gray-500 mb-4">
                Speak to our friendly team via live chat.
              </p>
              <div className="space-y-2.5">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-600 transition group/link"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start a live chat
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </a>
                <a
                  href="mailto:info@cfslogistics.com"
                  className="flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-600 transition group/link"
                >
                  <Mail className="w-4 h-4" />
                  Shoot us an email
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </div>

            {/* Call Card */}
            <div className="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540] mb-1.5">Call us</h3>
              <p className="text-sm text-gray-500 mb-4">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-600 transition group/link"
              >
                <Phone className="w-4 h-4" />
                +234 800 000 0000
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
              </a>
            </div>

            {/* Visit Card */}
            <div className="group bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540] mb-1.5">Visit us</h3>
              <p className="text-sm text-gray-500 mb-4">
                Chat to us in person at our Lagos HQ.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-600 transition group/link"
              >
                <MapPin className="w-4 h-4" />
                Murtala Muhammed Airport, Lagos
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
              </a>
            </div>
          </div>

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
