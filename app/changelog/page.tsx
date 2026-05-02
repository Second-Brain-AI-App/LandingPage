import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ReleaseTimeline } from '@/components/ReleaseTimeline'
import { releases } from '@/content/releaseNotes'

export const metadata = {
  title: 'Changelog — Second Brain',
  description: 'Every shipped change to Second Brain, in plain English.',
}

export default function ChangelogPage() {
  const latest = releases[0]

  return (
    <div className="relative min-h-screen overflow-hidden bg-warm-gradient">
      {/* Decorative ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
          Back to home
        </Link>

        {/* Hero */}
        <header className="mt-10 md:mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            What&rsquo;s new
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            <span className="bg-text-gradient bg-clip-text text-transparent">Changelog</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600 md:text-xl">
            Every shipped change to Second Brain, in plain English. No marketing fluff.
          </p>

          {latest && (
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-amber-500" />
              Latest: {latest.version} · {latest.date}
            </div>
          )}
        </header>

        {/* Timeline */}
        <main className="mt-14 md:mt-20">
          <ReleaseTimeline />
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-200/70 pt-8 text-center text-sm text-gray-500">
          <Link href="/" className="font-medium hover:text-amber-600">
            Second Brain
          </Link>
          <span className="mx-2">·</span>
          <Link href="/privacy" className="hover:text-amber-600">
            Privacy
          </Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="hover:text-amber-600">
            Terms
          </Link>
        </footer>
      </div>
    </div>
  )
}
