function Navbar() {
  return (
    <div className="fixed top-4 sm:top-7 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 lg:px-0">
      <nav className="flex w-[90%] lg:w-[60%] items-center justify-between px-4 sm:px-6 lg:px-10 py-3 rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-10 h-10 bg-blue-800 rounded-md flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div> */}
          <span className="text-white text-lg sm:text-2xl font-bold">CFS Logistics</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
          <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Contact Us</a></li>
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-blue-800 hover:bg-blue-900 text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition"
        >
          Get A Quote
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
