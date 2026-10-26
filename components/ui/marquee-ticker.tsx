"use client"

import { useState } from "react"

export default function MarqueeTicker() {
  const [isHovered, setIsHovered] = useState(false)

  const items = [
    "NEGERI KAHIYANG",
    "TIKTOK AFFILIATE ACCELERATOR",
    "VIRAL ANALYZER AI v2.4",
    "AI CREATIVE STUDIO",
    "500+ VERIFIED CREATORS",
    "PERS INDEPENDEN BINAR PAGI",
    "ZERO-COST AUTOMATION PIPELINE",
    "10M+ ORGANIC REACH",
  ]

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-20 w-full overflow-hidden my-3 py-2.5 border-y border-white/10 bg-[#07090e]/85 backdrop-blur-xl select-none"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative overflow-hidden whitespace-nowrap">
        <div
          style={{
            animation: "tickerLoop 65s linear infinite",
            animationPlayState: isHovered ? "paused" : "running",
          }}
          className="inline-block font-mono text-[11px] sm:text-xs tracking-[0.22em] text-zinc-300 uppercase will-change-transform"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <span key={idx} className="inline-flex items-center gap-6 mx-3">
              {items.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-5">
                  <span className="size-1 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                  <span className="hover:text-emerald-400 transition-colors cursor-pointer font-medium">{item}</span>
                  <span className="text-zinc-600 text-[10px]">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
