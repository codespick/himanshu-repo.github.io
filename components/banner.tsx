'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm border-b border-blue-400/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <p className="text-sm sm:text-base text-white font-medium flex items-center gap-2">
          <span className="inline-flex h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
          Open to Full Stack Developer roles — Remote & Jaipur. Let&apos;s connect!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 p-1 rounded transition-colors"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
