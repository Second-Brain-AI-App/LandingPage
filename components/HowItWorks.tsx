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
          {/* Diagram Layout - All screen sizes */}
          <div>
            <div className="relative">
              {/* SVG Overlay for flow lines - desktop only */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block"
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
              <div className="grid grid-cols-2 lg:grid-cols-[1fr_180px_1fr] gap-4 lg:gap-8 items-stretch pt-8">
                {/* Left Column - Remember */}
                <div className="flex flex-col">
                  {/* Label */}
                  <motion.p
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                    className="text-[10px] lg:text-xs font-semibold tracking-[0.2em] text-amber-600 mb-3 lg:mb-4"
                  >
                    {howItWorks.rememberLabel}
                  </motion.p>

                  {/* Input Card - Capture */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.1}
                    className="flex-1 rounded-2xl border border-gray-100 bg-white p-3 lg:p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                        <Icon name={howItWorks.remember.input.icon} className="h-5 w-5 lg:h-6 lg:w-6" />
                      </div>
                      <div>
                        <p className="text-base lg:text-lg font-bold text-gray-900">{howItWorks.remember.input.title}</p>
                        <p className="text-sm text-gray-500 hidden lg:block">{howItWorks.remember.input.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm text-gray-600 italic hidden lg:block">
                      {howItWorks.remember.input.example}
                    </p>
                  </motion.div>
                </div>

                {/* Center spacer for row 1 - desktop only */}
                <div className="hidden lg:block" />

                {/* Right Column - Recall */}
                <div className="flex flex-col justify-end">
                  {/* Label */}
                  <motion.p
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                    className="text-[10px] lg:text-xs font-semibold tracking-[0.2em] text-blue-600 mb-3 lg:mb-4 text-right"
                  >
                    {howItWorks.recallLabel}
                  </motion.p>

                  {/* Input Card - Ask */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.2}
                    className="rounded-2xl border border-gray-100 bg-white p-3 lg:p-5 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                        <Icon name={howItWorks.recall.input.icon} className="h-5 w-5 lg:h-6 lg:w-6" />
                      </div>
                      <div>
                        <p className="text-base lg:text-lg font-bold text-gray-900">{howItWorks.recall.input.title}</p>
                        <p className="text-sm text-gray-500 hidden lg:block">{howItWorks.recall.input.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm text-gray-600 italic hidden lg:block">
                      {howItWorks.recall.input.example}
                    </p>
                  </motion.div>
                </div>

                {/* Row 2: Arrows down (mobile only) */}
                <div className="col-span-2 flex justify-around py-2 lg:hidden">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L12 16 M7 12 L12 18 L17 12" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                  </svg>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L12 16 M7 12 L12 18 L17 12" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                  </svg>
                </div>

                {/* Row 2: Spacer + Brain + Spacer (desktop) */}
                <div className="hidden lg:block h-[160px]" />

                {/* Center - Brain */}
                <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-start py-4 lg:py-0 lg:h-[200px]">
                  {/* Circle with label inside */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    <div className="absolute inset-[-40px] rounded-full bg-amber-400/20 blur-2xl" />
                    <div className="relative flex flex-col items-center justify-center rounded-full bg-brand-gradient opacity-80 shadow-2xl h-20 w-20 lg:h-[180px] lg:w-[180px]">
                      <BrainCircuit className="h-8 w-8 lg:h-16 lg:w-16 text-white" />
                      <p className="mt-0.5 text-[10px] lg:text-sm font-bold text-white">{howItWorks.brain.label}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block h-[160px]" />

                {/* Row 3: Arrows down (mobile only) */}
                <div className="col-span-2 flex justify-around py-2 lg:hidden">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L12 16 M7 12 L12 18 L17 12" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                  </svg>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L12 16 M7 12 L12 18 L17 12" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                  </svg>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4 L12 16 M7 12 L12 18 L17 12" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                  </svg>
                </div>

                {/* Row 4: Output cards - all 3 in one row */}
                <div className="col-span-2 lg:col-span-3 grid grid-cols-3 gap-2 lg:gap-6">
                  {/* Nudge */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.7}
                    className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-2 lg:p-5 shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                      <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
                        <Icon name={howItWorks.remember.outputs[0].icon} className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs lg:text-base font-bold text-gray-900">{howItWorks.remember.outputs[0].title}</p>
                        <p className="text-xs text-gray-600 hidden lg:block">{howItWorks.remember.outputs[0].subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic hidden lg:block">
                      {howItWorks.remember.outputs[0].example}
                    </p>
                  </motion.div>

                  {/* Memory */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.8}
                    className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-2 lg:p-5 shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                      <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
                        <Icon name={howItWorks.remember.outputs[1].icon} className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs lg:text-base font-bold text-gray-900">{howItWorks.remember.outputs[1].title}</p>
                        <p className="text-xs text-gray-600 hidden lg:block">{howItWorks.remember.outputs[1].subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic hidden lg:block">
                      {howItWorks.remember.outputs[1].example}
                    </p>
                  </motion.div>

                  {/* Answer */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0.9}
                    className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 p-2 lg:p-5 shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
                      <div className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
                        <Icon name={howItWorks.recall.output.icon} className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="text-xs lg:text-base font-bold text-gray-900">{howItWorks.recall.output.title}</p>
                        <p className="text-xs text-gray-600 hidden lg:block">{howItWorks.recall.output.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700 italic whitespace-pre-line hidden lg:block">
                      {howItWorks.recall.output.example}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
