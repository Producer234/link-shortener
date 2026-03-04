"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AdUnit from "@/components/AdUnit";
import { ShieldAlert, ArrowRight } from "lucide-react";

function Step1Content() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const target = searchParams.get("target");

  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const verifyCaptcha = () => {
    if (parseInt(answer) === num1 + num2) {
      router.push(`/step2?target=${target}`);
    } else {
      setError(true);
      setAnswer("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 px-4 font-sans">
      
      {/* Header Ad */}
      <AdUnit format="Leaderboard 728x90" network="AdSense" className="h-[90px] w-full max-w-[728px] hidden md:flex mb-6 shadow-sm" />
      <AdUnit format="Mobile Banner 320x50" network="AdSense" className="h-[50px] w-full max-w-[320px] md:hidden flex mb-6 shadow-sm" />

      <div className="w-full max-w-2xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600"></div>

        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={32} />
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-2">Human Verification</h2>
        <p className="text-slate-500 font-medium mb-8">Please solve the math problem below to continue to your destination link.</p>
        
        {/* Prime In-content Ad Space (High CTR) */}
        <div className="my-8">
          <AdUnit format="Square 300x250" network="Adsterra / AdX" className="h-[250px] w-[300px] mx-auto bg-slate-50" />
        </div>

        <div className="max-w-xs mx-auto space-y-4">
          <div className="bg-slate-50 border-2 border-slate-200 p-4 rounded-xl shadow-inner flex items-center justify-center gap-4 text-2xl font-black text-slate-700">
            <span>{num1}</span> <span>+</span> <span>{num2}</span> <span>=</span>
            <input 
              type="number" 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={`w-20 text-center border-b-4 bg-transparent focus:outline-none ${error ? 'border-red-500 text-red-600' : 'border-blue-600 text-blue-600'}`}
              placeholder="?"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold animate-pulse">Incorrect answer. Please try again.</p>}
          
          <button 
            onClick={verifyCaptcha}
            className="w-full bg-blue-600 text-white font-black text-lg py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40 transition flex items-center justify-center gap-2"
          >
            Verify <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer Ad */}
      <AdUnit format="Leaderboard 728x90" network="AdSense" className="h-[90px] w-full max-w-[728px] mt-10 shadow-sm" />
    </div>
  );
}

export default function Step1() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-slate-500">Loading Secure Page...</div>}>
      <Step1Content />
    </Suspense>
  );
    }
