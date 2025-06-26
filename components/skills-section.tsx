"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Shield, Code, Database, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Penetration Testing",
    icon: Shield,
    color: "text-red-400",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-500/40",
    skills: [
      { name: "Burp Suite", level: 95 },
      { name: "Metasploit", level: 90 },
      { name: "Nmap", level: 95 },
      { name: "Wireshark", level: 85 },
      { name: "OWASP ZAP", level: 88 },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Node.js", level: 92 },
      { name: "Laravel", level: 85 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-green-400",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/40",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 88 },
      { name: "Terraform", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/40",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "SQLite", level: 88 },
      { name: "MySQL", level: 85 },
    ],
  },
]

const hackingTools = [
  "Burp Suite",
  "Metasploit",
  "Nmap",
  "Wireshark",
  "OWASP ZAP",
  "SQLMap",
  "Nikto",
  "Hydra",
  "John the Ripper",
  "Hashcat",
  "Aircrack-ng",
  "Gobuster",
  "Ffuf",
  "Nuclei",
  "Amass",
]

const webTech = [
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Express",
  "Laravel",
  "Django",
  "FastAPI",
  "TypeScript",
  "JavaScript",
  "Python",
  "PHP",
  "Go",
  "Rust",
  "Docker",
  "Kubernetes",
]

// Mock stats (in real app, these would come from APIs)
const stats = {
  hackTheBox: { rank: 1247, points: 8945 },
  tryHackMe: { rank: 892, points: 12340 },
  ctfTime: { rank: 156, points: 2847 },
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [terminalText, setTerminalText] = useState("")
  const [currentToolIndex, setCurrentToolIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const tools = [...hackingTools, ...webTech]
      const currentTool = tools[currentToolIndex]

      if (terminalText.length < currentTool.length) {
        setTerminalText(currentTool.slice(0, terminalText.length + 1))
      } else {
        setTimeout(() => {
          setTerminalText("")
          setCurrentToolIndex((prev) => (prev + 1) % tools.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [terminalText, currentToolIndex])

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Arsenal of tools and technologies for cybersecurity and development
          </p>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/60 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Terminal size={16} />
              <span>skill-scanner</span>
            </div>
          </div>

          <div className="font-mono text-sm">
            <div className="text-green-400 mb-2">
              <span className="text-cyan-400">root@cyberspace</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ which {terminalText}</span>
              <span className="animate-pulse">█</span>
            </div>
            <div className="text-cyan-300">/usr/bin/{terminalText.toLowerCase().replace(/\s+/g, "-")}</div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onClick={() => setActiveCategory(index)}
                className={`bg-black/40 backdrop-blur-md border ${category.borderColor} ${category.hoverColor} rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeCategory === index ? "ring-2 ring-cyan-400/50" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`${category.color} mr-3`} size={24} />
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-1.5 rounded-full bg-gradient-to-r ${
                            category.color.includes("red")
                              ? "from-red-400 to-red-600"
                              : category.color.includes("blue")
                                ? "from-blue-400 to-blue-600"
                                : category.color.includes("green")
                                  ? "from-green-400 to-green-600"
                                  : "from-purple-400 to-purple-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              name: "HackTheBox",
              rank: stats.hackTheBox.rank,
              points: stats.hackTheBox.points,
              color: "text-green-400",
            },
            { name: "TryHackMe", rank: stats.tryHackMe.rank, points: stats.tryHackMe.points, color: "text-red-400" },
            { name: "CTFtime", rank: stats.ctfTime.rank, points: stats.ctfTime.points, color: "text-blue-400" },
          ].map((platform, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
            >
              <h4 className={`text-xl font-bold ${platform.color} mb-2`}>{platform.name}</h4>
              <div className="space-y-2">
                <div>
                  <div className="text-2xl font-bold text-white">#{platform.rank}</div>
                  <div className="text-sm text-gray-400">Global Rank</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-cyan-300">{platform.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Points</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
