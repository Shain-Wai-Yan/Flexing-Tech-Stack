"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GradientHeading } from "./gradient-heading";
import {
  Mail,
  Linkedin,
  Globe,
  Github,
  Download,
  FileText,
} from "lucide-react";

export function ContactSection() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contacts = [
    {
      name: "Email",
      value: "mail@shainwaiyan.com",
      icon: <Mail size={28} />,
      color: "from-red-400 to-pink-500",
      href: "mailto:mail@shainwaiyan.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/shainwaiyan",
      icon: <Linkedin size={28} />,
      color: "from-blue-400 to-cyan-500",
      href: "https://linkedin.com/in/shainwaiyan",
    },
    {
      name: "Website",
      value: "shainwaiyan.com",
      icon: <Globe size={28} />,
      color: "from-green-400 to-emerald-500",
      href: "https://shainwaiyan.com",
    },
    {
      name: "GitHub",
      value: "Shain-Wai-Yan",
      icon: <Github size={28} />,
      color: "from-purple-400 to-indigo-500",
      href: "https://github.com/Shain-Wai-Yan",
    },
  ];

  return (
    <div className="container mx-auto px-8">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <GradientHeading
          text="LET'S CREATE SOMETHING AMAZING"
          className="text-5xl md:text-7xl font-black mb-8"
          fromColor="rgb(79, 70, 229)"
          toColor="rgb(16, 185, 129)"
        />
        <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
          Ready to hire someone who thinks differently, builds beautifully, and
          executes flawlessly?
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
            <div
              className={`relative bg-gradient-to-br ${contact.color} p-1 rounded-2xl`}
            >
              <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 text-center h-full">
                <motion.div
                  className="flex justify-center mb-4 text-white"
                  animate={{
                    scale: hoveredContact === contact.name ? 1.2 : 1,
                    rotate: hoveredContact === contact.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {contact.name}
                </h3>
                <p className="text-gray-300 text-sm break-all">
                  {contact.value}
                </p>

                {/* Subtle glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} rounded-2xl opacity-0 blur-xl`}
                  animate={{
                    opacity: hoveredContact === contact.name ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Call to Action with Resume Download */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            className="relative group px-12 py-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 rounded-full font-bold text-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">HIRE ME NOW</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

          {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf"
            download="Shain_Wai_Yan_Resume.pdf"
            className="relative group px-12 py-6 border-2 border-indigo-400 rounded-full font-bold text-2xl text-indigo-400 hover:text-black transition-colors flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download size={24} />
              DOWNLOAD RESUME
            </span>
            <motion.div
              className="absolute inset-0 bg-indigo-400 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Additional Resume Options */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FileText size={18} />
            View Resume
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Shain_Wai_Yan_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Download size={18} />
            Download PDF
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-12 text-lg text-gray-400 max-w-4xl mx-auto"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-indigo-400 font-semibold">
            70,000+ lines of code.
          </span>{" "}
          This entire portfolio was built to demonstrate what happens when
          literature meets code, strategy meets execution, and creativity meets
          technology.
          <br />
          <span className="text-emerald-400">
            If you're impressed by this page, imagine what I can do for your
            brand.
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
