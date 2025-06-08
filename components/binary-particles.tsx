"use client"

import { useEffect, useRef } from "react"

interface GeometricShapesProps {
  mousePosition: { x: number; y: number }
}

export function GeometricShapes({ mousePosition }: GeometricShapesProps) {
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

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      rotation: number
      rotationSpeed: number
      type: "triangle" | "square" | "circle" | "diamond"
      color: string
      opacity: number
    }> = []

    // Create shapes
    for (let i = 0; i < 50; i++) {
      const types: ("triangle" | "square" | "circle" | "diamond")[] = ["triangle", "square", "circle", "diamond"]
      const colors = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 15 + 5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const drawShape = (shape: (typeof shapes)[0]) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.fillStyle = `${shape.color}${Math.floor(shape.opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.strokeStyle = `${shape.color}${Math.floor(shape.opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.lineWidth = 1

      switch (shape.type) {
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -shape.size)
          ctx.lineTo(-shape.size * 0.866, shape.size * 0.5)
          ctx.lineTo(shape.size * 0.866, shape.size * 0.5)
          ctx.closePath()
          ctx.stroke()
          break
        case "square":
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.stroke()
          break
        case "diamond":
          ctx.beginPath()
          ctx.moveTo(0, -shape.size)
          ctx.lineTo(shape.size, 0)
          ctx.lineTo(0, shape.size)
          ctx.lineTo(-shape.size, 0)
          ctx.closePath()
          ctx.stroke()
          break
      }
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        // Mouse interaction - gentle repulsion
        const dx = mousePosition.x - shape.x
        const dy = mousePosition.y - shape.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 1500
          shape.vx -= (dx / distance) * force
          shape.vy -= (dy / distance) * force
        }

        // Update position
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Apply friction
        shape.vx *= 0.99
        shape.vy *= 0.99

        // Boundary wrapping
        if (shape.x < -50) shape.x = canvas.width + 50
        if (shape.x > canvas.width + 50) shape.x = -50
        if (shape.y < -50) shape.y = canvas.height + 50
        if (shape.y > canvas.height + 50) shape.y = -50

        drawShape(shape)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-25" />
}
