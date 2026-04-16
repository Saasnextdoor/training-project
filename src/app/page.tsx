import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FloatingOrbs from '@/components/FloatingOrbs'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background decorations */}
      <FloatingOrbs />
      
      {/* Navigation */}
      <Header />
      
      {/* Sections */}
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
