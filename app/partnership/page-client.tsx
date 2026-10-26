"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

const partners = [
  {
    name: "Kementerian Pemuda dan Olahraga RI",
    logo: "/images/partners/kemenpora.jpg",
    url: "https://kemenpora.go.id",
    category: "Pemerintah",
  },
  {
    name: "Kementerian Ketenagakerjaan RI",
    logo: "/images/partners/kemnaker.jpg",
    url: "https://kemnaker.go.id",
    category: "Pemerintah",
  },
  {
    name: "P2B UIN Maliki Malang",
    logo: "/images/partners/uin-malang.jpg",
    url: "https://uin-malang.com",
    category: "Pendidikan",
  },
  {
    name: "Serikat Pekerja RTMM PT Heinz ABC Indonesia",
    logo: "/images/partners/heinz-abc.jpg",
    url: "https://www.instagram.com/media_pukrtmm",
    category: "Serikat Pekerja",
  },
  {
    name: "Media PUKRTMM",
    logo: "/images/partners/media-pukrtmm.jpg",
    url: "https://www.instagram.com/media_pukrtmm",
    category: "Media",
  },
  {
    name: "REALIZM87",
    logo: "/images/partners/realizm87.jpg",
    url: "https://realizm87.com",
    category: "Streetwear",
  },
]

export default function PartnershipPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cyan-500/60" />
              <span className="text-[11px] text-white/30 tracking-[0.3em] uppercase font-light">
                Partnership
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white/90 tracking-tight mb-6">
              Mitra <span className="text-white/30">Kami</span>
            </h1>
            <p className="text-sm sm:text-base text-white/30 font-light max-w-2xl leading-relaxed">
              Dipercaya oleh instansi pemerintah, institusi pendidikan, dan brand lokal
              untuk kolaborasi strategis dalam ekosistem digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center min-h-[220px] bg-white/[0.03] border-white/[0.06] hover:border-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <div className="w-28 h-20 flex items-center justify-center">
                    <img
                      src={p.logo}
                      alt={p.name}
className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan-500/50 tracking-[0.2em] uppercase font-light block mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-light text-white/70 group-hover:text-white/90 transition-colors duration-300 tracking-tight text-sm sm:text-base">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
