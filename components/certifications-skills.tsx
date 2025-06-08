"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export function CertificationsSkills() {
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

  const certifications = [
    {
      icon: "🎓",
      title: "Diploma in Marketing & Brand Management",
      description: "Strategy First University, 4 Modules — Scored 92/100 on Branding Assessment",
    },
    {
      icon: "📜",
      title: "Google Digital Marketing & E-Commerce Certificate",
      description: "Comprehensive training in digital marketing strategies and e-commerce fundamentals",
    },
  ]

  const skills = [
    { name: "HTML/CSS/JS", level: 90 },
    { name: "Cloudflare Workers", level: 85 },
    { name: "GitHub API", level: 80 },
    { name: "Server-Side Rendering", level: 75 },
    { name: "Strapi CMS", level: 85 },
    { name: "Cloudinary", level: 80 },
  ]

  const softSkills = ["Self-motivated", "Relentless", "Adaptive", "Detail-obsessed"]

  const languages = [
    { name: "Burmese", level: "Native", progress: 100 },
    { name: "English", level: "Advanced reading/writing", progress: 90 },
    { name: "Chinese", level: "HSK4", progress: 70 },
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
        Certifications + Skills
      </motion.h2>

      {/* Certifications */}
      <motion.div className="mb-12 space-y-6" variants={item}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-4">{cert.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Skills */}
      <motion.div className="mb-12" variants={item}>
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="text-2xl mr-2">🧰</span> Tech Stack
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div key={index} className="space-y-2" variants={item}>
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" indicatorClassName="bg-purple-600 dark:bg-purple-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <motion.div variants={item}>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-2xl mr-2">🎨</span> Soft Skills
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div variants={item}>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-2xl mr-2">💬</span> Languages
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            {languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{language.name}</span>
                  <span>{language.level}</span>
                </div>
                <Progress value={language.progress} className="h-2" indicatorClassName="bg-blue-600 dark:bg-blue-500" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
