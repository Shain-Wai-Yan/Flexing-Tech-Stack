"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export function InteractiveTerminal() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to Elite Developer Terminal v2.0",
    'Type "help" for available commands',
    "",
  ])
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "  skills    - Display technical skills",
      "  projects  - Show recent projects",
      "  matrix    - Enter the code matrix",
      "  hack      - Initiate hacking sequence",
      "  clear     - Clear terminal",
      "  whoami    - Display developer info",
    ],
    skills: () => [
      "Technical Skills:",
      "  ████████████████████ React/Next.js (95%)",
      "  ██████████████████   TypeScript (92%)",
      "  ████████████████     Node.js (88%)",
      "  ██████████████       Python (85%)",
      "  ████████████         WebGL/Three.js (80%)",
      "  ██████████           AI/ML (75%)",
    ],
    projects: () => [
      "Recent Projects:",
      "  🚀 Quantum Computing Simulator",
      "  🤖 AI-Powered Code Generator",
      "  🌐 Real-time Collaboration Platform",
      "  🎮 WebGL Game Engine",
      "  📊 Advanced Data Visualization Suite",
    ],
    matrix: () => [
      "Entering the Matrix...",
      "01001000 01100101 01101100 01101100 01101111",
      "01010111 01101111 01110010 01101100 01100100",
      "Reality is just poorly debugged code.",
    ],
    hack: () => [
      "Initiating hacking sequence...",
      "Scanning network... ████████████ 100%",
      "Bypassing firewall... ████████████ 100%",
      "Access granted. Welcome, Neo.",
      "Just kidding! This is just for show 😄",
    ],
    whoami: () => [
      "Elite Developer Profile:",
      "  Name: Code Wizard",
      "  Level: 99",
      "  Specialization: Full-Stack Sorcery",
      "  Superpower: Turning coffee into code",
      "  Status: Available for epic projects",
    ],
    clear: () => [],
  }

  const handleCommand = async (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    if (command === "clear") {
      setOutput([])
    } else if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands]()
      setOutput((prev) => [...prev, `$ ${cmd}`, ...result, ""])
    } else {
      setOutput((prev) => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands', ""])
    }

    setIsTyping(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <div className="bg-black border-2 border-cyan-400 rounded-lg p-6 font-mono text-sm shadow-2xl shadow-cyan-400/20">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-cyan-400">elite-dev@terminal:~$</div>
      </div>

      <div ref={terminalRef} className="h-96 overflow-y-auto mb-4 text-green-400">
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center">
            <span>Processing</span>
            <span className="ml-1 animate-pulse">...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <span className="text-cyan-400 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-green-400 outline-none"
          placeholder="Enter command..."
          autoFocus
        />
      </form>
    </div>
  )
}
