'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waveform } from './Waveform'
import { TypingText } from './TypingText'
import { Check, X, Settings, Sparkles, Clock, Plus, Search, ChevronUp } from 'lucide-react'

// Props for controlled component
type CapturePhoneProps = {
  screen: 'recording' | 'confirmation' | 'nowTab' | 'notification' | 'memoryTab' | 'timeTransition'
  recordingText: string
  recordingContext?: string
  confirmationTitle: string
  nowTask?: string
  notification?: string
  storyNumber: 1 | 2 | 3
}

// Controlled component for use with HeroSequence
export function CapturePhone({
  screen,
  recordingText,
  recordingContext,
  confirmationTitle,
  nowTask,
  notification,
  storyNumber,
}: CapturePhoneProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#FAF7F2]">
      <AnimatePresence mode="wait">
        {screen === 'recording' && (
          <RecordingScreen key="recording" text={recordingText} context={recordingContext} />
        )}
        {screen === 'confirmation' && (
          <ConfirmationScreen key="confirmation" title={confirmationTitle} originalText={recordingText} storyNumber={storyNumber} />
        )}
        {screen === 'nowTab' && (
          <NowTabScreen key="nowTab" task={nowTask || ''} storyNumber={storyNumber} />
        )}
        {screen === 'notification' && (
          <NotificationScreen key="notification" message={notification || ''} task={nowTask || ''} />
        )}
        {screen === 'memoryTab' && (
          <MemoryTabScreen key="memoryTab" newEntry={confirmationTitle} storyNumber={storyNumber} />
        )}
        {screen === 'timeTransition' && (
          <TimeTransitionScreen key="timeTransition" />
        )}
      </AnimatePresence>
    </div>
  )
}

// Legacy self-running component for backwards compatibility
type Beat = 'recording' | 'confirmation' | 'nowTab' | 'notification'

const BEATS: Beat[] = ['recording', 'confirmation', 'nowTab', 'notification']
const TIMING: Record<Beat, number> = {
  recording: 4000,
  confirmation: 2500,
  nowTab: 2500,
  notification: 2500,
}

export function CaptureSequence() {
  const [beatIndex, setBeatIndex] = useState(0)
  const [key, setKey] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const beat = BEATS[beatIndex]

  useEffect(() => {
    const scheduleNext = () => {
      const currentBeat = BEATS[beatIndex]
      const duration = TIMING[currentBeat]

      timerRef.current = setTimeout(() => {
        const nextIndex = (beatIndex + 1) % BEATS.length
        if (nextIndex === 0) {
          setKey((k) => k + 1)
        }
        setBeatIndex(nextIndex)
      }, duration)
    }

    scheduleNext()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [beatIndex])

  return (
    <CapturePhone
      key={key}
      screen={beat}
      recordingText="Mom's birthday is Saturday, she mentioned wanting that garden tool set from the podcast"
      confirmationTitle="Get mom's birthday gift"
      nowTask="Get mom's birthday gift"
      notification="Mom's birthday Saturday — got her gift yet?"
      storyNumber={1}
    />
  )
}

function RecordingScreen({ text, context }: { text: string; context?: string }) {
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

      {/* Context badge (if provided) */}
      {context && (
        <motion.div
          className="mb-2 flex items-center gap-1.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-xs">✈️</span>
          <span className="text-xs text-gray-500">{context}</span>
        </motion.div>
      )}

      {/* Listening indicator */}
      <div className="mb-4 flex items-center gap-2">
        <motion.div
          className="h-3 w-3 rounded-full bg-red-500"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-lg font-semibold text-gray-900">I&apos;m listening..</span>
      </div>

      {/* Transcription box */}
      <div className="relative flex-1 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-base leading-relaxed text-gray-700">
          <TypingText
            text={text}
            speed={30}
            showCursor
          />
        </p>
        <div className="absolute bottom-4 right-5 flex items-center gap-1 text-sm text-gray-400">
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronUp className="h-4 w-4" />
          </motion.span>
          tap to type
        </div>
      </div>

      {/* Waveform */}
      <div className="my-4 flex justify-center">
        <Waveform isAnimating barCount={14} />
      </div>

      {/* Done button */}
      <motion.button
        className="mx-auto mb-3 flex items-center gap-2 rounded-full bg-gray-100 px-10 py-3 text-base font-medium text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Done <Check className="h-5 w-5" />
      </motion.button>
    </motion.div>
  )
}

