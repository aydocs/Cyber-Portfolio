"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Shield, Code, Trophy, Mail, User } from "lucide-react"

const navItems = [
  { id: "hero", label: "Home", icon: Terminal },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Shield },
  { id: "ctf", label: "CTF", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 shadow-2xl">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 group ${
                  isActive ? "bg-cyan-500/20 text-cyan-400" : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-cyan-400 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
