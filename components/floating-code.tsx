"use client"

import { useEffect, useState } from "react"

export function FloatingCode() {
  const [codeBlocks, setCodeBlocks] = useState<
    Array<{
      id: number
      code: string
      x: number
      y: number
      opacity: number
    }>
  >([])

  const codeSnippets = [
    "const magic = await reality.bend()",
    "function impossible() { return possible }",
    "while(dreaming) { code.create() }",
    "const universe = new BigBang()",
    "if(bug) { feature = true }",
    "try { world.change() } catch { retry() }",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeBlocks((prev) => {
        const newBlock = {
          id: Date.now(),
          code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: 0.7,
        }

        return [...prev.slice(-5), newBlock]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {codeBlocks.map((block) => (
        <div
          key={block.id}
          className="absolute text-cyan-400 font-mono text-sm animate-pulse"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            opacity: block.opacity,
            animation: "float 10s linear infinite",
          }}
        >
          {block.code}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
