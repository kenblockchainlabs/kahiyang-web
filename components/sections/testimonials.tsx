"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Rina Susanti",
    role: "TikTok Affiliate — Skincare",
    avatar: "RS",
    color: "bg-pink-500",
    quote: "Sebelum kenal Kahiyang, gue cuma upload asal-asalan. Sekarang gue punya sistem — konten terjadwal, hook yang tested, dan akhirnya pecah telur pertama di minggu ke-3!",
  },
  {
    name: "Dika Pratama",
    role: "Content Creator — Food",
    avatar: "DP",
    color: "bg-blue-500",
    quote: "Forensic analysis-nya gila. Gue dikasih tau kenapa akun gue stuck — ternyata hook gue lemah. 2 minggu setelah fix, views naik 5x lipat.",
  },
  {
    name: "Sari Dewi",
    role: "TikTok Affiliate — Fashion",
    avatar: "SD",
    color: "bg-purple-500",
    quote: "Kelas private-nya worth it banget. Mentoring langsung, bedah akun detail, dan yang paling penting — komunitasnya supportive. Gak nyesel ikut.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative w-full bg-[#f5f0e8] py-28 px-6">
      <div className="absolute z-10 pointer-events-none" style={{ top: "3vh", bottom: "3vh", left: "3vw", right: "3vw" }}>
        <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
        {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-lime-400/40"}/>)}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:1.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-80px"}} className="mb-16">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px bg-lime-400/60"/><span className="text-[11px] text-black/30 tracking-[0.3em] uppercase font-light">Testimoni</span></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black/90 tracking-tight">Apa Kata<br/><span className="text-black/20">Mereka</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{opacity:0,y:60,scale:0.9}}
              whileInView={{opacity:1,y:0,scale:1}}
              transition={{duration:0.8,delay:i*0.15,ease:[0.16,1,0.3,1]}}
              viewport={{once:true,margin:"-50px"}}
              className="group relative p-8 rounded-2xl bg-white/60 border border-black/[0.06] hover:border-lime-400/20 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                {/* Avatar + Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-semibold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black/80">{t.name}</p>
                    <p className="text-xs text-black/40">{t.role}</p>
                  </div>
                </div>
                {/* Quote */}
                <p className="text-sm text-black/50 font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
