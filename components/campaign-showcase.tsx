"use client"

import { useState } from "react"

export function CampaignShowcase() {
  const [selectedCampaign, setSelectedCampaign] = useState(0)

  const campaigns = [
    {
      title: "E-commerce Growth Campaign",
      description:
        "Increased online sales by 340% through strategic social media marketing and conversion optimization",
      metrics: { roi: "340%", conversions: "+89%", reach: "2.5M" },
      image: "🛒",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Brand Awareness Blitz",
      description: "Built brand recognition from 0 to 50K followers across platforms using viral content strategy",
      metrics: { followers: "50K+", engagement: "12.8%", mentions: "2.3K" },
      image: "🚀",
      color: "from-blue-400 to-cyan-600",
    },
    {
      title: "No-Code SaaS Launch",
      description: "Launched and marketed a SaaS product using only no-code tools, reaching $10K MRR in 3 months",
      metrics: { mrr: "$10K", users: "1.2K", retention: "85%" },
      image: "💻",
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "Influencer Partnership Program",
      description: "Orchestrated micro-influencer campaigns resulting in 500% increase in brand mentions",
      metrics: { mentions: "+500%", reach: "1.8M", cost: "-60%" },
      image: "⭐",
      color: "from-orange-400 to-red-600",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Campaign Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {campaigns.map((campaign, index) => (
          <button
            key={index}
            onClick={() => setSelectedCampaign(index)}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              selectedCampaign === index
                ? `bg-gradient-to-r ${campaign.color} text-white scale-110`
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            <span className="mr-2">{campaign.image}</span>
            {campaign.title}
          </button>
        ))}
      </div>

      {/* Selected Campaign Details */}
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative p-8 rounded-2xl bg-gradient-to-br ${campaigns[selectedCampaign].color} transform transition-all duration-500`}
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{campaigns[selectedCampaign].image}</div>
            <h3 className="text-3xl font-bold text-white mb-4">{campaigns[selectedCampaign].title}</h3>
            <p className="text-lg text-white/90">{campaigns[selectedCampaign].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(campaigns[selectedCampaign].metrics).map(([key, value]) => (
              <div key={key} className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-sm text-white/80 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
