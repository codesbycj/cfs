import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import MapSection from '../components/MapSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Contact />
      <MapSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default ContactPage
