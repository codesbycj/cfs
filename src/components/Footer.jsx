import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-[#0a2540]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-16 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-4">CFS Logistics</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              End-to-end aviation and cargo logistics across Nigeria with 120+ global partners in 45+ countries.
            </p>
            <div className="flex items-center gap-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
                  aria-label={social}
                >
                  <span className="text-xs font-medium text-gray-500">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Menu</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">How It Works</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Ground Handling</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Flight Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Freight Forwarding</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0a2540] transition">Aviation Security</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-500">info@cfslogistics.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-500">+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-500">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} CFS Logistics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
