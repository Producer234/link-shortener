"use client";

export default function AdUnit({ format = "Banner", network = "Ad Placement", className = "h-[90px] w-full max-w-[728px]" }) {
  return (
    <div className={`mx-auto bg-slate-100 border border-slate-300 rounded flex flex-col items-center justify-center text-slate-400 overflow-hidden relative ${className}`}>
      {/* 
        👇 REPLACE EVERYTHING INSIDE THIS DIV WITH YOUR ADSENSE / ADSTERRA SCRIPT 👇
      */}
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{network}</span>
      <span className="text-[10px] text-slate-400">{format}</span>
      <div className="absolute top-0 right-0 bg-slate-200 text-[9px] px-1 py-0.5 rounded-bl opacity-50">ADVERTISEMENT</div>
    </div>
  );
}
