import "./globals.css";

export const metadata = {
  title: "PR LINK SHORTENER | Shorten URLs & Earn Money",
  description: "The best URL shortener to earn money online. Highest CPM, fast payouts, and advanced tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Paste your Google AdSense Auto-Ads Script here if you use it */}
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
