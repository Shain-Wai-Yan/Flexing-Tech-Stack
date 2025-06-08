"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Lightbulb, BookOpen, Trophy } from "lucide-react"

export function ProfessionalFlipCard() {
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
            className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-600 p-1"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full h-full bg-white/95 rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-xl border border-gray-200 shadow-2xl">
              <motion.div
                className="mb-6 text-indigo-600"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Lightbulb size={80} strokeWidth={1} />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Creative Strategist</h2>
              <p className="text-indigo-600 text-center text-lg">
                Literature graduate who thinks in systems, builds in code, and executes with precision
              </p>
              <motion.div
                className="mt-6 text-sm text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Click to flip →
              </motion.div>
            </div>
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-600 p-1"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-full bg-white/95 rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-xl border border-gray-200 shadow-2xl">
              <motion.div
                className="mb-6 text-emerald-600"
                animate={{
                  rotateX: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateX: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Code size={80} strokeWidth={1} />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Technical Builder</h2>
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Code size={16} className="text-emerald-600" />
                  <p className="text-emerald-600">70,000+ Lines of Code</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-blue-600" />
                  <p className="text-blue-600">Full-Stack Ecosystems</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Lightbulb size={16} className="text-indigo-600" />
                  <p className="text-indigo-600">SEO Perfect (100/100)</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Trophy size={16} className="text-amber-600" />
                  <p className="text-amber-600">Competition Winner</p>
                </div>
              </div>
              <motion.div
                className="mt-6 text-sm text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ← Click to flip back
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Subtle connection lines around card */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const x1 = Math.cos(angle) * 200 + 192
            const y1 = Math.sin(angle) * 200 + 192
            const x2 = Math.cos(angle + Math.PI / 8) * 250 + 192
            const y2 = Math.sin(angle + Math.PI / 8) * 250 + 192

            return (
              <motion.svg
                key={i}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3 + i, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
              >
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 2 === 0 ? "#4f46e5" : "#10b981"}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </motion.svg>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
