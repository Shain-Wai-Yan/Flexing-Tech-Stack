"use client"

import { useEffect, useRef } from "react"

interface AIParticleFieldProps {
  mousePosition: { x: number; y: number }
}

export function AIParticleField({ mousePosition }: AIParticleFieldProps) {
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

    // AI Particles with different behaviors
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      type: "data" | "energy" | "quantum"
      life: number
      maxLife: number
    }> = []

    const colors = {
      data: ["#00FFFF", "#0080FF", "#0040FF"],
      energy: ["#FF00FF", "#FF0080", "#FF0040"],
      quantum: ["#FFFF00", "#80FF00", "#40FF00"],
    }

    // Create particles
    for (let i = 0; i < 200; i++) {
      const types = ["data", "energy", "quantum"] as const
      const type = types[Math.floor(Math.random() * types.length)]

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[type][Math.floor(Math.random() * colors[type].length)],
        type,
        life: Math.random() * 100,
        maxLife: 100,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = (200 - distance) / 200
          const angle = Math.atan2(dy, dx)

          if (particle.type === "data") {
            // Data particles are attracted to mouse
            particle.vx += Math.cos(angle) * force * 0.02
            particle.vy += Math.sin(angle) * force * 0.02
          } else if (particle.type === "energy") {
            // Energy particles orbit around mouse
            particle.vx += Math.cos(angle + Math.PI / 2) * force * 0.03
            particle.vy += Math.sin(angle + Math.PI / 2) * force * 0.03
          } else {
            // Quantum particles are repelled
            particle.vx -= Math.cos(angle) * force * 0.01
            particle.vy -= Math.sin(angle) * force * 0.01
          }
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Apply friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Update life
        particle.life += 1
        if (particle.life > particle.maxLife) {
          particle.life = 0
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }

        // Draw particle based on type
        const alpha = 1 - (particle.life / particle.maxLife) * 0.5

        if (particle.type === "data") {
          // Square data packets
          ctx.fillStyle =
            particle.color +
            Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fillRect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size)
        } else if (particle.type === "energy") {
          // Glowing energy orbs
          ctx.shadowColor = particle.color
          ctx.shadowBlur = 10
          ctx.fillStyle =
            particle.color +
            Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          // Quantum triangles
          ctx.fillStyle =
            particle.color +
            Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
          ctx.closePath()
          ctx.fill()
        }

        // Draw trails for energy particles
        if (particle.type === "energy" && Math.random() < 0.1) {
          ctx.strokeStyle = particle.color + "40"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x - particle.vx * 10, particle.y - particle.vy * 10)
          ctx.stroke()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />
}
