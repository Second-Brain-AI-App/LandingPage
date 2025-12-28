'use client'

import { landingContent } from '@/content/landingContent'
import { motion } from 'framer-motion'

export function SocialProof() {
  const { socialProof } = landingContent

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-wide px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">{socialProof.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">{socialProof.headline}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {socialProof.testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="h-full rounded-3xl border border-gray-100 bg-gray-50 p-8 text-left shadow-md"
            >
              <p className="text-lg text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold text-gray-900">
                {testimonial.name}
                <span className="ml-2 text-gray-500">{testimonial.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
