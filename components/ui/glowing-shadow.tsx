'use client'

import { motion } from "framer-motion"
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const frames = [
  { id: 1, video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 2, video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 3, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 4, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 5, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 6, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 7, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 8, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 9, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
]

export default function Layanan() {
  return (
    <section id="layanan" className="relative bg-black py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-#34D399 text-sm font-semibold tracking-widest uppercase"
          >
            LAYANAN KAMI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#A1A8B3] to-white bg-clip-text text-transparent"
          >
            Eksplor Layanan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto"
          >
            Hover ke setiap frame — eksplor setiap sisi dari Negeri Kahiyang.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[600px] md:h-[700px] rounded-[16px] overflow-hidden border border-white/10"
        >
          <DynamicFrameLayout 
            frames={frames}
            className="w-full h-full"
            hoverSize={6}
            gapSize={4}
          />
        </motion.div>

      </div>
    </section>
  )
}