"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Link as LinkIcon, Wallet, PieChart, Users, Settings, LifeBuoy, Menu, X, Bell, UserCircle } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems =[
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Manage Links", icon: <LinkIcon size={20} />, path: "/dashboard/links" },
    { name: "Withdraw", icon: <Wallet size={20} />, path: "/dashboard/withdraw" },
    { name: "Referrals", icon: <Users size={20} />, path: "#" },
    { name: "Settings", icon: <Settings size={20} />, path: "#" },
    { name: "Support", icon: <LifeBuoy size={20} />, path: "#" },
  ];

  return (
    <div className="flex h-screen bg-[#F4F7FA] font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 flex flex-col shadow-2xl lg:shadow-none`}>
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <LinkIcon className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">PR LINK</span>
          </div>
          <button className="ml-auto lg:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 border-b border-slate-800 bg-slate-800/30">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Available Balance</p>
          <h3 className="text-2xl font-black text-white">$12.45</h3>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                  : "hover:bg-slate-800 hover:text-white text-slate-400"
                }`}
              >
                {item.icon} {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:ml-64 w-full h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 z-10 shrink-0">
          <button className="lg:hidden text-slate-600 p-2" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <h2 className="text-xl font-bold text-slate-800 hidden sm:block">
            {navItems.find(i => i.path === pathname)?.name || "Dashboard"}
          </h2>

          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition bg-slate-50 rounded-full border border-slate-200">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800">John Doe</p>
                <p className="text-xs text-slate-500">Member</p>
              </div>
              <UserCircle size={36} className="text-slate-400" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 relative">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
