import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import DrivenByPurpose from '../components/DrivenByPurpose'
import Globe from '../components/Globe'
import FAQ from '../components/FAQ'
import ContactHome from '../components/ContactHome'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}
      <WhyChooseUs />
      <Services />
      <DrivenByPurpose />
      <Globe />
      <FAQ />
      <ContactHome />
      <Footer />
    </div>
  )
}

export default Home
