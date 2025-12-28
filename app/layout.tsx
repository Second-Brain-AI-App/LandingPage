import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { landingContent } from '@/content/landingContent'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: landingContent.seo.title,
  description: landingContent.seo.description,
  openGraph: {
    title: landingContent.seo.title,
    description: landingContent.seo.description,
    url: landingContent.seo.url,
    type: 'website',
    images: [landingContent.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: landingContent.seo.title,
    description: landingContent.seo.description,
    images: [landingContent.seo.ogImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
