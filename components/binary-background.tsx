"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BinaryBackground() {
  const [binaryStrings, setBinaryStrings] = useState<string[]>([])

  useEffect(() => {
    const generateBinaryString = () => {
      return Array.from({ length: 50 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")
    }

    const strings = Array.from({ length: 20 }, generateBinaryString)
    setBinaryStrings(strings)

    const interval = setInterval(() => {
      setBinaryStrings((prev) => prev.map(() => generateBinaryString()))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {binaryStrings.map((binary, index) => (
        <motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
            ease: "linear",
          }}
          className="absolute text-green-500/20 font-mono text-xs whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${8 + Math.random() * 4}px`,
          }}
        >
          {binary}
        </motion.div>
      ))}
    </div>
  )
}
