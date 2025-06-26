"use client"

import { motion } from "framer-motion"
import { Shield, Award, Code } from "lucide-react"

const certifications = [
  { name: "OSCP", org: "Offensive Security", color: "text-red-400" },
  { name: "CEH", org: "EC-Council", color: "text-blue-400" },
  { name: "eJPT", org: "eLearnSecurity", color: "text-green-400" },
  { name: "CISSP", org: "ISC²", color: "text-purple-400" },
]

const languages = [
  { name: "JavaScript", level: 95, color: "bg-yellow-400" },
  { name: "Python", level: 90, color: "bg-blue-400" },
  { name: "PHP", level: 85, color: "bg-purple-400" },
  { name: "Go", level: 80, color: "bg-cyan-400" },
  { name: "Rust", level: 75, color: "bg-orange-400" },
]

const timeline = [
  { year:"2025", title: "a simple web development and testeblerst", desc: "First penetration test" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "First penetration test" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "Full-stack development" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "Found first critical vulnerability" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "Won multiple competitions" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "Started consulting business" },
  { year: "2025", title: "a simple web development and testeblerst", desc: "Published security research" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Penetrating systems, securing networks, and building the future of web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <Shield className="mr-3" />
              Journey Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-8"
                >
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className="ml-6 bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 flex-1">
                    <div className="text-cyan-400 font-bold">{item.year}</div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Languages */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <Award className="mr-3" />
                Certifications
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-4 text-center hover:border-green-500/40 transition-all duration-300"
                  >
                    <div className={`text-lg font-bold ${cert.color}`}>{cert.name}</div>
                    <div className="text-gray-400 text-sm">{cert.org}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <Code className="mr-3" />
                Programming Languages
              </h3>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-semibold">{lang.name}</span>
                      <span className="text-gray-400">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${lang.color} shadow-lg`}
                        style={{
                          boxShadow: `0 0 10px ${lang.color.replace("bg-", "").replace("-400", "")}`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
