"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Key, Send, Terminal, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", color: "text-gray-400 hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "text-blue-400 hover:text-blue-300" },
  { name: "Email", icon: Mail, url: "mailto:contact@example.com", color: "text-green-400 hover:text-green-300" },
]

const recentActivity = [
  { action: "Pushed to", repo: "vulnerability-scanner", time: "2 hours ago", type: "commit" },
  { action: "Found bug in", repo: "web-app-security", time: "5 hours ago", type: "bug" },
  { action: "Completed CTF", repo: "hackthebox-writeups", time: "1 day ago", type: "ctf" },
  { action: "Published", repo: "security-research", time: "3 days ago", type: "research" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your systems or build something amazing together?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <Terminal className="mr-3" />
                Secure Contact Form
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-400" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-black/40 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black/40 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 resize-none"
                      placeholder="Tell me about your project or security needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Encrypting & Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2" size={16} />
                        Send Secure Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* GPG Key */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6"
            >
              <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center">
                <Key className="mr-2" size={20} />
                Secure Communication
              </h4>
              <p className="text-gray-300 text-sm mb-3">For sensitive communications, use my GPG public key:</p>
              <div className="bg-black/60 rounded-lg p-3 font-mono text-xs text-green-400 break-all">
                4096R/DEADBEEF 2023-01-01 [expires: 2025-01-01]
              </div>
              <Button
                size="sm"
                variant="outline"
                className="mt-3 bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30"
              >
                Download GPG Key
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links & Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Connect With Me</h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center p-4 bg-black/40 rounded-xl border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 ${link.color}`}
                    >
                      <Icon size={24} className="mr-4" />
                      <div>
                        <div className="font-semibold">{link.name}</div>
                        <div className="text-sm text-gray-400">
                          {link.name === "GitHub"
                            ? "@cybersec-expert"
                            : link.name === "LinkedIn"
                              ? "Cybersecurity Professional"
                              : "contact@cybersec-expert.com"}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <Activity className="mr-3" />
                Recent Activity
              </h3>

              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-black/40 rounded-lg border border-gray-500/20"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        activity.type === "commit"
                          ? "bg-green-400"
                          : activity.type === "bug"
                            ? "bg-red-400"
                            : activity.type === "ctf"
                              ? "bg-yellow-400"
                              : "bg-blue-400"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="text-sm text-white">
                        {activity.action} <span className="text-cyan-400 font-mono">{activity.repo}</span>
                      </div>
                      <div className="text-xs text-gray-400">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
