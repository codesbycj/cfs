import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-4 sm:top-7 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 lg:px-0">
      <nav className="w-[90%] lg:w-[60%] rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-white text-lg sm:text-2xl font-bold">CFS Logistics</Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300 transition">Services</a></li>
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

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/10 px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-1 text-white/90 text-base font-medium">
              <li>
                <a href="#" className="block py-3 px-3 rounded-lg hover:bg-white/10 hover:text-blue-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="block py-3 px-3 rounded-lg hover:bg-white/10 hover:text-blue-300 transition">
                  Services
                </a>
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
