'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Wrench, Bug, type LucideIcon } from 'lucide-react'
import { releases, type Release, type ReleaseGroup, type ReleaseGroupType } from '@/content/releaseNotes'

const GROUP_ORDER: ReleaseGroupType[] = ['features', 'improvements', 'fixes', 'technical']

const GROUP_META: Record<
  ReleaseGroupType,
  { label: string; icon: LucideIcon; iconBg: string; iconColor: string; accent: string }
> = {
  features: {
    label: 'New',
    icon: Sparkles,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accent: 'before:bg-amber-300',
  },
  improvements: {
    label: 'Improved',
    icon: Zap,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    accent: 'before:bg-blue-300',
  },
  fixes: {
    label: 'Fixed',
    icon: Bug,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-700',
    accent: 'before:bg-red-300',
  },
  technical: {
    label: 'Under the hood',
    icon: Wrench,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
    accent: 'before:bg-gray-300',
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function GroupBlock({ group }: { group: ReleaseGroup }) {
  const meta = GROUP_META[group.type]
  const Icon = meta.icon

  return (
    <motion.div variants={itemVariants} className="space-y-3">
      <div className="flex items-center gap-3">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${meta.iconBg}`}>
          <Icon className={`h-4 w-4 ${meta.iconColor}`} strokeWidth={2.2} />
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-700">
          {meta.label}
        </span>
      </div>
      <ul className="space-y-2 pl-12">
        {group.items.map((item, i) => (
          <li
            key={i}
            className={`relative pl-5 text-base leading-relaxed text-gray-700 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full ${meta.accent}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function ReleaseCard({ release, isLatest }: { release: Release; isLatest: boolean }) {
  const orderedGroups = [...release.groups].sort(
    (a, b) => GROUP_ORDER.indexOf(a.type) - GROUP_ORDER.indexOf(b.type),
  )

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative"
      id={release.version}
    >
      {/* Timeline dot (md+) */}
      <span
        aria-hidden
        className={`absolute -left-[34px] top-8 hidden h-3.5 w-3.5 rounded-full ring-4 md:block ${
          isLatest ? 'bg-amber-500 ring-amber-100 shadow-glow-amber' : 'bg-gray-300 ring-white'
        }`}
      />

      <div className="rounded-3xl border border-white/60 bg-white/80 p-7 shadow-md backdrop-blur-sm transition hover:shadow-lg md:p-9">
        {/* Header row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-baseline gap-x-4 gap-y-2"
        >
          <h2 className="bg-text-gradient bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            {release.version}
          </h2>
          <span className="text-sm font-medium text-gray-500">{release.date}</span>
          {isLatest && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-button">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-white" />
              Latest
            </span>
          )}
        </motion.div>

        {release.headline && (
          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg italic text-gray-600 md:text-xl"
          >
            {release.headline}
          </motion.p>
        )}

        {release.credit && (
          <motion.p variants={itemVariants} className="mt-2 text-sm text-amber-700">
            Inspired by {release.credit}
          </motion.p>
        )}

        {/* Groups */}
        <div className="mt-8 space-y-7">
          {orderedGroups.map((group) => (
            <GroupBlock key={group.type} group={group} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function ReleaseTimeline() {
  if (releases.length === 0) {
    return (
      <p className="mx-auto max-w-md text-center text-gray-500">
        No releases yet — check back soon.
      </p>
    )
  }

  return (
    <div className="relative md:pl-12">
      {/* Vertical timeline rail (md+) */}
      <span
        aria-hidden
        className="absolute left-[5px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-amber-300 via-gray-200 to-transparent md:block"
      />
      <div className="space-y-10 md:space-y-14">
        {releases.map((release, i) => (
          <ReleaseCard key={release.version} release={release} isLatest={i === 0} />
        ))}
      </div>
    </div>
  )
}
