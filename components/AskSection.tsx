'use client'

import { motion } from 'framer-motion'

const CONTENT = {
  label: 'ASK',
  headline: 'Search like you think.',
  subheadline: 'Just ask in plain English. No folders. No tags. No digging.',
}

const CONVERSATIONS = [
  {
    question: 'What did mom want for her birthday?',
    answer: {
      title: 'Garden tool set',
      subtitle: 'From the podcast she listens to',
    },
  },
  {
    question: 'What ramen place did David recommend?',
    answer: {
      title: 'A ramen place in the Mission',
      subtitle: 'Get the spicy miso. Expect a line.',
    },
  },
  {
    question: 'What was that random thought I had yesterday?',
    answer: {
      title: 'Saying yes from fear of being forgotten',
      subtitle: "I say yes to things because I'm afraid of being forgotten, not because I want to do them",
    },
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function QuestionBubble({ text }: { text: string }) {
  return (
    <motion.div variants={itemVariants} className="flex justify-end">
      <div className="max-w-[280px] rounded-2xl rounded-br bg-gray-100 px-4 py-3 md:max-w-[340px]">
        <p className="text-sm font-medium text-gray-700 md:text-base">{text}</p>
      </div>
    </motion.div>
  )
}

function AnswerBubble({
  answer,
}: {
  answer: {
    title: string
    subtitle: string
  }
}) {
  return (
    <motion.div variants={itemVariants} className="flex justify-start">
      <div className="max-w-[280px] rounded-2xl rounded-bl border border-amber-200/50 bg-[#FFFBF5] p-4 md:max-w-[340px]">
        {/* Title */}
        <h4 className="text-sm font-semibold text-gray-900 md:text-base">{answer.title}</h4>

        {/* Subtitle */}
        <p className="mt-1.5 text-xs text-gray-600 md:text-sm">{answer.subtitle}</p>
      </div>
    </motion.div>
  )
}

export function AskSection() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            {CONTENT.label}
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">{CONTENT.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">{CONTENT.subheadline}</p>
        </motion.div>

        {/* Chat Conversations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 space-y-5 md:mt-14"
        >
          {CONVERSATIONS.map((conv, index) => (
            <div key={index} className="space-y-3">
              <QuestionBubble text={conv.question} />
              <AnswerBubble answer={conv.answer} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
