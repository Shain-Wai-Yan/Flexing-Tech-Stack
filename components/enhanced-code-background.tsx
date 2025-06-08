"use client"

import { useEffect, useRef } from "react"

export function EnhancedCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create hexagonal grid pattern
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2

    let time = 0

    const drawHexagon = (x: number, y: number, size: number, opacity: number, color: string) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.005

      // Draw hexagonal grid
      for (let row = 0; row < Math.ceil(canvas.height / hexHeight) + 2; row++) {
        for (let col = 0; col < Math.ceil(canvas.width / (hexWidth * 0.75)) + 2; col++) {
          const x = col * hexWidth * 0.75
          const y = row * hexHeight + (col % 2) * (hexHeight / 2)

          // Create wave effect
          const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2)
          const wave = Math.sin(distance * 0.01 + time) * 0.5 + 0.5
          const opacity = 0.1 + wave * 0.15

          // Alternate colors
          const color = (row + col) % 2 === 0 ? "#4f46e5" : "#10b981"

          drawHexagon(x, y, hexSize * 0.8, opacity, color)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />
}
