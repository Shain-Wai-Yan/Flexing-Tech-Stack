"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { AIGlitchText } from "./ai-glitch-text"

export function HolographicHero() {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
    })
  }, [controls])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-8">
      {/* Holographic Frame */}
      <motion.div className="relative" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
        {/* Outer Hologram Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-400 opacity-50"
          animate={{
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          style={{ width: "110%", height: "110%", left: "-5%", top: "-5%" }}
        />

        {/* Main Content Container */}
        <motion.div
          className="relative bg-gradient-to-br from-black/80 via-cyan-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30"
          animate={controls}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: 10,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Holographic Scanlines */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                style={{ top: `${i * 5}%` }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [-100, 100],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <AIGlitchText text="SHAIN WAI YAN" className="text-6xl md:text-9xl font-black mb-4" />

              <motion.div
                className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                AI-POWERED MARKETING ARCHITECT
              </motion.div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-cyan-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Why hire me? Because I built this entire page to show you what happens when marketing genius meets AI
              innovation. This isn't just a portfolio — it's proof of concept.
            </motion.p>

            {/* Floating Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.button
                className="relative group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg overflow-hidden"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">EXPERIENCE THE MAGIC</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="relative group px-8 py-4 border-2 border-cyan-400 rounded-full font-bold text-lg text-cyan-400 hover:text-black transition-colors"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">HIRE ME NOW</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-400 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Holographic Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}
