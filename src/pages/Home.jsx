import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}
      <WhyChooseUs />
      <Services />
    </>
  )
}

export default Home
