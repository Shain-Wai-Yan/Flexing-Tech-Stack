"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code } from "lucide-react"

export function SkillsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills = [
    { name: "Strategic Thinking", level: 95, color: "#4f46e5" },
    { name: "Technical Building", level: 92, color: "#0ea5e9" },
    { name: "Creative Problem Solving", level: 98, color: "#10b981" },
    { name: "Self-Learning", level: 100, color: "#f59e0b" },
    { name: "Project Leadership", level: 88, color: "#ef4444" },
    { name: "Cross-Cultural Communication", level: 90, color: "#8b5cf6" },
    { name: "Literature & Writing", level: 94, color: "#6366f1" },
    { name: "Digital Innovation", level: 89, color: "#14b8a6" },
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

      // Draw background grid
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + i * 0.02})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw skill axes
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const endX = centerX + Math.cos(angle) * maxRadius
        const endY = centerY + Math.sin(angle) * maxRadius

        // Axis line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Skill point
        const radius = (skill.level / 100) * maxRadius
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // Draw data point
        ctx.fillStyle = skill.color
        ctx.shadowColor = skill.color
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw skill label
        const labelRadius = maxRadius + 40
        const labelX = centerX + Math.cos(angle) * labelRadius
        const labelY = centerY + Math.sin(angle) * labelRadius

        ctx.fillStyle = "white"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(skill.name, labelX, labelY)
        ctx.fillText(`${skill.level}%`, labelX, labelY + 16)
      })

      // Draw connecting polygon
      ctx.beginPath()
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const radius = (skill.level / 100) * maxRadius
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.closePath()
      ctx.strokeStyle = "rgba(79, 70, 229, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Fill polygon with gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius)
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.2)")
      gradient.addColorStop(1, "rgba(16, 185, 129, 0.05)")
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw pulsing center
      const time = Date.now() / 1000
      const pulseSize = 10 + Math.sin(time * 2) * 3

      ctx.fillStyle = "#4f46e5"
      ctx.shadowColor = "#4f46e5"
      ctx.shadowBlur = 15
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

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
        <canvas
          ref={canvasRef}
          className="border border-indigo-500/20 rounded-full bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-indigo-500/10"
        />

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
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Code className="text-white" size={24} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
