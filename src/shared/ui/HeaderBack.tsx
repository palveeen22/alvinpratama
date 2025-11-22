'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const HeaderBack = ({ backText }: { backText: string }) => {
  const router = useRouter()

  return (
    <div className="w-full px-4 mb-6 cursor-pointer hover:underline">
      <div onClick={() => router.back()} className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {backText}
      </div>
    </div>
  )
};