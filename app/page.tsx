import { Navigation } from '@/components/Navigation'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { CaptureSection } from '@/components/CaptureSection'
import { SmartNudgeSection } from '@/components/SmartNudgeSection'
import { AskSection } from '@/components/AskSection'
import { BentoSection } from '@/components/BentoSection'
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
      <CaptureSection />
      <SmartNudgeSection />
      <AskSection />
      <BentoSection />
      <PainPoints />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
