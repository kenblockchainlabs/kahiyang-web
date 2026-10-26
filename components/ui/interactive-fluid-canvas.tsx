"use client"

import { useEffect, useRef } from "react"

export default function InteractiveFluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Interactive mouse state
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Fluid particles setup
    const particleCount = 45
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 120 + 60,
      color: Math.random() > 0.5 ? "rgba(16, 185, 129, " : "rgba(6, 182, 212, ",
      alpha: Math.random() * 0.12 + 0.05,
    }))

    const render = () => {
      // Lerp mouse coordinates for liquid inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      ctx.clearRect(0, 0, width, height)

      // Background ambient gradient
      const bgGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.8
      )
      bgGradient.addColorStop(0, "rgba(16, 185, 129, 0.08)")
      bgGradient.addColorStop(0.4, "rgba(6, 182, 212, 0.03)")
      bgGradient.addColorStop(1, "rgba(7, 9, 14, 0)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      // Draw fluid floating metaballs
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce on boundary
        if (p.x < -p.radius) p.x = width + p.radius
        if (p.x > width + p.radius) p.x = -p.radius
        if (p.y < -p.radius) p.y = height + p.radius
        if (p.y > height + p.radius) p.y = -p.radius

        // Mouse repulsion / fluid push
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 3
          p.x -= (dx / dist) * force
          p.y -= (dy / dist) * force
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        grad.addColorStop(0, p.color + p.alpha + ")")
        grad.addColorStop(1, p.color + "0)")

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Interactive Cursor Spot Ring
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.25)"
      ctx.lineWidth = 1
      ctx.stroke()

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 filter blur-[40px] opacity-75"
    />
  )
}
