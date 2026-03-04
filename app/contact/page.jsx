import Link from "next/link";
import { LinkIcon, Mail, Send, MessageCircle, Info } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 h-20 flex items-center px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg"><LinkIcon className="text-white w-6 h-6" /></div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">PR LINK</span>
          </Link>
          <Link href="/dashboard" className="font-bold text-blue-600 hover:text-blue-800">Go to Dashboard</Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Contact & Support</h1>
          <p className="text-lg text-slate-600">We're here to help! Reach out to us through any of the channels below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex justify-center items-center mb-6"><Mail size={28} /></div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Email Support</h3>
            <p className="text-slate-500 mb-6">For business inquiries, account bans, or payment issues.</p>
            <a href="mailto:support@prlinks.com" className="inline-block bg-slate-100 text-slate-800 font-bold px-6 py-3 rounded-lg hover:bg-slate-200 transition">support@prlinks.com</a>
          </div>

          {/* Telegram Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-xl flex justify-center items-center mb-6"><Send size={28} /></div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Telegram Support</h3>
            <p className="text-slate-500 mb-6">Fastest response for quick questions and link issues.</p>
            <a href="https://t.me/OWNER_OF_PR" target="_blank" className="inline-block bg-[#0088cc] text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition">Message on Telegram</a>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex justify-center items-center mb-6"><MessageCircle size={28} /></div>
            <h3 className="text-xl font-black text-slate-800 mb-2">WhatsApp Help</h3>
            <p className="text-slate-500 mb-6">Available Mon-Fri, 9AM-6PM for withdrawal assistance.</p>
            <a href="https://wa.me/01829959376" target="_blank" className="inline-block bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition">Chat on WhatsApp</a>
          </div>

          {/* Telegram Updates Channel */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 rounded-2xl shadow-lg text-white hover:shadow-xl transition relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Info size={100} /></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2">Official Updates Channel</h3>
              <p className="text-blue-200 mb-6">Join our Telegram channel for CPM updates, promo codes, and withdrawal proofs.</p>
              <a href="https://t.me/ALL_PR_BOTS" target="_blank" className="inline-block bg-white text-blue-900 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition shadow-lg">Join Channel Now</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
