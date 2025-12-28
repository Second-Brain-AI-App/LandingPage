import { useEffect, useState } from 'react'

type Direction = 'up' | 'down'

export function useScrollDirection(threshold = 8): Direction {
  const [direction, setDirection] = useState<Direction>('up')

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const updateDirection = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? 'down' : 'up')
        lastY = currentY > 0 ? currentY : 0
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return direction
}
