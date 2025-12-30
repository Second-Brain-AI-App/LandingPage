'use client'

import { motion } from 'framer-motion'
import { landingContent } from '@/content/landingContent'
import { MagneticButton } from '@/components/MagneticButton'
import { PhoneFrame, useHeroSequence } from '@/components/hero-animation'

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const { hero } = landingContent
  const { left, right } = useHeroSequence()

  return (
    <section id="top" className="relative flex min-h-screen overflow-hidden bg-warm-gradient pb-12 pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-amber-100/40 to-transparent" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 my-auto">
        {/* Left side - 40% */}
        <div className="w-full space-y-8 lg:w-[40%]">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {hero.label}
          </motion.p>
          <div className="space-y-2">
            {hero.headline.map((line, index) => (
              <motion.h1
                key={line}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={headlineVariants}
                className={`text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl ${
                  index === 1 ? 'bg-text-gradient bg-clip-text text-transparent' : 'text-gray-900'
                }`}
              >
                {line}
              </motion.h1>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href={hero.primaryCta.href}>{hero.primaryCta.label}</MagneticButton>
          </motion.div>
        </div>

        {/* Right side - 60% */}
        <div className="w-full lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center lg:gap-8"
          >
            {/* Phone 1 - Capture */}
            <div className="flex flex-col items-center">
              <PhoneFrame className="w-[280px] sm:w-[240px] lg:w-[280px]">
                {left}
              </PhoneFrame>
              <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base">{hero.phones.capture.label}</p>
            </div>

            {/* Phone 2 - Recall */}
            <div className="flex flex-col items-center">
              <PhoneFrame className="w-[280px] sm:w-[240px] lg:w-[280px]">
                {right}
              </PhoneFrame>
              <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base">{hero.phones.recall.label}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
