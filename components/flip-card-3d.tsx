"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function FlipCard3D() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex justify-center">
      <motion.div
        className="relative w-96 h-96 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Front Side */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600 p-1"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full h-full bg-black/90 rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-xl border border-white/20">
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                🧠
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Creative Strategist</h2>
              <p className="text-purple-300 text-center text-lg">
                Literature graduate who thinks in systems, builds in code, and executes with precision
              </p>
              <motion.div
                className="mt-6 text-sm text-gray-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Click to flip →
              </motion.div>
            </div>
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 p-1"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-full bg-black/90 rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-xl border border-white/20">
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  rotateX: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateX: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                💻
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Technical Builder</h2>
              <div className="space-y-2 text-center">
                <p className="text-emerald-300">70,000+ Lines of Code</p>
                <p className="text-blue-300">Full-Stack Ecosystems</p>
                <p className="text-purple-300">SEO Perfect (100/100)</p>
                <p className="text-pink-300">Competition Winner</p>
              </div>
              <motion.div
                className="mt-6 text-sm text-gray-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ← Click to flip back
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Particles around card */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
