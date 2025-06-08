"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function QuantumLoader() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("INITIALIZING AI SYSTEMS")

  const loadingSteps = [
    "INITIALIZING AI SYSTEMS",
    "LOADING NEURAL NETWORKS",
    "CALIBRATING QUANTUM PROCESSORS",
    "ACTIVATING HOLOGRAPHIC DISPLAY",
    "READY TO AMAZE",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        const stepIndex = Math.floor(newProgress / 20)
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex])
        }
        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Quantum Logo */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full opacity-30" />
          <div className="absolute inset-2 border-4 border-purple-400 rounded-full opacity-50" />
          <div className="absolute inset-4 border-4 border-pink-400 rounded-full opacity-70" />
          <motion.div
            className="absolute inset-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {loadingText}
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="text-cyan-300 text-lg font-mono">{progress}%</div>
      </div>
    </div>
  )
}
