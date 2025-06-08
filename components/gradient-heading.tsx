"use client"

import { motion } from "framer-motion"

interface GradientHeadingProps {
  text: string
  className?: string
  fromColor?: string
  toColor?: string
}

export function GradientHeading({
  text,
  className = "",
  fromColor = "rgb(79, 70, 229)",
  toColor = "rgb(16, 185, 129)",
}: GradientHeadingProps) {
  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        className="relative z-10 text-transparent bg-clip-text"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        {text}
      </motion.span>

      {/* Subtle glow effect */}
      <motion.span
        className="absolute inset-0 text-transparent bg-clip-text blur-sm"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {text}
      </motion.span>
    </motion.h1>
  )
}
