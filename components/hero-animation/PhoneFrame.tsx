'use client'

import { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer frame */}
      <div className="relative rounded-[44px] bg-[#1a1a1a] p-[10px] shadow-2xl sm:rounded-[40px] sm:p-[8px]">
        {/* Screen area */}
        <div className="relative overflow-hidden rounded-[34px] bg-[#FAF7F2] sm:rounded-[32px]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[70px] -translate-x-1/2 rounded-[14px] bg-black sm:h-[28px] sm:w-[90px]" />

          {/* Status Bar */}
          <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 pt-3">
            <span className="text-xs font-medium text-gray-800">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 17h2v4H2v-4zm4-5h2v9H6v-9zm4-4h2v13h-2V8zm4-3h2v16h-2V5z" />
              </svg>
              <svg className="h-3.5 w-3.5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l11 11c.39.39 1.02.39 1.41 0l11-11c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z" />
              </svg>
              <svg className="h-5 w-3 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="20" y="10" width="2" height="4" rx="1" />
                <rect x="4" y="9" width="14" height="6" rx="1" />
              </svg>
            </div>
          </div>

          {/* Screen content */}
          <div className="relative aspect-[9/19.5] w-full pt-12">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-[100px] -translate-x-1/2 rounded-full bg-[#333] sm:w-[120px]" />
        </div>
      </div>
    </div>
  )
}
