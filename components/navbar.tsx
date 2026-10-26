"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "LAYANAN", href: "#layanan" },
  { label: "KOMUNITAS", href: '/komunitas' },
  { label: "TENTANG", href: "#tentang" },
  { label: 'Partnership', href: '/partnership' },

]

function Logo() {
  return (
    <img src="/logo-sm.png" alt="Kahiyang" className="w-8 h-8 rounded-full" />
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-5 sm:px-8 h-16">
          <a href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-white/90 text-sm font-light tracking-[0.2em] uppercase">Kahiyang</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-white/40 hover:text-white/70 text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://t.me/+FarOaL4D-HFlMGM1" className="rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/20 px-5 py-2 text-[11px] text-white/70 hover:text-white tracking-[0.2em] uppercase font-light transition-all duration-300">
              Gabung
            </a>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <div className="w-5 h-px bg-white/60" />
            <div className="w-5 h-px bg-white/60" />
            <div className="w-3.5 h-px bg-white/60" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Logo />
                <span className="text-white/90 text-sm font-light tracking-[0.2em] uppercase">Kahiyang</span>
              </a>
              <button onClick={() => setOpen(false)} className="p-2" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
className="text-white/80 hover:text-white text-2xl font-light tracking-[0.15em] uppercase transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="px-5 pb-10"
            >
              <a
                href="https://t.me/+FarOaL4D-HFlMGM1"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-lime-400 text-[#0a0a0a] py-4 text-[13px] font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
              >
                Gabung Sekarang
              </a>
              <p className="text-center text-white/20 text-[10px] tracking-[0.2em] uppercase mt-4">
                Gratis konsultasi pertama
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
