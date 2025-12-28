'use client'

import { landingContent } from '@/content/landingContent'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function FAQ() {
  const { faq } = landingContent
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-24 scroll-mt-32">
      <div className="mx-auto max-w-[768px] px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">{faq.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">{faq.headline}</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="rounded-2xl border border-gray-100">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  onClick={() => toggle(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <span
                    className={`ml-4 flex h-10 w-10 items-center justify-center rounded-2xl border text-xl transition ${
                      isOpen
                        ? 'border-amber-200 bg-amber-100 text-amber-700'
                        : 'border-gray-100 bg-gray-50 text-gray-500'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-base text-gray-600">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
