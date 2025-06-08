"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function QuantumProjectCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    {
      title: "Loop Library",
      subtitle: "Circular Economy Startup",
      description:
        "3rd Prize Winner in Myanmar's national competition with 70+ teams. Built entire ecosystem with AI-powered logistics optimization.",
      metrics: ["3rd Place Winner", "800+ Participants", "AI-Optimized Routes"],
      tech: ["React", "AI/ML", "Logistics API", "Sustainability"],
      color: "from-green-400 to-emerald-600",
      icon: "💡",
      achievement: "COMPETITION WINNER",
    },
    {
      title: "Shain Studio",
      subtitle: "AI-Enhanced Web Ecosystem",
      description:
        "Bilingual full-stack platform with 11 pages per language. Features real-time AI content generation and 100/100 SEO scores.",
      metrics: ["100/100 SEO", "11 Pages/Language", "Real-time AI"],
      tech: ["Next.js", "AI APIs", "Cloudflare Workers", "SSR"],
      color: "from-blue-400 to-cyan-600",
      icon: "🧠",
      achievement: "TECHNICAL MASTERPIECE",
    },
    {
      title: "AI Marketing Automation",
      subtitle: "Neural Campaign Optimizer",
      description:
        "Self-learning marketing system that increased ROI by 340% using predictive analytics and behavioral AI.",
      metrics: ["340% ROI Increase", "AI-Powered", "Predictive Analytics"],
      tech: ["Python", "TensorFlow", "Marketing APIs", "Analytics"],
      color: "from-purple-400 to-pink-600",
      icon: "🤖",
      achievement: "AI INNOVATION",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative group"
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Holographic Frame */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-cyan-400/30"
            animate={{
              boxShadow:
                hoveredCard === index
                  ? [
                      "0 0 20px rgba(0, 255, 255, 0.5)",
                      "0 0 40px rgba(255, 0, 255, 0.5)",
                      "0 0 20px rgba(0, 255, 255, 0.5)",
                    ]
                  : "0 0 10px rgba(0, 255, 255, 0.2)",
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Main Card */}
          <motion.div
            className={`relative bg-gradient-to-br ${project.color} p-1 rounded-2xl overflow-hidden`}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Inner Content */}
            <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 h-full">
              {/* Achievement Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold"
                animate={{
                  scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
              >
                {project.achievement}
              </motion.div>

              {/* Project Icon */}
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  rotateY: hoveredCard === index ? 360 : 0,
                }}
                transition={{ duration: 1 }}
              >
                {project.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-300 text-sm mb-4">{project.subtitle}</p>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>

              {/* Metrics */}
              <div className="space-y-2 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: metricIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    <span className="text-cyan-300">{metric}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE PROJECT
              </motion.button>

              {/* Holographic Scanlines */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-cyan-400/30"
                    style={{ top: `${20 + i * 20}%` }}
                    animate={{
                      opacity: hoveredCard === index ? [0, 1, 0] : 0,
                      scaleX: hoveredCard === index ? [0, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: hoveredCard === index ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
