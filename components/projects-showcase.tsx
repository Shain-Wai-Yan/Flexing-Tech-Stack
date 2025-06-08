"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState("loop")

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
        Projects That Prove It
      </motion.h2>

      <Tabs defaultValue="loop" className="w-full" onValueChange={setActiveTab}>
        <motion.div className="flex justify-center mb-8" variants={item}>
          <TabsList className="bg-gray-100 dark:bg-gray-800">
            <TabsTrigger
              value="loop"
              className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300"
            >
              Loop Library
            </TabsTrigger>
            <TabsTrigger
              value="studio"
              className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300"
            >
              Shain Studio
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="loop">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeTab === "loop" ? 1 : 0, y: activeTab === "loop" ? 0 : 20 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">💡</div>
              <h3 className="text-2xl font-bold">Loop Library — Circular Economy Startup (3rd Prize Winner)</h3>
            </div>

            <div className="mb-6">
              <Badge className="bg-green-500 hover:bg-green-600 mb-2">Competition Winner</Badge>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Winner of 3rd place in Myanmar's national circular economy business competition (hosted by Strategy
                First University + RIT, with 70+ teams and 800+ participants).
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Built the entire mock website solo:{" "}
                <a
                  href="https://looplibrary.shainwaiyan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  looplibrary.shainwaiyan.com
                </a>
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2">Concept:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                A book-sharing app with bicycle delivery, dual-revenue model, and green-first operations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Role:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Strategy, concept, brand, UX/UI, business model, pitch, prototype.
              </p>
            </div>

            <div className="mt-6">
              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="studio">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeTab === "studio" ? 1 : 0, y: activeTab === "studio" ? 0 : 20 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">🧠</div>
              <h3 className="text-2xl font-bold">Shain Studio (Personal Web System)</h3>
            </div>

            <div className="mb-6">
              <Badge className="bg-blue-500 hover:bg-blue-600 mb-2">Full-Stack Project</Badge>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A bilingual, SEO-perfect full-stack website with 11 pages per language — powered by handwritten
                HTML/CSS/JS, Cloudflare Workers, SSR, GitHub API, and a CMS system using Strapi + NeonDB + Cloudinary.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2">Features:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Real-time YouTube + GitHub profile feeds</li>
                <li>Dynamic blog with tags, categories, search</li>
                <li>Pinterest-style masonry gallery</li>
                <li>Integrated PDF viewer, sitemap generator</li>
                <li>Server-side rendering just for bots (via Workers)</li>
                <li>100/100 SEO score on all major pages</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.a
                href="https://shainwaiyan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website
              </motion.a>
              <motion.a
                href="https://github.com/Shain-Wai-Yan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub Projects
              </motion.a>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
