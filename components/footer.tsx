"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1500)
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const footerLinks = {
    services: [
      { name: "Private Jets", href: "/flights" },
      { name: "Luxury Cars", href: "/cars" },
      { name: "Elite Villas", href: "/villas" },
      { name: "VIP Nightlife", href: "/nightlife" },
      { name: "Global eSIM", href: "/esim" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Dubai Luxe</h3>
            <p className="text-slate-300 text-lg mb-8">
              Get exclusive offers, travel tips, and luxury experiences delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl focus:bg-white/20 transition-all duration-300"
                  disabled={isLoading || isSubscribed}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || isSubscribed || !email}
                className="h-12 px-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : isSubscribed ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Subscribed
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>

            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 mt-4 font-medium"
              >
                Thank you for subscribing! Check your email for exclusive offers.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DL</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Dubai Luxe
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Experience the pinnacle of luxury travel and lifestyle services in Dubai. From private jets to exclusive
                villas, we curate extraordinary experiences for discerning travelers.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-amber-400" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-amber-400" />
                  <span>concierge@dubailuxe.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 text-amber-400" />
                  <span>Dubai Marina, UAE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-12 pt-8 border-t border-slate-700"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Language Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center space-x-4 bg-slate-800 rounded-xl px-4 py-2">
            <Globe className="w-4 h-4 text-amber-400" />
            <select className="bg-transparent text-slate-300 border-none outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>© 2024 Dubai Luxe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="hover:text-amber-400 transition-colors duration-200">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-amber-400 transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-amber-400 transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
