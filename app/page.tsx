import Hero from '@/components/Hero'
import About from '@/components/About'
import UseCases from '@/components/UseCases'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <UseCases />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}