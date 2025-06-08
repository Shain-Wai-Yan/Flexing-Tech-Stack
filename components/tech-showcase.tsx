"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Server, Palette, BarChart } from "lucide-react"

export function TechShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techStack = [
    {
      category: "Frontend Mastery",
      icon: <Palette size={24} className="text-orange-400" />,
      skills: [
        { name: "HTML/CSS/JS", level: 95, description: "70K+ lines of handwritten code" },
        { name: "Responsive Design", level: 98, description: "Mobile-first, pixel-perfect" },
        { name: "SEO Optimization", level: 100, description: "100/100 PageSpeed scores" },
        { name: "Performance", level: 92, description: "Optimized for speed & UX" },
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      category: "Backend Systems",
      icon: <Server size={24} className="text-blue-400" />,
      skills: [
        { name: "Cloudflare Workers", level: 88, description: "Edge computing & SSR" },
        { name: "API Integration", level: 90, description: "GitHub, YouTube, real-time data" },
        { name: "Database Design", level: 85, description: "NeonDB, Strapi CMS" },
        { name: "Server Architecture", level: 82, description: "Scalable, production-ready" },
      ],
      color: "from-blue-400 to-purple-500",
    },
    {
      category: "Creative Strategy",
      icon: <BarChart size={24} className="text-green-400" />,
      skills: [
        { name: "Brand Strategy", level: 92, description: "92/100 assessment score" },
        { name: "Content Creation", level: 89, description: "Bilingual, engaging content" },
        { name: "UX/UI Design", level: 87, description: "User-centered design thinking" },
        { name: "Digital Marketing", level: 85, description: "Google certified professional" },
      ],
      color: "from-green-400 to-emerald-500",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techStack.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`relative bg-gradient-to-br ${category.color} p-1 rounded-2xl`}>
              <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 h-full">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-3 rounded-full bg-gray-800/80 border border-white/10">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white ml-3">{category.category}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      onHoverStart={() => setHoveredTech(skill.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-gray-300">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-800/80 rounded-full h-3 mb-2 overflow-hidden border border-white/5">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>

                      {/* Description */}
                      <motion.p
                        className="text-sm text-gray-400"
                        animate={{
                          opacity: hoveredTech === skill.name ? 1 : 0.7,
                          y: hoveredTech === skill.name ? 0 : 5,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.description}
                      </motion.p>

                      {/* Subtle glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg opacity-0 blur-xl`}
                        animate={{
                          opacity: hoveredTech === skill.name ? 0.2 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Code Stats */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-1 rounded-2xl inline-block">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl px-12 py-8">
            <div className="flex items-center justify-center gap-4">
              <Code size={40} className="text-indigo-400" />
              <motion.div
                className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                70,000+
              </motion.div>
            </div>
            <p className="text-xl text-gray-300 mt-2">Lines of Production Code</p>
            <p className="text-sm text-gray-500 mt-2">Self-taught • Production-ready • Enterprise-level</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
