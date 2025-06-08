"use client"

import { useEffect, useRef } from "react"

export function CodeRain() {
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

    // Code snippets from your actual work
    const codeSnippets = [
      "const portfolio = new Experience()",
      "function buildEcosystem() { return magic }",
      "70000+ lines of pure creativity",
      "if(literature + code) { innovation() }",
      "const winner = compete(70teams)",
      "SEO.score = 100/100",
      "while(learning) { build.create.win() }",
      "export default ShainWaiYan",
      "git commit -m 'Changed the game'",
      "npm run build-future",
    ]

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff41"
      ctx.font = "12px monospace"

      for (let i = 0; i < drops.length; i++) {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        const char = snippet[Math.floor(Math.random() * snippet.length)]

        ctx.fillText(char, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />
}
