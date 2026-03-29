import { Check, CheckCircle } from 'lucide-react'

const comparisons = [
  {
    others: {
      title: 'Generic Strategies',
      description: 'One-size-fits-all solutions that lack personalized insights and flexibility.',
    },
    ours: {
      title: 'Tailored Consulting',
      description: 'Custom strategies designed to fit your unique business needs and goals.',
    },
  },
  {
    others: {
      title: 'Delayed Responses',
      description: 'Slow turnaround times and limited availability for urgent needs.',
    },
    ours: {
      title: '24/7 Availability',
      description: 'Round-the-clock support with rapid response times for all operations.',
    },
  },
  {
    others: {
      title: 'Limited Coverage',
      description: 'Restricted to specific regions with minimal global partnerships.',
    },
    ours: {
      title: 'Nationwide & Global Reach',
      description: 'Operations across Nigeria with 120+ global partners in 45+ countries.',
    },
  },
]

const partners = [
  'FAAN', 'NCAA', 'NAHCO', 'SAHCO', 'First Transport'
]

function WhyChooseUs() {
  return (
    <section className="bg-white py-5 sm:py-10 lg:py-20">
      {/* Partners marquee */}
      <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center mb-14 lg:mb-18">
        <p className="text-gray-500 text-sm font-medium mb-8">We've partnered with:</p>
        <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap opacity-40">
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <span key={i} className="text-lg lg:text-xl font-bold text-gray-900 tracking-wide mx-8 lg:mx-16 shrink-0">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="text-center mb-4 lg:mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-800" />
            <span className="text-sm font-semibold text-blue-800">Why choose us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            Expert logistics tailored to<br />your business success
          </h2>
        </div>

        {/* Comparison card */}
        <div className="rounded-2xl lg:rounded-3xl border border-gray-200 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl lg:rounded-3xl overflow-hidden bg-linear-to-r from-white from-50% to-blue-300 relative p-2">
            {/* Other Firms */}
            <div className="p-8 lg:p-12">
              <h3 className="text-xl lg:text-2xl font-bold text-[#0a2540] mb-10">Other Firms</h3>
              <div className="space-y-8">
                {comparisons.map((item) => (
                  <div key={item.others.title} className="flex gap-4">
                    <Check className="w-5 h-5 text-gray-300 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-bold text-[#0a2540] text-lg mb-1">{item.others.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.others.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* With CFS */}
            <div className="relative p-8 lg:p-12 rounded-2xl lg:rounded-3xl  bg-white shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)]">
              <h3 className="text-xl lg:text-2xl font-bold text-[#0a2540] mb-10">With CFS Logistics</h3>
              <div className="space-y-8">
                {comparisons.map((item) => (
                  <div key={item.ours.title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0a2540] text-lg mb-1">{item.ours.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.ours.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
