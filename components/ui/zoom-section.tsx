"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ZoomSectionProps {
  children: ReactNode
  className?: string
  id?: string
  fromScale?: number
  fromOpacity?: number
  showFrame?: boolean
}

export default function ZoomSection({
  children,
  className = "",
  id,
  fromScale = 0.7,
  fromOpacity = 0,
  showFrame = true,
}: ZoomSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [fromOpacity, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "0rem"])

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ scale, opacity, borderRadius }}
      className={"relative w-full overflow-hidden min-h-[60vh] " + className}
    >
      {showFrame && (
        <div className="absolute inset-4 sm:inset-8 md:inset-12 z-[5] pointer-events-none">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
          <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
            <div
              key={pos}
              className={"absolute " + pos + " w-2 h-2 rounded-full bg-cyan-500/40"}
            />
          ))}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
