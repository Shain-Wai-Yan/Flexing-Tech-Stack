"use client"

import { useEffect, useState } from "react"

export function MarketingMetrics() {
  const [metrics, setMetrics] = useState({
    roi: 0,
    conversions: 0,
    reach: 0,
    engagement: 0,
  })

  const targetMetrics = {
    roi: 340,
    conversions: 89,
    reach: 2500000,
    engagement: 12.8,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        roi: Math.min(prev.roi + 5, targetMetrics.roi),
        conversions: Math.min(prev.conversions + 1, targetMetrics.conversions),
        reach: Math.min(prev.reach + 50000, targetMetrics.reach),
        engagement: Math.min(prev.engagement + 0.2, targetMetrics.engagement),
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          label: "Average ROI",
          value: `${metrics.roi}%`,
          icon: "📈",
          color: "from-green-400 to-emerald-600",
          description: "Return on marketing investment",
        },
        {
          label: "Conversion Rate",
          value: `${metrics.conversions}%`,
          icon: "🎯",
          color: "from-blue-400 to-cyan-600",
          description: "Average campaign conversion",
        },
        {
          label: "Total Reach",
          value: formatNumber(metrics.reach),
          icon: "🌍",
          color: "from-purple-400 to-pink-600",
          description: "People reached across campaigns",
        },
        {
          label: "Engagement Rate",
          value: `${metrics.engagement.toFixed(1)}%`,
          icon: "❤️",
          color: "from-orange-400 to-red-600",
          description: "Average social engagement",
        },
      ].map((metric, index) => (
        <div key={metric.label} className="relative group" style={{ animationDelay: `${index * 0.2}s` }}>
          <div
            className={`relative p-8 rounded-2xl bg-gradient-to-br ${metric.color} transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-lg font-bold text-white mb-2">{metric.label}</div>
              <div className="text-sm text-white/80">{metric.description}</div>
            </div>

            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
