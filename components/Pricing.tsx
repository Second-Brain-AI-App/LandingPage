'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with your personal knowledge management.',
      features: [
        'Up to 1,000 notes',
        'Basic voice-to-text',
        'Local storage only',
        'Simple search',
        'iOS app access',
        'Community support'
      ],
      limitations: [
        'No AI insights',
        'No cloud sync',
        'Limited export options'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'Unlock the full power of AI-enhanced knowledge management.',
      features: [
        'Unlimited notes & storage',
        'Advanced AI insights',
        'Smart connections',
        'Priority voice processing',
        'Cloud sync & backup',
        'Advanced search & filters',
        'Export to multiple formats',
        'Priority support',
        'Early access to new features'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'border-primary-500 ring-2 ring-primary-200'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent
            <span className="text-primary-600 block">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock the full potential of AI-powered knowledge management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white border-2 ${plan.color} rounded-3xl p-8 ${
                plan.popular ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
              } transition-shadow duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold text-sm">Most Popular</span>
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Limitations (for Free plan) */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-600 text-sm mb-2">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitation} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0"></div>
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {/* Additional Info */}
                {plan.popular && (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">14-day free trial</span> • Cancel anytime
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900">Upgrade Anytime</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Start with our free plan and upgrade when you're ready for advanced AI features and unlimited storage.
              All your data seamlessly transfers over.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                View Feature Comparison
              </button>
              <button className="btn-primary">
                Questions? See FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}