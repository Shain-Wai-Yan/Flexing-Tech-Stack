"use client"

import { useEffect, useState } from "react"

export function FloatingIcons() {
  const [icons, setIcons] = useState<
    Array<{
      id: number
      icon: string
      x: number
      y: number
      size: number
      opacity: number
    }>
  >([])

  const marketingIcons = ["📊", "📈", "🎯", "💡", "🚀", "📱", "💻", "🌟", "📧", "🔥", "💰", "🎨"]

  useEffect(() => {
    const createIcon = () => ({
      id: Date.now() + Math.random(),
      icon: marketingIcons[Math.floor(Math.random() * marketingIcons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 20,
      opacity: Math.random() * 0.6 + 0.2,
    })

    // Initialize icons
    setIcons(Array.from({ length: 15 }, createIcon))

    // Add new icons periodically
    const interval = setInterval(() => {
      setIcons((prev) => [...prev.slice(-14), createIcon()])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-pulse"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}px`,
            opacity: icon.opacity,
            animation: `float 20s linear infinite`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        >
          {icon.icon}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
