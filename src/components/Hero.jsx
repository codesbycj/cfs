import { ArrowRight, ChevronRight } from 'lucide-react'
import backgroundImg from '../assets/background.png'
import groundImg from '../assets/ground.jpg'
import supportImg from '../assets/support.jpg'
import securityImg from '../assets/security.jpg'
import governmentImg from '../assets/government.jpg'

function Hero() {
  return (
    <div className="relative min-h-screen lg:h-screen p-2 lg:px-13  bg-white flex flex-col items-center">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-2xl lg:rounded-[3rem] overflow-hidden w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 lg:from-black/70 lg:via-black/50 lg:to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full px-5 lg:px-16 pt-28 lg:pt-0 pb-10 lg:pb-0 flex flex-col justify-center overflow-hidden">
          {/* Main content */}
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            {/* Left - Text */}
            <div className="lg:w-[45%]">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight text-left">
                <span className="lg:whitespace-nowrap">Aviation Logistics</span> Without Delays.{' '}
                <span className="text-3xl sm:text-4xl lg:text-6xl text-white/40">Without Surprises.</span>
              </h1>

              <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg mt-6 lg:mt-8">
                End-to-end aviation and cargo logistics across Nigeria — from real-time shipment tracking to ground handling, flight support, and secure freight forwarding.
              </p>

              <div className="flex items-center gap-4 lg:gap-6 mt-8 lg:mt-10">
                <a
                  href="#"
                  className="group/btn inline-flex items-center gap-3 bg-white border-2 border-white text-blue-800 hover:bg-blue-800 hover:border-blue-800 hover:text-white px-5 lg:px-6 py-3 lg:py-3.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Contact Us
                  <span className="w-6 h-6 rounded-full bg-blue-800 text-white flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-white group-hover/btn:text-blue-800">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="#" className="text-white text-sm font-medium border border-white rounded-full px-5 lg:px-6 py-3 lg:py-3.5 hover:bg-white/10 transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right - Bento Grid */}
            <div className="w-full lg:w-[55%] grid grid-cols-3 grid-rows-2 gap-2 lg:gap-3 h-[280px] sm:h-[360px] lg:h-[520px]">
              {/* Ground Handling - tall left */}
              <div className="group relative row-span-2 col-span-1 overflow-hidden rounded-xl lg:rounded-2xl border border-white/10">
                <img src={groundImg} alt="Ground Handling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                  <svg className="w-5 h-5 text-white/70 mb-1 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  <h3 className="text-white font-semibold text-xs lg:text-base">Ground Handling</h3>
                </div>
              </div>

              {/* Flight Support - top wide */}
              <div className="group relative col-span-2 overflow-hidden rounded-xl lg:rounded-2xl border border-white/10">
                <img src={supportImg} alt="Flight Support" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                  <svg className="w-5 h-5 text-white/70 mb-1 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
                  </svg>
                  <h3 className="text-white font-semibold text-xs lg:text-base">Flight Support</h3>
                </div>
              </div>

              {/* Aviation Security */}
              <div className="group relative overflow-hidden rounded-xl lg:rounded-2xl border border-white/10">
                <img src={securityImg} alt="Aviation Security" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 lg:bottom-3 lg:left-3">
                  <svg className="w-4 h-4 text-white/70 mb-1 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                  <h3 className="text-white font-semibold text-[10px] lg:text-sm">Aviation Security</h3>
                </div>
              </div>

              {/* Government Executive */}
              <div className="group relative overflow-hidden rounded-xl lg:rounded-2xl border border-white/10">
                <img src={governmentImg} alt="Government Executive" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 lg:bottom-3 lg:left-3">
                  <svg className="w-4 h-4 text-white/70 mb-1 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 8h2v10H2v2h20v-2h-2V8h2L12 3zm0 2.74L17.12 8H6.88L12 5.74zM6 10h2v8H6v-8zm4 0h4v8h-4v-8zm6 0h2v8h-2v-8z" />
                  </svg>
                  <h3 className="text-white font-semibold text-[10px] lg:text-sm">Gov. Executive</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