function ConfirmationScreen({ title, originalText, storyNumber }: { title: string; originalText: string; storyNumber: 1 | 2 | 3 }) {
  const getTimeTag = () => {
    if (storyNumber === 1) return 'Saturday'
    if (storyNumber === 2) return 'Austin'
    return 'Today'
  }

  const getTypeTag = () => {
    if (storyNumber === 2) return 'People'
    return 'Medium'
  }

  return (
    <motion.div
      className="flex h-full flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Checkmark circle */}
      <motion.div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Check className="h-8 w-8 text-emerald-600" />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="mb-3 text-xl font-semibold text-gray-900"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Got it
      </motion.h3>

      {/* Original content */}
      <motion.p
        className="mb-4 max-w-[90%] text-center text-sm leading-relaxed text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        &quot;{originalText}&quot;
      </motion.p>

      {/* Tags */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
          {getTimeTag()}
        </span>
        <span className="rounded-lg bg-orange-100 px-2.5 py-1 text-xs font-medium text-orange-800">
          {getTypeTag()}
        </span>
      </motion.div>
    </motion.div>
  )
}

function NowTabScreen({ task, storyNumber }: { task: string; storyNumber: 1 | 2 | 3 }) {
  return (
    <motion.div
      className="relative flex h-full flex-col bg-[#FAF7F2] px-4 pt-3"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header row */}
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm text-gray-500">Saturday, Jan 3</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-sm">
            <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
              <circle cx="8" cy="6" r="2" fill="currentColor" />
              <circle cx="16" cy="12" r="2" fill="currentColor" />
              <circle cx="10" cy="18" r="2" fill="currentColor" />
            </svg>
            <span className="font-medium text-gray-700">Now</span>
            <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <Settings className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Greeting */}
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Hey there <span className="text-amber-400">✨</span></h2>

      {/* NOW section header */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="text-sm font-semibold text-gray-700">NOW</span>
        <span className="text-sm text-gray-400">(3)</span>
      </div>

      {/* Task card - new item highlighted */}
      <motion.div
        className="mb-2.5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm"
        animate={{
          boxShadow: [
            '0 1px 3px rgba(0,0,0,0.1)',
            '0 1px 3px rgba(0,0,0,0.1), 0 0 0 2px rgba(251,191,36,0.3)',
            '0 1px 3px rgba(0,0,0,0.1)',
          ],
        }}
        transition={{ duration: 1.5, repeat: 1 }}
      >
        <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{task}</p>
          <div className="mt-1 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-xs text-gray-500">{storyNumber === 1 ? 'Saturday' : 'Today'}</span>
          </div>
        </div>
        <span className="text-amber-500">◆</span>
      </motion.div>

      {/* Task card - existing */}
      <div className="mb-2.5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm">
        <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">Call dentist to reschedule</p>
          <div className="mt-1 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-xs text-gray-500">Today</span>
          </div>
        </div>
        <span className="text-yellow-500">⚡</span>
      </div>

      {/* Task card - third */}
      <div className="mb-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm">
        <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">Review shower reflection</p>
          <p className="mt-1 text-xs text-gray-400">No deadline</p>
        </div>
        <span className="text-yellow-500">⚡</span>
      </div>

      {/* LATER section header */}
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        <span className="text-sm font-semibold text-gray-500">LATER</span>
        <span className="text-sm text-gray-400">(1)</span>
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-400">
          Show 1 items
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>

      {/* Tab bar */}
      <TabBar activeTab="actions" />
    </motion.div>
  )
}

