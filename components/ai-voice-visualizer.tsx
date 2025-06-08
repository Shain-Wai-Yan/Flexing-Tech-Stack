"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function AIVoiceVisualizer() {
  const [activeBar, setActiveBar] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const preferences = [
    "Remote or hybrid opportunity where I can own the creative + strategic stack",
    "Broad role — not stuck in a single lane like email or analytics only",
    "Team that values ownership, experimentation, and results",
    "Projects that push boundaries and embrace AI innovation",
    "Culture that appreciates both technical skills and creative thinking",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar((prev) => (prev + 1) % 20)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="relative bg-gradient-to-br from-black/80 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* AI Voice Visualizer */}
        <div className="flex items-center justify-center mb-8">
          <motion.button
            className="relative group"
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-3xl">
              {isPlaying ? "⏸️" : "🎤"}
            </div>

            {/* Voice Bars */}
            <div className="absolute -left-32 -right-32 top-1/2 transform -translate-y-1/2 flex items-end justify-center space-x-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    width: 4,
                    height: Math.random() * 40 + 10,
                  }}
                  animate={{
                    height: isPlaying ? [10, Math.random() * 60 + 20, 10] : 10,
                    opacity: Math.abs(i - activeBar) < 3 ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </motion.button>
        </div>

        {/* AI Quote */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            "I'm not looking to run ads or just post content."
          </p>
          <p className="text-xl text-white">
            I'm looking to run strategy, shape brand presence, analyze what works, and build systems that scale.
          </p>
        </motion.div>

        {/* Preferences List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">What I Want:</h3>
          {preferences.map((pref, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 255, 255, 0.5)" }}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
              >
                ✓
              </motion.div>
              <p className="text-gray-300 leading-relaxed">{pref}</p>
            </motion.div>
          ))}
        </div>

        {/* Holographic Scanlines */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-cyan-400/30"
              style={{ top: `${12.5 + i * 12.5}%` }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
