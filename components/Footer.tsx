import Link from 'next/link'
import { landingContent } from '@/content/landingContent'

export default function Footer() {
  const { footer } = landingContent

  return (
    <footer className="bg-gray-900 py-12 text-center text-gray-400">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-lg font-semibold text-white">{footer.logo}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          {footer.links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-500">{footer.copyright}</p>
      </div>
    </footer>
  )
}
