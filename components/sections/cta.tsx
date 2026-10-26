"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, MessageCircle, Sparkles, Zap } from "lucide-react"

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const explosionCardRef = useRef<HTMLDivElement>(null)
  const buttonsGroupRef = useRef<HTMLDivElement>(null)
  const shockwaveRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number

    // =========================================================================
    // DECONSTRUCTED PARTICLE WORD ASSEMBLY (OBYS 3D KINETIC EXPLOSION)
    // =========================================================================
    const updateExplosionMotion = () => {
      if (!containerRef.current || !explosionCardRef.current) {
        rafId = requestAnimationFrame(updateExplosionMotion)
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || 800

      const start = windowHeight * 0.95
      const end = windowHeight * 0.30
      const rawProgress = (start - rect.top) / (start - end)
      const progress = Math.max(0, Math.min(1, rawProgress))

      // 1. KONTEN CONTAINER SUPERNOVA IMPLISION -> EXPLOSION SCALE
      const scale = 0.84 + progress * 0.16
      const translateZ = (1 - progress) * -160
      const blurPx = ((1 - progress) * 5).toFixed(1)
      const opacity = 0.35 + progress * 0.65

      explosionCardRef.current.style.transform = `perspective(1200px) translate3d(0, ${(1 - progress) * 60}px, ${translateZ}px) scale(${scale})`
      explosionCardRef.current.style.filter = `blur(${blurPx}px)`
      explosionCardRef.current.style.opacity = `${opacity}`

      // 2. SHOCKWAVE RING EXPANSION PULSE
      if (shockwaveRingRef.current) {
        const ringScale = 0.5 + progress * 0.8
        const ringOpacity = Math.max(0, 0.9 - progress * 0.6)
        shockwaveRingRef.current.style.transform = `scale(${ringScale}) translateZ(0)`
        shockwaveRingRef.current.style.opacity = `${ringOpacity}`
      }

      // 3. DECONSTRUCTED WORD ASSEMBLY (MELEDAK DARI SEGALA ARAH MENJADI KESATUAN)
      // 4 Kata Utama: 0: SIAP, 1: MELEDAKKAN, 2: AKUN, 3: TIKTOK SHOP
      const scatterPos = [
        { x: 0, y: -220, rotate: 24, blur: 6 },    // SIAP dari ATAS
        { x: -320, y: 0, rotate: -18, blur: 4 },   // MELEDAKKAN dari KIRI
        { x: 320, y: 0, rotate: 18, blur: 4 },     // AKUN dari KANAN
        { x: 0, y: 220, rotate: -24, blur: 6 },    // TIKTOK SHOP dari BAWAH
      ]

      wordRefs.current.forEach((span, idx) => {
        if (!span) return
        const pos = scatterPos[idx % 4]

        const currentX = (1 - progress) * pos.x
        const currentY = (1 - progress) * pos.y
        const currentRotate = (1 - progress) * pos.rotate
        const currentBlur = (1 - progress) * pos.blur
        const wordOpacity = Math.max(0, 0.25 + progress * 0.75)

        span.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRotate}deg)`
        span.style.filter = `blur(${currentBlur}px)`
        span.style.opacity = `${wordOpacity}`
      })

      // 4. TOMBOL MELOMPAT KELUAR DENGAN PEGAS (POP ACTION)
      if (buttonsGroupRef.current) {
        const btnY = (1 - progress) * 70
        const btnScale = 0.85 + progress * 0.15
        buttonsGroupRef.current.style.transform = `translate3d(0, ${btnY}px, 0) scale(${btnScale})`
      }

      rafId = requestAnimationFrame(updateExplosionMotion)
    }

    rafId = requestAnimationFrame(updateExplosionMotion)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      id="komunitas" 
      className="w-full max-w-[1580px] mx-auto py-20 px-4 sm:px-8 md:px-12 text-white select-none overflow-visible"
      style={{ perspective: "1200px" }}
    >
      {/* Supernova Explosion Card Container */}
      <div 
        ref={explosionCardRef}
        style={{ transform: "perspective(1200px) scale(0.84) translateZ(-160px)", filter: "blur(5px)", opacity: 0.35 }}
        className="p-8 sm:p-14 md:p-20 rounded-[50px] glass border border-emerald-500/40 shadow-[0_-30px_130px_rgba(16,185,129,0.3)] relative overflow-hidden text-center space-y-9 will-change-[transform,filter,opacity]"
      >
        {/* Shockwave Radial Kinetic Ring */}
        <div 
          ref={shockwaveRingRef}
          style={{ transform: "scale(0.5)", opacity: 0.9 }}
          className="absolute inset-0 border-2 border-emerald-400/50 rounded-[50px] pointer-events-none will-change-[transform,opacity]"
        />

        {/* Ambient Supernova Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-transparent rounded-full blur-[110px] pointer-events-none" />

        {/* Badge Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/50 backdrop-blur-md shadow-lg shadow-emerald-500/25 relative z-10">
          <Zap className="size-4 animate-bounce text-emerald-400" />
          <span>KOMUNITAS EKSKLUSIF &bull; ZERO RISK AFFILIATE</span>
        </div>

        {/* =====================================================================
            DECONSTRUCTED SUPERNOVA HEADLINE (MELEDAK DARI SEGALA ARAH MENJADI SATU!)
            ===================================================================== */}
        <div className="space-y-4 max-w-5xl mx-auto relative z-10 overflow-visible">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white leading-[0.92] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 overflow-visible">
            <span 
              ref={(el) => { wordRefs.current[0] = el }}
              className="inline-block will-change-[transform,filter,opacity]"
            >
              SIAP
            </span>
            <span 
              ref={(el) => { wordRefs.current[1] = el }}
              className="inline-block bg-gradient-to-r from-emerald-400 via-white to-cyan-400 bg-clip-text text-transparent will-change-[transform,filter,opacity]"
            >
              MELEDAKKAN
            </span>
            <span 
              ref={(el) => { wordRefs.current[2] = el }}
              className="inline-block will-change-[transform,filter,opacity]"
            >
              AKUN
            </span>
            <span 
              ref={(el) => { wordRefs.current[3] = el }}
              className="inline-block font-serif italic lowercase bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent will-change-[transform,filter,opacity]"
            >
              TikTok Shop Anda?
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            Bergabunglah dengan 1,200+ kreator dan affiliate marketer di Negeri Kahiyang. Dapatkan formula konten viral harian, bedah akun live, dan akses alat AI eksklusif tanpa bakar modal sia-sia.
          </p>
        </div>

        {/* Interactive Kinetic Buttons (Spring Pop Action) */}
        <div 
          ref={buttonsGroupRef}
          style={{ transform: "translate3d(0, 70px, 0) scale(0.85)" }}
          className="flex flex-wrap items-center justify-center gap-5 pt-3 font-mono text-xs font-bold relative z-10 will-change-transform"
        >
          <Link
            href="https://t.me/kahiyang_id"
            target="_blank"
            className="px-9 py-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold flex items-center gap-3 transition-all duration-300 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 group text-sm"
          >
            <MessageCircle className="size-5 group-hover:rotate-12 transition-transform" />
            <span>GABUNG TELEGRAM VIP</span>
            <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          <Link
            href="https://wa.me/6285648492958?text=Halo%20Admin%20Negeri%20Kahiyang%2C%20saya%20tertarik%20kerjasama%20ekosistem"
            target="_blank"
            className="px-9 py-5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
          >
            <Sparkles className="size-4 text-emerald-400" />
            <span>HUBUNGI PARTNERSHIP</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

      </div>

    </div>
  )
}
