"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AdUnit from "@/components/AdUnit";
import { ExternalLink, CheckCircle2 } from "lucide-react";

function Step3Content() {
  const searchParams = useSearchParams();
  const target = searchParams.get("target");
  const [decodedUrl, setDecodedUrl] = useState("");

  useEffect(() => {
    if (target) {
      try {
        setDecodedUrl(atob(target)); 
      } catch (e) {
        setDecodedUrl("/");
      }
    }
  }, [target]);

  return (
    <div className="bg-slate-100 min-h-screen pb-24 font-sans flex flex-col items-center">
      
      {/* Top Banner */}
      <div className="w-full p-4 flex justify-center bg-white border-b border-slate-200 shadow-sm mb-10">
        <AdUnit format="Leaderboard 728x90" network="AdSense" className="h-[90px] w-full max-w-[728px] hidden md:flex" />
        <AdUnit format="Mobile Banner 320x50" network="AdSense" className="h-[50px] w-full max-w-[320px] md:hidden flex" />
      </div>

      <div className="w-full max-w-3xl px-4 text-center">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200">
          
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 tracking-tight">Your Link is Ready!</h1>
          <p className="text-slate-500 mb-10 text-lg">Thank you for using PR LINK SHORTENER. Click the button below to go to your final destination.</p>
          
          <AdUnit format="Large Rectangle 336x280" network="AdSense" className="h-[280px] w-[336px] mx-auto bg-slate-50 mb-10" />

          {decodedUrl ? (
            <a 
              href={decodedUrl} 
              rel="nofollow noopener"
              className="mx-auto flex items-center justify-center gap-3 w-full sm:max-w-md bg-blue-600 text-white font-black text-xl py-5 rounded-xl hover:bg-blue-700 transition shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:-translate-y-1"
            >
              Go to Destination <ExternalLink size={24} />
            </a>
          ) : (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl font-bold">
              Invalid or Expired Link Provided
            </div>
          )}
        </div>
      </div>

      {/* High-Converting Sticky Bottom Ad */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-300 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50 flex justify-center items-center py-2">
        <div className="relative w-full max-w-[728px]">
          <button 
            onClick={(e) => e.currentTarget.parentElement.parentElement.style.display = 'none'}
            className="absolute -top-8 right-2 bg-white text-slate-500 rounded-t-lg px-3 py-1 text-xs font-bold border border-b-0 border-slate-300 shadow-sm"
          >
            Close Ad
          </button>
          <AdUnit format="Sticky Anchor Ad" network="AdSense" className="h-[50px] w-[320px] sm:w-[728px]" />
        </div>
      </div>

    </div>
  );
}

export default function Step3() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-slate-500">Finalizing...</div>}>
      <Step3Content />
    </Suspense>
  );
    }
