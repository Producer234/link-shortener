"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function Step2Content() {
  const [count, setCount] = useState(8)
  const router = useRouter()
  const searchParams = useSearchParams()
  const d = searchParams.get('d')

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [count])

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="h-40 bg-gray-200 flex items-center justify-center rounded">ADS 2</div>
        <div className="h-40 bg-gray-200 flex items-center justify-center rounded">ADS 3</div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-lg border max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Processing Link...</h2>
        <div className="w-20 h-20 border-8 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-4xl font-black text-gray-800 mb-6">{count}s</p>
        <button 
          disabled={count > 0}
          onClick={() => router.push(`/step3?d=${d}`)}
          className={`w-full py-4 rounded-xl font-bold text-white transition ${count > 0 ? 'bg-gray-400' : 'bg-green-600 shadow-xl'}`}
        >
          {count > 0 ? "Wait..." : "Click to Continue"}
        </button>
      </div>
    </div>
  )
}

export default function Step2() {
  return (
    <Suspense fallback={<div className="text-center p-10 font-bold">Preparing link...</div>}>
      <Step2Content />
    </Suspense>
  )
}
