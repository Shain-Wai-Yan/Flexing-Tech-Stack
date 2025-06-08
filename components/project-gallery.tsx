"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, BookOpen, Trophy, Globe, Layers, BarChart } from "lucide-react"

export function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Loop Library",
      subtitle: "Circular Economy Startup",
      description:
        "3rd place winner out of 70+ teams in Myanmar's national business competition. Led strategy, branding, and built the entire working prototype from concept to execution.",
      achievements: [
        { text: "3rd Place National Winner", icon: <Trophy className="text-amber-400" size={18} /> },
        { text: "Beat 70+ competing teams", icon: <BarChart className="text-blue-400" size={18} /> },
        { text: "Led complete strategy & execution", icon: <Layers className="text-indigo-400" size={18} /> },
        { text: "Built working prototype solo", icon: <Code className="text-emerald-400" size={18} /> },
        { text: "Sustainable business model", icon: <Globe className="text-green-400" size={18} /> },
      ],
      tech: ["Strategy", "Branding", "Prototype", "Pitch"],
      color: "from-green-400 to-emerald-600",
      link: "https://looplibrary.shainwaiyan.com",
    },
    {
      title: "Shain Studio",
      subtitle: "70K+ Lines Full-Stack Ecosystem",
      description:
        "Bilingual, SEO-perfect web ecosystem with 11 pages per language. Handwritten HTML/CSS/JS with Cloudflare Workers, SSR, GitHub API integration, and custom CMS.",
      achievements: [
        { text: "100/100 Google PageSpeed SEO", icon: <BarChart className="text-green-400" size={18} /> },
        { text: "11 pages per language (bilingual)", icon: <Globe className="text-blue-400" size={18} /> },
        { text: "Real-time GitHub/YouTube APIs", icon: <Code className="text-indigo-400" size={18} /> },
        { text: "Custom CMS (Strapi + NeonDB)", icon: <Layers className="text-purple-400" size={18} /> },
        { text: "Responsive + PWA ready", icon: <Globe className="text-pink-400" size={18} /> },
      ],
      tech: ["HTML/CSS/JS", "Cloudflare Workers", "APIs", "SSR", "CMS"],
      color: "from-blue-400 to-cyan-600",
      link: "https://shainwaiyan.com",
    },
    {
      title: "Academic Excellence",
      subtitle: "Literature + Marketing Mastery",
      description:
        "English Literature graduate with Google Digital Marketing Certificate and 92/100 score in Marketing & Brand Management Diploma. Proof that creativity and strategy unite.",
      achievements: [
        { text: "English Literature Graduate", icon: <BookOpen className="text-amber-400" size={18} /> },
        { text: "Google Digital Marketing Certified", icon: <Trophy className="text-blue-400" size={18} /> },
        { text: "92/100 Branding Assessment Score", icon: <BarChart className="text-green-400" size={18} /> },
        { text: "Strategy First University Diploma", icon: <BookOpen className="text-indigo-400" size={18} /> },
        { text: "Self-taught technical skills", icon: <Code className="text-purple-400" size={18} /> },
      ],
      tech: ["Literature", "Marketing", "Branding", "Strategy", "Self-Learning"],
      color: "from-purple-400 to-pink-600",
      link: "#",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Project Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {projects.map((project, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveProject(index)}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              activeProject === index
                ? `bg-gradient-to-r ${project.color} text-white scale-110`
                : "bg-gray-800/50 text-white/70 hover:bg-gray-800/80"
            }`}
            whileHover={{ scale: activeProject === index ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.title}
          </motion.button>
        ))}
      </div>

      {/* Active Project Display */}
      <motion.div
        key={activeProject}
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`relative bg-gradient-to-br ${projects[activeProject].color} p-1 rounded-3xl`}>
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <motion.h3
                  className="text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {projects[activeProject].title}
                </motion.h3>

                <motion.p
                  className="text-xl text-gray-300 mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {projects[activeProject].subtitle}
                </motion.p>

                <motion.p
                  className="text-gray-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[activeProject].description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {projects[activeProject].tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-white border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Button */}
                {projects[activeProject].link !== "#" && (
                  <motion.a
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    View Project →
                  </motion.a>
                )}
              </div>

              {/* Achievements */}
              <div>
                <motion.h4
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Key Achievements
                </motion.h4>

                <div className="space-y-4">
                  {projects[activeProject].achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-white/5"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + achievementIndex * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                    >
                      <span>{achievement.icon}</span>
                      <span className="text-gray-200">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
