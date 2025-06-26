"use client"

import { useEffect, useState } from "react"

export default function GlitchCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transition: "all 0.1s ease-out",
        }}
      />
      <div
        className="fixed w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-50"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transition: "all 0.15s ease-out",
        }}
      />
    </>
  )
}
