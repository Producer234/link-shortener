"use client";
import { useState } from "react";
import AdUnit from "@/components/AdUnit";
import { Copy, PlusCircle, AlertCircle, ExternalLink, Activity } from "lucide-react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const[shortened, setShortened] = useState("");

  const handleShorten = () => {
    if(!url) return;
    const encoded = btoa(url);
    // Replace with your actual domain in production
    setShortened(`https://prlinks.com/step1?target=${encoded}`);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      
      {/* Announcements */}
      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl flex items-start gap-3">
        <AlertCircle className="shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="font-bold">Welcome to PR LINK SHORTENER!</h4>
          <p className="text-sm mt-1">Our CPM rates have increased by 15% for US and UK traffic. Keep sharing and increasing your revenue!</p>
        </div>
      </div>

      <AdUnit format="Leaderboard 728x90" network="AdSense" className="h-[90px] w-full max-w-[728px] hidden md:flex" />
      <AdUnit format="Mobile Banner 320x50" network="AdSense" className="h-[50px] w-full max-w-[320px] md:hidden flex" />

      {/* Quick Shortener Tool */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <PlusCircle className="text-blue-600" /> New Short Link
        </h3>
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="url" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Your long URL here..." 
            className="flex-1 border-2 border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:bg-blue-50/30 transition text-slate-700 font-medium"
          />
          <button 
            onClick={handleShorten}
            className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition"
          >
            Shorten
          </button>
        </div>

        {shortened && (
          <div className="mt-5 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
            <div className="flex-1 truncate">
              <p className="text-xs text-green-600 font-bold uppercase mb-1">Your Short Link</p>
              <a href={shortened} target="_blank" className="text-green-700 font-medium text-lg hover:underline truncate block">
                {shortened}
              </a>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Copy size={18} /> Copy
            </button>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total Views", value: "1,245", icon: <Activity className="text-indigo-500" /> },
          { label: "Total Earnings", value: "$12.45", icon: <Activity className="text-green-500" /> },
          { label: "Referral Earnings", value: "$0.00", icon: <Activity className="text-purple-500" /> },
          { label: "Average CPM", value: "$10.00", icon: <Activity className="text-orange-500" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-32 relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition transform group-hover:scale-110">
              <Activity size={100} />
            </div>
            <div className="flex justify-between items-start">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">{stat.icon}</div>
            </div>
            <h4 className="text-3xl font-black text-slate-800">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Simulated Chart Area */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-800">Views & Earnings (Last 7 Days)</h3>
          <select className="bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
        
        {/* CSS Only Bar Chart Simulation */}
        <div className="h-64 flex items-end gap-2 sm:gap-4 border-l border-b border-slate-200 pb-2 pl-2">
          {[40, 70, 45, 90, 60, 30, 80].map((height, i) => (
             <div key={i} className="flex-1 flex flex-col justify-end items-center group relative">
                {/* Tooltip */}
                <div className="absolute -top-10 bg-slate-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block z-10 whitespace-nowrap">
                  {height * 10} Views
                </div>
                <div 
                  className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-colors" 
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-[10px] text-slate-400 mt-2 absolute -bottom-6">Day {i+1}</span>
             </div>
          ))}
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">Chart rendering simulated for performance.</div>
      </div>
      
      <AdUnit format="Native Ad" network="Adsterra" className="h-[250px] w-full" />
    </div>
  );
}
