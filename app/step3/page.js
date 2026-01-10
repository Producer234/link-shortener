"use client"
import { useSearchParams } from 'next/navigation'

export default function Step3() {
  const d = useSearchParams().get('d')
  const finalLink = typeof window !== 'undefined' ? atob(d) : '#'

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-full h-80 bg-gray-200 mb-8 flex items-center justify-center border-4 border-double">
        <span className="text-gray-500 font-bold text-2xl">PREMIUM AD SPACE</span>
      </div>
      <h2 className="text-3xl font-black mb-6">Link Successfully Generated!</h2>
      <a 
        href={finalLink}
        className="inline-block bg-blue-600 text-white px-16 py-6 rounded-full text-2xl font-bold shadow-2xl hover:scale-105 transition-transform"
      >
        GET LINK NOW
      </a>
      <div className="mt-12 p-4 text-gray-400 text-sm italic">
        Report this link if it violates our terms of service.
      </div>
    </div>
  )
    }
