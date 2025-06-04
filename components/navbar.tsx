// "use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Flights", href: "/flights" },
    { name: "Cars", href: "/cars" },
    { name: "Villas", href: "/villas" },
    { name: "Nightlife", href: "/nightlife" },
    { name: "eSIM", href: "/esim" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? "rgba(255,255,255,0.85)" : "transparent",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "shadow-md border-b border-slate-200 dark:border-slate-700" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Floating Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute left-4 top-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 z-0"
        />

        {/* Logo */}
        <Link href="/" className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-9 h-9 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">DL</span>
            </div>
            <motion.span
              className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent tracking-wide"
              whileHover={{ textShadow: "0px 0px 8px rgba(255,165,0,0.7)" }}
            >
              Dubai Luxe
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative z-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group relative text-slate-700 dark:text-slate-300 font-medium transition-colors duration-200"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4 z-10">
          {/* Language */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="hidden sm:flex items-center space-x-1 text-slate-600 dark:text-slate-400"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">EN</span>
          </motion.div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </Button>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col space-y-4 px-2 pb-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 font-medium py-2 px-4 rounded hover:bg-slate-100/30 dark:hover:bg-slate-700/30 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
