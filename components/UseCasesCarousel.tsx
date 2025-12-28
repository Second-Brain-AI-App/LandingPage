'use client'

import { landingContent } from '@/content/landingContent'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const voiceWave = [12, 8, 18, 24, 10, 20]

function VoiceInput({ listeningLabel }: { listeningLabel: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-600">
      <span className="h-2 w-2 animate-recording-pulse rounded-full bg-red-500" aria-hidden="true" />
      {listeningLabel}
      <div className="flex items-end gap-1">
        {voiceWave.map((height, index) => (
          <span
            key={index}
            className="w-1 animate-waveform rounded-full bg-gradient-to-t from-amber-500 to-amber-300"
            style={{ animationDelay: `${index * 0.1}s`, height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  )
}

function SearchInput({ text }: { text: string }) {
  return (
    <p className="font-medium text-gray-700">
      {text}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-gray-400 align-bottom" aria-hidden="true" />
    </p>
  )
}

export function UseCasesCarousel() {
  const { useCases } = landingContent
  const [activeIndex, setActiveIndex] = useState(0)
  const [typedText, setTypedText] = useState(useCases.cases[0].input)

  useEffect(() => {
    const activeCase = useCases.cases[activeIndex]
    if (activeCase.type === 'search') {
      setTypedText('')
      let i = 0
      const interval = setInterval(() => {
        i += 1
        setTypedText(activeCase.input.slice(0, i))
        if (i >= activeCase.input.length) clearInterval(interval)
      }, 40)
      return () => clearInterval(interval)
    }
    setTypedText(activeCase.input)
  }, [activeIndex, useCases.cases])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.cases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [useCases.cases.length])

  const activeCase = useMemo(() => useCases.cases[activeIndex], [useCases.cases, activeIndex])

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-narrow px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">{useCases.label}</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">{useCases.headline}</h2>
        <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="rounded-2xl bg-gray-50 p-6 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{useCases.ui.inputLabel}</div>
                {activeCase.type === 'voice' ? (
                  <VoiceInput listeningLabel={useCases.ui.listeningLabel} />
                ) : (
                  <SearchInput text={typedText} />
                )}
                <p className="text-gray-700">{activeCase.input}</p>
              </div>
              <div className="my-6 flex justify-center" aria-hidden="true">
                <div className="flex h-10 w-10 animate-bounce-arrow items-center justify-center rounded-full border border-gray-200 text-gray-500">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
                  </svg>
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{useCases.ui.outputLabel}</div>
                <p className="mt-4 text-2xl font-semibold text-gray-900">{activeCase.output.title}</p>
                <p className="mt-2 text-sm text-gray-600">{activeCase.output.context}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  {activeCase.output.labels.map((label) => (
                    <span key={label} className="rounded-full bg-white/80 px-3 py-1">
                      {label}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-amber-600">
                  {activeCase.output.meta}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4">
            {useCases.cases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative h-3 w-12 overflow-hidden rounded-full bg-gray-200"
                aria-label={`Show use case ${index + 1}`}
              >
                {index === activeIndex && (
                  <motion.span
                    className="absolute inset-0 bg-brand-gradient"
                    layoutId="usecase-indicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: 'linear' }}
                    style={{ transformOrigin: 'left center' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
