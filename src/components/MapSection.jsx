import { MapPin, ArrowUpRight } from 'lucide-react'

function MapSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Map */}
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[450px] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.674!2d3.3211!3d6.5765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sMurtala%20Muhammed%20International%20Airport!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CFS Logistics Location"
              className="absolute inset-0"
            />
            {/* Map overlay card */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0a2540]">CFS Logistics</p>
                  <p className="text-xs text-gray-400">Aviation & Cargo Solutions</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Lagos, Nigeria</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-800 mt-2 hover:underline"
              >
                Open Google Maps
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right - Location Info */}
          <div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight mt-3 mb-8">
              Connecting Near<br />and Far
            </h2>

            {/* Headquarters */}
            <div>
              <h3 className="text-lg font-semibold text-[#0a2540] mb-4">
                Headquarters
              </h3>
              <div className="space-y-1 text-sm text-gray-500 leading-relaxed">
                <p className="font-medium text-[#0a2540]">CFS Logistics</p>
                <p>Lagos, Nigeria</p>
                <p>Murtala Muhammed International Airport</p>
                <p>Ikeja, Lagos</p>
                <p>Nigeria</p>
              </div>
            </div>

            {/* Support categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
              <div>
                <h4 className="text-sm font-semibold text-[#0a2540] mb-2">
                  Customer Support
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0a2540] mb-2">
                  Feedback &amp; Suggestions
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We value your feedback and are continuously working to improve CFS. Your input is crucial.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0a2540] mb-2">
                  Media Inquiries
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  For media-related questions or press inquiries, please contact us at media@cfslogistics.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
