"use client"

import { motion } from "framer-motion"

export function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [100, 300, 100],
          y: [100, 200, 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: 100, y: 100 }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [window.innerWidth - 200, window.innerWidth - 400, window.innerWidth - 200],
          y: [200, 100, 200],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: typeof window !== "undefined" ? window.innerWidth - 200 : 800, y: 200 }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [200, 100, 200],
          y: [window.innerHeight - 200, window.innerHeight - 300, window.innerHeight - 200],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: 200, y: typeof window !== "undefined" ? window.innerHeight - 200 : 600 }}
      />

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}
