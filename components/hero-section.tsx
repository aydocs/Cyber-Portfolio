"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal, ChevronDown } from "lucide-react"
import TypewriterText from "@/components/typewriter-text"
import HackerAvatar from "@/components/hacker-avatar"

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-green-900/10" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Terminal Window */}
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-cyan-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Terminal size={16} />
                  <span>cyber-terminal</span>
                </div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">
                  <span className="text-cyan-400">root@cyberspace</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ whoami</span>
                </div>

                <div className="text-white mb-4">
                  <TypewriterText text="Cybersecurity Expert & Web Developer" speed={100} className="text-lg" />
                </div>

                <div className="text-green-400 mb-2">
                  <span className="text-cyan-400">root@cyberspace</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ cat motto.txt</span>
                </div>

                <div className="text-cyan-300 mb-4">
                  <TypewriterText text="0xDEADBEEF – Vulnerabilities left behind no more." speed={80} delay={3000} />
                </div>

                <div className="text-green-400">
                  <span className="text-cyan-400">root@cyberspace</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>█</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "CVEs Found", value: "12+" },
                { label: "CTF Wins", value: "47" },
                { label: "Projects", value: "89" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md border border-green-500/20 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <HackerAvatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
