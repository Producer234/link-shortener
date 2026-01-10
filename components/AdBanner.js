"use client"
import { useEffect, useRef } from 'react'

export default function AdBanner() {
  const banner = useRef(null)

  useEffect(() => {
    // Only load if not already loaded
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      conf.type = 'text/javascript'
      conf.innerText = `
        atOptions = {
          'key' : 'e74a2fdafcd74e6ed493882d945670da',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `
      script.type = 'text/javascript'
      script.src = "https://www.highperformanceformat.com/e74a2fdafcd74e6ed493882d945670da/invoke.js"

      banner.current.append(conf)
      banner.current.append(script)
    }
  }, [])

  return (
    <div className="flex justify-center my-6 min-h-[95px] w-full overflow-hidden bg-gray-50 border border-gray-100 rounded">
      <div ref={banner}></div>
    </div>
  )
}
