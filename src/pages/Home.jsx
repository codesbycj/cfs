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
    <>
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}
      <WhyChooseUs />
      <Services />
      <Globe />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
