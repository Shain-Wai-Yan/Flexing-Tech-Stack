"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SkillsOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills = [
    { name: "Strategic Thinking", level: 95, color: "#8B5CF6" },
    { name: "Technical Building", level: 92, color: "#06B6D4" },
    { name: "Creative Problem Solving", level: 98, color: "#10B981" },
    { name: "Self-Learning", level: 100, color: "#F59E0B" },
    { name: "Project Leadership", level: 88, color: "#EF4444" },
    { name: "Cross-Cultural Communication", level: 90, color: "#EC4899" },
    { name: "Literature & Writing", level: 94, color: "#6366F1" },
    { name: "Digital Innovation", level: 89, color: "#14B8A6" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 500
    canvas.height = 500

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = 200

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + i * 0.02})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw skill points and connections
      const points: Array<{ x: number; y: number; color: string }> = []

      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const radius = (skill.level / 100) * maxRadius
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        points.push({ x, y, color: skill.color })

        // Draw skill point
        ctx.fillStyle = skill.color
        ctx.shadowColor = skill.color
        ctx.shadowBlur = 15
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw skill label
        const labelX = centerX + Math.cos(angle) * (maxRadius + 40)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 40)

        ctx.fillStyle = "white"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(skill.name, labelX, labelY)
        ctx.fillText(`${skill.level}%`, labelX, labelY + 14)
      })

      // Draw connecting lines
      ctx.strokeStyle = "rgba(139, 92, 246, 0.3)"
      ctx.lineWidth = 2
      ctx.beginPath()
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y)
        } else {
          ctx.lineTo(point.x, point.y)
        }
      })
      ctx.closePath()
      ctx.stroke()

      // Fill the shape
      ctx.fillStyle = "rgba(139, 92, 246, 0.1)"
      ctx.fill()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="flex justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <canvas ref={canvasRef} className="border border-purple-400/30 rounded-full bg-black/50 backdrop-blur-xl" />

        {/* Center Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
            🌟
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
