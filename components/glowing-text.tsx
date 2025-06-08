"use client"

import { motion } from "framer-motion"

interface GlowingTextProps {
  text: string
  className?: string
  glowColor?: string
}

export function GlowingText({ text, className = "", glowColor = "rgb(147, 51, 234)" }: GlowingTextProps) {
  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        className="relative z-10 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        {text}
      </motion.span>

      {/* Glow effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent blur-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {text}
      </motion.span>
    </motion.h1>
  )
}
