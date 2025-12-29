'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type TypingTextProps = {
  text: string
  speed?: number
  startDelay?: number
  onComplete?: () => void
  showCursor?: boolean
  className?: string
}

export function TypingText({
  text,
  speed = 40,
  startDelay = 0,
  onComplete,
  showCursor = true,
  className = '',
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursorBlink, setShowCursorBlink] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(false)
    setShowCursorBlink(false)

    const startTimer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setShowCursorBlink(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, startDelay)

    return () => clearTimeout(startTimer)
  }, [text, speed, startDelay, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (isTyping || showCursorBlink) && (
        <motion.span
          className="inline-block w-[2px] bg-amber-500"
          style={{ height: '1em', marginLeft: '1px', verticalAlign: 'text-bottom' }}
          animate={showCursorBlink ? { opacity: [1, 0, 1] } : { opacity: 1 }}
          transition={showCursorBlink ? { duration: 1, repeat: Infinity } : {}}
        />
      )}
    </span>
  )
}
