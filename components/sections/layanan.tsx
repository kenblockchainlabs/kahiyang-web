"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Flame, TrendingUp, Users, Video } from "lucide-react"

const SERVICES = [
  {
    id: "agency",
    num: "(01)",
    title: "Kahiyang Agency",
    tagline: "TALENT & BRAND ACCELERATOR",
    desc: "Manajemen kreator TikTok skala nasional. Dari optimasi akun, strategi hook video, hingga menghubungkan talent dengan brand ternama.",
    href: "https://agency.kahiyang.id",
    icon: Users,
    color: "from-emerald-500/20 to-transparent",
    accent: "text-emerald-400 border-emerald-500/30",
    metrics: ["500+ Creator Roster", "Endorsement Pipeline", "Revenue Share 70/30"],
  },
  {
    id: "studio",
    num: "(02)",
    title: "Kahiyang Studio",
    tagline: "AI VISUAL & PRODUCT RENDERING",
    desc: "Studio kreatif berbasis generative AI. Menghasilkan foto produk ultra-HD, render katalog 3D, dan transisi visual dinamis untuk e-commerce.",
    href: "https://studio.kahiyang.id",
    icon: Video,
    color: "from-cyan-500/20 to-transparent",
    accent: "text-cyan-400 border-cyan-500/30",
    metrics: ["4K Product Showcase", "Instant Virtual Staging", "Zero Studio Cost"],
  },
  {
    id: "analyzer",
    num: "(03)",
    title: "Viral Analyzer",
    tagline: "ALGORITHMIC AUDIT & METRICS",
    desc: "SaaS analitik akun TikTok bertenaga AI. Membedah rasio retensi, potensi FYP, skor kesehatan profil, dan rekomendasi audio trending harian.",
    href: "https://analyzer.kahiyang.id",
    icon: TrendingUp,
    color: "from-amber-500/20 to-transparent",
    accent: "text-amber-400 border-amber-500/30",
    metrics: ["98.4% Accuracy Index", "Live Competitor Spy", "Audio Trend Predictor"],
  },
  {
    id: "affiliate",
    num: "(04)",
    title: "Kelas Affiliate TikTok",
    tagline: "INTENSIVE MENTORSHIP & WORKSHOP",
    desc: "Pelatihan live dan playbook taktis menghasilkan puluhan juta dari TikTok Shop tanpa harus joget-joget atau punya modal besar.",
    href: "#komunitas",
    icon: Flame,
    color: "from-purple-500/20 to-transparent",
    accent: "text-purple-400 border-purple-500/30",
    metrics: ["1,200+ Alumni", "Komunitas Private Telegram", "Daily Q&A Mentoring"],
  },
  {
    id: "web-dev",
    num: "(05)",
    title: "Web Engineering & Cinematic UI",
    tagline: "HIGH-END PROFESSIONAL STANDARD SITES",
    desc: "Bukan web enginer norak — jasa pembuatan website profesional standar agensi global. Rapi, detail, dan solid untuk brand yang ingin mendominasi pasar digital.",
    href: "https://t.me/kahiyang_partnership",
    icon: Flame,
    color: "from-emerald-500/25 via-cyan-500/15 to-transparent",
    accent: "text-emerald-400 border-emerald-500/40",
    metrics: ["Standar Agensi Global", "Detail-Oriented Craft", "Tailor-Made Zero Templates"],
    isFullWidth: true
  },
]

