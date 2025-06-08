"use client"

import { useState } from "react"

export function InteractivePortfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built with AI assistance and zero budget using no-code tools",
      tech: ["Webflow", "AI Tools", "Custom CSS"],
      impact: "Landed 5+ client inquiries",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Marketing Automation System",
      description: "Created automated email sequences that increased conversions by 200%",
      tech: ["Zapier", "Mailchimp", "Google Sheets"],
      impact: "200% conversion increase",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Dashboard",
      description: "No-code analytics dashboard for tracking multi-platform performance",
      tech: ["Airtable", "Integromat", "Data Studio"],
      impact: "Saved 10 hours/week",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Lead Generation Funnel",
      description: "Automated lead capture and nurturing system using no-code tools",
      tech: ["Typeform", "ConvertKit", "Calendly"],
      impact: "Generated 500+ leads",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div
            className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.color} transform transition-all duration-300 ${
              hoveredProject === index ? "scale-105 rotate-1" : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-white/90 mb-6">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white/80 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="text-sm font-bold text-white/80 mb-1">Impact:</h4>
                <p className="text-lg font-bold text-white">{project.impact}</p>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div
              className={`absolute inset-0 bg-white/10 rounded-2xl transition-opacity duration-300 ${
                hoveredProject === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
