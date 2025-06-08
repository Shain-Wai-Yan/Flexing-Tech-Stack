"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function HologramContact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  const contacts = [
    {
      name: "Email",
      value: "mail@shainwaiyan.com",
      icon: "📧",
      color: "from-red-400 to-pink-500",
      href: "mailto:mail@shainwaiyan.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/shainwaiyan",
      icon: "💼",
      color: "from-blue-400 to-cyan-500",
      href: "https://linkedin.com/in/shainwaiyan",
    },
    {
      name: "GitHub",
      value: "Shain-Wai-Yan",
      icon: "🚀",
      color: "from-gray-600 to-gray-800",
      href: "https://github.com/Shain-Wai-Yan",
    },
    {
      name: "Weibo",
      value: "Social Media",
      icon: "🌐",
      color: "from-orange-400 to-red-500",
      href: "#",
    },
  ]

  return (
    <div className="container mx-auto px-8">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          INITIATE CONTACT PROTOCOL
        </motion.h2>
        <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
          Ready to harness AI-powered marketing for your brand? Let's connect across dimensions.
        </p>
      </motion.div>

      {/* Holographic Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
            onHoverStart={() => setHoveredContact(contact.name)}
            onHoverEnd={() => setHoveredContact(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Holographic Frame */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-cyan-400/30"
              animate={{
                boxShadow:
                  hoveredContact === contact.name
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
            <div className={`relative bg-gradient-to-br ${contact.color} p-1 rounded-2xl overflow-hidden`}>
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 text-center">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotateY: hoveredContact === contact.name ? 360 : 0,
                    scale: hoveredContact === contact.name ? 1.2 : 1,
                  }}
                  transition={{ duration: 1 }}
                >
                  {contact.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>

                {/* Value */}
                <p className="text-cyan-300 text-sm break-all">{contact.value}</p>

                {/* Holographic Scanlines */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-0 right-0 h-px bg-cyan-400/30"
                      style={{ top: `${20 + i * 20}%` }}
                      animate={{
                        opacity: hoveredContact === contact.name ? [0, 1, 0] : 0,
                        scaleX: hoveredContact === contact.name ? [0, 1, 0] : 0,
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
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: hoveredContact === contact.name ? [0, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            className="relative group px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-bold text-2xl overflow-hidden"
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">HIRE ME NOW</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

          <motion.button
            className="relative group px-12 py-6 border-2 border-cyan-400 rounded-full font-bold text-2xl text-cyan-400 hover:text-black transition-colors"
            whileHover={{ scale: 1.1, rotateZ: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">DOWNLOAD RESUME</span>
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <motion.p
          className="mt-8 text-lg text-gray-400"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          💬 Want to see more AI magic? This entire page was crafted to showcase what's possible when creativity meets
          technology.
        </motion.p>
      </motion.div>
    </div>
  )
}
