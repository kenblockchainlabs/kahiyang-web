"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useMagnetic } from "@/components/hooks/use-magnetic"

/**
 * A link that leans toward the cursor within 96px, then springs back.
 * Desktop only — on touch the pointerType guard disables the attraction and
 * only the tap-scale remains, which costs nothing.
 */
export default function MagneticLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}) {
  const m = useMagnetic(0.35, 96)

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <motion.a
      // @ts-expect-error — ref type is HTMLElement, anchor is compatible
      ref={m.ref}
      href={href}
      onPointerMove={m.onMove}
      onPointerLeave={m.onLeave}
      style={{ x: m.sx, y: m.sy }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={`inline-flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
