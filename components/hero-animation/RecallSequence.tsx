'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus } from 'lucide-react'
import { TypingText } from './TypingText'

// Props for controlled component
type RecallPhoneProps = {
  screen: 'static' | 'asking' | 'answer'
  question: string
  answer: {
    title: string
    subtitle?: string
    context: string
  }
  storyNumber: 1 | 2 | 3
}

// Controlled component for use with HeroSequence
export function RecallPhone({
  screen,
  question,
  answer,
  storyNumber,
}: RecallPhoneProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FAF7F2]">
      <AnimatePresence mode="wait">
        {screen === 'static' && (
          <StaticAskScreen key="static" />
        )}
        {screen === 'asking' && (
          <AskingScreen key="asking" question={question} />
        )}
        {screen === 'answer' && (
          <AnswerScreen key="answer" answer={answer} storyNumber={storyNumber} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Legacy self-running component for backwards compatibility
type Beat = 'asking1' | 'answer1' | 'asking2' | 'answer2'

const BEATS: Beat[] = ['asking1', 'answer1', 'asking2', 'answer2']
const TIMING: Record<Beat, number> = {
  asking1: 3500,
  answer1: 3000,
  asking2: 3500,
  answer2: 3500,
}

const Q1 = "What did mom want for her birthday?"
const Q2 = "What book did Jake recommend?"

export function RecallSequence({ startDelay = 0 }: { startDelay?: number }) {
  const [beatIndex, setBeatIndex] = useState(0)
  const [key, setKey] = useState(0)
  const [started, setStarted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const beat = BEATS[beatIndex]

  // Handle start delay
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [startDelay])

  // Handle beat transitions
  useEffect(() => {
    if (!started) return

    const currentBeat = BEATS[beatIndex]
    const duration = TIMING[currentBeat]

    timerRef.current = setTimeout(() => {
      const nextIndex = (beatIndex + 1) % BEATS.length
      if (nextIndex === 0) {
        setKey((k) => k + 1)
      }
      setBeatIndex(nextIndex)
    }, duration)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [beatIndex, started])

  // Determine screen and props for legacy component
  const getScreen = (): 'static' | 'asking' | 'answer' => {
    if (beat === 'asking1' || beat === 'asking2') return 'asking'
    return 'answer'
  }

  const getQuestion = (): string => {
    return beat === 'asking1' || beat === 'answer1' ? Q1 : Q2
  }

  const getAnswer = () => {
    if (beat === 'asking1' || beat === 'answer1') {
      return {
        title: 'Garden tool set',
        subtitle: 'From the podcast she listens to',
        context: 'Birthday Saturday',
      }
    }
    return {
      title: 'Atomic Habits',
      subtitle: 'by James Clear',
      context: 'Jake · Lunch · Dec 15',
    }
  }

  return (
    <RecallPhone
      key={key}
      screen={getScreen()}
      question={getQuestion()}
      answer={getAnswer()}
      storyNumber={1}
    />
  )
}

function StaticAskScreen() {
  return (
    <motion.div
      className="flex h-full flex-col px-4 pt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header with close button */}
      <div className="mb-3 flex items-center justify-between">
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
        <X className="h-6 w-6 text-gray-400" />
      </div>

      {/* Static indicator */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-amber-500" />
        <span className="text-lg font-semibold text-gray-900">Ask me anything..</span>
      </div>

      {/* Empty question box */}
      <div className="relative flex-1 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-base leading-relaxed text-gray-400">
          Tap to ask a question...
        </p>
        <p className="absolute bottom-4 right-5 text-sm text-gray-400">tap to type</p>
      </div>

      {/* Static waveform */}
      <div className="my-4 flex justify-center">
        <WaveformStatic />
      </div>

      {/* Search button */}
      <button
        className="mx-auto mb-3 flex items-center gap-2 rounded-full bg-gray-200 px-10 py-3 text-base font-medium text-gray-400"
      >
        Search
      </button>
      <p className="mb-2 text-center text-sm text-gray-400">Tap to search your memory</p>
    </motion.div>
  )
}

function WaveformStatic() {
  return (
    <div className="flex h-6 items-center justify-center gap-[2px]">
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="h-2 w-[2px] rounded-full bg-amber-300"
        />
      ))}
    </div>
  )
}

function AskingScreen({ question }: { question: string }) {
  return (
    <motion.div
      className="flex h-full flex-col px-4 pt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header with close button */}
      <div className="mb-3 flex items-center justify-between">
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
        <X className="h-6 w-6 text-gray-400" />
      </div>

      {/* Asking indicator */}
      <div className="mb-4 flex items-center gap-2">
        <motion.div
          className="h-3 w-3 rounded-full bg-amber-500"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-lg font-semibold text-gray-900">Ask me anything..</span>
      </div>

      {/* Question box */}
      <div className="relative flex-1 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-base leading-relaxed text-gray-700">
          <TypingText
            text={question}
            speed={40}
            showCursor
          />
        </p>
        <p className="absolute bottom-4 right-5 text-sm text-gray-400">tap to type</p>
      </div>

      {/* Waveform */}
      <div className="my-4 flex justify-center">
        <WaveformAmber />
      </div>

      {/* Search button */}
      <motion.button
        className="mx-auto mb-3 flex items-center gap-2 rounded-full bg-amber-500 px-10 py-3 text-base font-medium text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Search
      </motion.button>
      <p className="mb-2 text-center text-sm text-gray-400">Tap to search your memory</p>
    </motion.div>
  )
}

function WaveformAmber() {
  return (
    <div className="flex h-6 items-center justify-center gap-[2px]">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-amber-400"
          initial={{ height: 8 }}
          animate={{ height: [8, 16, 24, 16, 8] }}
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

function AnswerScreen({ answer, storyNumber }: { answer: { title: string; subtitle?: string; context: string }; storyNumber: 1 | 2 | 3 }) {
  // Choose gradient based on story
  const getGradientClass = () => {
    if (storyNumber === 1) return 'border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50'
    if (storyNumber === 2) return 'border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50'
    return 'border-orange-200/50 bg-gradient-to-br from-orange-50 to-red-50'
  }
  const gradientClass = getGradientClass()

  return (
    <motion.div
      className="relative flex h-full flex-col bg-[#FAF7F2] px-4 pt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-900">Here&apos;s what I found</span>
      </div>

      {/* Answer card */}
      <motion.div
        className={`rounded-2xl border p-5 shadow-sm ${gradientClass}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-base font-semibold text-gray-900">{answer.title}</h4>
        {answer.subtitle && (
          <p className="mt-1 text-sm italic text-gray-500">{answer.subtitle}</p>
        )}
        <p className="mt-2 text-xs text-gray-400">{answer.context}</p>
      </motion.div>

      {/* Source */}
      <p className="mt-3 text-sm text-gray-400">From your memory · Dec 20</p>

      {/* FABs - right aligned */}
      <div className="absolute bottom-20 right-3 flex flex-col items-end gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          <span className="text-lg font-semibold">?</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          <Plus className="h-5 w-5" strokeWidth={2.5} />
        </div>
      </div>

      {/* Tab bar */}
      <TabBar activeTab="memory" />
    </motion.div>
  )
}

function TabBar({ activeTab }: { activeTab: 'now' | 'actions' | 'memory' }) {
  return (
    <div className="mx-4 mb-4 mt-auto flex items-center justify-center gap-6 rounded-xl bg-white px-2 py-1 shadow-sm">
      <div className="flex flex-col items-center gap-0.5">
        {/* Sparkle star */}
        <svg className={`h-5 w-5 ${activeTab === 'now' ? 'text-amber-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.5 9L20 10.5L13.5 12L12 19L10.5 12L4 10.5L10.5 9L12 2Z" />
          <circle cx="17" cy="5" r="1" />
          <circle cx="6" cy="17" r="0.8" />
        </svg>
        <span className={`text-[10px] ${activeTab === 'now' ? 'font-semibold text-amber-600' : 'text-gray-400'}`}>Now</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        {/* Circles with dashes - settings/equalizer style */}
        <svg className={`h-5 w-5 ${activeTab === 'actions' ? 'text-amber-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="6" cy="6" r="2" />
          <line x1="11" y1="5" x2="15" y2="5" />
          <line x1="11" y1="7" x2="18" y2="7" />
          <circle cx="6" cy="12" r="2" />
          <line x1="11" y1="11" x2="18" y2="11" />
          <line x1="11" y1="13" x2="14" y2="13" />
          <circle cx="6" cy="18" r="2" />
          <line x1="11" y1="17" x2="16" y2="17" />
          <line x1="11" y1="19" x2="18" y2="19" />
        </svg>
        <span className={`text-[10px] ${activeTab === 'actions' ? 'font-semibold text-amber-600' : 'text-gray-400'}`}>Actions</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        {/* Brain squiggle */}
        <svg className={`h-5 w-5 ${activeTab === 'memory' ? 'text-amber-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 8C6 6 8 4 10 5C12 6 11 9 13 9C15 9 14 6 16 5C18 4 20 6 20 8C20 10 18 11 16 11C14 11 14 13 16 14C18 15 20 14 20 17C20 20 17 21 15 20C13 19 13 16 11 16C9 16 9 19 7 20C5 21 3 19 4 17C5 15 7 15 8 13C9 11 7 11 5 11C3 11 3 9 6 8Z" />
        </svg>
        <span className={`text-[10px] ${activeTab === 'memory' ? 'font-semibold text-amber-600' : 'text-gray-400'}`}>Memory</span>
      </div>
    </div>
  )
}
