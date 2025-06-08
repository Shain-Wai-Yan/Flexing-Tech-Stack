"use client"

import { useEffect, useRef } from "react"

export function ConstellationBackground() {
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

    // More visible constellation nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
      opacity: number
      pulsePhase: number
    }> = []

    // Create strategic node placement with better visibility
    const gridCols = Math.floor(canvas.width / 150)
    const gridRows = Math.floor(canvas.height / 150)

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        // Add some organic variation to grid
        const x = (i + 0.5) * (canvas.width / gridCols) + (Math.random() - 0.5) * 50
        const y = (j + 0.5) * (canvas.height / gridRows) + (Math.random() - 0.5) * 50

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          connections: [],
          opacity: Math.random() * 0.4 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    // Create more visible connections
    nodes.forEach((node, i) => {
      const nearby = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y),
        }))
        .filter(({ index, distance }) => index !== i && distance < 180)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3)

      node.connections = nearby.map(({ index }) => index)
    })

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.02

      nodes.forEach((node) => {
        // Gentle movement
        node.x += node.vx
        node.y += node.vy
        node.pulsePhase += 0.03

        // Soft boundaries
        if (node.x < 50 || node.x > canvas.width - 50) node.vx *= -0.8
        if (node.y < 50 || node.y > canvas.height - 50) node.vy *= -0.8

        // Draw more visible connections
        node.connections.forEach((connIndex) => {
          const connectedNode = nodes[connIndex]
          if (!connectedNode) return

          const distance = Math.hypot(node.x - connectedNode.x, node.y - connectedNode.y)
          const baseOpacity = Math.max(0, (180 - distance) / 180) * 0.3
          const pulse = Math.sin(time + distance * 0.01) * 0.2 + 0.8
          const opacity = baseOpacity * pulse

          // Draw main connection line
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()

          // Add subtle glow effect
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity * 0.3})`
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        })

        // Draw more visible nodes with pulsing effect
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7
        const nodeOpacity = node.opacity * pulse

        // Node glow
        ctx.fillStyle = `rgba(79, 70, 229, ${nodeOpacity * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Main node
        ctx.fillStyle = `rgba(79, 70, 229, ${nodeOpacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()

        // Bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity * 0.8})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
