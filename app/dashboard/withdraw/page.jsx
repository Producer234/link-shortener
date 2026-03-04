"use client";
import { Wallet, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Withdraw() {
  const [method, setMethod] = useState("bkash");
  
  const payoutMethods =[
    { id: "bkash", name: "bKash (Bangladesh)", min: 5, icon: "🇧🇩" },
    { id: "nagad", name: "Nagad (Bangladesh)", min: 5, icon: "🇧🇩" },
    { id: "upi", name: "UPI (India)", min: 5, icon: "🇮🇳" },
    { id: "paytm", name: "Paytm (India)", min: 5, icon: "🇮🇳" },
    { id: "usdt", name: "USDT TRC20 (Crypto)", min: 10, icon: "🪙" },
    { id: "btc", name: "Bitcoin (Crypto)", min: 20, icon: "₿" },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl">
      <h2 className="text-2xl font-black text-slate-800">Withdraw Funds</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <p className="text-blue-200 font-bold uppercase text-xs mb-1">Available Balance</p>
          <h3 className="text-4xl font-black">$12.45</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <p className="text-slate-400 font-bold uppercase text-xs mb-1">Pending Withdraw</p>
          <h3 className="text-4xl font-black text-slate-700">$0.00</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <p className="text-slate-400 font-bold uppercase text-xs mb-1">Total Withdrawn</p>
          <h3 className="text-4xl font-black text-slate-700">$45.00</h3>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Wallet className="text-blue-600"/> Request Payout</h3>
        
        <div className="space-y-6 max-w-xl">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Select Payment Method</label>
            <select 
              value={method} 
              onChange={(e) => setMethod(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 bg-white font-medium"
            >
              {payoutMethods.map(m => <option key={m.id} value={m.id}>{m.icon} {m.name} - Min: ${m.min}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Withdrawal Account / Details</label>
            <input 
              type="text" 
              placeholder={method === 'usdt' || method === 'btc' ? "Enter Wallet Address" : "Enter Phone/UPI ID"} 
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Amount ($)</label>
            <input 
              type="number" 
              defaultValue="12.45"
              max="12.45"
              className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 font-bold text-slate-800" 
            />
          </div>

          <div className="p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-xl text-sm flex gap-3">
            <AlertCircle className="shrink-0" />
            <p>Payments are processed within 24-48 hours. Please ensure your payment details are 100% correct.</p>
          </div>

          <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition flex justify-center items-center gap-2">
            Submit Request <ArrowRight size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}
