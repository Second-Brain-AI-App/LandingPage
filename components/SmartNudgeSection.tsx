'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const CONTENT = {
  label: 'SMART NUDGES',
  headline: 'Smart timing. Friendly tone.',
  subheadline: 'Like a thoughtful friend who knows when to nudge — and when to leave you alone.',
}

const SMART_BULLETS = [
  'Deadline proximity',
  'Time of day',
  'Task effort',
  'Nudge history',
]

const NOTIFICATIONS = [
  {
    time: 'Thu 9am',
    message: "Mom's birthday Saturday — got her gift yet?",
  },
  {
    time: 'Tue 3pm',
    message: 'Quick one — dentist call before they close?',
  },
]


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

function NotificationCard({ time, message }: { time: string; message: string }) {
  return (
    <div className="rounded-xl border border-gray-200 border-l-[3px] border-l-amber-500 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">Second Brain</span>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <p className="text-base font-medium text-gray-700">{message}</p>
    </div>
  )
}

export function SmartNudgeSection() {
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
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">{CONTENT.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">{CONTENT.subheadline}</p>
        </motion.div>

        {/* Two Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8"
        >
          {/* Left Column - Smart */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-gray-50 p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              <h3 className="text-xl font-semibold text-gray-900">SMART</h3>
            </div>
            <p className="mb-6 text-base text-gray-600">
              Understands urgency, context, and your time.
            </p>
            <ul className="space-y-3">
              {SMART_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-emerald-600" strokeWidth={2.5} />
                  <span className="text-base text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base italic text-gray-500">
              Casual. No guilt. Never robotic.
            </p>
          </motion.div>

          {/* Right Column - Friendly */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-[#FFFBF5] p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-3xl">💛</span>
              <h3 className="text-xl font-semibold text-gray-900">FRIENDLY</h3>
            </div>
            <div className="space-y-3">
              {NOTIFICATIONS.map((notification) => (
                <NotificationCard
                  key={notification.time}
                  time={notification.time}
                  message={notification.message}
                />
              ))}
              <NotificationCard time="Sat 10am" message="Lazy morning? Perfect for that garage project." />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
