'use client'

import { useEffect, useState } from 'react'

const APP_DEEP_LINK = 'app.secondbrainai.secondbrainapp://email-confirmed'

export default function EmailConfirmed() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Try to open the app automatically after a short delay
    const timer = setTimeout(() => {
      window.location.href = APP_DEEP_LINK
    }, 1000)

    // Show fallback message after 2.5 seconds (in case redirect didn't work)
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">
          {/* Logo Text */}
          <div className="flex justify-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              2nd Brain
            </h2>
          </div>

          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Email Verified!
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your second brain is ready to go.
          </p>

          {/* Description */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700">
              {showFallback
                ? "Tap the button below to open the app and start capturing."
                : "Opening the app..."
              }
            </p>
          </div>

          {/* CTA Button - Deep link to iOS app */}
          <a
            href={APP_DEEP_LINK}
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Open 2nd Brain
          </a>

          {/* Fallback hint */}
          {showFallback && (
            <p className="text-sm text-gray-500 mt-4">
              Button not working? Make sure 2nd Brain is installed, then tap again.
            </p>
          )}

          {/* Footer badges */}
          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>AI-powered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
