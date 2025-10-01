'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function UseCases() {
  const [activeScreenshots, setActiveScreenshots] = useState<{[key: string]: number}>({
    student: 0,
    professional: 0,
    creative: 0
  })

  const personas = [
    {
      id: 'student',
      icon: GraduationCap,
      name: 'Sarah Chen',
      role: 'Graduate Student',
      bio: 'PhD in Psychology researching cognitive behaviors',
      useCase: 'Captures lecture notes, research papers, and sudden insights. Uses voice notes during fieldwork and creates connections between theories across different sources.',
      features: ['Voice-to-text lectures', 'Research paper analysis', 'Theory connections', 'Citation tracking'],
      color: 'from-blue-500 to-purple-600',
      screenshots: [
        {
          title: 'Voice Notes',
          description: 'Recording lectures with automatic transcription',
          mockContent: [
            { type: 'header', content: '🎤 Recording Lecture', color: 'blue' },
            { type: 'text', content: 'Cognitive Psychology - Week 4', width: 'full' },
            { type: 'text', content: 'Memory consolidation during sleep...', width: '3/4' },
            { type: 'highlight', content: 'Key insight detected', width: '1/2' }
          ]
        },
        {
          title: 'Research Notes',
          description: 'Organizing research papers and citations',
          mockContent: [
            { type: 'header', content: '📚 Research Library', color: 'purple' },
            { type: 'text', content: 'Kahneman, D. (2011) - Thinking Fast...', width: 'full' },
            { type: 'text', content: 'Connected to: Memory Studies', width: '2/3' },
            { type: 'highlight', content: '3 related papers found', width: '1/2' }
          ]
        },
        {
          title: 'Theory Mapping',
          description: 'Connecting ideas across different sources',
          mockContent: [
            { type: 'header', content: '🔗 Knowledge Graph', color: 'indigo' },
            { type: 'text', content: 'Behavioral Economics ↔ Cognitive Bias', width: 'full' },
            { type: 'text', content: 'Found 12 connections', width: '3/4' },
            { type: 'highlight', content: 'New research direction', width: '2/3' }
          ]
        }
      ]
    },
    {
      id: 'professional',
      icon: Briefcase,
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      bio: 'Leading product development at a tech startup',
      useCase: 'Organizes customer feedback, meeting notes, and product ideas. Quickly finds relevant insights when preparing presentations or making strategic decisions.',
      features: ['Meeting transcripts', 'Customer insights', 'Strategic planning', 'Team collaboration'],
      color: 'from-green-500 to-teal-600',
      screenshots: [
        {
          title: 'Meeting Notes',
          description: 'Automatic transcription and action items',
          mockContent: [
            { type: 'header', content: '📝 Sprint Planning', color: 'green' },
            { type: 'text', content: 'User feedback: Navigation confusing', width: 'full' },
            { type: 'text', content: 'Action: Redesign onboarding flow', width: '3/4' },
            { type: 'highlight', content: 'Priority: High', width: '1/2' }
          ]
        },
        {
          title: 'Customer Insights',
          description: 'Tracking and analyzing user feedback',
          mockContent: [
            { type: 'header', content: '👥 Customer Voice', color: 'teal' },
            { type: 'text', content: 'Feature Request: Dark mode (15 users)', width: 'full' },
            { type: 'text', content: 'Pain Point: Slow loading times', width: '2/3' },
            { type: 'highlight', content: 'Trending issue', width: '1/2' }
          ]
        },
        {
          title: 'Strategic Planning',
          description: 'Roadmap decisions with data insights',
          mockContent: [
            { type: 'header', content: '🎯 Product Roadmap', color: 'emerald' },
            { type: 'text', content: 'Q2 Goal: Improve user retention by 25%', width: 'full' },
            { type: 'text', content: 'Key metric: DAU/MAU ratio', width: '3/4' },
            { type: 'highlight', content: 'Data-driven insights', width: '2/3' }
          ]
        }
      ]
    },
    {
      id: 'creative',
      icon: Lightbulb,
      name: 'Emma Thompson',
      role: 'Creative Writer',
      bio: 'Novelist and freelance content creator',
      useCase: 'Stores story ideas, character development notes, and inspiration. Discovers forgotten plot points and finds thematic connections across different projects.',
      features: ['Story development', 'Character tracking', 'Inspiration capture', 'Plot connections'],
      color: 'from-pink-500 to-rose-600',
      screenshots: [
        {
          title: 'Story Ideas',
          description: 'Capturing inspiration and plot concepts',
          mockContent: [
            { type: 'header', content: '💡 New Story Idea', color: 'pink' },
            { type: 'text', content: 'Time-traveling detective in Victorian London', width: 'full' },
            { type: 'text', content: 'Theme: Technology vs tradition', width: '3/4' },
            { type: 'highlight', content: 'Genre: Sci-fi mystery', width: '1/2' }
          ]
        },
        {
          title: 'Character Development',
          description: 'Building rich character profiles and arcs',
          mockContent: [
            { type: 'header', content: '👤 Character: Detective Shaw', color: 'rose' },
            { type: 'text', content: 'Backstory: Lost family in industrial accident', width: 'full' },
            { type: 'text', content: 'Motivation: Justice through technology', width: '2/3' },
            { type: 'highlight', content: 'Character arc mapped', width: '3/4' }
          ]
        },
        {
          title: 'Plot Connections',
          description: 'Finding themes across different projects',
          mockContent: [
            { type: 'header', content: '🌟 Thematic Links', color: 'fuchsia' },
            { type: 'text', content: 'Common theme: Technology & humanity', width: 'full' },
            { type: 'text', content: 'Appears in 3 different stories', width: '3/4' },
            { type: 'highlight', content: 'Potential series idea', width: '2/3' }
          ]
        }
      ]
    }
  ]

  const nextScreenshot = (personaId: string, totalScreenshots: number) => {
    setActiveScreenshots(prev => ({
      ...prev,
      [personaId]: (prev[personaId] + 1) % totalScreenshots
    }))
  }

  const prevScreenshot = (personaId: string, totalScreenshots: number) => {
    setActiveScreenshots(prev => ({
      ...prev,
      [personaId]: prev[personaId] === 0 ? totalScreenshots - 1 : prev[personaId] - 1
    }))
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
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perfect for Every
            <span className="text-primary-600 block">Knowledge Worker</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Second Brain adapts to different workflows and enhances productivity across various professions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${persona.color} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <persona.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{persona.name}</h3>
                      <p className="text-white/90 text-sm">{persona.role}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{persona.bio}</p>
                </div>

                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Use Case */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How they use Second Brain:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{persona.useCase}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {persona.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Interactive Screenshots */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">App Screenshots:</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => prevScreenshot(persona.id, persona.screenshots.length)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="text-xs text-gray-500 min-w-12 text-center">
                        {activeScreenshots[persona.id] + 1} / {persona.screenshots.length}
                      </span>
                      <button
                        onClick={() => nextScreenshot(persona.id, persona.screenshots.length)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="relative h-40 bg-gray-50 rounded-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${persona.id}-${activeScreenshots[persona.id]}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-4"
                      >
                        {/* Screenshot Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h5 className="font-medium text-gray-900 text-sm">
                              {persona.screenshots[activeScreenshots[persona.id]].title}
                            </h5>
                            <p className="text-xs text-gray-500">
                              {persona.screenshots[activeScreenshots[persona.id]].description}
                            </p>
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>

                        {/* Mock Content */}
                        <div className="space-y-2">
                          {persona.screenshots[activeScreenshots[persona.id]].mockContent.map((item, itemIndex) => {
                            if (item.type === 'header') {
                              return (
                                <div key={itemIndex} className={`text-xs font-medium text-${item.color}-600 bg-${item.color}-50 px-2 py-1 rounded`}>
                                  {item.content}
                                </div>
                              )
                            } else if (item.type === 'highlight') {
                              return (
                                <div key={itemIndex} className={`h-2 bg-gradient-to-r from-primary-200 to-primary-100 rounded w-${item.width}`}></div>
                              )
                            } else {
                              return (
                                <div key={itemIndex} className={`h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-${item.width}`}></div>
                              )
                            }
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Screenshot Indicators */}
                  <div className="flex items-center justify-center gap-2">
                    {persona.screenshots.map((_, screenshotIndex) => (
                      <button
                        key={screenshotIndex}
                        onClick={() => setActiveScreenshots(prev => ({ ...prev, [persona.id]: screenshotIndex }))}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          activeScreenshots[persona.id] === screenshotIndex
                            ? 'bg-primary-500'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`View screenshot ${screenshotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Second Brain?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of knowledge workers who have transformed how they capture and organize their thoughts.
            </p>
            <button className="btn-primary text-lg">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}