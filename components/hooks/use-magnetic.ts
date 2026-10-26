"use client"

import { useRef } from "react"
import { useMotionValue, useSpring } from "framer-motion"

/**
 * Magnetic attraction for primary CTAs.
 *
 * Every primary button physically leans toward the cursor within a radius,
 * then springs back on exit. The single strongest "this cost money"
 * interaction signal on a page.
 *
 * Mobile: the pointerType guard disables it entirely — replaced by
 * whileTap scale on the element itself.
 */
export function useMagnetic(strength = 0.35, radius = 96) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.6 })

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    const dist = Math.hypot(dx, dy)
    if (dist > radius) {
      x.set(0)
      y.set(0)
      return
    }
    const falloff = 1 - dist / radius
    x.set(dx * strength * falloff)
    y.set(dy * strength * falloff)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, sx, sy, onMove, onLeave }
}
