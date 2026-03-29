import { ArrowRight } from 'lucide-react'
import contactImg from '../assets/security.jpg'

function Contact() {
  return (
    <section className="bg-blue-900 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm font-semibold text-white">Contact us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10">
              Get in touch with our experts team
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/30 transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/30 transition"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white/50 text-sm focus:outline-none focus:border-white/30 transition"
                />
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white/50 text-sm focus:outline-none focus:border-white/30 transition appearance-none *:text-black">
                  <option value="">Service...</option>
                  <option value="ground">Ground Handling</option>
                  <option value="flight">Flight Support</option>
                  <option value="freight">Freight Forwarding</option>
                  <option value="security">Aviation Security</option>
                  <option value="government">Government Executive</option>
                </select>
              </div>
              <select className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white/50 text-sm focus:outline-none focus:border-white/30 transition appearance-none *:text-black">
                <option value="">Budget...</option>
                <option value="small">Under $5,000</option>
                <option value="medium">$5,000 - $20,000</option>
                <option value="large">$20,000 - $50,000</option>
                <option value="enterprise">$50,000+</option>
              </select>
              <textarea
                placeholder="How Can We Help?"
                rows={4}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/30 transition resize-y"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition cursor-pointer"
              >
                Submit your Form
                <span className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden">
            <img
              src={contactImg}
              alt="Contact us"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
