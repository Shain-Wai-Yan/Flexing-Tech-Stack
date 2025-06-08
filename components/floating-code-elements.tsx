"use client"

import { useEffect, useRef } from "react"

export function FloatingCodeElements() {
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

    // More visible code snippets, marketing terms, and binary
    const elements: Array<{
      x: number
      y: number
      vx: number
      vy: number
      content: string
      type: "code" | "marketing" | "binary" | "symbol"
      opacity: number
      size: number
      life: number
      maxLife: number
      pulsePhase: number
    }> = []

    const codeSnippets = [
      "const innovation = () => {}",
      "function strategy()",
      "class Excellence",
      "export success",
      "async build()",
      "return results",
      "=> impact",
      "{ creativity }",
      "[ solutions ]",
      "performance++",
      "optimize()",
      "scale()",
      "deploy()",
      "execute()",
    ]

    const marketingTerms = [
      "ROI",
      "Growth",
      "Strategy",
      "Brand",
      "Impact",
      "Results",
      "Innovation",
      "Excellence",
      "Performance",
      "Conversion",
      "Engagement",
      "Analytics",
      "Campaign",
      "Metrics",
    ]

    const binarySnippets = [
      "01001000", // H
      "01100101", // e
      "01101100", // l
      "01101100", // l
      "01101111", // o
      "01010111", // W
      "01101111", // o
      "01110010", // r
      "01101100", // l
      "01100100", // d
      "01000001", // A
      "01001001", // I
      "01000011", // C
      "01001111", // O
      "01000100", // D
      "01000101", // E
    ]

    const symbols = ["→", "↗", "⚡", "◆", "▲", "●", "■", "✦", "※", "◊", "⟨", "⟩", "∞", "△"]

    // Create more visible floating elements
    for (let i = 0; i < 45; i++) {
      const rand = Math.random()
      let type: "code" | "marketing" | "binary" | "symbol"
      let content = ""

      if (rand < 0.3) {
        type = "code"
        content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      } else if (rand < 0.5) {
        type = "marketing"
        content = marketingTerms[Math.floor(Math.random() * marketingTerms.length)]
      } else if (rand < 0.75) {
        type = "binary"
        content = binarySnippets[Math.floor(Math.random() * binarySnippets.length)]
      } else {
        type = "symbol"
        content = symbols[Math.floor(Math.random() * symbols.length)]
      }

      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        content,
        type,
        opacity: Math.random() * 0.25 + 0.15, // Much more visible
        size: type === "symbol" ? 18 : type === "marketing" ? 16 : type === "binary" ? 13 : 12,
        life: 0,
        maxLife: Math.random() * 2000 + 3000,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.02

      elements.forEach((element) => {
        // Update position
        element.x += element.vx
        element.y += element.vy
        element.life++
        element.pulsePhase += 0.02

        // Boundary wrapping
        if (element.x < -150) element.x = canvas.width + 150
        if (element.x > canvas.width + 150) element.x = -150
        if (element.y < -100) element.y = canvas.height + 100
        if (element.y > canvas.height + 100) element.y = -100

        // Enhanced visibility with pulsing
        const lifeFactor = 1 - (element.life / element.maxLife) * 0.3 // Less fade
        const pulse = Math.sin(element.pulsePhase) * 0.2 + 0.8
        const currentOpacity = element.opacity * lifeFactor * pulse

        // Draw element with better visibility
        ctx.font = `${element.size}px ${element.type === "code" || element.type === "binary" ? "monospace" : "sans-serif"}`
        ctx.fontWeight = element.type === "marketing" ? "bold" : "normal"

        // Add subtle glow effect
        ctx.shadowBlur = 8
        ctx.shadowColor =
          element.type === "code"
            ? "#10b981"
            : element.type === "marketing"
              ? "#4f46e5"
              : element.type === "binary"
                ? "#8b5cf6"
                : "#f59e0b"

        if (element.type === "code") {
          ctx.fillStyle = `rgba(16, 185, 129, ${currentOpacity})`
        } else if (element.type === "marketing") {
          ctx.fillStyle = `rgba(79, 70, 229, ${currentOpacity})`
        } else if (element.type === "binary") {
          ctx.fillStyle = `rgba(139, 92, 246, ${currentOpacity})`
        } else {
          ctx.fillStyle = `rgba(245, 158, 11, ${currentOpacity})`
        }

        ctx.textAlign = "center"
        ctx.fillText(element.content, element.x, element.y)

        // Reset shadow
        ctx.shadowBlur = 0

        // Reset element when life expires
        if (element.life >= element.maxLife) {
          element.life = 0
          element.x = Math.random() * canvas.width
          element.y = Math.random() * canvas.height
          element.vx = (Math.random() - 0.5) * 0.3
          element.vy = (Math.random() - 0.5) * 0.3
        }
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
