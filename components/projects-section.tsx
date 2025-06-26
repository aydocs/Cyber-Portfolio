"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Code, Github, FileText, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const cybersecProjects = [
  {
    title: "Enterprise Network Penetration Test",
    description: "Comprehensive security assessment of Fortune 500 company infrastructure",
    tech: ["Nmap", "Burp Suite", "Metasploit", "Custom Scripts"],
    findings: "23 Critical, 45 High, 67 Medium vulnerabilities",
    impact: "Prevented potential $2M+ data breach",
    type: "pentest",
  },
  {
    title: "Web Application Security Audit",
    description: "OWASP Top 10 analysis and custom vulnerability research",
    tech: ["OWASP ZAP", "SQLMap", "Custom Fuzzing Tools"],
    findings: "SQL Injection, XSS, CSRF vulnerabilities discovered",
    impact: "Secured 100K+ user accounts",
    type: "webapp",
  },
  {
    title: "IoT Device Security Research",
    description: "Firmware analysis and hardware hacking of smart devices",
    tech: ["Binwalk", "Ghidra", "Hardware Tools", "UART/JTAG"],
    findings: "Multiple 0-day vulnerabilities found",
    impact: "CVE-2023-XXXX published",
    type: "research",
  },
]

const webdevProjects = [
  {
    title: "SecureChat - Encrypted Messaging Platform",
    description: "End-to-end encrypted chat application with zero-knowledge architecture",
    tech: ["React", "Node.js", "WebRTC", "Cryptography"],
    demo: "https://securechat.demo",
    github: "https://github.com/user/securechat",
    features: ["E2E Encryption", "Perfect Forward Secrecy", "Self-Destructing Messages"],
  },
  {
    title: "VulnTracker - Security Management Dashboard",
    description: "Real-time vulnerability tracking and remediation platform",
    tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    demo: "https://vulntracker.demo",
    github: "https://github.com/user/vulntracker",
    features: ["Real-time Scanning", "Risk Assessment", "Automated Reporting"],
  },
  {
    title: "CyberLab - Interactive Security Training",
    description: "Gamified cybersecurity training platform with virtual labs",
    tech: ["Next.js", "Docker", "Kubernetes", "WebAssembly"],
    demo: "https://cyberlab.demo",
    github: "https://github.com/user/cyberlab",
    features: ["Virtual Environments", "Progress Tracking", "Certification System"],
  },
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"cybersec" | "webdev">("cybersec")

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Securing systems and building innovative solutions</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-2 flex">
            <Button
              onClick={() => setActiveTab("cybersec")}
              variant={activeTab === "cybersec" ? "default" : "ghost"}
              className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                activeTab === "cybersec"
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Shield className="mr-2" size={20} />
              Cybersecurity Projects
            </Button>
            <Button
              onClick={() => setActiveTab("webdev")}
              variant={activeTab === "webdev" ? "default" : "ghost"}
              className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                activeTab === "webdev"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Code className="mr-2" size={20} />
              Web Dev Projects
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "cybersec" ? cybersecProjects : webdevProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative"
            >
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                {/* Glitch effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-md border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project specific info */}
                  {activeTab === "cybersec" ? (
                    <div className="space-y-2 mb-6">
                      <div className="text-sm">
                        <span className="text-red-400 font-semibold">Findings: </span>
                        <span className="text-gray-300">{(project as any).findings}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-green-400 font-semibold">Impact: </span>
                        <span className="text-gray-300">{(project as any).impact}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-gray-300">
                        <span className="text-blue-400 font-semibold">Features:</span>
                      </div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {(project as any).features.map((feature: string, fIndex: number) => (
                          <li key={fIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {activeTab === "cybersec" ? (
                      <Button
                        size="sm"
                        className="bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:text-white"
                      >
                        <FileText size={16} className="mr-2" />
                        Report
                      </Button>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          className="bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 hover:text-white"
                        >
                          <Play size={16} className="mr-2" />
                          Demo
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gray-500/20 text-gray-400 border border-gray-500/30 hover:bg-gray-500/30 hover:text-white"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
