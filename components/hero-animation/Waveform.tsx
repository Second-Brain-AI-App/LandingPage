'use client'

import { motion } from 'framer-motion'

type WaveformProps = {
  isAnimating?: boolean
  barCount?: number
}

export function Waveform({ isAnimating = true, barCount = 12 }: WaveformProps) {
  return (
    <div className="flex h-6 items-center justify-center gap-[2px]">
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-red-400"
          initial={{ height: 8 }}
          animate={
            isAnimating
              ? {
                  height: [8, 16, 24, 16, 8],
                }
              : { height: 8 }
          }
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  )
}
