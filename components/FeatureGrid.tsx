'use client'

import { landingContent } from '@/content/landingContent'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

type WaveStyle = CSSProperties & { '--wave-height'?: string }

const waveformHeights = [12, 20, 8, 28, 16, 24, 10, 20, 14, 22, 8, 18]
const chaosActiveCells = new Set([0, 1, 5, 12, 13, 14, 20])
const iconBackgrounds: Record<string, string> = {
  voice: 'bg-amber-100 text-amber-700',
  decisions: 'bg-purple-100 text-purple-700',
  nudges: 'bg-green-100 text-green-700',
  chaos: 'bg-orange-100 text-orange-700',
  privacy: 'bg-gray-700 text-white',
}

function VoiceDemo({ status, transcription }: { status: string; transcription: string }) {
  return (
    <div className="mt-6 rounded-3xl border border-amber-100 bg-white p-6 shadow-inner">
      <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-gray-600">
        <span className="h-2 w-2 animate-recording-pulse rounded-full bg-red-500" aria-hidden="true" />
        {status}
      </div>
      <div className="flex items-end gap-2">
        {waveformHeights.map((height, index) => (
          <div
            key={index}
            className="w-1 animate-waveform rounded-full bg-gradient-to-t from-amber-500 to-amber-300"
            style={{ animationDelay: `${index * 0.08}s`, '--wave-height': `${height}px` } as WaveStyle}
          />
        ))}
      </div>
      <p className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">{transcription}</p>
    </div>
  )
}

function ZeroDecisionsDemo({ placeholder, tags }: { placeholder: string; tags: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">{placeholder}</span>
      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} fill="none">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">{tags[0]}</span>
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{tags[1]}</span>
    </div>
  )
}

function GentleNudgesDemo({ bad, good }: { bad: string; good: string }) {
  return (
    <div className="mt-6 space-y-3">
      <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700 line-through opacity-70">{bad}</div>
      <div className="rounded-2xl border border-green-100 bg-green-50 p-4 text-sm text-green-700">{good}</div>
    </div>
  )
}

function ChaosDemo({ caption }: { caption: string }) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 21 }).map((_, index) => (
          <div
            key={index}
            className={`h-6 w-6 rounded-md ${chaosActiveCells.has(index) ? 'bg-amber-400' : 'bg-gray-100'}`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold text-gray-600">{caption}</p>
    </div>
  )
}

function PrivacyDemo({ subtitle }: { subtitle: string }) {
  return (
    <div className="mt-8 flex flex-col items-center text-center text-white">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-glow-green">
        <span className="text-3xl">🛡️</span>
      </div>
      <p className="mt-4 max-w-sm text-sm text-gray-300">{subtitle}</p>
    </div>
  )
}

function FeatureDemo({ id, demos }: { id: string; demos: typeof landingContent.features.demos }) {
  switch (id) {
    case 'voice':
      return <VoiceDemo status={demos.voice.status} transcription={demos.voice.transcription} />
    case 'decisions':
      return <ZeroDecisionsDemo placeholder={demos.zeroDecisions.placeholder} tags={demos.zeroDecisions.destinationTags} />
    case 'nudges':
      return <GentleNudgesDemo bad={demos.gentle.badExample} good={demos.gentle.goodExample} />
    case 'chaos':
      return <ChaosDemo caption={demos.chaos.caption} />
    case 'privacy':
      return <PrivacyDemo subtitle={demos.privacy.subtitle} />
    default:
      return null
  }
}

export function FeatureGrid() {
  const { features } = landingContent

  return (
    <section id="features" className="bg-white py-24 scroll-mt-32">
      <div className="mx-auto max-w-wide px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">{features.label}</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            {features.headline}{' '}
            <span className="bg-text-gradient bg-clip-text text-transparent">{features.accent}</span>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className={`${card.span} rounded-3xl border ${
                card.tone === 'hero'
                  ? 'border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50'
                  : card.tone === 'dark'
                  ? 'border-gray-800 bg-dark-gradient text-white'
                  : 'border-gray-100 bg-white'
              } p-8 shadow-md`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${
                  iconBackgrounds[card.id] ?? 'bg-amber-100 text-amber-700'
                }`}
              >
                {card.icon}
              </div>
              <h3 className={`mt-6 text-2xl font-semibold ${card.tone === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {card.title}
              </h3>
              <p className={`mt-3 text-base ${card.tone === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {card.description}
              </p>
              <FeatureDemo id={card.id} demos={features.demos} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
