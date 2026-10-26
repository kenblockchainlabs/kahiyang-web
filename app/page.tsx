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
    <main className="bg-[#07090e] text-white min-h-screen relative overflow-x-clip selection:bg-[#10B981] selection:text-black font-sans">
      
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
        innerClassName="bg-[#07090e] border-t border-white/[0.06] py-20 md:py-28"
      >
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12">
          <Layanan />
        </div>
      </ObysClipSection>

      {/* SLIDE 3: TENTANG & BINAR PAGI (WARM SEPIA CARBON & SUNSET GOLD AURA) */}
      <ObysClipSection
        id="tentang"
        className="relative z-30 -mt-10"
        innerClassName="bg-[#07090e] border-t border-white/[0.06] py-20 md:py-28"
      >
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-12">
          <Tentang />
        </div>
      </ObysClipSection>

      {/* SLIDE 4: VIP COMMUNITY & CTA (SUPERNOVA CRIMSON & EMERALD FLAME AURA) */}
      <ObysClipSection
        id="partnership"
        className="relative z-40 -mt-10"
        innerClassName="bg-[#07090e] border-t border-white/[0.06] py-20 md:py-28"
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
