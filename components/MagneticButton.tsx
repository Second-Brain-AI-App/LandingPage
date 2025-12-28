'use client'

import Link from 'next/link'
import { motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type MagneticButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
  variant?: 'brand' | 'light'
}

export function MagneticButton({ href, children, className, target, rel, ariaLabel, variant = 'brand' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isTouch = useIsTouchDevice()
  const prefersReducedMotion = usePrefersReducedMotion()
  const x = useSpring(0, { stiffness: 150, damping: 15 })
  const y = useSpring(0, { stiffness: 150, damping: 15 })

  const handlePointerMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouch || prefersReducedMotion) return
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.3)
    y.set(offsetY * 0.3)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const variantClass =
    variant === 'light'
      ? 'bg-white text-gray-900 shadow-button-white hover:shadow-lg'
      : 'bg-brand-gradient text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40'

  const classes = [
    'inline-flex min-h-[52px] items-center justify-center rounded-2xl px-6 py-3 font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2',
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.div style={{ x, y }}>
      <Link
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={handlePointerMove}
        onMouseLeave={reset}
        onMouseUp={reset}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        data-cursor="magnetic"
      >
        {children}
      </Link>
    </motion.div>
  )
}
