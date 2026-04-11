import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does your logistics process work?',
    answer: 'We start with a consultation to understand your cargo needs, then design a tailored logistics plan covering ground handling, flight support, and freight forwarding. Our team manages every step from pickup to delivery.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in aviation logistics, cargo freight, ground handling, flight support services, and government executive transport across Nigeria and 45+ countries worldwide.',
  },
  {
    question: 'How long does it take to process shipments?',
    answer: 'Processing times vary by service type. Domestic shipments typically take 24-48 hours, while international freight forwarding can take 3-7 business days depending on the destination and customs requirements.',
  },
  {
    question: 'Do you offer one-time shipment services?',
    answer: 'Yes, we handle both one-time shipments and ongoing logistics partnerships. Whether you need a single cargo delivery or a long-term logistics solution, we have you covered.',
  },
  {
    question: 'Can small businesses afford your services?',
    answer: 'Absolutely. We offer flexible pricing and scalable solutions designed to fit businesses of all sizes, from startups to large enterprises. Contact us for a custom quote tailored to your budget.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through our contact form or call us directly. Our team will schedule a consultation to understand your needs and provide a detailed quote within 24 hours.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 lg:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-gray-700">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            Answers to your most<br />common questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <span className="text-base sm:text-lg font-medium text-[#0a2540] pr-8">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
