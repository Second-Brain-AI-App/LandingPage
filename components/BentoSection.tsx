'use client'

import { motion } from 'framer-motion'
import { Smartphone, Lock, Tag } from 'lucide-react'

const CONTENT = {
  label: 'FEATURES',
  headline: 'Everything else you need.',
  subheadline: 'The little things that make a big difference.',
}

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Always one tap away',
    description: 'Widget, Lock Screen, Apple Watch — capture without unlocking.',
  },
  {
    icon: Lock,
    title: 'Private by default',
    description: 'Your memory on your device. AI processes but never stores your content.',
  },
  {
    icon: Tag,
    title: 'Automatic labels',
    description: 'AI tags everything — people, places, topics. Customize anytime.',
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function FeatureCard({ feature }: { feature: typeof FEATURES[number] }) {
  const IconComponent = feature.icon
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl bg-gray-50 p-6 md:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100">
          <IconComponent className="h-5 w-5 text-amber-700" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
          {feature.title}
        </h3>
      </div>
      <p className="mt-3 text-sm text-gray-600 md:text-base">
        {feature.description}
      </p>
    </motion.div>
  )
}

export function BentoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
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
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            {CONTENT.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">
            {CONTENT.subheadline}
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
