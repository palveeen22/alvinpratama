'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const NotFound = () => {
  const router = useRouter()
  const [countdown, setCountdown] = useState<number>(5)

  // Auto redirect countdown (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const handleGoHome = () => {
    router.push('/')
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Text */}
            <div className="mb-8">
              <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Oops! The page you`&rsquo;`re looking for seems to have wandered off into the digital void.
              </p>
            </div>

            {/* GIF Container */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-80 h-64 md:w-96 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
                <Image
                  src="/assets/not-found.gif"
                  alt="Page not found animation"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleGoHome}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to Home
              </button>
              <button
                onClick={handleGoBack}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Go Back
              </button>
            </div>

            {/* Auto redirect countdown */}
            <div className="text-gray-400 text-sm">
              <p>
                Redirecting to home page in{' '}
                <span className="text-purple-400 font-semibold">{countdown}</span>{' '}
                seconds...
              </p>
            </div>

            {/* Optional: Suggested links */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Maybe you were looking for:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => router.push('/projects')}
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => router.push('/about')}
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default NotFound