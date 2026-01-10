"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import AdBanner from '../../components/AdBanner'

function Step1Content() {
  const [num, setNum] = useState({ a: 0, b: 0 })
  const [ans, setAns] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const d = searchParams.get('d')

  useEffect(() => {
    setNum({ a: Math.floor(Math.random() * 30), b: Math.floor(Math.random() * 30) })
  }, [])

  const check = () => {
    if (parseInt(ans) === num.a + num.b) {
      router.push(`/step2?d=${d}`)
    } else { alert("Try again!") }
  }

  return (
    <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-xl border">
      <AdBanner />
      <h3 className="text-2xl font-bold mb-4">Are you human?</h3>
      <div className="text-3xl font-black bg-blue-50 py-4 rounded-lg mb-4 text-blue-600">
        {num.a} + {num.b} = ?
      </div>
      <input 
        type="number" className="w-full p-4 border-2 rounded-xl mb-4 text-center text-xl outline-blue-500"
        placeholder="Result" value={ans} onChange={(e) => setAns(e.target.value)}
      />
      <button onClick={check} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">Continue</button>
    </div>
  )
}

export default function Step1() { return <Suspense><Step1Content /></Suspense> }
