'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

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
      <body className="min-h-screen">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Text */}
            <div className="mb-8">
              <h1 className="text-9xl font-extrabold mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Page Not Found
              </h2>
              <p className="text-lg mb-8">
                Oops! The page you`&rsquo;`re looking for seems to have wandered off into the digital void.
              </p>
            </div>

            {/* GIF Container */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-80 h-64 md:w-96 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
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
              <Button
                variant='outline'
                onClick={handleGoHome}
                className="px-8 py-3 font-semibold rounded-lg  transition-all duration-300 transform"
              >
                Back to Home
              </Button>
            </div>

            {/* Auto redirect countdown */}
            <div className="text-sm">
              <p>
                Redirecting to home page in{' '}
                <span className="font-semibold">{countdown}</span>{' '}
                seconds...
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default NotFound