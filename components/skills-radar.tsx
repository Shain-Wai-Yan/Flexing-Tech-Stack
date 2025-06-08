"use client"

import { useEffect, useRef } from "react"

export function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills = [
    { name: "Digital Marketing", level: 95 },
    { name: "Content Strategy", level: 90 },
    { name: "No-Code Development", level: 85 },
    { name: "Data Analytics", level: 88 },
    { name: "Social Media", level: 92 },
    { name: "SEO/SEM", level: 87 },
    { name: "Brand Strategy", level: 89 },
    { name: "Growth Hacking", level: 91 },
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
    const maxRadius = 180

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 + i * 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw skill lines and points
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
        const radius = (skill.level / 100) * maxRadius

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // Draw line from center
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius)
        ctx.strokeStyle = "rgba(147, 51, 234, 0.3)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw skill point
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${280 + index * 20}, 70%, 60%)`
        ctx.fill()

        // Draw skill label
        const labelX = centerX + Math.cos(angle) * (maxRadius + 30)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 30)

        ctx.fillStyle = "white"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"
        ctx.fillText(skill.name, labelX, labelY)
        ctx.fillText(`${skill.level}%`, labelX, labelY + 16)
      })

      // Draw connecting lines between points
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
      ctx.fillStyle = "rgba(147, 51, 234, 0.2)"
      ctx.fill()
      ctx.strokeStyle = "rgba(147, 51, 234, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    draw()
  }, [])

  return (
    <div className="flex justify-center">
      <canvas ref={canvasRef} className="border border-purple-400 rounded-full bg-black/20 backdrop-blur-sm" />
    </div>
  )
}
