"use client"

import { useEffect, useRef } from "react"

/**
 * Runs `callback` in a RAF loop ONLY while the returned ref's element
 * intersects the viewport (with 20% margin) and the tab is visible.
 *
 * Without this, five RAF loops run forever regardless of scroll position.
 * On a phone scrolling past the CTA, the hero, layanan, cta, tentang and
 * obys-clip loops are all still burning frames. This is the single biggest
 * mobile win available and it requires no design change.
 */
export function useRafWhenVisible<T extends HTMLElement>(
  callback: () => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null)
  const cbRef = useRef(callback)
  cbRef.current = callback

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let active = false

    const loop = () => {
      if (active) cbRef.current()
      raf = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting
      },
      { rootMargin: "20% 0px" }
    )
    io.observe(el)

    const onVis = () => {
      if (document.hidden) {
        active = false
      } else {
        const r = el.getBoundingClientRect()
        active = r.top < innerHeight && r.bottom > 0
      }
    }
    document.addEventListener("visibilitychange", onVis)

    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, deps)

  return ref
}
