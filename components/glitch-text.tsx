"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    let interval: NodeJS.Timeout

    const startGlitch = () => {
      interval = setInterval(() => {
        if (Math.random() < 0.1) {
          const glitched = text
            .split("")
            .map((char) => (Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
            .join("")

          setGlitchedText(glitched)

          setTimeout(() => setGlitchedText(text), 100)
        }
      }, 150)
    }

    startGlitch()

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [text])

  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {glitchedText}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-50 animate-pulse">
        {text}
      </div>
    </div>
  )
}
