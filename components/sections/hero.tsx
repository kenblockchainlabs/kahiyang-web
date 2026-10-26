"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowUpRight, Sparkles, Users, Radio } from "lucide-react"
import MagneticLink from "@/components/ui/magnetic-link"

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
  const causticRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)

  const [scrollProg, setScrollProg] = useState(0)

  useEffect(() => {
    let rafId: number
    let onScreen = true
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    // RAF GATING — the loop stops doing work the moment the hero leaves the
    // viewport. Without this, five loops run forever on a phone.
    const io = new IntersectionObserver(
      ([entry]) => { onScreen = entry.isIntersecting },
      { rootMargin: "20% 0px" }
    )
    if (heroSectionRef.current) io.observe(heroSectionRef.current)

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
      if (onScreen) {
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

      {/* 3. THE REFRACTION — the wordmark as a slab of optical glass.
          Per-letter Z separation driven by scroll, pointer-driven lateral
          displacement, and a specular highlight that sweeps across the
          letterforms. On scroll past 25% the letters separate along Z so
          you see INTO the brand. */}
      const zSeparation = progress * 140
      lettersRef.current.forEach((tspan, idx) => {
        if (!tspan) return
        const depth = (idx - 3) / 3                    // -1 → 1, K → G
        const z = depth * zSeparation
        const wave = Math.sin(Date.now() * 0.0016 + idx * 0.55) * 2.5
        const charOffset = mouse.x * (idx - 3.5) * 4.5
        tspan.style.transform =
          `translate3d(${charOffset}px, ${wave}px, ${z}px) ` +
          `rotateY(${-mouse.x * depth * 6}deg) rotateX(${mouse.y * depth * 4}deg)`
        tspan.style.opacity = `${1 - Math.abs(depth) * progress * 0.35}`
      })

      // 4. SPECULAR SWEEP — the highlight stop tracks pointer X
      const sheen = document.getElementById("chromeSheen")
      if (sheen) {
        const stops = sheen.querySelectorAll("stop")
        const sweep = ((mouse.x + 1) / 2) * 100
        if (stops[2]) stops[2].setAttribute("offset", `${Math.max(20, Math.min(80, sweep - 12))}%`)
        if (stops[3]) stops[3].setAttribute("offset", `${Math.max(24, Math.min(84, sweep + 12))}%`)
      }

      // 5. CAUSTIC — emerald light focused through the glass, cast onto the
      //    page below the wordmark. Branded: the caustic is Kahiyang's colour.
      if (causticRef.current) {
        const cx = ((mouse.x + 1) / 2) * 100
        causticRef.current.style.background =
          `radial-gradient(circle at ${cx}% 50%, rgba(16,185,129,0.30) 0%, rgba(52,211,153,0.12) 35%, transparent 70%)`
        causticRef.current.style.opacity = `${0.55 + progress * 0.45}`
        causticRef.current.style.transform =
          `translate3d(0, ${scrollY * 0.12}px, 0) scale(${1 + progress * 0.3})`
      }
      }

      rafId = requestAnimationFrame(renderMotion)
    }

    rafId = requestAnimationFrame(renderMotion)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
      io.disconnect()
    }
  }, [])

  return (
    <section
      ref={heroSectionRef}
      className="relative min-h-[98vh] w-full flex flex-col justify-between pt-20 pb-12 px-4 sm:px-8 md:px-14 max-w-[1600px] mx-auto z-10 select-none overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* Dynamic Fluid Canvas */}
      <InteractiveFluidCanvas />

      {/* ANAMORPHIC TRIPLE AURORA MESH (EMERALD + CYAN + DEEP VIOLET) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/35 via-cyan-500/20 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-bl from-purple-600/25 via-cyan-400/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

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
        <div className="flex items-center gap-4 font-mono text-[10px]">
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
          className="w-full h-auto max-h-[220px] text-white overflow-visible select-none pointer-events-none"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="chromeSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            {/* Chromatic aberration — R and B channels, screen-blended,
                offset ±2px. Edges split where the specular crosses. */}
            <linearGradient id="chromaR" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff2d55" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff2d55" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chromaB" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00a3ff" stopOpacity="0" />
              <stop offset="100%" stopColor="#00a3ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* R channel — offset left, screen blend */}
          <text
            x="2"
            y="142"
            className="font-black text-[165px] tracking-[-0.045em] uppercase"
            fill="url(#chromaR)"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontVariationSettings: '"opsz" 96, "wdth" 88', mixBlendMode: "screen" }}
            aria-hidden
          >
            {"KAHIYANG".split("").map((char, index) => (
              <tspan key={index} dx={index === 0 ? "0" : "4"}>{char}</tspan>
            ))}
          </text>

          {/* B channel — offset right, screen blend */}
          <text
            x="-2"
            y="142"
            className="font-black text-[165px] tracking-[-0.045em] uppercase"
            fill="url(#chromaB)"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontVariationSettings: '"opsz" 96, "wdth" 88', mixBlendMode: "screen" }}
            aria-hidden
          >
            {"KAHIYANG".split("").map((char, index) => (
              <tspan key={index} dx={index === 0 ? "0" : "4"}>{char}</tspan>
            ))}
          </text>

          {/* Main chrome face — the refractive slab */}
          <text
            x="0"
            y="142"
            className="font-black text-[165px] tracking-[-0.045em] uppercase"
            fill="url(#chromeSheen)"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontVariationSettings: '"opsz" 96, "wdth" 88' }}
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

        {/* CAUSTIC — emerald light focused through the glass slab, cast onto
            the page below the wordmark. Branded: it is Kahiyang's own colour. */}
        <div
          ref={causticRef}
          className="pointer-events-none absolute left-0 right-0 top-[58%] h-[180px] blur-[40px] mix-blend-screen will-change-[opacity,transform] z-10"
          style={{ opacity: 0.55 }}
          aria-hidden
        />
      </div>

      {/* Main Split Grid: Confident Power Headline + Luxury Specimen Pods */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto pt-2">
        
        {/* Left Column: Bold Narrative */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-inner">
            <Sparkles className="size-3.5 text-emerald-400" />
            <span>TALENTA TIKTOK AFFILIATE, KELAS MENTORING &amp; WEB DEVELOPMENT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase leading-[0.92]">
            Arsitektur Pertumbuhan <br />
            <span className="bg-gradient-to-r from-white via-zinc-100 to-emerald-400 bg-clip-text text-transparent font-serif italic lowercase text-[0.88em]">
              tanpa batas.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
            Inkubator kreator, studio produksi visual AI, dan infrastruktur automasi TikTok affiliate. Kami membangun ekosistem di mana talenta, konten viral, dan teknologi bekerja menghasilkan dampak nyata.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 font-sans text-sm font-semibold tracking-[0.01em]">
            <MagneticLink href="#layanan" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors duration-300 flex items-center gap-2 shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_8px_32px_-8px_rgba(16,185,129,0.55),0_0_64px_-16px_rgba(16,185,129,0.4)]">
              <span>EKSPLOR LAYANAN</span>
              <span>↓</span>
            </MagneticLink>
            <MagneticLink href="#partnership" className="px-7 py-4 rounded-full glass text-white flex items-center gap-2">
              <span>GABUNG KOMUNITAS</span>
              <ArrowUpRight className="size-4" />
            </MagneticLink>
          </div>
        </div>

        {/* Right Column: 2 Ultra-Luxury Specimen Pods */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 relative overflow-visible">
          
          {/* POD 1: AGENCY PERFORMANCE POD */}
          <div 
            ref={leftCardRef}
            className="glass p-5 sm:p-6 rounded-[34px] hover:shadow-glass-hover will-change-transform origin-center group"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 mb-3">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Radio className="size-3 animate-pulse text-emerald-400" /> KAHIYANG AGENCY
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px]">LIVE</span>
            </div>

            {/* Specimen Media Pod */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-950/60 via-black to-cyan-950/60 border border-white/15 p-4 flex flex-col justify-between mb-3 shadow-inner relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              
              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[9px] font-mono text-zinc-300">
                  TIKTOK SHOP
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">70/30 SPLIT</span>
              </div>

              <div className="relative z-10 space-y-1">
                <span className="font-mono text-3xl font-black text-white tracking-tight drop-shadow-md">500+</span>
                <span className="text-[10px] font-mono text-emerald-400 block font-semibold">Active Creators</span>
              </div>

              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative z-10">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[94%]" />
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
            className="glass p-5 sm:p-6 rounded-[34px] hover:shadow-glass-hover will-change-transform origin-center group"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 mb-3">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Users className="size-3" /> TALENT ROSTER
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[9px]">500+ CREATORS</span>
            </div>

            {/* Specimen Media Pod */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-950/60 via-black to-purple-950/60 border border-white/15 p-4 flex flex-col justify-between mb-3 shadow-inner relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[9px] font-mono text-zinc-300">
                  TIKTOK SHOP
                </span>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">+340% ROAS</span>
              </div>

              <div className="relative z-10 space-y-1">
                <span className="font-mono text-3xl font-black text-white tracking-tight drop-shadow-md">10M+</span>
                <span className="text-[10px] font-mono text-cyan-400 block font-semibold">Organic Video Views</span>
              </div>

              <div className="flex -space-x-2 overflow-hidden py-0.5 relative z-10">
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-emerald-500/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-cyan-500/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-purple-500/70" />
                <div className="inline-block size-6 rounded-full ring-2 ring-black bg-zinc-700 text-[9px] font-mono flex items-center justify-center text-white">+99</div>
              </div>
            </div>

            <h4 className="font-sans text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
              Kahiyang Creator Network
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">Jaringan affiliator &amp; creator brand skala nasional.</p>
          </div>

        </div>

      </div>

      {/* 4 BOX KOLOM MINIMALIS DENGAN PULSE GLOW ELEGAN */}
      <div className="relative z-30 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
        {/* 01: Agency */}
        <div className="glass glass-sm p-3.5 rounded-2xl transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">01 / AGENCY</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 block font-light">Talent &amp; Brand Mgmt</span>
        </div>

        {/* 02: Studio */}
        <div className="glass glass-sm p-3.5 rounded-2xl transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">02 / STUDIO</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-cyan-500 shadow-[0_0_8px_#00E5FF]" />
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 block font-light">AI Visual &amp; Cinema</span>
        </div>

        {/* 03: Analyzer */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-amber-500/30 backdrop-blur-md bg-amber-500/[0.03] hover:border-amber-400/50 transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#f5d259] font-bold block">03 / ANALYZER</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-amber-500 shadow-[0_0_8px_#f5d259]" />
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 block font-light">Algorithmic Audit</span>
        </div>

        {/* 04: Komunitas */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold block">04 / KOMUNITAS</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 block font-light">Eksklusif Creator Hub</span>
        </div>
      </div>

    </section>
  )
}
