"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Flag, Target, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const ctfWins = [
  {
    name: "DEF CON CTF 2023",
    position: "3rd Place",
    team: "CyberNinjas",
    points: 8945,
    date: "2023-08-12",
    category: "International",
    challenges: ["Web Exploitation", "Reverse Engineering", "Cryptography"],
  },
  {
    name: "PicoCTF 2023",
    position: "1st Place",
    team: "Solo",
    points: 12340,
    date: "2023-03-28",
    category: "Educational",
    challenges: ["Binary Exploitation", "Forensics", "Web Security"],
  },
  {
    name: "HackTheBox University CTF",
    position: "2nd Place",
    team: "SecureCoders",
    points: 7650,
    date: "2023-12-15",
    category: "University",
    challenges: ["Active Directory", "Web Apps", "OSINT"],
  },
]

const achievements = [
  {
    title: "Bug Bounty Hunter",
    description: "Found 50+ vulnerabilities across major platforms",
    icon: Target,
    color: "text-red-400",
    count: "50+",
  },
  {
    title: "CVE Contributor",
    description: "Published security research and vulnerability disclosures",
    icon: Flag,
    color: "text-green-400",
    count: "12",
  },
  {
    title: "CTF Champion",
    description: "Won multiple Capture The Flag competitions",
    icon: Trophy,
    color: "text-yellow-400",
    count: "47",
  },
  {
    title: "Security Mentor",
    description: "Trained 100+ students in cybersecurity",
    icon: Users,
    color: "text-blue-400",
    count: "100+",
  },
]

const recentFlags = [
  { challenge: "SQL Injection Bypass", flag: "flag{sql_1nj3ct10n_m4st3r}", points: 500, time: "2 hours ago" },
  { challenge: "Buffer Overflow", flag: "flag{buff3r_0v3rfl0w_pwn3d}", points: 750, time: "5 hours ago" },
  { challenge: "XSS Filter Bypass", flag: "flag{xss_f1lt3r_byp4ss3d}", points: 400, time: "1 day ago" },
  { challenge: "Privilege Escalation", flag: "flag{r00t_4cc3ss_gr4nt3d}", points: 1000, time: "2 days ago" },
]

export default function CTFSection() {
  const [selectedCTF, setSelectedCTF] = useState(0)
  const [showFlags, setShowFlags] = useState(false)

  return (
    <section id="ctf" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            CTF & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competitive cybersecurity achievements and capture the flag victories
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <Icon
                    className={`${achievement.color} mx-auto group-hover:scale-110 transition-transform`}
                    size={48}
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {achievement.count}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTF Competitions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* CTF List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Trophy className="mr-3" />
              Recent CTF Victories
            </h3>

            {ctfWins.map((ctf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCTF(index)}
                className={`bg-black/40 backdrop-blur-md border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  selectedCTF === index
                    ? "border-yellow-500/40 bg-yellow-500/10"
                    : "border-yellow-500/20 hover:border-yellow-500/30"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">{ctf.name}</h4>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-bold ${
                      ctf.position.includes("1st")
                        ? "bg-yellow-500/20 text-yellow-400"
                        : ctf.position.includes("2nd")
                          ? "bg-gray-500/20 text-gray-400"
                          : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {ctf.position}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Team: </span>
                    <span className="text-cyan-300">{ctf.team}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Points: </span>
                    <span className="text-green-400">{ctf.points.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTF Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">{ctfWins[selectedCTF].name}</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                {new Date(ctfWins[selectedCTF].date).toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-yellow-400 font-bold text-lg">{ctfWins[selectedCTF].position}</div>
                  <div className="text-gray-400 text-sm">Final Position</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-lg">{ctfWins[selectedCTF].points.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Total Points</div>
                </div>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Challenge Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {ctfWins[selectedCTF].challenges.map((challenge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-md border border-cyan-500/30"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowFlags(!showFlags)}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold hover:from-yellow-600 hover:to-orange-600"
            >
              <Flag className="mr-2" size={16} />
              {showFlags ? "Hide" : "Show"} Recent Flags
            </Button>
          </motion.div>
        </div>

        {/* Recent Flags */}
        {showFlags && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/60 backdrop-blur-md border border-green-500/30 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <Flag className="mr-3" />
              Recent Flag Captures
            </h3>

            <div className="space-y-3">
              {recentFlags.map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-black/40 rounded-lg p-4 border border-green-500/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{flag.challenge}</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-yellow-400 font-bold">+{flag.points} pts</span>
                      <span className="text-gray-400">{flag.time}</span>
                    </div>
                  </div>
                  <div className="font-mono text-green-400 bg-black/40 rounded px-3 py-2 text-sm">{flag.flag}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
