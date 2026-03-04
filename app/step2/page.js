"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AdUnit from "@/components/AdUnit";
import { Loader2 } from "lucide-react";

function Step2Content() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const target = searchParams.get("target");
  const [countdown, setCountdown] = useState(15); // 15s to comply with ad impressions

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Navbar Minimal */}
      <div className="bg-white border-b border-slate-200 h-16 flex items-center justify-center shadow-sm">
        <span className="text-xl font-black text-slate-800 tracking-tight">PR LINK</span>
      </div>

      <div className="flex-1 max-w-6xl mx-auto w-full p-4 flex flex-col lg:flex-row gap-6 my-6">
        
        {/* Left Skyscraper (Desktop only) */}
        <div className="hidden lg:block w-[160px] shrink-0">
           <AdUnit format="Skyscraper 160x600" network="AdSense / AdX" className="h-[600px] w-[160px] sticky top-6" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center">
          <AdUnit format="Leaderboard 728x90" network="AdSense" className="h-[90px] w-full max-w-[728px] mb-6 hidden md:flex" />
          <AdUnit format="Mobile Banner 320x50" network="AdSense" className="h-[50px] w-full max-w-[320px] mb-6 md:hidden flex" />

          <div className="bg-white w-full max-w-2xl p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Generating Your Link</h2>
            <p className="text-slate-500 mb-8 font-medium">Please wait while we prepare your destination link.</p>
            
            <div className="relative w-40 h-40 mx-auto my-10 drop-shadow-lg">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" className="stroke-slate-100" strokeWidth="12" fill="none" />
                <circle cx="80" cy="80" r="70" className="stroke-blue-600 transition-all duration-1000 ease-linear" strokeWidth="12" fill="none" strokeDasharray="440" strokeDashoffset={440 - (440 * (15 - countdown) / 15)} />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-slate-800">{countdown}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Seconds</span>
              </div>
            </div>

            {/* In-Article AdSpace */}
            <div className="my-8">
               <AdUnit format="In-Article 300x250" network="AdSense" className="h-[250px] w-[300px] mx-auto bg-slate-50" />
            </div>

            {countdown === 0 ? (
              <button 
                onClick={() => router.push(`/step3?target=${target}`)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-xl transition shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-bounce"
              >
                Get Link
              </button>
            ) : (
              <button disabled className="w-full bg-slate-200 text-slate-400 font-bold text-xl py-5 rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={24} /> Please Wait...
              </button>
            )}
          </div>
        </div>

        {/* Right Skyscraper (Desktop only) */}
        <div className="hidden lg:block w-[160px] shrink-0">
           <AdUnit format="Skyscraper 160x600" network="AdSense / AdX" className="h-[600px] w-[160px] sticky top-6" />
        </div>
      </div>
    </div>
  );
}

export default function Step2() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-slate-500">Loading Timer...</div>}>
      <Step2Content />
    </Suspense>
  );
    }
