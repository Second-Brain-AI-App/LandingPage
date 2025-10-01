'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Your Personal
                <span className="text-primary-600 block">Knowledge Assistant</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Transform your thoughts into organized, searchable knowledge with AI-powered insights.
                Capture ideas with voice, text, and images.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center gap-2 text-lg">
                <Download className="w-5 h-5" />
                Download for iOS
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg">
                <Smartphone className="w-5 h-5" />
                View Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Privacy-first</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AI-powered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - App Screenshot/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-12 bg-gray-50 flex items-center justify-between px-6 text-sm font-medium text-gray-900">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-gray-400 rounded-sm">
                        <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content Placeholder */}
                  <div className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div>
                      <h3 className="font-semibold text-gray-900">Second Brain</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="h-12 bg-gray-100 rounded-xl"></div>
                      <div className="h-20 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl"></div>
                      <div className="h-16 bg-gray-100 rounded-xl"></div>
                      <div className="h-24 bg-gradient-to-r from-secondary-100 to-secondary-50 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-2xl">🧠</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}