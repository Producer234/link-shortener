"use client"
import { useEffect } from 'react'

export default function AdContainer() {
  useEffect(() => {
    // This function ensures the script is added only once
    const scriptId = 'ad-script-invoke';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://pl28442658.effectivegatecpm.com/200e7db1314bb95050699eab0b196d0e/invoke.js';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-6">
      {/* This ID MUST match exactly what the ad network gave you */}
      <div id="container-200e7db1314bb95050699eab0b196d0e"></div>
    </div>
  )
}
