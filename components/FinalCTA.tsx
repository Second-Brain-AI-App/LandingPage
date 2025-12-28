'use client'

import { landingContent } from '@/content/landingContent'
import { MagneticButton } from '@/components/MagneticButton'

export function FinalCTA() {
  const { finalCta } = landingContent

  return (
    <section id="cta" className="bg-dark-gradient py-24 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <p className="text-4xl font-bold sm:text-5xl">
          {finalCta.headline}{' '}
          <span className="bg-text-gradient bg-clip-text text-transparent">{finalCta.accent}</span>
        </p>
        <p className="mt-6 text-lg text-gray-300">{finalCta.subtext}</p>
        <div className="mt-10 flex justify-center">
          <MagneticButton href={finalCta.ctaHref} variant="light">
            {finalCta.ctaLabel}
          </MagneticButton>
        </div>
        <p className="mt-4 text-sm font-medium text-gray-400">{finalCta.helper}</p>
      </div>
    </section>
  )
}
