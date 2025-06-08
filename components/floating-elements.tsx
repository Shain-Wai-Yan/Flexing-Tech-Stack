"use client"

import { motion } from "framer-motion"

interface FloatingElementsProps {
  mousePosition: { x: number; y: number }
}

export function FloatingElements({ mousePosition }: FloatingElementsProps) {
  const elements = [
    { icon: "📚", label: "Literature" },
    { icon: "💻", label: "Code" },
    { icon: "🏆", label: "Winner" },
    { icon: "🌐", label: "Web" },
    { icon: "🎨", label: "Design" },
    { icon: "📊", label: "SEO" },
    { icon: "🚀", label: "Innovation" },
    { icon: "⚡", label: "Performance" },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + index * 12}%`,
            top: `${20 + index * 8}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="text-4xl opacity-30 hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.5, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {element.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
