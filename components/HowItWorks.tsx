'use client'

import { landingContent } from '@/content/landingContent'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic, Search, Bell, Gift, Sparkles, Brain, BrainCircuit, BrainCog, MessageSquare } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mic: Mic,
  search: Search,
  bell: Bell,
  gift: Gift,
  sparkles: Sparkles,
  brain: Brain,
  message: MessageSquare,
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
        <div className="text-center mb-8">
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
                viewBox="0 0 900 760"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker id="arrowOrangeDown" markerWidth="2.9" markerHeight="2.9" refX="0" refY="1.45" orient="auto">
                    <path d="M 0 0 L 2.9 1.45 L 0 2.9 Z" fill="#F97316" fillOpacity="0.7" />
                  </marker>
                  <marker id="arrowBlueDown" markerWidth="2.9" markerHeight="2.9" refX="0" refY="1.45" orient="auto">
                    <path d="M 0 0 L 2.9 1.45 L 0 2.9 Z" fill="#3B82F6" fillOpacity="0.7" />
                  </marker>
                </defs>

                {/* Left path: Capture → into Brain → out bottom-left → split to Nudge */}
                <motion.path
                  d="M 180 285
                     L 180 310
                     Q 180 350 230 350
                     L 350 350
                     Q 380 350 380 390
                     L 380 430
                     Q 380 470 340 470
                     L 120 470
                     Q 70 470 70 510
                     L 70 520"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="13"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrowOrangeDown)"
                  variants={lineVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3}
                />

                {/* Branch from split point → Focus */}
                <motion.path
                  d="M 380 430
                     Q 380 470 410 470
                     L 415 470
                     Q 450 470 450 510
                     L 450 520"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="13"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrowOrangeDown)"
                  variants={lineVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.5}
                />

                {/* Right continuous path: Ask → around brain → Answer */}
                <motion.path
                  d="M 720 285
                     L 720 310
                     Q 720 350 670 350
                     L 550 350
                     Q 520 350 520 390
                     L 520 430
                     Q 520 470 560 470
                     L 780 470
                     Q 830 470 830 510
                     L 830 520"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="13"
                  strokeOpacity="0.4"
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
              <div className="grid grid-cols-[1fr_180px_1fr] gap-8 items-stretch pt-8">
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
                    className="flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg"
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
                <div className="flex flex-col justify-end">
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
                <div className="h-[160px]" />

                {/* Center - Brain */}
                <div className="flex flex-col items-center justify-start h-[200px]">
                  {/* Circle with label inside */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    <div className="absolute inset-[-40px] rounded-full bg-amber-400/20 blur-2xl" />
                    <div className="relative flex flex-col items-center justify-center rounded-full bg-brand-gradient opacity-80 shadow-2xl" style={{ height: '180px', width: '180px' }}>
                      <BrainCircuit className="h-16 w-16 text-white" />
                      <p className="mt-1 text-sm font-bold text-white">{howItWorks.brain.label}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="h-[160px]" />

                {/* Row 3: Output cards - Nudge, Focus, Answer all in one row */}
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {/* Nudge */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.7}
                    className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
                        <Icon name={howItWorks.remember.outputs[0].icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-900">{howItWorks.remember.outputs[0].title}</p>
                        <p className="text-sm text-gray-600">{howItWorks.remember.outputs[0].subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic">
                      {howItWorks.remember.outputs[0].example}
                    </p>
                  </motion.div>

                  {/* Memory */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.8}
                    className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
                        <Icon name={howItWorks.remember.outputs[1].icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-900">{howItWorks.remember.outputs[1].title}</p>
                        <p className="text-sm text-gray-600">{howItWorks.remember.outputs[1].subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic">
                      {howItWorks.remember.outputs[1].example}
                    </p>
                  </motion.div>

                  {/* Answer */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.9}
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
