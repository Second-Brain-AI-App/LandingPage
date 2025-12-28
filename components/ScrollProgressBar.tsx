'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-brand-gradient"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
