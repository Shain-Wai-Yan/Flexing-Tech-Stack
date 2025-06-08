"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        variants={item}
      >
        Why you should hire me — and why I built a whole page to show you.
      </motion.h1>

      <motion.p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300" variants={item}>
        Not just a resume. This is a full-stack case study of what I can do — marketing, branding, building, and
        thinking. Scroll to see why I'm worth more than a PDF.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={item}>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          View Highlights
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30"
        >
          Talk to Me
        </Button>
      </motion.div>

      <motion.div
        className="mt-16 animate-bounce"
        variants={item}
        transition={{ delay: 1, duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-auto text-purple-500 dark:text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
