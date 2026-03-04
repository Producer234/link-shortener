"use client";
import { UserCircle, Shield, Globe } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <h2 className="text-2xl font-black text-slate-800">My Profile</h2>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><UserCircle className="text-blue-600"/> Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Email Address</label>
            <input type="email" placeholder="email@example.com" disabled className="w-full border border-slate-200 bg-slate-100 rounded-lg p-3 text-slate-500 cursor-not-allowed" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Globe className="text-blue-600"/> Traffic Source</h3>
          <p className="text-sm text-slate-500 mb-4">Tell us where you share your link.</p>
          <select className="w-full md:w-1/2 border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 bg-white">
            <option>YouTube Channel</option>
            <option>Telegram Channel/Group</option>
            <option>WhatsApp Group</option>
            <option>Personal Website / Blog</option>
            <option>Facebook / Social Media</option>
            <option>Other</option>
          </select>
        </div>

        <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition">Save Profile Changes</button>
      </div>
    </div>
  );
}
