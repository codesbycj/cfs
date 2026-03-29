import { useEffect, useState } from 'react'
import movingVid from '../assets/moving.mp4'

const words = ['goods', 'cargo', 'freight', 'shipments']

function Globe() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="p-2 lg:px-13 bg-white">
      <div className="relative bg-black overflow-hidden rounded-2xl lg:rounded-[3rem] min-h-[300px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
        {/* Video background */}
        <video
          src={movingVid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-10">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            <span className="whitespace-nowrap">We excel in moving{' '}
            <span
              className={`text-blue-500 inline-block transition-all duration-400 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {words[wordIndex]}
            </span></span>
            <br />
            reliably from one
            <br />
            destination to the next
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            Experience fast, reliable, and cost - effective logistics solutions tailored to your business.
          </p>
          <a
            href="#"
            className="mt-6 sm:mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition"
          >
            Ask for a quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Globe
