'use client'

import { landingContent } from '@/content/landingContent'
import { motion } from 'framer-motion'

export function PainPoints() {
  const { painPoints } = landingContent

  return (
    <section className="bg-amber-50 py-24">
      <div className="mx-auto max-w-narrow px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">{painPoints.label}</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">{painPoints.headline}</h2>
        <div className="mt-12 space-y-4 text-left">
          {painPoints.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 rounded-2xl bg-white/80 p-4"
            >
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-lg text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-2xl font-semibold text-gray-900">{painPoints.reassurance}</p>
      </div>
    </section>
  )
}
