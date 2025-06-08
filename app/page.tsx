"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ConstellationBackground } from "@/components/constellation-background"
import { FloatingCodeElements } from "@/components/floating-code-elements"
import { SubtleGrid } from "@/components/subtle-grid"
import { ProfessionalFlipCard } from "@/components/professional-flip-card"
import { TechShowcase } from "@/components/tech-showcase"
import { GradientHeading } from "@/components/gradient-heading"
import { ProjectGallery } from "@/components/project-gallery"
import { SkillsVisualization } from "@/components/skills-visualization"
import { ContactSection } from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <ThemeProvider>
      <div ref={containerRef} className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Clean White Background with Constellation */}
        <div className="fixed inset-0 z-0">
          <SubtleGrid />
          <ConstellationBackground />
          <FloatingCodeElements />
        </div>

        {/* Subtle Mouse Interaction */}
        <motion.div
          className="fixed inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(79, 70, 229, 0.03) 0%, 
              rgba(16, 185, 129, 0.02) 25%, 
              transparent 60%)`,
          }}
        />

        {/* Main Content */}
        <main className="relative z-20">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <GradientHeading
                  text="SHAIN WAI YAN"
                  className="text-6xl md:text-8xl font-black mb-6"
                  fromColor="rgb(79, 70, 229)"
                  toColor="rgb(16, 185, 129)"
                />
                <motion.p
                  className="text-2xl md:text-3xl text-indigo-600 mb-8"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Where Literature Meets Code, Strategy Meets Execution
                </motion.p>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  English Literature graduate who codes 70K+ lines, builds full-stack ecosystems, and wins national
                  competitions. This isn't just a portfolio — it's proof that creativity and technology create magic.
                </p>
              </motion.div>

              <ProfessionalFlipCard />
            </div>
          </section>

          {/* Real Achievements Section */}
          <section className="py-32 relative">
            <div className="container mx-auto px-8">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <GradientHeading
                  text="REAL ACHIEVEMENTS"
                  className="text-5xl md:text-7xl font-black mb-8"
                  fromColor="rgb(59, 130, 246)"
                  toColor="rgb(16, 185, 129)"
                />
                <p className="text-xl text-blue-600 max-w-3xl mx-auto">
                  No fake campaigns. No inflated numbers. Just pure execution and results.
                </p>
              </motion.div>

              <ProjectGallery />
            </div>
          </section>

          {/* Technical Mastery */}
          <section className="py-32 relative">
            <div className="container mx-auto px-8">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <GradientHeading
                  text="TECHNICAL MASTERY"
                  className="text-5xl md:text-7xl font-black mb-8"
                  fromColor="rgb(16, 185, 129)"
                  toColor="rgb(59, 130, 246)"
                />
                <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
                  70,000+ lines of code. Self-taught. Production-ready. Enterprise-level.
                </p>
              </motion.div>

              <TechShowcase />
            </div>
          </section>

          {/* Skills Visualization */}
          <section className="py-32 relative">
            <div className="container mx-auto px-8">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <GradientHeading
                  text="SKILL CONSTELLATION"
                  className="text-5xl md:text-7xl font-black mb-8"
                  fromColor="rgb(79, 70, 229)"
                  toColor="rgb(16, 185, 129)"
                />
              </motion.div>

              <SkillsVisualization />
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-32 relative">
            <ContactSection />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}
