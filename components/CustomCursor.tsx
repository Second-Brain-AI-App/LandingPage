'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  const innerX = useSpring(0, { stiffness: 500, damping: 28 })
  const innerY = useSpring(0, { stiffness: 500, damping: 28 })
  const outerX = useSpring(0, { stiffness: 250, damping: 20 })
  const outerY = useSpring(0, { stiffness: 250, damping: 20 })

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return

    const handleMove = (event: MouseEvent) => {
      innerX.set(event.clientX)
      innerY.set(event.clientY)
      outerX.set(event.clientX)
      outerY.set(event.clientY)
      setVisible(true)
    }

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        setHoveringInteractive(false)
        return
      }
      setHoveringInteractive(Boolean(target.closest('a, button, [data-cursor="magnetic"]')))
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('mouseout', handleHover)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mouseout', handleHover)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [innerX, innerY, outerX, outerY, isTouch, prefersReducedMotion])

  if (isTouch || prefersReducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <motion.div
        className="absolute z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 mix-blend-difference"
        style={{ x: innerX, y: innerY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hoveringInteractive ? 1.5 : 1 }}
      />
      <motion.div
        className="absolute z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/70"
        style={{ x: outerX, y: outerY, opacity: visible ? 0.6 : 0 }}
        animate={{ scale: hoveringInteractive ? 1.5 : 1 }}
      />
    </div>
  )
}
