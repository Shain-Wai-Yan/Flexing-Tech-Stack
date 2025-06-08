"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Trophy } from "lucide-react"
import { useState, useEffect } from "react"

interface AchievementNotificationProps {
  type: string
}

export function AchievementNotification({ type }: AchievementNotificationProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const achievements = {
    projects: {
      title: "Project Master",
      description: "You've discovered my award-winning projects!",
      color: "from-yellow-500 to-orange-500",
    },
    skills: {
      title: "Skill Explorer",
      description: "You've uncovered my technical abilities!",
      color: "from-blue-500 to-purple-500",
    },
  }

  const achievement = achievements[type as keyof typeof achievements]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-20 right-4 z-50 max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className={`h-2 bg-gradient-to-r ${achievement.color}`}
              style={{ animation: "shrink 4s linear forwards" }}
            />
            <div className="p-4 flex items-center">
              <div className={`p-2 rounded-full bg-gradient-to-r ${achievement.color} mr-4`}>
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes shrink {
              from {
                width: 100%;
              }
              to {
                width: 0%;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
