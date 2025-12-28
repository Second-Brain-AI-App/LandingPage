import Image from 'next/image'

export default function EmailConfirmed() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">
          {/* Logo with subtle background */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl">
                <Image
                  src="/logo.png"
                  alt="2nd Brain Logo"
                  width={80}
                  height={80}
                  className="relative z-10"
                />
              </div>
            </div>
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
            Email Confirmed!
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your second brain is ready to go.
          </p>

          {/* Description */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700">
              Ready to never forget? Return to the app and start capturing your thoughts, ideas, and memories.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </a>

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
