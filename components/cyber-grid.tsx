"use client"

import { useEffect, useRef } from "react"

export function CyberGrid() {
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

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Grid parameters
      const gridSize = 50
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Draw cyber grid
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          // Calculate wave effect
          const wave = Math.sin(time + i * 0.1 + j * 0.1) * 0.5 + 0.5
          const opacity = 0.1 + wave * 0.2

          // Draw grid lines
          if (i < cols) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + gridSize, y)
            ctx.stroke()
          }

          if (j < rows) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y + gridSize)
            ctx.stroke()
          }

          // Draw intersection points
          if (Math.random() < 0.01) {
            ctx.fillStyle = `rgba(255, 0, 255, ${opacity * 2})`
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }

          // Draw data streams
          if (Math.random() < 0.005) {
            const streamLength = 5
            for (let k = 0; k < streamLength; k++) {
              const streamX = x + ((k * gridSize) % canvas.width)
              const streamOpacity = ((streamLength - k) / streamLength) * 0.5

              ctx.fillStyle = `rgba(255, 255, 0, ${streamOpacity})`
              ctx.fillRect(streamX - 1, y - 1, 2, 2)
            }
          }
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
