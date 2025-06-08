"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function AISkillsMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "AI/ML Integration", level: 95, category: "AI", color: "#00FFFF" },
    { name: "Marketing Strategy", level: 98, category: "Marketing", color: "#FF00FF" },
    { name: "Content Creation", level: 92, category: "Creative", color: "#FFFF00" },
    { name: "Data Analytics", level: 88, category: "Analytics", color: "#00FF00" },
    { name: "Web Development", level: 85, category: "Technical", color: "#FF8000" },
    { name: "Brand Design", level: 90, category: "Design", color: "#8000FF" },
    { name: "SEO/SEM", level: 87, category: "Digital", color: "#FF0080" },
    { name: "Automation", level: 93, category: "Systems", color: "#80FF00" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 600

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = 250

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background grid
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
      ctx.lineWidth = 1
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw skill axes
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const endX = centerX + Math.cos(angle) * maxRadius
        const endY = centerY + Math.sin(angle) * maxRadius

        // Axis line
        ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Skill point
        const skillRadius = (skill.level / 100) * maxRadius
        const skillX = centerX + Math.cos(angle) * skillRadius
        const skillY = centerY + Math.sin(angle) * skillRadius

        // Glowing effect
        const isHovered = hoveredSkill === skill.name
        const glowSize = isHovered ? 15 : 8

        ctx.shadowColor = skill.color
        ctx.shadowBlur = glowSize
        ctx.fillStyle = skill.color
        ctx.beginPath()
        ctx.arc(skillX, skillY, isHovered ? 8 : 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Skill label
        const labelX = centerX + Math.cos(angle) * (maxRadius + 40)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 40)

        ctx.fillStyle = isHovered ? skill.color : "rgba(255, 255, 255, 0.8)"
        ctx.font = isHovered ? "bold 14px Arial" : "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(skill.name, labelX, labelY)
        ctx.fillText(`${skill.level}%`, labelX, labelY + 16)

        // Data streams
        if (isHovered) {
          for (let i = 0; i < 5; i++) {
            const streamAngle = angle + (Math.random() - 0.5) * 0.5
            const streamRadius = Math.random() * skillRadius
            const streamX = centerX + Math.cos(streamAngle) * streamRadius
            const streamY = centerY + Math.sin(streamAngle) * streamRadius

            ctx.fillStyle = skill.color + "80"
            ctx.beginPath()
            ctx.arc(streamX, streamY, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      // Draw connecting polygon
      ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
      ctx.lineWidth = 2
      ctx.beginPath()
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const skillRadius = (skill.level / 100) * maxRadius
        const skillX = centerX + Math.cos(angle) * skillRadius
        const skillY = centerY + Math.sin(angle) * skillRadius

        if (index === 0) {
          ctx.moveTo(skillX, skillY)
        } else {
          ctx.lineTo(skillX, skillY)
        }
      })
      ctx.closePath()
      ctx.stroke()

      // Fill polygon
      ctx.fillStyle = "rgba(0, 255, 255, 0.1)"
      ctx.fill()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [hoveredSkill])

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Canvas */}
      <div className="relative">
        <canvas ref={canvasRef} className="border border-cyan-400/30 rounded-full bg-black/50 backdrop-blur-xl" />

        {/* Center AI Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
            🧠
          </div>
        </motion.div>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">Neural Pathways</h3>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group cursor-pointer"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/50 transition-all">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.color }} />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
              <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{skill.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
