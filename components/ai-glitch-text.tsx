"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AIGlitchTextProps {
  text: string
  className?: string
}

export function AIGlitchText({ text, className = "" }: AIGlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"
  const aiChars = "01"

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true)

        // Create glitch effect
        const glitchSteps = 5
        let step = 0

        const glitchStep = () => {
          if (step < glitchSteps) {
            const glitched = text
              .split("")
              .map((char, index) => {
                if (Math.random() < 0.3) {
                  return Math.random() < 0.5
                    ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
                    : aiChars[Math.floor(Math.random() * aiChars.length)]
                }
                return char
              })
              .join("")

            setDisplayText(glitched)
            step++
            setTimeout(glitchStep, 50)
          } else {
            setDisplayText(text)
            setIsGlitching(false)
          }
        }

        glitchStep()
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <motion.div
        className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        {displayText}
      </motion.div>

      {/* Glitch layers */}
      <motion.div
        className="absolute inset-0 text-red-500 opacity-70"
        animate={{
          x: isGlitching ? [-2, 2, -2, 2, 0] : 0,
          opacity: isGlitching ? [0.7, 0.3, 0.7, 0.3, 0] : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {displayText}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-blue-500 opacity-70"
        animate={{
          x: isGlitching ? [2, -2, 2, -2, 0] : 0,
          opacity: isGlitching ? [0.7, 0.3, 0.7, 0.3, 0] : 0,
        }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {displayText}
      </motion.div>

      {/* Holographic scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-cyan-400 opacity-30"
            style={{ top: `${25 + i * 25}%` }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
