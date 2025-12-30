'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronDown } from 'lucide-react'

const CONTENT = {
  label: 'CAPTURE',
  headline: 'Dump it. Done.',
  subheadline: 'AI converts it to memory — adding labels, extracting actions, and more.',
}

type Example = {
  type: 'action' | 'memory'
  voice: string
  title: string
  // Action-specific
  deadline?: string
  timeEstimate?: string
  // Memory-specific
  content?: string
  labels: string[]
}

const EXAMPLES: Example[] = [
  {
    type: 'action',
    voice: "Mom's birthday is Saturday, she mentioned wanting that garden tool set from the podcast",
    title: "Get mom's birthday gift",
    deadline: 'Sat',
    timeEstimate: '~15 min',
    labels: ['Family'],
  },
  {
    type: 'memory',
    voice: "My therapist said when I'm overwhelmed, just pick one thing and set a 10 minute timer — apparently that breaks the freeze",
    title: 'Breaking the freeze',
    content: 'Pick one thing, set a 10 minute timer',
    labels: ['Health', 'Tip'],
  },
  {
    type: 'memory',
    voice: "I think I say yes to things because I'm afraid of being forgotten, not because I actually want to do them",
    title: 'Why I say yes',
    content: "Afraid of being forgotten, not because I want to",
    labels: ['Self', 'Self-reflection'],
  },
  {
    type: 'memory',
    voice: "David was raving about this ramen place in the Mission, said to get the spicy miso, there's usually a line",
    title: 'Ramen in the Mission',
    content: 'Spicy miso, expect a line',
    labels: ['Food', 'Social'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Label colors - each label gets a unique color based on its name
const LABEL_COLOR_MAP: Record<string, { bg: string; text: string }> = {
  'Family': { bg: '#DBEAFE', text: '#1E40AF' },      // blue
  'Health': { bg: '#D1FAE5', text: '#065F46' },      // green
  'Tip': { bg: '#FEF3C7', text: '#92400E' },         // amber
  'Self': { bg: '#E9D5FF', text: '#6B21A8' },        // purple
  'Self-reflection': { bg: '#FCE7F3', text: '#9D174D' }, // pink
  'Food': { bg: '#FFEDD5', text: '#9A3412' },        // orange
  'Social': { bg: '#CFFAFE', text: '#0E7490' },      // cyan
}

function getLabelColor(label: string) {
  return LABEL_COLOR_MAP[label] || { bg: '#F3F4F6', text: '#374151' }
}

function VoiceInputCard({ text }: { text: string }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Recording indicator */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
        <span className="text-sm text-gray-500">Recording...</span>
      </div>

      {/* Transcription */}
      <p className="text-base italic leading-relaxed text-gray-700">
        &quot;{text}&quot;
      </p>
    </div>
  )
}

function Arrow() {
  return (
    <div className="flex items-center justify-center py-2 md:py-0 md:px-4">
      <ChevronDown className="h-6 w-6 text-amber-600 md:hidden" strokeWidth={2.5} />
      <ChevronRight className="hidden h-7 w-7 text-amber-600 md:block" strokeWidth={2.5} />
    </div>
  )
}

function ActionCard({ example }: { example: Example }) {
  return (
    <div className="w-full rounded-2xl border border-amber-200/50 bg-[#FFFBF5] p-5 shadow-[0_4px_12px_rgba(217,119,6,0.08)]">
      {/* Title */}
      <p className="text-base font-medium text-gray-900 md:text-lg">{example.title}</p>

      {/* Badges */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {example.deadline && (
          <span className="rounded-md bg-[#FEF3C7] px-2.5 py-1 text-sm text-[#92400E]">
            📅 {example.deadline}
          </span>
        )}
        {example.timeEstimate && (
          <span className="rounded-md bg-[#F3F4F6] px-2.5 py-1 text-sm text-[#374151]">
            ⏱️ {example.timeEstimate}
          </span>
        )}
        {example.labels.map((label) => {
          const color = getLabelColor(label)
          return (
            <span
              key={label}
              className="rounded-md px-2.5 py-1 text-sm"
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              {label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function MemoryCard({ example }: { example: Example }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Title with icon */}
      <div className="flex items-center gap-2">
        <span className="text-base">📝</span>
        <p className="text-base font-medium text-gray-900 md:text-lg">{example.title}</p>
      </div>

      {/* Content - full voice transcription */}
      <p className="mt-2 text-sm italic text-gray-600 md:text-base">
        &quot;{example.voice}&quot;
      </p>

      {/* Labels */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {example.labels.map((label) => {
          const color = getLabelColor(label)
          return (
            <span
              key={label}
              className="rounded-md px-2.5 py-1 text-sm"
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              {label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function ExampleRow({ example, index }: { example: Example; index: number }) {
  return (
    <motion.div
      variants={rowVariants}
      className="flex flex-col items-center md:flex-row md:items-center md:gap-4"
    >
      {/* Voice card - top on mobile, left on desktop */}
      <div className="w-full md:w-1/2">
        <VoiceInputCard text={example.voice} />
      </div>

      {/* Arrow */}
      <Arrow />

      {/* Output card - bottom on mobile, right on desktop */}
      <div className="w-full md:w-1/2">
        {example.type === 'action' ? (
          <ActionCard example={example} />
        ) : (
          <MemoryCard example={example} />
        )}
      </div>
    </motion.div>
  )
}

export function CaptureSection() {
  return (
    <section id="capture" className="bg-[#FAF7F2] py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            {CONTENT.label}
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">{CONTENT.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">{CONTENT.subheadline}</p>
        </motion.div>

        {/* Examples grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-col gap-4 md:mt-14 md:gap-6"
        >
          {EXAMPLES.map((example, index) => (
            <ExampleRow key={index} example={example} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
