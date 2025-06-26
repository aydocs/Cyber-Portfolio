"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CTFSection from "@/components/ctf-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import BinaryBackground from "@/components/binary-background"
import GlitchCursor from "@/components/glitch-cursor"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
      <GlitchCursor />
      <BinaryBackground />
      <Navigation />

      <motion.div style={{ opacity }} className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CTFSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}
