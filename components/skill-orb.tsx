"use client"

import { useEffect, useRef } from "react"

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillOrbProps {
  skill: Skill
  index: number
  mousePosition: { x: number; y: number }
}

export function SkillOrb({ skill, index, mousePosition }: SkillOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    const rect = orb.getBoundingClientRect()
    const orbCenterX = rect.left + rect.width / 2
    const orbCenterY = rect.top + rect.height / 2

    const dx = mousePosition.x - orbCenterX
    const dy = mousePosition.y - orbCenterY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < 200) {
      const force = (200 - distance) / 200
      const moveX = (dx / distance) * force * 20
      const moveY = (dy / distance) * force * 20

      orb.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.2})`
    } else {
      orb.style.transform = "translate(0px, 0px) scale(1)"
    }
  }, [mousePosition])

  return (
    <div
      ref={orbRef}
      className="relative group cursor-pointer transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative w-48 h-48 mx-auto">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* Main orb */}
        <div
          className="relative w-full h-full rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: skill.color,
            background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
          }}
        >
          {/* Skill level ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="50%" cy="50%" r="45%" fill="none" stroke={`${skill.color}30`} strokeWidth="2" />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke={skill.color}
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 0.45 * 96}`}
              strokeDashoffset={`${2 * Math.PI * 0.45 * 96 * (1 - skill.level / 100)}`}
              className="transition-all duration-1000 ease-out"
              style={{ filter: "drop-shadow(0 0 10px currentColor)" }}
            />
          </svg>

          {/* Content */}
          <div className="text-center z-10">
            <div className="text-xl font-bold text-white mb-2">{skill.name}</div>
            <div className="text-3xl font-black" style={{ color: skill.color }}>
              {skill.level}%
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: skill.color,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
