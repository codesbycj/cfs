import { Smile } from 'lucide-react'
import supportImg from '../assets/support.jpg'
import groundImg from '../assets/ground.jpg'

function DrivenByPurpose() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Decorative arc */}
      <svg
        className="hidden lg:block absolute top-10 right-0 w-[520px] h-[520px] text-gray-200/70 pointer-events-none"
        viewBox="0 0 520 520"
        fill="none"
      >
        <circle cx="520" cy="260" r="260" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-16 text-center mb-14 lg:mb-20">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a2540]" />
          <span className="text-xs font-semibold text-[#0a2540]">Driven by purpose</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold text-[#0a2540] leading-[1.15] tracking-tight">
          We're not just about aircraft and timelines, we're about trust and responsibility.
          Our mission is to make every flight mission smooth, secure and stress-free from
          the first permit filed to the final on-blocks report.
        </h2>
      </div>

      {/* Bento grid */}
      <div className="relative max-w-8xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5 lg:h-[520px]">
          {/* Top-left: yellow stat card spanning 2 cols */}
          <div className="relative lg:col-span-2 bg-[#0a2540] rounded-3xl p-8 sm:p-10 overflow-hidden min-h-64">
            <div className="absolute -top-24 -right-24 w-72 h-72 border border-white/10 rounded-full" />
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-white/10 rounded-full" />

            <div className="relative flex items-start justify-between h-full gap-6">
              <div className="max-w-sm">
                <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3">
                  Flights handled
                </div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-4 tracking-tight">
                  1,500+
                </div>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  Whether it's a single charter or a fleet rotation, we've successfully coordinated
                  thousands of aviation operations across Nigeria and beyond.
                </p>
              </div>

              {/* Decorative plane icon */}
              <svg
                className="hidden sm:block w-28 h-28 lg:w-40 lg:h-40 text-white/90 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
          </div>

          {/* Top-right: image */}
          <div className="relative rounded-3xl overflow-hidden min-h-64">
            <img src={supportImg} alt="CFS Logistics operations" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a2540]/20 to-transparent" />
          </div>

          {/* Bottom-left: image */}
          <div className="relative rounded-3xl overflow-hidden min-h-64">
            <img src={groundImg} alt="Ground handling" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a2540]/20 to-transparent" />
          </div>

          {/* Bottom-middle: years card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_24px_rgba(10,37,64,0.06)] min-h-64 flex flex-col justify-center">
            <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-3">
              Industry experience
            </div>
            <div className="text-5xl sm:text-6xl font-bold text-[#0a2540] leading-none mb-4 tracking-tight">
              18+ Years
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nearly two decades of expertise means your mission is in safe, experienced hands — from
              permits to post-flight.
            </p>
          </div>

          {/* Bottom-right: dark satisfaction card */}
          <div className="relative bg-[#0a1628] rounded-3xl p-8 sm:p-10 min-h-64 flex flex-col justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              }}
            />
            <div className="relative">
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
                Client satisfaction
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white leading-none mb-4 tracking-tight">
                98%
              </div>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-5">
                Operators, embassies and cargo partners love us for our reliability, speed and
                stress-free service.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['from-blue-400 to-blue-600', 'from-sky-400 to-blue-500', 'from-cyan-400 to-blue-500', 'from-indigo-400 to-blue-600'].map((tone, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full bg-linear-to-br ${tone} border-2 border-[#0a1628] flex items-center justify-center`}
                    >
                      <Smile className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrivenByPurpose
