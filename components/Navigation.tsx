'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { landingContent } from '@/content/landingContent'
import { MagneticButton } from '@/components/MagneticButton'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function Navigation() {
  const { nav } = landingContent
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const direction = useScrollDirection(6)

  const smoothScroll = (href: string, fromMobile = false) => {
    // Close menu first on mobile
    if (fromMobile) {
      setIsMenuOpen(false)
      // Wait for menu to close before scrolling
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 16
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    } else {
      const target = document.querySelector(href)
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 16
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string, fromMobile = false) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    smoothScroll(href, fromMobile)
  }

  return (
    <div className="fixed left-0 right-0 top-4 z-[95] flex justify-center px-4">
      <div
        className={`w-full max-w-6xl rounded-3xl border border-white/50 bg-white/70 shadow-lg backdrop-blur-nav transition-all duration-300 ${
          direction === 'down' ? '-translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <nav className="flex h-16 items-center justify-between px-6 text-sm font-medium text-gray-600 md:h-18">
          <Link
            href="#top"
            className="text-lg font-semibold text-gray-900"
            aria-label="Go to top"
            onClick={(event) => {
              event.preventDefault()
              smoothScroll('#top')
            }}
          >
            {nav.logo}
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="text-sm font-medium text-gray-600 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <MagneticButton href={nav.ctaHref} ariaLabel={nav.ctaLabel}>
              {nav.ctaLabel}
            </MagneticButton>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2 text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-4 px-6 pb-6 text-gray-700">
                {nav.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-base font-medium"
                    onClick={(event) => handleAnchorClick(event, link.href, true)}
                  >
                    {link.label}
                  </Link>
                ))}
                <MagneticButton href={nav.ctaHref} ariaLabel={nav.ctaLabel}>
                  {nav.ctaLabel}
                </MagneticButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
