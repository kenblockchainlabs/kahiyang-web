import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import MarqueeTicker from "@/components/ui/marquee-ticker"
import ObysClipSection from "@/components/ui/obys-clip-section"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="bg-[#07090e] text-white min-h-screen relative overflow-x-clip selection:bg-emerald-500 selection:text-black font-sans">

      {/* Z0 — THE LIGHT RIG. Five sources, sitting beneath every translucent
          shell so their light bleeds through the sections. That bleed is what
          gives the page physical depth instead of four stacked rectangles. */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="aurora-a aurora-blob absolute top-[10%] left-[8%] w-[700px] h-[450px] rounded-full bg-emerald-500/35 blur-[130px]" />
        <div className="aurora-b aurora-blob absolute top-[28%] right-[6%] w-[650px] h-[450px] rounded-full bg-cyan-500/22 blur-[140px]" />
        <div className="aurora-blob absolute bottom-[12%] right-[28%] w-[520px] h-[380px] rounded-full bg-violet-600/18 blur-[150px]" />
      </div>

      {/* Floating HUD Navbar */}
      <Navbar />

      {/* SLIDE 1: CINEMA HERO (OBSIDIAN & ORBITAL EMERALD GLOW) */}
      <div className="relative z-10 bg-gradient-to-b from-[#07090e] via-[#090d14] to-[#080c16]">
        <Hero />
      </div>

      {/* Infinite Ticker Bar Breaker */}
      <MarqueeTicker />

      {/* SLIDE 2: CORE SERVICES (IMPERIAL COBALT & ELECTRIC CYAN AURA) */}
      <ObysClipSection
        id="layanan"
        className="relative z-20 -mt-10"
        innerClassName="section-shell relative bg-white/[0.02] bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent py-20 md:py-28"
      >
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12">
          <Layanan />
        </div>
      </ObysClipSection>

      {/* SLIDE 3: TENTANG & BINAR PAGI (WARM SEPIA CARBON & SUNSET GOLD AURA) */}
      <ObysClipSection
        id="tentang"
        className="relative z-30 -mt-10"
        innerClassName="section-shell relative bg-white/[0.02] bg-gradient-to-b from-transparent via-amber-500/[0.035] to-transparent py-20 md:py-28"
      >
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12">
          <Tentang />
        </div>
      </ObysClipSection>

      {/* SLIDE 4: VIP COMMUNITY & CTA (SUPERNOVA CRIMSON & EMERALD FLAME AURA) */}
      <ObysClipSection
        id="partnership"
        className="relative z-40 -mt-10"
        innerClassName="section-shell relative bg-white/[0.02] bg-gradient-to-b from-transparent via-emerald-500/[0.04] to-transparent py-20 md:py-28"
      >
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12">
          <CTA />
        </div>
      </ObysClipSection>

      {/* FINAL LAYER: EDITORIAL FOOTER */}
      <div className="relative z-50 bg-black border-t border-white/10">
        <Footer />
      </div>

    </main>
  )
}