function TabBar({ activeTab }: { activeTab: 'actions' | 'memory' }) {
  return (
    <div className="mx-4 mb-4 mt-auto flex items-center justify-between rounded-xl bg-white px-4 py-2 shadow-sm">
      {/* Actions tab */}
      <div className="flex flex-col items-center gap-0.5">
        <svg className={`h-5 w-5 ${activeTab === 'actions' ? 'text-amber-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="6" x2="8" y2="6" />
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <line x1="16" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <line x1="4" y1="18" x2="10" y2="18" />
          <circle cx="14" cy="18" r="2" fill="currentColor" />
          <line x1="18" y1="18" x2="20" y2="18" />
        </svg>
        <span className={`text-[10px] ${activeTab === 'actions' ? 'font-semibold text-amber-600' : 'text-gray-400'}`}>Actions</span>
      </div>

      {/* Centered FAB */}
      <div className="-mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
        <Plus className="h-6 w-6" strokeWidth={2.5} />
      </div>

      {/* Memory tab */}
      <div className="flex flex-col items-center gap-0.5">
        <svg className={`h-5 w-5 ${activeTab === 'memory' ? 'text-amber-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 5 5 5 9C5 11 6 13 7 14C8 15 9 17 9 19V21H15V19C15 17 16 15 17 14C18 13 19 11 19 9C19 5 16 2 12 2Z" opacity="0.3" />
          <path d="M9 21V22C9 22.5 9.5 23 10 23H14C14.5 23 15 22.5 15 22V21" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 2C8 2 5 5 5 9C5 11 6 13 7 14C8 15 9 17 9 19H15C15 17 16 15 17 14C18 13 19 11 19 9C19 5 16 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="8" r="1" />
          <circle cx="14" cy="8" r="1" />
          <path d="M9 12C10 13 14 13 15 12" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        </svg>
        <span className={`text-[10px] ${activeTab === 'memory' ? 'font-semibold text-amber-600' : 'text-gray-400'}`}>Memory</span>
      </div>
    </div>
  )
}

function NotificationScreen({ message, task }: { message: string; task: string }) {
  return (
    <motion.div
      className="relative flex h-full flex-col bg-[#FAF7F2]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Blurred background (Now tab) */}
      <div className="absolute inset-0 opacity-50 blur-[3px]">
        <NowTabBackground task={task} />
      </div>

      {/* Notification banner */}
      <motion.div
        className="relative mx-3 mt-3 rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
            <span className="text-base">🧠</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">Second Brain</span>
          <span className="ml-auto text-xs text-gray-400">now</span>
        </div>

        {/* Message */}
        <p className="text-sm leading-relaxed text-gray-800">
          {message}
        </p>
      </motion.div>
    </motion.div>
  )
}

function NowTabBackground({ task }: { task: string }) {
  return (
    <div className="flex h-full flex-col bg-[#FAF7F2] px-3 pt-2">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs text-gray-500">Saturday, Jan 3</p>
        <Settings className="h-4 w-4 text-gray-400" />
      </div>
      <h2 className="mb-3 text-lg font-bold text-gray-900">Hey there <span className="text-amber-400">✨</span></h2>
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-xs font-semibold text-gray-700">NOW</span>
        <span className="text-xs text-gray-400">(3)</span>
      </div>
      <div className="mb-2 rounded-xl bg-white p-3 shadow-sm">
        <p className="text-sm font-medium text-gray-900">{task}</p>
      </div>
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <p className="text-sm font-medium text-gray-900">Call dentist to reschedule</p>
      </div>
    </div>
  )
}

function MemoryTabScreen({ newEntry, storyNumber }: { newEntry: string; storyNumber: 1 | 2 | 3 }) {
  // Different labels based on story
  const getLabels = () => {
    if (storyNumber === 2) {
      return (
        <>
          <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-600">People</span>
          <span className="rounded bg-purple-50 px-1.5 py-0.5 text-[10px] text-purple-600">Work</span>
        </>
      )
    }
    if (storyNumber === 3) {
      return (
        <>
          <span className="rounded bg-orange-50 px-1.5 py-0.5 text-[10px] text-orange-600">Food</span>
          <span className="rounded bg-purple-50 px-1.5 py-0.5 text-[10px] text-purple-600">People</span>
        </>
      )
    }
    return (
      <>
        <span className="rounded bg-pink-50 px-1.5 py-0.5 text-[10px] text-pink-600">Family</span>
        <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-600">Gift</span>
      </>
    )
  }

  // Different date sections based on story
  const getDateSection = () => {
    if (storyNumber === 2) return '3 months ago'
    return 'Today'
  }

  return (
    <motion.div
      className="relative flex h-full flex-col bg-[#FAF7F2] px-4 pt-3"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Memory</h2>
        <Settings className="h-5 w-5 text-gray-400" />
      </div>

      {/* Search bar */}
      <div className="mb-2 flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-sm">
        <Search className="h-3.5 w-3.5 text-gray-400" />
        <span className="text-xs text-gray-400">Search memories...</span>
      </div>

      {/* Filter chips */}
      <div className="mb-1.5 flex gap-1.5 overflow-x-auto">
        <span className="flex items-center gap-0.5 whitespace-nowrap rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
          <span>🧠</span> All 8
        </span>
        <span className="whitespace-nowrap rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
          📝 Notes 2
        </span>
        <span className="whitespace-nowrap rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
          ☐ Actions
        </span>
      </div>

      {/* Label chips */}
      <div className="mb-2 flex gap-1.5 overflow-x-auto">
        <span className="whitespace-nowrap rounded-full border border-gray-200 px-2 py-0.5 text-[10px] text-gray-600">
          Personal 3
        </span>
        <span className="whitespace-nowrap rounded-full border border-gray-200 px-2 py-0.5 text-[10px] text-gray-600">
          Work 3
        </span>
        <span className="whitespace-nowrap rounded-full border border-gray-200 px-2 py-0.5 text-[10px] text-gray-600">
          Finance 2
        </span>
      </div>

      {/* Date section */}
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">{getDateSection()}</p>

      {/* New entry - highlighted */}
      <motion.div
        className="mb-2 rounded-2xl bg-white p-2.5 shadow-sm"
        animate={{
          boxShadow: [
            '0 1px 3px rgba(0,0,0,0.1)',
            '0 1px 3px rgba(0,0,0,0.1), 0 0 0 2px rgba(251,191,36,0.3)',
            '0 1px 3px rgba(0,0,0,0.1)',
          ],
        }}
        transition={{ duration: 1.5, repeat: 1 }}
      >
        <div className="mb-0.5 flex items-center gap-1.5">
          <span className="text-xs">📝</span>
          <p className="text-xs font-medium text-gray-900">{newEntry}</p>
        </div>
        <p className="mb-1.5 text-[10px] text-gray-400">{storyNumber === 2 ? 'Austin conference' : 'Just now'}</p>
        <div className="flex gap-1">
          {getLabels()}
        </div>
      </motion.div>

      {/* Mom's birthday entry - todo with checkbox */}
      <div className="mb-2 rounded-2xl bg-white p-2.5 shadow-sm">
        <div className="mb-0.5 flex items-center gap-1.5">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded border border-gray-300 text-[8px]">☐</span>
          <p className="text-xs font-medium text-gray-900">Mom&apos;s birthday gift</p>
        </div>
        <p className="mb-1.5 text-[10px] text-gray-400">2h ago</p>
        <div className="flex gap-1">
          <span className="rounded bg-pink-50 px-1.5 py-0.5 text-[10px] text-pink-600">Family</span>
          <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-600">Gift</span>
        </div>
      </div>

      {/* Yesterday section */}
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">Yesterday</p>

      {/* Book flight entry */}
      <div className="mb-2 rounded-2xl bg-white p-2.5 shadow-sm">
        <div className="mb-0.5 flex items-center gap-1.5">
          <span className="text-xs">📝</span>
          <p className="text-xs font-medium text-gray-900">Book flight next Monday</p>
        </div>
        <p className="mb-1.5 text-[10px] text-gray-400">1d ago</p>
        <div className="flex gap-1">
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600">Personal</span>
        </div>
      </div>

      {/* Tab bar */}
      <TabBar activeTab="memory" />
    </motion.div>
  )
}

function TimeTransitionScreen() {
  return (
    <motion.div
      className="flex h-full flex-col items-center justify-center bg-[#FAF7F2] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Calendar icon */}
      <motion.div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <span className="text-3xl">📅</span>
      </motion.div>

      {/* Time text */}
      <motion.p
        className="text-sm font-medium uppercase tracking-widest text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Three months later
      </motion.p>

      {/* Subtext */}
      <motion.p
        className="mt-2 text-center text-xs text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Your company is evaluating Stripe...
      </motion.p>
    </motion.div>
  )
}