export default function Layanan() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let rafId: number

    // =========================================================================
    // OBYS 3D CARD FLIP-FLIP KINETIC ENGINE (60/120Hz RAF)
    // Kartu berputar membalik pada sumbu 3D (rotateX & rotateY) saat di-scroll
    // =========================================================================
    const updateFlipMotion = () => {
      const windowHeight = window.innerHeight || 800

      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        // Progress masuk viewport
        const triggerStart = windowHeight * 0.98
        const triggerEnd = windowHeight * 0.22
        const rawProg = (triggerStart - rect.top) / (triggerStart - triggerEnd)
        const progress = Math.max(0, Math.min(1, rawProg))

        const isOdd = index % 2 === 0
        const isFull = SERVICES[index]?.isFullWidth

        if (isFull) {
          // Kartu Full-Width 05: Flip membalik dari sumbu X bawah (3D bottom flap flip)
          const rotateX = (1 - progress) * -28 // Membalik dari -28deg
          const translateY = (1 - progress) * 110
          const scale = 0.88 + progress * 0.12
          const opacity = 0.35 + progress * 0.65
          card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) translate3d(0, ${translateY}px, 0) scale(${scale})`
          card.style.opacity = `${opacity}`
        } else {
          // Kartu Ganjil: Flip dari kiri (rotateY: -35deg s/d 0deg)
          // Kartu Genap: Flip dari kanan (rotateY: 35deg s/d 0deg)
          const rotateY = isOdd ? (1 - progress) * -32 : (1 - progress) * 32
          const rotateZ = isOdd ? (1 - progress) * -6 : (1 - progress) * 6
          const translateZ = (1 - progress) * -120
          const scale = 0.88 + progress * 0.12
          const opacity = 0.35 + progress * 0.65

          card.style.transform = `perspective(1400px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translate3d(0, ${(1 - progress) * 60}px, ${translateZ}px) scale(${scale})`
          card.style.opacity = `${opacity}`
        }
      })

      rafId = requestAnimationFrame(updateFlipMotion)
    }

    rafId = requestAnimationFrame(updateFlipMotion)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="space-y-12 select-none overflow-visible" style={{ perspective: "1400px" }}>
      
      {/* Header Section dengan Telemetri Tajam */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 font-mono">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-emerald-400 font-bold font-mono">(02) PILAR UTAMA</span>
            <span className="text-zinc-400">&bull;</span>
            <span className="text-zinc-300 uppercase tracking-widest font-mono">CORE SERVICES &bull; 3D FLIP ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-[-0.04em] leading-[0.92] font-sans">
            Eksplor Layanan <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent font-serif italic lowercase text-[0.88em]">
              ekosistem kami.
            </span>
          </h2>
        </div>

        <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-md">
          Seluruh pilar teknologi, talenta, dan studio visual dirancang saling terhubung untuk melipatgandakan dampak bisnis dan pertumbuhan Anda.
        </p>
      </div>

      {/* =====================================================================
          OBYS 3D CARD FLIP-FLIP DECK (MEMBALIK 3D DI SUMBU ROTASI SAAT DI-SCROLL)
          ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 overflow-visible">
        {SERVICES.map((srv, index) => {
          const Icon = srv.icon
          const isFull = srv.isFullWidth

          return (
            <div
              key={srv.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              style={{
                transform: isFull ? "perspective(1400px) rotateX(-28deg) scale(0.88)" : (index % 2 === 0 ? "perspective(1400px) rotateY(-32deg) scale(0.88)" : "perspective(1400px) rotateY(32deg) scale(0.88)"),
                opacity: 0.35,
                transformStyle: "preserve-3d"
              }}
              className={`p-8 sm:p-10 rounded-[38px] bg-gradient-to-br from-[#121622] via-[#0d1017] to-[#07090e] border border-white/20 hover:border-emerald-500/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between group relative overflow-hidden will-change-transform ${
                isFull ? "md:col-span-2 border-emerald-500/40 bg-gradient-to-r from-[#121a28] via-[#0d141e] to-[#07090e]" : ""
              }`}
            >
              <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-b ${srv.color} rounded-full blur-3xl pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-400 font-bold">{srv.num}</span>
                  <span className={`px-3 py-1 rounded-full border bg-white/5 font-mono text-[10px] font-bold ${srv.accent}`}>
                    {srv.tagline}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-emerald-500 transition-all">
                    <Icon className="size-6 text-emerald-400" />
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  {srv.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-zinc-200">
                      <CheckCircle2 className="size-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors">
                  JELAJAHI PLATFORM &bull; KONSULTASI
                </span>
                <Link
                  href={srv.href}
                  target={srv.href.startsWith("http") ? "_blank" : undefined}
                  className="size-10 rounded-full bg-white/10 group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-white transition-all shadow-lg group-hover:translate-x-1"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
