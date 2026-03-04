import Link from "next/link";
import { LinkIcon, TrendingUp, ShieldCheck, Banknotes, Zap, Users, Headphones, BarChart3, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <LinkIcon className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">PR LINK</span>
            </div>
            <nav className="hidden md:flex gap-8 font-semibold text-sm text-slate-600">
              <Link href="/" className="text-blue-600">Home</Link>
              <Link href="#payouts" className="hover:text-blue-600 transition">Payout Rates</Link>
              <Link href="#proof" className="hover:text-blue-600 transition">Payment Proof</Link>
              <Link href="#api" className="hover:text-blue-600 transition">Developer API</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden md:block px-5 py-2.5 text-sm font-bold text-slate-700 hover:text-blue-600 transition">Log In</Link>
              <Link href="/dashboard" className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 transition">Sign Up Free</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-32 overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8">
            <Zap size={16} /> Highest CPM Rates in the Market
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Shorten URLs & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Earn Real Money</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            PR LINK SHORTENER is a completely free tool where you can create short links, which apart from being free, you get paid! Join now and start earning up to $20 per 10,000 views.
          </p>

          <div className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-xl border border-slate-200 flex flex-col sm:flex-row gap-3">
            <input 
              type="url" 
              placeholder="Paste your long URL here..." 
              className="flex-1 px-6 py-4 text-lg bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500 transition"
            />
            <button className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap">
              Shorten <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          <div className="py-4">
            <h3 className="text-4xl md:text-5xl font-black mb-2 text-blue-400">12,543,120</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Total Clicks</p>
          </div>
          <div className="py-4">
            <h3 className="text-4xl md:text-5xl font-black mb-2 text-blue-400">1,203,450</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Total Links</p>
          </div>
          <div className="py-4">
            <h3 className="text-4xl md:text-5xl font-black mb-2 text-blue-400">85,240</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Registered Users</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why choose PR LINK SHORTENER?</h2>
            <p className="text-slate-600 text-lg">We provide the best tools and features to help you maximize your earnings from your traffic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp />, title: "Highest Rates", desc: "Make the most out of your traffic with our ever-increasing payout rates depending on country." },
              { icon: <Banknotes />, title: "Low Minimum Payout", desc: "You are required to earn only $5.00 before you will be paid. We pay all users via PayPal, Payeer, WebMoney." },
              { icon: <ShieldCheck />, title: "Safe & Secure", desc: "Advanced systems filtering invalid clicks and maintaining clean, virus-free ads for your visitors." },
              { icon: <BarChart3 />, title: "Detailed Stats", desc: "Know your audience. Analyze in detail what brings you the most income and what strategies you should adapt." },
              { icon: <Users />, title: "20% Referral Bonus", desc: "The PR LINK referral program is a great way to spread the word and earn 20% of their earnings for life!" },
              { icon: <Headphones />, title: "Dedicated Support", desc: "A dedicated support team is ready to help with any questions you may have." }
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon className="text-blue-500 w-6 h-6" />
              <span className="text-xl font-black text-white">PR LINK</span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm">
              The premium URL shortener network. Monetize your links easily with the highest payout rates in the industry.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition">Payout Rates</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Payment Proof</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">API Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">DMCA</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} PR LINK SHORTENER. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 cursor-pointer transition"></div>
            <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 cursor-pointer transition"></div>
          </div>
        </div>
      </footer>
    </div>
  );
    }
