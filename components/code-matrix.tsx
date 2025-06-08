"use client"

import { useEffect, useRef, useState } from "react"

export function CodeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const codeSnippets = [
      "const magic = () => reality.bend()",
      "while(sleeping) { dream.code() }",
      "if(impossible) { makeItPossible() }",
      "function createUniverse() { return new BigBang() }",
      "const coffee = fuel.for(developer)",
      "try { changeWorld() } catch(e) { tryAgain() }",
      "const bug = feature.inDisguise()",
      "while(true) { learn.adapt.overcome() }",
    ]

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00FF00"
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

    let animationId: number
    if (isActive) {
      const animate = () => {
        draw()
        animationId = requestAnimationFrame(animate)
      }
      animate()
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isActive])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-96 bg-black border border-green-500 rounded-lg"
        onClick={() => setIsActive(!isActive)}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <button
          className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors pointer-events-auto"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "EXIT MATRIX" : "ENTER MATRIX"}
        </button>
      </div>
    </div>
  )
}
