"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, BookOpen, Feather, Sparkles } from "lucide-react"

export default function Tentang() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const deckLeftRef = useRef<HTMLDivElement>(null)
  const deckRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number

    // =========================================================================
    // OBYS BRUTAL EDITORIAL KINETIC ENGINE (60/120Hz RAF)
    // =========================================================================
    const updateBinarMotion = () => {
      if (!containerRef.current || !cardRef.current) {
        rafId = requestAnimationFrame(updateBinarMotion)
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || 800

      const start = windowHeight * 0.95
      const end = windowHeight * 0.20
      const rawProgress = (start - rect.top) / (start - end)
      const progress = Math.max(0, Math.min(1, rawProgress))

      // 1. KONTEN CONTAINER 3D BRUTAL INERTIA TILT
      const rotateX = (1 - progress) * 12
      const translateY = (1 - progress) * 90
      const scale = 0.90 + progress * 0.10
      const opacity = 0.35 + progress * 0.65

      cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) translate3d(0, ${translateY}px, 0) scale(${scale})`
      cardRef.current.style.opacity = `${opacity}`

      // 2. DUA KARTU PERS MEMBELAH & MENYATU RATA
      const lateralX = (1 - progress) * 80
      const lateralRotate = (1 - progress) * 5

      if (deckLeftRef.current) {
        deckLeftRef.current.style.transform = `translate3d(${-lateralX}px, 0, 0) rotate(${-lateralRotate}deg)`
      }
      if (deckRightRef.current) {
        deckRightRef.current.style.transform = `translate3d(${lateralX}px, 0, 0) rotate(${lateralRotate}deg)`
      }

      rafId = requestAnimationFrame(updateBinarMotion)
    }

    rafId = requestAnimationFrame(updateBinarMotion)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[1580px] mx-auto py-20 px-4 sm:px-8 md:px-12 text-white select-none overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <div 
        ref={cardRef}
        style={{ transform: "perspective(1200px) rotateX(12deg) scale(0.90)", opacity: 0.35 }}
        className="p-8 sm:p-14 md:p-18 rounded-[48px] bg-gradient-to-br from-[#16120c] via-[#0f0c08] to-[#070503] border border-amber-500/30 shadow-[0_-30px_120px_rgba(245,210,89,0.18)] relative overflow-hidden will-change-transform space-y-10"
      >
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-500/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-yellow-600/10 rounded-full blur-[110px] pointer-events-none" />

        {/* BRUTAL EDITORIAL MASTHEAD BANNER */}
        <div className="border-b-2 border-amber-500/30 pb-6 text-center space-y-3">
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#f5d259] tracking-[0.25em] uppercase pb-2 border-b border-white/10">
            <span>TERBIT DI MALANG &bull; JAWA TIMUR</span>
            <span>EDISI DIGITAL PERS NASIONAL</span>
            <span>VOLUME XXIV</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase py-2 drop-shadow-2xl">
            BINAR PAGI NUSANTARA
          </h1>

          <div className="flex items-center justify-center gap-6 font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
            <span>JURNALISME SAINS</span>
            <span>&bull;</span>
            <span>ADVOKASI EKONOMI KERAKYATAN</span>
            <span>&bull;</span>
            <span>KEDAULATAN KONTEN LOKAL</span>
          </div>
        </div>

        {/* 2 BRUTAL SPLIT EDITORIAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          
          {/* KARTU KIRI: TAJUK UTAMA */}
          <div 
            ref={deckLeftRef}
            className="lg:col-span-6 p-8 rounded-[36px] bg-gradient-to-b from-[#1d180f] via-[#14100a] to-[#0b0805] border border-amber-500/30 shadow-2xl space-y-6 flex flex-col justify-between will-change-transform"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-[#f5d259] font-mono text-[10px] font-bold border border-amber-500/40">
                <Feather className="size-3" />
                <span>OFFICIAL MEDIA PARTNER &bull; PERADABAN DIGITAL</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Bersinergi Membangun <br />
                <span className="bg-gradient-to-r from-[#f5d259] via-amber-200 to-[#f55a3c] bg-clip-text text-transparent font-serif italic lowercase text-[0.88em]">
                  literasi sains berkeadaban.
                </span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-serif">
                Negeri Kahiyang bukan sekadar entitas bisnis digital biasa, melainkan rumah bagi pemikiran kritis dan riset terapan. Bersama portal media nasional Binar Pagi Nusantara, kami menyuarakan kemandirian talenta lokal dari Malang untuk Indonesia.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="https://binarpagi.co.id"
                target="_blank"
                className="px-7 py-4 rounded-full bg-[#f5d259] hover:bg-amber-400 text-black font-mono text-xs font-extrabold flex items-center gap-2.5 transition-all shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95"
              >
                <BookOpen className="size-4" />
                <span>BACA JURNAL LENGKAP</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <span className="text-[10px] font-mono text-zinc-500">Hal. 01 Tajuk</span>
            </div>
          </div>

          {/* KARTU KANAN: AI LAB & ADVOKASI TEKNOLOGI */}
          <div 
            ref={deckRightRef}
            className="lg:col-span-6 p-8 rounded-[36px] bg-gradient-to-b from-[#201a11] via-[#16120b] to-[#0c0906] border border-amber-500/30 shadow-2xl space-y-6 flex flex-col justify-between will-change-transform"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-amber-400/80 border-b border-white/10 pb-2">
                <span>WARKAH KHUSUS &bull; AI LAB</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <Sparkles className="size-3" /> RISET TERAPAN
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                &ldquo;Arsitektur Multi-Agent Otonomus &amp; Zero-Cost Affiliate Pipeline.&rdquo;
              </h3>

              <p className="text-xs text-zinc-300 font-light leading-relaxed font-serif">
                Studi empiris automasi konten 24 jam nonstop tanpa pemborosan biaya API. Bagaimana ekosistem agen AI lokal mendobrak hegemoni tools luar negeri untuk kemakmuran affiliator Indonesia.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 font-mono text-[10px]">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-amber-500/20 text-center">
                  <span className="text-[#f5d259] font-bold block text-xs">101+</span>
                  <span className="text-zinc-500">Warta Sains</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-amber-500/20 text-center">
                  <span className="text-amber-400 font-bold block text-xs">Jawa Timur</span>
                  <span className="text-zinc-500">Pers Mandiri</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-amber-500/20 text-center">
                  <span className="text-white font-bold block text-xs">AI Lab</span>
                  <span className="text-zinc-500">Riset Terapan</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 text-[#f5d259]">
                <ShieldCheck className="size-4" />
                <span className="text-[11px] font-bold">Terverifikasi Dewan Pers</span>
              </div>
              <Link 
                href="https://binarpagi.co.id" 
                target="_blank"
                className="text-white hover:text-[#f5d259] underline text-xs"
              >
                Buka Arsip ↗
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
