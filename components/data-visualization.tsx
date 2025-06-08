"use client"

import { useEffect, useState } from "react"

export function DataVisualization() {
  const [data, setData] = useState<number[]>([])
  const [metrics, setMetrics] = useState({
    performance: 0,
    efficiency: 0,
    innovation: 0,
    impact: 0,
  })

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev, Math.random() * 100].slice(-20)
        return newData
      })

      setMetrics({
        performance: Math.floor(Math.random() * 30) + 70,
        efficiency: Math.floor(Math.random() * 25) + 75,
        innovation: Math.floor(Math.random() * 20) + 80,
        impact: Math.floor(Math.random() * 15) + 85,
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Real-time Chart */}
      <div className="bg-gray-900 p-6 rounded-lg border border-cyan-400">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Performance Metrics</h3>
        <div className="h-48 flex items-end space-x-1">
          {data.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-cyan-500 to-purple-500 transition-all duration-300"
              style={{
                height: `${value}%`,
                width: `${100 / Math.max(data.length, 20)}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="bg-gray-900 p-6 rounded-lg border border-purple-400">
        <h3 className="text-xl font-bold text-purple-400 mb-4">System Status</h3>
        <div className="space-y-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between">
                <span className="capitalize text-white">{key}</span>
                <span className="text-green-400">{value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
