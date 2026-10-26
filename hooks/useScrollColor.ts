"use client"

import { useScroll, useTransform, MotionValue } from "framer-motion"

interface ScrollColors {
  backgroundColor: MotionValue<string>
  textColor: MotionValue<string>
  accentColor: MotionValue<string>
}

export function useScrollColor(): ScrollColors {
  const { scrollYProgress } = useScroll()

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 1],
    ["#000000", "#0a0a0a", "#fafaf7", "#ffffff"]
  )

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 1],
    ["#ffffff", "#f5f5f5", "#171717", "#0a0a0a"]
  )

  const accentColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#22d3ee", "#0891b2", "#06b6d4"]
  )

  return { backgroundColor, textColor, accentColor }
}
