"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { GlowingText } from "./glowing-text"

export function ContactPortal() {
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
      name: "Website",
      value: "shainwaiyan.com",
      icon: "🌐",
      color: "from-green-400 to-emerald-500",
      href: "https://shainwaiyan.com",
    },
    {
      name: "GitHub",
      value: "Shain-Wai-Yan",
      icon: "🚀",
      color: "from-purple-400 to-indigo-500",
      href: "https://github.com/Shain-Wai-Yan",
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
        <GlowingText
          text="LET'S CREATE SOMETHING AMAZING"
          className="text-5xl md:text-7xl font-black mb-8"
          glowColor="rgb(139, 92, 246)"
        />
        <p className="text-xl text-purple-300 max-w-3xl mx-auto">
          Ready to hire someone who thinks differently, builds beautifully, and executes flawlessly?
        </p>
      </motion.div>

      {/* Contact Grid */}
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
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className={`relative bg-gradient-to-br ${contact.color} p-1 rounded-2xl`}>
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 text-center h-full">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    scale: hoveredContact === contact.name ? 1.2 : 1,
                    rotate: hoveredContact === contact.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                <p className="text-gray-300 text-sm break-all">{contact.value}</p>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} rounded-2xl opacity-0 blur-xl`}
                  animate={{
                    opacity: hoveredContact === contact.name ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
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
            className="relative group px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-full font-bold text-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">HIRE ME NOW</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

          <motion.button
            className="relative group px-12 py-6 border-2 border-purple-400 rounded-full font-bold text-2xl text-purple-400 hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">VIEW RESUME</span>
            <motion.div
              className="absolute inset-0 bg-purple-400 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <motion.p
          className="mt-12 text-lg text-gray-400 max-w-4xl mx-auto"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          💡 <strong>Fun Fact:</strong> This entire portfolio was built to demonstrate what happens when literature
          meets code, strategy meets execution, and creativity meets technology.
          <br />
          <span className="text-purple-300">
            If you're impressed by this page, imagine what I can do for your brand.
          </span>
        </motion.p>
      </motion.div>
    </div>
  )
}
