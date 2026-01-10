import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen flex flex-col font-sans">
        <header className="bg-white border-b border-gray-200 py-4 shadow-sm">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-2xl font-black text-blue-600 tracking-tighter italic">ULTRA<span className="text-gray-800">LINKS</span></h1>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">Payout Rates</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-10">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto text-center px-4">
            <div className="text-xl font-bold mb-2">ULTRALINKS</div>
            <p className="text-gray-400 text-sm">© 2026 High-Performance Link Management</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
