import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import QuoteStrip from '@/components/quote-strip'
import LeadershipSection from '@/components/leadership-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QuoteStrip />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
