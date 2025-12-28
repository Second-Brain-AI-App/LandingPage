import { useEffect, useState } from 'react'

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')

    const update = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || mediaQuery.matches
      setIsTouch(hasTouch)
    }

    update()
    mediaQuery.addEventListener('change', update)

    return () => {
      mediaQuery.removeEventListener('change', update)
    }
  }, [])

  return isTouch
}
