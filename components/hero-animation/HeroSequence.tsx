'use client'

import { useState, useEffect, useRef } from 'react'
import { CapturePhone } from './CaptureSequence'
import { RecallPhone } from './RecallSequence'

// Story content
const STORY_1 = {
  recording: "Mom's birthday is Saturday, she mentioned wanting that garden tool set from the podcast",
  confirmationTitle: "Get mom's birthday gift",
  nowTask: "Get mom's birthday gift",
  notification: "Mom's birthday Saturday — got her gift yet?",
  question: "What did mom want for her birthday?",
  answer: {
    title: "Garden tool set",
    subtitle: "From the podcast she listens to",
    context: "Birthday Saturday",
  },
}

const STORY_2 = {
  recording: "Met Lisa at the Austin conference, product lead at Stripe on the API platform team, came from Square, we talked about payment integrations and docs, her kid just started soccer and she's coaching",
  recordingContext: "Waiting to board your flight",
  confirmationTitle: "Met Lisa from Stripe",
  question1: "Do I know anyone at Stripe?",
  answer1: {
    title: "Lisa",
    subtitle: "Product lead on API platform team. Met at Austin conference.",
    context: "Payment integrations",
  },
  question2: "What do I know about Lisa from Stripe?",
  answer2: {
    title: "Product lead on API platform",
    subtitle: "Came from Square. Met at Austin fintech conference.",
    context: "Her kid plays soccer — she coaches",
  },
}

const STORY_3 = {
  recording: "David was raving about this ramen place in the Mission, said to get the spicy miso, there's usually a line",
  confirmationTitle: "David recommended ramen place",
  nowTask: "Ramen in the Mission",
  question1: "What ramen place did David recommend?",
  answer1: {
    title: "A ramen place in the Mission",
    subtitle: "Get the spicy miso. Expect a line.",
    context: "David",
  },
}

// Beat definitions
type Beat = {
  left: 'recording' | 'confirmation' | 'nowTab' | 'notification' | 'memoryTab' | 'timeTransition'
  right: 'static' | 'asking' | 'answer'
  story: 1 | 2 | 3
  duration: number
  rightQuestion?: 1 | 2
}

const BEATS: Beat[] = [
  // Story 1: Mom's birthday
  { left: 'recording', right: 'static', story: 1, duration: 5000 },
  { left: 'confirmation', right: 'static', story: 1, duration: 2000 },
  { left: 'nowTab', right: 'static', story: 1, duration: 2500 },
  { left: 'notification', right: 'static', story: 1, duration: 2000 },
  { left: 'notification', right: 'asking', story: 1, duration: 3500 },
  { left: 'notification', right: 'answer', story: 1, duration: 3000 },
  // Story 2: Lisa from Stripe (at airport, then 3 months later)
  { left: 'recording', right: 'static', story: 2, duration: 6000 },
  { left: 'confirmation', right: 'static', story: 2, duration: 2000 },
  { left: 'timeTransition', right: 'static', story: 2, duration: 2500 },
  { left: 'memoryTab', right: 'asking', story: 2, rightQuestion: 1, duration: 3500 },
  { left: 'memoryTab', right: 'answer', story: 2, rightQuestion: 1, duration: 3000 },
  { left: 'memoryTab', right: 'asking', story: 2, rightQuestion: 2, duration: 3500 },
  { left: 'memoryTab', right: 'answer', story: 2, rightQuestion: 2, duration: 3500 },
  // Story 3: David's ramen
  { left: 'recording', right: 'static', story: 3, duration: 5500 },
  { left: 'confirmation', right: 'static', story: 3, duration: 2000 },
  { left: 'memoryTab', right: 'asking', story: 3, rightQuestion: 1, duration: 3500 },
  { left: 'memoryTab', right: 'answer', story: 3, rightQuestion: 1, duration: 3500 },
]

export function useHeroSequence() {
  const [beatIndex, setBeatIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const beat = BEATS[beatIndex]

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextIndex = (beatIndex + 1) % BEATS.length
      setBeatIndex(nextIndex)
    }, beat.duration)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [beatIndex, beat.duration])

  // Determine content for current beat
  const getStory = () => {
    if (beat.story === 1) return STORY_1
    if (beat.story === 2) return STORY_2
    return STORY_3
  }
  const story = getStory()

  const leftProps = {
    screen: beat.left,
    recordingText: story.recording,
    recordingContext: 'recordingContext' in story ? story.recordingContext : undefined,
    confirmationTitle: story.confirmationTitle,
    nowTask: 'nowTask' in story ? story.nowTask : undefined,
    notification: beat.story === 1 ? STORY_1.notification : undefined,
    storyNumber: beat.story,
  }

  // Determine which question/answer to show
  const getQuestionAnswer = () => {
    if (beat.story === 1) {
      return { question: STORY_1.question, answer: STORY_1.answer }
    }
    if (beat.story === 2) {
      if (beat.rightQuestion === 2) {
        return { question: STORY_2.question2, answer: STORY_2.answer2 }
      }
      return { question: STORY_2.question1, answer: STORY_2.answer1 }
    }
    // Story 3
    return { question: STORY_3.question1, answer: STORY_3.answer1 }
  }
  const { question, answer } = getQuestionAnswer()

  const rightProps = {
    screen: beat.right,
    question,
    answer,
    storyNumber: beat.story,
  }

  // Use stable keys based on actual screen/content changes, not beatIndex
  // This prevents flickering when only one phone needs to change
  const leftKey = `capture-${beat.left}-${beat.story}`
  const rightKey = `recall-${beat.right}-${beat.story}-${beat.rightQuestion || 0}`

  return {
    left: <CapturePhone key={leftKey} {...leftProps} />,
    right: <RecallPhone key={rightKey} {...rightProps} />,
  }
}
