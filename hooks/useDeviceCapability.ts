"use client"

import { useState, useEffect } from "react"

export type DeviceTier = "high" | "medium" | "low"

interface DeviceCapability {
  tier: DeviceTier
  isMobile: boolean
  hasWebGL: boolean
  prefersReducedMotion: boolean
  isReady: boolean
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false
  try {
    const canvas = document.createElement("canvas")
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")))
  } catch {
    return false
  }
}

function detectGPUTier(): DeviceTier {
  if (typeof window === "undefined") return "medium"

  const canvas = document.createElement("canvas")
  const gl = canvas.getContext("webgl") as WebGLRenderingContext | null
  if (!gl) return "low"

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
  const renderer = debugInfo ? (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string) : ""

  const lowGPUKeywords = ["Adreno 3", "Adreno 4", "Adreno 5", "Mali-4", "Mali-T6", "Mali-T7", "PowerVR SGX", "Intel HD Graphics 3", "Intel HD Graphics 4"]
  const highGPUKeywords = ["RTX", "GTX 16", "GTX 20", "GTX 30", "GTX 40", "M1", "M2", "M3", "Apple A1", "Adreno 7", "Mali-G7", "Mali-G8"]

  if (lowGPUKeywords.some((k) => renderer.includes(k))) return "low"
  if (highGPUKeywords.some((k) => renderer.includes(k))) return "high"
  return "medium"
}

export function useDeviceCapability(): DeviceCapability {
  const [state, setState] = useState<DeviceCapability>({
    tier: "medium",
    isMobile: false,
    hasWebGL: true,
    prefersReducedMotion: false,
    isReady: false,
  })

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const hasWebGL = detectWebGL()
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const gpuTier = detectGPUTier()

    let tier: DeviceTier = gpuTier
    if (isMobile && gpuTier === "medium") tier = "low"
    if (prefersReducedMotion) tier = "low"
    if (!hasWebGL) tier = "low"

    setState({ tier, isMobile, hasWebGL, prefersReducedMotion, isReady: true })
  }, [])

  return state
}
