"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function Step1Content() {
  const [num, setNum] = useState({ a: 0, b: 0 })
  const [ans, setAns] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const d = searchParams.get('d')

  useEffect(() => {
    setNum({ a: Math.floor(Math.random() * 50), b: Math.floor(Math.random() * 50) })
  }, [])

  const check = () => {
    if (parseInt(ans) === num.a + num.b) {
      router.push(`/step2?d=${d}`)
    } else {
      alert("Wrong Answer, try again!")
    }
  }

  return (
    <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-xl border">
      <div className="w-full h-64 bg-gray-200 mb-6 flex items-center justify-center">
        <span className="text-gray-400 font-bold italic">AD SPACE #1</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">Security Check</h3>
      <p className="text-gray-500 mb-6">Solve this to prove you are human:</p>
      <div className="text-3xl font-mono font-black bg-blue-50 py-4 rounded-lg mb-4 text-blue-600">
        {num.a} + {num.b} = ?
      </div>
      <input 
        type="number" className="w-full p-4 border-2 rounded-xl mb-4 text-center text-xl outline-blue-500"
        placeholder="Enter total" value={ans} onChange={(e) => setAns(e.target.value)}
      />
      <button onClick={check} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg">Continue to Link</button>
    </div>
  )
}

export default function Step1() {
  return <Suspense><Step1Content /></Suspense>
}
