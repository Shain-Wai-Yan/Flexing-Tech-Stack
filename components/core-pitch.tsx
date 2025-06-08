"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function CorePitch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const stats = [
    { icon: "📍", label: "Location", value: "Remote, Myanmar (Taunggyi)" },
    { icon: "🗣️", label: "Languages", value: "Burmese (native), English (strong), Mandarin (HSK4 – 277/300)" },
    { icon: "💼", label: "Target Role", value: "Digital marketing, branding, web-integrated strategy" },
    { icon: "💸", label: "Goal", value: "Remote or hybrid, full-time or project — as long as it's worth the skill" },
    { icon: "🔧", label: "Web Dev", value: "HTML, CSS, JS + Cloudflare, Workers, GitHub API, SSR" },
    {
      icon: "📈",
      label: "Certs",
      value: "Google Digital Marketing, Strategy First Diploma (Marketing + Brand)",
    },
  ]

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        variants={item}
      >
        The Core Pitch
      </motion.h2>

      <motion.div className="mb-12 text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-6" variants={item}>
        <p>
          I'm <span className="font-bold text-purple-600 dark:text-purple-400">Shain Wai Yan</span> — a bilingual
          marketing strategist, brand thinker, and self-taught technical creative based in Taunggyi, Myanmar.
        </p>
        <p>
          I don't just check boxes. I build systems. I craft experiences. I design for both humans and machines — and I
          back it with performance, results, and relentless execution.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <h3 className="font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
                <p className="font-semibold">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
