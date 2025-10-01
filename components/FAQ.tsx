'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does Second Brain protect my privacy?',
      answer: 'Your privacy is our top priority. All your notes, voice recordings, and personal content are stored locally on your device using SwiftData. Only anonymous embedding vectors are generated through our secure API - your actual content never leaves your device. We use a privacy-first architecture that ensures your thoughts remain yours.'
    },
    {
      question: 'Can I use Second Brain offline?',
      answer: 'Yes! Second Brain is designed to work seamlessly offline. All your notes, search functionality, and core features work without an internet connection. You only need connectivity for AI-powered insights and when generating embeddings for new content.'
    },
    {
      question: 'What AI features are included in the Pro plan?',
      answer: 'Pro users get access to advanced AI insights, smart connections between ideas, enhanced search with semantic understanding, automatic topic clustering, and AI-generated summaries. The AI helps you discover patterns and connections in your knowledge that you might have missed.'
    },
    {
      question: 'How accurate is the voice-to-text feature?',
      answer: 'Our voice-to-text technology achieves over 95% accuracy for clear speech. It works in multiple languages and adapts to your speaking style over time. The Pro version includes enhanced voice processing with better accuracy for technical terms and domain-specific vocabulary.'
    },
    {
      question: 'Can I export my data if I want to switch apps?',
      answer: 'Absolutely. We believe in data ownership and portability. You can export your entire knowledge base in multiple formats including JSON, Markdown, and PDF. Pro users get additional export options and can set up automated backups to their preferred cloud storage.'
    },
    {
      question: 'Is there a limit to how much I can store?',
      answer: 'The free plan allows up to 1,000 notes, which is perfect for getting started. Pro users get unlimited storage for notes, voice recordings, and images. All storage is local to your device, so the only limit is your device\'s available space.'
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked
            <span className="text-primary-600 block">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Second Brain. Can't find the answer you're looking for?
            Feel free to reach out to our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItem === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 text-primary-600"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you get the most out of Second Brain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-secondary">
                  Browse Documentation
                </button>
                <button className="btn-primary">
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}