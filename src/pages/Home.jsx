import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import Globe from '../components/Globe'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}
      <WhyChooseUs />
      <Services />
      <Globe />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
