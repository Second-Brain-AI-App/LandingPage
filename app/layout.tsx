import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Second Brain - Your Personal Knowledge Assistant',
  description: 'Transform your thoughts into organized, searchable knowledge with AI-powered insights.',
  keywords: 'personal knowledge management, AI assistant, note-taking, voice notes, iOS app',
  openGraph: {
    title: 'Second Brain - Your Personal Knowledge Assistant',
    description: 'Transform your thoughts into organized, searchable knowledge with AI-powered insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}