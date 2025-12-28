'use client'

import { landingContent } from '@/content/landingContent'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic, Search, Bell, Gift, Sparkles, Brain, BrainCircuit, BrainCog } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mic: Mic,
  search: Search,
  bell: Bell,
  gift: Gift,
  sparkles: Sparkles,
  brain: Brain,
}

function Icon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name]
  if (!IconComponent) return <span>{name}</span>
  return <IconComponent className={className} />
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay, duration: 0.8, ease: 'easeOut' },
  }),
}

export function HowItWorks() {
  const { howItWorks } = landingContent
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-amber-50/30 py-24 scroll-mt-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700"
          >
            {howItWorks.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            {howItWorks.headline}{' '}
            <span className="bg-text-gradient bg-clip-text text-transparent">{howItWorks.accent}</span>
          </motion.h2>
        </div>

        {/* Flowchart */}
        <div ref={sectionRef} className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* SVG Overlay for flow lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 900 850"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Arrow marker pointing right (becomes down when path goes down with orient=auto) */}
                  <marker id="arrowAmberDown" markerWidth="4" markerHeight="4" refX="0" refY="2" orient="auto">
                    <path d="M 0 0 L 4 2 L 0 4 Z" fill="#F97316" fillOpacity="0.7" />
                  </marker>
                  <marker id="arrowBlueDown" markerWidth="4" markerHeight="4" refX="0" refY="2" orient="auto">
                    <path d="M 0 0 L 4 2 L 0 4 Z" fill="#3B82F6" fillOpacity="0.7" />
                  </marker>
                </defs>

                {/* Left continuous path: Capture → around brain → Nudge */}
                <motion.path
                  d="M 180 192
                     L 180 232
                     Q 180 282 230 282
                     L 370 282
                     A 80 80 0 0 1 370 382
                     L 230 382
                     Q 180 382 180 432
                     L 180 502"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="8"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrowAmberDown)"
                  variants={lineVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3}
                />

                {/* Right continuous path: Ask → around brain → Answer */}
                <motion.path
                  d="M 720 192
                     L 720 232
                     Q 720 282 670 282
                     L 530 282
                     A 80 80 0 0 0 530 382
                     L 670 382
                     Q 720 382 720 432
                     L 720 502"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrowBlueDown)"
                  variants={lineVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3}
                />
              </svg>

              {/* Content Grid */}
              <div className="grid grid-cols-[1fr_180px_1fr] gap-8 items-start">
                {/* Left Column - Remember */}
                <div className="flex flex-col">
                  {/* Label */}
                  <motion.p
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                    className="text-xs font-semibold tracking-[0.2em] text-amber-600 mb-4"
                  >
                    {howItWorks.rememberLabel}
                  </motion.p>

                  {/* Input Card - Capture */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.1}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                        <Icon name={howItWorks.remember.input.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{howItWorks.remember.input.title}</p>
                        <p className="text-sm text-gray-500">{howItWorks.remember.input.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm text-gray-600 italic">
                      {howItWorks.remember.input.example}
                    </p>
                  </motion.div>
                </div>

                {/* Center spacer for row 1 */}
                <div />

                {/* Right Column - Recall */}
                <div className="flex flex-col">
                  {/* Label */}
                  <motion.p
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                    className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-4 text-right"
                  >
                    {howItWorks.recallLabel}
                  </motion.p>

                  {/* Input Card - Ask */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.2}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                        <Icon name={howItWorks.recall.input.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{howItWorks.recall.input.title}</p>
                        <p className="text-sm text-gray-500">{howItWorks.recall.input.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm text-gray-600 italic">
                      {howItWorks.recall.input.example}
                    </p>
                  </motion.div>
                </div>

                {/* Row 2: Spacer + Brain + Spacer */}
                <div className="h-[280px]" />

                {/* Center - Brain */}
                <div className="flex flex-col items-center justify-start h-[280px] pt-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    <div className="absolute inset-[-40px] rounded-full bg-amber-400/20 blur-2xl" />
                    <div className="relative flex h-42 w-42 items-center justify-center rounded-full bg-brand-gradient opacity-80 shadow-2xl" style={{ height: '168px', width: '168px' }}>
                      <BrainCircuit className="h-16 w-16 text-white" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mt-3 text-center"
                  >
                    <p className="text-base font-bold text-gray-900">{howItWorks.brain.label}</p>
                    <p className="text-sm text-gray-500">{howItWorks.brain.sublabel}</p>
                  </motion.div>
                </div>

                <div className="h-[250px]" />

                {/* Row 3: Output cards */}
                {/* Left Output Cards - Nudge & Focus */}
                <div className="space-y-4">
                  {howItWorks.remember.outputs.map((output, index) => (
                    <motion.div
                      key={output.title}
                      variants={cardVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      custom={0.7 + index * 0.1}
                      className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
                          <Icon name={output.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">{output.title}</p>
                          <p className="text-sm text-gray-600">{output.subtitle}</p>
                        </div>
                      </div>
                      {output.example && (
                        <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic">
                          {output.example}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Center spacer */}
                <div />

                {/* Right Output Card - Answer */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.8}
                  className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
                      <Icon name={howItWorks.recall.output.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">{howItWorks.recall.output.title}</p>
                      <p className="text-sm text-gray-600">{howItWorks.recall.output.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic whitespace-pre-line">
                    {howItWorks.recall.output.example}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Brain at top center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-[-30px] rounded-full bg-amber-400/20 blur-2xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-gradient shadow-xl">
                  <BrainCircuit className="h-12 w-12 text-white" />
                </div>
              </div>
              <p className="mt-3 text-base font-bold text-gray-900">{howItWorks.brain.label}</p>
              <p className="text-sm text-gray-500">{howItWorks.brain.sublabel}</p>
            </motion.div>

            {/* Two columns side by side */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left - Remember */}
              <div className="space-y-3">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-amber-600 uppercase">
                  {howItWorks.rememberLabel}
                </p>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3}
                  className="rounded-xl border border-gray-100 bg-white p-3 shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-lg">
                      <Icon name={howItWorks.remember.input.icon} className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{howItWorks.remember.input.title}</p>
                  </div>
                </motion.div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6 L16 22 M10 18 L16 24 L22 18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {howItWorks.remember.outputs.map((output, index) => (
                  <motion.div
                    key={output.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.5 + index * 0.1}
                    className="rounded-xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-3 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-base">
                        <Icon name={output.icon} className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-bold text-gray-900">{output.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right - Recall */}
              <div className="space-y-3">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-blue-600 uppercase text-right">
                  {howItWorks.recallLabel}
                </p>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3}
                  className="rounded-xl border border-gray-100 bg-white p-3 shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-lg">
                      <Icon name={howItWorks.recall.input.icon} className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{howItWorks.recall.input.title}</p>
                  </div>
                </motion.div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6 L16 22 M10 18 L16 24 L22 18" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.6}
                  className="rounded-xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-base">
                      <Icon name={howItWorks.recall.output.icon} className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{howItWorks.recall.output.title}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
