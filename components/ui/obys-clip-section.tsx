"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ObysClipSectionProps {
  children: ReactNode
  id?: string
  className?: string
  innerClassName?: string
}

export default function ObysClipSection({
  children,
  id,
  className = "",
  innerClassName = ""
}: ObysClipSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipTargetRef = useRef<HTMLDivElement>(null)
  const innerContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number

    // =========================================================================
    // DIRECT HIGH-FREQUENCY RAF SCROLL INTERPOLATOR (OBYS ENGINE VITE-STYLE)
    // Berjalan langsung di level 60/120Hz per-frame tanpa ketergantungan library luar!
    // =========================================================================
    const updateClipPhysics = () => {
      if (!containerRef.current || !clipTargetRef.current) {
        rafId = requestAnimationFrame(updateClipPhysics)
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || 800

      // Hitung progress saat elemen mulai masuk dari bawah layar (rect.top <= windowHeight)
      // sampai mencapai posisi atas layar (rect.top <= windowHeight * 0.15)
      const startTrigger = windowHeight * 0.95
      const endTrigger = windowHeight * 0.10
      
      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger)
      const progress = Math.max(0, Math.min(1, rawProgress))

      // INTERPOLASI FORMULA ASLI OBYS AGENCY:
      // Dari inset(14% 6% round 48px) mekar penuh menjadi inset(0% 0% round 0px)
      const insetY = (14 * (1 - progress)).toFixed(2)
      const insetX = (6 * (1 - progress)).toFixed(2)
      const radius = (48 * (1 - progress)).toFixed(1)
      const scale = (0.92 + (0.08 * progress)).toFixed(3)
      const opacity = (0.45 + (0.55 * progress)).toFixed(2)
      const contentY = (80 * (1 - progress)).toFixed(1)

      // Inject langsung ke CSS style per-frame
      clipTargetRef.current.style.clipPath = `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${radius}px)`
      clipTargetRef.current.style.transform = `scale(${scale}) translateZ(0)`
      clipTargetRef.current.style.opacity = `${opacity}`

      if (innerContentRef.current) {
        innerContentRef.current.style.transform = `translate3d(0, ${contentY}px, 0)`
      }

      rafId = requestAnimationFrame(updateClipPhysics)
    }

    rafId = requestAnimationFrame(updateClipPhysics)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full ${className}`}
    >
      <div
        ref={clipTargetRef}
        style={{
          clipPath: "inset(14% 6% 14% 6% round 48px)",
          transform: "scale(0.92) translateZ(0)",
          opacity: 0.45
        }}
        className="w-full h-full will-change-[clip-path,transform,opacity] transition-shadow duration-300 shadow-[0_-30px_100px_rgba(0,0,0,0.95)]"
      >
        <div
          ref={innerContentRef}
          style={{ transform: "translate3d(0, 80px, 0)" }}
          className={`w-full will-change-transform ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
