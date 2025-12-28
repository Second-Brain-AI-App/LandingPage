'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface PhoneCard {
  readonly title: string
  readonly subtitle: string
  readonly tone: 'gentle' | 'info' | 'focus'
}

interface PhoneMockupProps {
  cards: readonly PhoneCard[]
  status: string
  appName: string
  liveLabel: string
}

const toneClasses: Record<PhoneCard['tone'], string> = {
  gentle: 'bg-amber-50 border border-amber-100 text-amber-700',
  info: 'bg-white border border-gray-100 text-gray-800',
  focus: 'bg-gray-900 text-white border border-gray-800',
}

export function PhoneMockup({ cards, status, appName, liveLabel }: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4])
  const y = useTransform(scrollYProgress, [0, 1], [0, 40])
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      ref={ref}
      className="mx-auto w-[260px] sm:w-[300px] lg:w-[340px]"
      style={{ rotate, y }}
      animate={prefersReducedMotion ? undefined : { translateY: [0, -20, 0] }}
      transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative rounded-[56px] bg-gray-900 p-3 shadow-xl">
        <div className="rounded-[44px] bg-gray-50 p-4">
          <div className="relative mb-4 flex h-8 items-center justify-center text-sm font-semibold text-gray-900">
            <div className="absolute inset-x-1/2 top-0 h-4 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
            <span>9:41</span>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-inner">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-2">
              <div>
                <p className="text-xs font-medium text-gray-500">{appName}</p>
                <p className="text-sm font-semibold text-gray-900">{status}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <span className="h-2 w-2 animate-recording-pulse rounded-full bg-red-500" aria-hidden="true" />
                {liveLabel}
              </div>
            </div>
            <div className="space-y-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-2xl px-4 py-3 text-left shadow-sm ${toneClasses[card.tone]}`}
                >
                  <p className="font-semibold">{card.title}</p>
                  <p className="text-sm opacity-80">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gray-900/20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
