"use client"

import { useEffect, useRef } from "react"

export function CircuitLines() {
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

    // Circuit nodes
    const nodes: Array<{
      x: number
      y: number
      connections: number[]
      active: boolean
      pulseTime: number
    }> = []

    // Create grid of nodes
    const gridSize = 150
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Add some randomness to grid positions
        const x = i * gridSize + (Math.random() * gridSize * 0.5 - gridSize * 0.25)
        const y = j * gridSize + (Math.random() * gridSize * 0.5 - gridSize * 0.25)

        nodes.push({
          x,
          y,
          connections: [],
          active: false,
          pulseTime: 0,
        })
      }
    }

    // Create connections between nodes
    nodes.forEach((node, i) => {
      // Find closest nodes
      const closest = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y),
        }))
        .filter(({ index, distance }) => index !== i && distance < gridSize * 1.5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2) // Connect to 2 closest nodes

      node.connections = closest.map(({ index }) => index)
    })

    // Randomly activate nodes
    const activateRandomNode = () => {
      const randomIndex = Math.floor(Math.random() * nodes.length)
      nodes[randomIndex].active = true
      nodes[randomIndex].pulseTime = 0

      setTimeout(activateRandomNode, Math.random() * 2000 + 1000)
    }

    activateRandomNode()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update pulse time for active nodes
        if (node.active) {
          node.pulseTime += 0.02
          if (node.pulseTime >= 1) {
            node.active = false
            node.pulseTime = 0

            // Activate connected nodes
            node.connections.forEach((connIndex) => {
              setTimeout(
                () => {
                  if (nodes[connIndex]) {
                    nodes[connIndex].active = true
                    nodes[connIndex].pulseTime = 0
                  }
                },
                Math.random() * 300 + 100,
              )
            })
          }
        }

        // Draw connections
        node.connections.forEach((connIndex) => {
          const connectedNode = nodes[connIndex]
          if (!connectedNode) return

          // Determine if connection is active
          const isActive = node.active || connectedNode.active
          const pulsePosition = node.active ? node.pulseTime : connectedNode.active ? 1 - connectedNode.pulseTime : 0

          // Draw connection line
          ctx.strokeStyle = isActive ? "rgba(79, 70, 229, 0.6)" : "rgba(79, 70, 229, 0.1)"
          ctx.lineWidth = isActive ? 2 : 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()

          // Draw pulse along connection if active
          if (isActive && pulsePosition > 0 && pulsePosition < 1) {
            const pulseX = node.x + (connectedNode.x - node.x) * pulsePosition
            const pulseY = node.y + (connectedNode.y - node.y) * pulsePosition

            ctx.fillStyle = "rgba(16, 185, 129, 0.8)"
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
            ctx.fill()

            // Pulse glow
            ctx.shadowColor = "rgba(16, 185, 129, 0.8)"
            ctx.shadowBlur = 10
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
            ctx.fill()
            ctx.shadowBlur = 0
          }
        })

        // Draw node
        const nodeColor = node.active ? "rgba(16, 185, 129, 0.8)" : "rgba(79, 70, 229, 0.3)"
        const nodeSize = node.active ? 4 : 3

        ctx.fillStyle = nodeColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Node glow when active
        if (node.active) {
          ctx.shadowColor = "rgba(16, 185, 129, 0.8)"
          ctx.shadowBlur = 15
          ctx.beginPath()
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-15" />
}
