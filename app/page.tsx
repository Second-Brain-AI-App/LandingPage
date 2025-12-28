import { Navigation } from '@/components/Navigation'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { FeatureGrid } from '@/components/FeatureGrid'
import { UseCasesCarousel } from '@/components/UseCasesCarousel'
import { SocialProof } from '@/components/SocialProof'
import { PainPoints } from '@/components/PainPoints'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeatureGrid />
      <UseCasesCarousel />
      <SocialProof />
      <PainPoints />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
