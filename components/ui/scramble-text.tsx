"use client"

import { useEffect, useRef, useState } from "react"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&*"

/**
 * Text scramble — characters resolve left-to-right out of a random glyph
 * pool over 700ms when the element enters the viewport. Reads as a system
 * booting rather than a fade.
 *
 * Mobile: fully enabled. One short RAF burst per element, then it stops.
 * Arguably more impactful on mobile because there is no cursor to play with.
 */
export function ScrambleText({
  text,
  delay = 0,
  className = "",
}: {
  text: string
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.disconnect()

        const start = performance.now() + delay
        const tick = (now: number) => {
          const t = now - start
          if (t < 0) {
            requestAnimationFrame(tick)
            return
          }
          const p = Math.min(1, t / 700)
          const revealed = Math.floor(p * text.length)
          let out = ""
          for (let i = 0; i < text.length; i++) {
            if (i < revealed || text[i] === " ") out += text[i]
            else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          }
          setDisplay(out)
          if (p < 1) requestAnimationFrame(tick)
          else setDisplay(text)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [text, delay])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

/**
 * Count-up — numbers animate from 0 to target over 1400ms with an
 * ease-out exponent when the element enters the viewport.
 */
export function CountUp({
  to,
  suffix = "",
  duration = 1400,
  decimals = 0,
}: {
  to: number
  suffix?: string
  duration?: number
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || done.current) return
        done.current = true
        io.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 4)
          setVal(to * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {val.toLocaleString("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
