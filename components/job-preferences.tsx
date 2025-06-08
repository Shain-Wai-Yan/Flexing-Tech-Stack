"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

export function JobPreferences() {
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

  const preferences = [
    "A remote or hybrid opportunity where I can own part of the creative + strategic stack",
    "A broad role — not stuck in a single lane like email or analytics only",
    "A team that values ownership, experimentation, and results",
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
        What I'm Looking For
      </motion.h2>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-l-4 border-purple-600 dark:border-purple-500"
        variants={item}
      >
        <p className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          I'm not looking to run ads or just post content.
        </p>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          I'm looking to run strategy, shape brand presence, analyze what works, and build systems that scale.
        </p>

        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">I want:</h3>
        <ul className="space-y-4">
          {preferences.map((pref, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              variants={item}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{pref}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
