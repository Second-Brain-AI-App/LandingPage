'use client'

import { motion } from 'framer-motion'
import { Brain, Lock, Zap, Search } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI understands context and relationships between your ideas, making connections you might miss.'
    },
    {
      icon: Lock,
      title: 'Privacy-First Design',
      description: 'Your data stays on your device. All content and embeddings are stored locally for maximum privacy.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Search',
      description: 'Instant semantic search through all your notes, voice recordings, and images with AI-powered relevance.'
    },
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'Discover forgotten insights and find connections between different ideas automatically.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                  About Second Brain
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              >
                Transform How You Think
                <span className="text-primary-600 block">and Remember</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Second Brain is more than a note-taking app. It's an intelligent companion that helps you capture,
                organize, and rediscover your thoughts using cutting-edge AI technology. Whether you're a researcher,
                student, or creative professional, Second Brain adapts to your workflow.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl shadow-lg border border-primary-100">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Knowledge Graph</h3>
                      <p className="text-sm text-gray-600">AI-powered connections</p>
                    </div>
                  </div>

                  {/* Network Visualization */}
                  <div className="relative h-48 bg-white rounded-2xl p-6 border border-gray-100">
                    <svg className="w-full h-full" viewBox="0 0 300 150">
                      {/* Connections */}
                      <motion.line
                        x1="50" y1="75" x2="150" y2="40"
                        stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.line
                        x1="150" y1="40" x2="250" y2="75"
                        stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                      <motion.line
                        x1="50" y1="75" x2="150" y2="110"
                        stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />

                      {/* Nodes */}
                      <motion.circle
                        cx="50" cy="75" r="15"
                        fill="#3b82f6" className="drop-shadow-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                      <motion.circle
                        cx="150" cy="40" r="12"
                        fill="#06b6d4" className="drop-shadow-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      />
                      <motion.circle
                        cx="250" cy="75" r="12"
                        fill="#10b981" className="drop-shadow-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      />
                      <motion.circle
                        cx="150" cy="110" r="10"
                        fill="#8b5cf6" className="drop-shadow-sm"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-xs text-gray-600">Ideas Captured</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">50+</div>
                      <div className="text-xs text-gray-600">Connections Made</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">95%</div>
                      <div className="text-xs text-gray-600">Search Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-16 bg-white rounded-xl shadow-lg border border-gray-100 p-3"
              >
                <div className="w-full h-2 bg-primary-200 rounded mb-2"></div>
                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-14 bg-white rounded-xl shadow-lg border border-gray-100 p-2"
              >
                <div className="w-full h-2 bg-secondary-200 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}