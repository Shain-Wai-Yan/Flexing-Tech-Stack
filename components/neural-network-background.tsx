"use client"

import { useEffect, useRef } from "react"

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
      activity: number
    }> = []

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        activity: Math.random(),
      })
    }

    // Create connections
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes
        .map((otherNode, j) => ({
          node: otherNode,
          index: j,
          distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y),
        }))
        .filter(({ distance, index }) => distance < 150 && index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3)

      node.connections = nearbyNodes.map(({ index }) => index)
    })

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Update activity
        node.activity += (Math.random() - 0.5) * 0.1
        node.activity = Math.max(0, Math.min(1, node.activity))

        // Draw connections
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          if (!connectedNode) return

          const distance = Math.hypot(node.x - connectedNode.x, node.y - connectedNode.y)
          const opacity = Math.max(0, (150 - distance) / 150) * 0.3

          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * node.activity})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()

          // Draw data packets
          if (Math.random() < 0.01) {
            const t = Math.random()
            const packetX = node.x + (connectedNode.x - node.x) * t
            const packetY = node.y + (connectedNode.y - node.y) * t

            ctx.fillStyle = `rgba(255, 0, 255, ${opacity})`
            ctx.beginPath()
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        })

        // Draw node
        const nodeSize = 3 + node.activity * 3
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 + node.activity * 0.4})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw node glow
        ctx.shadowColor = "cyan"
        ctx.shadowBlur = 10
        ctx.fillStyle = `rgba(0, 255, 255, ${node.activity * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
}
