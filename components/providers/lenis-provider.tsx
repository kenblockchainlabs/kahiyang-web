"use client"

import { useEffect, useState, type ReactNode } from "react"
import Lenis from "lenis"

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Instance Lenis dengan easing kurva inersia halus ala Obys Agency
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
    })

    // Expose ke window agar seluruh komponen kinetik bisa membaca e.velocity
    if (typeof window !== "undefined") {
      ;(window as unknown as { lenis: Lenis }).lenis = lenis
    }

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      if (typeof window !== "undefined") {
        delete (window as unknown as { lenis?: Lenis }).lenis
      }
    }
  }, [isMobile])

  return <>{children}</>
}
