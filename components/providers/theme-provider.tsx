"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useScrollColor } from "@/hooks/useScrollColor"

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { backgroundColor, textColor } = useScrollColor()

  return (
    <motion.div
      style={{ backgroundColor, color: textColor }}
      className="min-h-screen relative transition-colors"
    >
      {children}
    </motion.div>
  )
}
