"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Hi there! 👋 Ask me anything about my skills or experience!", sender: "bot" },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: message, sender: "user" }])

    // Simulate bot response
    setTimeout(() => {
      let response = "Thanks for your message! I'll get back to you soon."

      if (message.toLowerCase().includes("experience")) {
        response =
          "I have experience in marketing, branding, and web development. Check out my projects section for more details!"
      } else if (message.toLowerCase().includes("skill")) {
        response =
          "My skills include digital marketing, content strategy, HTML/CSS/JS, and more. I'm always learning new things!"
      } else if (message.toLowerCase().includes("contact") || message.toLowerCase().includes("hire")) {
        response =
          "You can contact me at mail@shainwaiyan.com or through LinkedIn. Looking forward to hearing from you!"
      }

      setMessages((prev) => [...prev, { text: response, sender: "bot" }])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Ask Me Anything</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 mr-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage()
                }}
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
