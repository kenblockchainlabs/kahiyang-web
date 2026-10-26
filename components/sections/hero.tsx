"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowUpRight, Sparkles, Users, Radio } from "lucide-react"

const InteractiveFluidCanvas = dynamic(
  () => import("@/components/ui/interactive-fluid-canvas"),
  { ssr: false }
)

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const lettersRef = useRef<(SVGTSpanElement | null)[]>([])
  const titleWrapperRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)

  const [scrollProg, setScrollProg] = useState(0)

  useEffect(() => {
    let rafId: number
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouse.targetX = (e.clientX / innerWidth - 0.5) * 2
      mouse.targetY = (e.clientY / innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", handleMouseMove)

    // =========================================================================
    // LENIS SHOWCASE MASTER ENGINE: SPECULAR CHROME + 3D ANAMORPHIC DEPTH
    // =========================================================================
    const renderMotion = () => {
      const win = window as unknown as { lenis?: { scroll: number } }
      const scrollY = (win.lenis && typeof win.lenis.scroll === "number")
        ? win.lenis.scroll
        : (window.scrollY || window.pageYOffset || 0)

      const windowHeight = window.innerHeight || 800
      const windowWidth = window.innerWidth || 1440
      
      const progress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.85)))
      setScrollProg(Math.round(progress * 100))

      // Lerp mouse physics
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // 1. KAHIYANG TITANIC CHROME: 3D magnetic tilt (TIDAK KABUR!)
      if (titleWrapperRef.current) {
        const tiltX = -mouse.y * 10 - progress * 6
        const tiltY = mouse.x * 14
        const translateY = scrollY * 0.12
        const scale = 1 - progress * 0.04
        titleWrapperRef.current.style.transform = `perspective(1400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(0, ${translateY}px, 0) scale(${scale})`
      }

      // 2. SHOWCASE SPECIMEN PODS LATERAL CONVERGENCE
      const maxShift = windowWidth >= 1024 ? Math.min(260, windowWidth * 0.18) : 80
      const maxRotate = windowWidth >= 1024 ? 10 : 5

      const lateralShift = (1 - progress) * maxShift
      const rotateDeg = (1 - progress) * maxRotate
      const cardTiltX = -mouse.y * 7
      const cardTiltY = mouse.x * 9

      if (leftCardRef.current) {
        leftCardRef.current.style.transform = `perspective(1200px) translate3d(${-lateralShift}px, 0, 0) rotateX(${cardTiltX}deg) rotateY(${cardTiltY - rotateDeg}deg)`
      }
      if (rightCardRef.current) {
        rightCardRef.current.style.transform = `perspective(1200px) translate3d(${lateralShift}px, 0, 0) rotateX(${cardTiltX}deg) rotateY(${cardTiltY + rotateDeg}deg)`
      }

      // 3. LETTER RIPPLE
      lettersRef.current.forEach((tspan, idx) => {
        if (!tspan) return
        const wave = Math.sin(Date.now() * 0.002 + idx * 0.6) * 3.5
        const charOffset = mouse.x * (idx - 3.5) * 3
        tspan.style.transform = `translate3d(${charOffset}px, ${wave}px, 0)`
      })

      rafId = requestAnimationFrame(renderMotion)
    }

    rafId = requestAnimationFrame(renderMotion)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[98vh] w-full flex flex-col justify-between pt-20 pb-12 px-4 sm:px-8 md:px-14 max-w-[1600px] mx-auto z-10 overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* Dynamic Fluid Canvas */}
      <InteractiveFluidCanvas />

      {/* ANAMORPHIC TRIPLE AURORA MESH (EMERALD + CYAN + DEEP VIOLET) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/35 via-#10B981/20 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-bl from-[#10B981]/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Editorial Dot Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/80 pointer-events-none z-0" />

      {/* Editorial Corner Crosses (+) */}
      <span className="absolute top-16 left-6 text-emerald-400 font-mono text-sm font-bold pointer-events-none">+</span>
      <span className="absolute top-16 right-6 text-emerald-400 font-mono text-sm font-bold pointer-events-none">+</span>
      <span className="absolute bottom-6 left-6 text-emerald-400 font-mono text-sm font-bold pointer-events-none">+</span>
      <span className="absolute bottom-6 right-6 text-emerald-400 font-mono text-sm font-bold pointer-events-none">+</span>

      {/* Top Editorial Telemetry Bar */}
      <div className="relative z-30 flex items-center justify-between font-mono text-[11px] text-zinc-400 border-b border-white/10 pb-4 mb-3">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-xs shadow-sm shadow-emerald-500/20">
            (01) ECOSYSTEM
          </span>
          <span className="tracking-widest uppercase text-zinc-300 font-semibold hidden sm:inline-block">
            NEGERI KAHIYANG &bull; 3D KINETIC ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span className="text-zinc-500 hidden md:inline">MALANG &bull; 07°58′S 112°38′E</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            LIVE SYSTEM: {scrollProg}%
          </span>
        </div>
      </div>

      {/* =====================================================================
          1. SPECULAR METALLIC CHROME LOGO (KAHIYANG)
          Dengan pantulan kilau logam mulia cair (Specular Light Beam)
          ===================================================================== */}
      <div 
        ref={titleWrapperRef}
        className="relative z-20 w-full overflow-visible my-3 py-1 will-change-transform"
      >
        <svg
          viewBox="0 0 1200 170"
          className="w-full h-auto max-h-[220px] text-white overflow-visible pointer-events-none filter "
          fill="currentColor"
        >
          <defs>
            <linearGradient id="chromeSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="70%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="142"
            className="font-black text-[165px] tracking-[-0.045em] uppercase"
            fill="url(#chromeSheen)"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            {"KAHIYANG".split("").map((char, index) => (
              <tspan
                key={index}
                ref={(el) => {
                  lettersRef.current[index] = el
                }}
                className="inline-block will-change-transform"
                dx={index === 0 ? "0" : "4"}
              >
                {char}
              </tspan>
            ))}
          </text>
        </svg>
      </div>

      {/* Main Split Grid: Confident Power Headline + Luxury Specimen Pods */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto pt-2">
        
        {/* Left Column: Bold Narrative */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border-white/10 text-xs text-zinc-300 backdrop-blur-md shadow-inner">
            <Sparkles className="size-3.5 text-emerald-400" />
            <span>TALENTA TIKTOK AFFILIATE, KELAS MENTORING &amp; WEB DEVELOPMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.92]">
            Arsitektur Pertumbuhan <br />
            <span className="bg-gradient-to-r from-white via-zinc-100 to-emerald-400 bg-clip-text text-transparent font-serif italic lowercase text-[0.88em]">
              tanpa batas.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
            Inkubator kreator, studio produksi visual AI, dan infrastruktur automasi TikTok affiliate. Kami membangun ekosistem di mana talenta, konten viral, dan teknologi bekerja menghasilkan dampak nyata.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs font-bold">
            <Link
              href="#layanan"
              className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold transition-all duration-300 flex items-center gap-2 shadow-[0_8px_24px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95"
            >
              <span>EKSPLOR LAYANAN</span>
              <span>↓</span>
            </Link>
            <Link
              href="#partnership"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>GABUNG KOMUNITAS</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: 2 Ultra-Luxury Specimen Pods */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 relative overflow-visible">
          
          {/* POD 1: AGENCY PERFORMANCE POD */}
          <div 
            ref={leftCardRef}
            className="p-5 sm:p-6 rounded-[28px] bg-[#0d1117] border border-white/20 hover:border-emerald-500/70 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl will-change-transform origin-center group"
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 mb-3">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Radio className="size-3 animate-pulse text-emerald-400" /> KAHIYANG AGENCY
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">LIVE</span>
            </div>

            {/* Specimen Media Pod */}
            <div className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-[#0B7A5C]/40 via-black to-[#05070b] border border-white/15 p-4 flex flex-col justify-between mb-3 shadow-inner relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded-[8px] bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300">
                  TIKTOK SHOP
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">70/30 SPLIT</span>
              </div>

              <div className="relative z-10 space-y-1">
                <span className="font-mono text-3xl font-black text-white tracking-tight ">500+</span>
                <span className="text-[11px] font-mono text-emerald-400 block font-semibold">Active Creators</span>
              </div>

              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative z-10">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-#34D399 w-[94%]" />
              </div>
            </div>

            <h4 className="font-sans text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              Talent &amp; Brand Network
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">Kreator TikTok Shop terhubung langsung ke brand, split transparan.</p>
          </div>

          {/* POD 2: TALENT NETWORK VIP POD */}
          <div 
            ref={rightCardRef}
            className="p-5 sm:p-6 rounded-[28px] bg-[#0d1117] border border-white/20 hover:border-#10B981/70 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl will-change-transform origin-center group"
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 mb-3">
              <span className="text-#34D399 font-bold flex items-center gap-1.5">
                <Users className="size-3" /> TALENT ROSTER
              </span>
              <span className="px-2 py-0.5 rounded-full bg-#10B981/10 border border-#10B981/30 text-#34D399 text-[11px]">500+ CREATORS</span>
            </div>

            {/* Specimen Media Pod */}
            <div className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-[#0B7A5C]/40 via-black to-[#05070b] border border-white/15 p-4 flex flex-col justify-between mb-3 shadow-inner relative overflow-hidden group-hover:border-#10B981/40 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(#34D399_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded-[8px] bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300">
                  TIKTOK SHOP
                </span>
                <span className="text-[11px] font-mono text-#34D399 font-bold">+340% ROAS</span>
              </div>

              <div className="relative z-10 space-y-1">
                <span className="font-mono text-3xl font-black text-white tracking-tight ">10M+</span>
                <span className="text-[11px] font-mono text-#34D399 block font-semibold">Organic Video Views</span>
              </div>

              <div className="flex -space-x-2 overflow-hidden py-0.5 relative z-10">
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-emerald-500/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-#10B981/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-#10B981/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-zinc-700 text-[11px] flex items-center justify-center text-white">+99</div>
              </div>
            </div>

            <h4 className="font-sans text-sm font-bold text-white group-hover:text-#34D399 transition-colors">
              Kahiyang Creator Network
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">Jaringan affiliator &amp; creator brand skala nasional.</p>
          </div>

        </div>

      </div>

      {/* 4 BOX KOLOM MINIMALIS DENGAN PULSE GLOW ELEGAN */}
      <div className="relative z-30 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
        {/* 01: Agency */}
        <div className="p-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">01 / AGENCY</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 block font-light">Talent &amp; Brand Mgmt</span>
        </div>

        {/* 02: Studio */}
        <div className="p-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 hover:border-#10B981/40 backdrop-blur-md transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">02 / STUDIO</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-#34D399 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-#10B981 shadow-[0_0_8px_#34D399]" />
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 block font-light">AI Visual &amp; Cinema</span>
        </div>

        {/* 03: Analyzer */}
        <div className="p-3.5 rounded-[16px] bg-white/[0.03] border border-#10B981/30 backdrop-blur-md bg-#10B981/[0.03] hover:border-#34D399/50 transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#f5d259] font-bold block">03 / ANALYZER</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-#34D399 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-#10B981 shadow-[0_0_8px_#f5d259]" />
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 block font-light">Algorithmic Audit</span>
        </div>

        {/* 04: Komunitas */}
        <div className="p-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 hover:border-#10B981/40 backdrop-blur-md transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">04 / KOMUNITAS</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-#34D399 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-#10B981 shadow-[0_0_8px_#34D399]" />
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 block font-light">Eksklusif Creator Hub</span>
        </div>
      </div>

    </section>
  )
}
