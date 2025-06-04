"use client"

import { motion, useScroll, useTransform  } from "framer-motion"
import { useState, useEffect, useRef  } from "react"
import { ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Luxury", "Adventure", "Elegance", "Excellence"]
  const containerRef = useRef<HTMLDivElement>(null)

  // Smooth scroll parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("search-section")
    if (nextSection) {
      // Enhanced smooth scrolling
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // 
  // return (
  //   <section className="relative h-screen flex items-center justify-center overflow-hidden">
  //     {/* Background Video */}
  //     <video
  //       className="absolute inset-0 w-full h-full object-cover z-0"
  //       src="/210905_large.mp4" // 📁 This must be inside your /public folder
  //       autoPlay
  //       muted
  //       loop
  //       playsInline
  //     />
  
  //     {/* Dark Overlay */}
  //     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-0" />
  
  //     {/* Content */}
  //     <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
  //       <motion.div
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 1, delay: 0.2 }}
  //         className="mb-8"
  //       >
  //         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  //           Experience Dubai's{" "}
  //           <motion.span
  //             key={currentWord}
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             exit={{ opacity: 0, y: -20 }}
  //             transition={{ duration: 0.5 }}
  //             className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
  //           >
  //             {words[currentWord]}
  //           </motion.span>
  //         </h1>
  
  //         <motion.p
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 1, delay: 0.8 }}
  //           className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
  //         >
  //           From luxury villas to exclusive nightlife, discover the finest experiences in the city of gold with our
  //           premium concierge services.
  //         </motion.p>
  //       </motion.div>
  
  //       {/* CTA Buttons */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 1, delay: 1.2 }}
  //         className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
  //       >
  //         <Button
  //           size="lg"
  //           className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
  //         >
  //           Book Now
  //         </Button>
  
  //         <Button
  //           variant="outline"
  //           size="lg"
  //           className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
  //         >
  //           <Play className="w-5 h-5 mr-2" />
  //           Explore Services
  //         </Button>
  //       </motion.div>
  
  //       {/* Scroll Indicator */}
  //       <motion.div
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1, delay: 1.8 }}
  //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  //       >
  //         <motion.button
  //           onClick={scrollToNext}
  //           animate={{ y: [0, 10, 0] }}
  //           transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
  //           className="text-white/70 hover:text-white transition-colors duration-300"
  //         >
  //           <ChevronDown className="w-8 h-8" />
  //         </motion.button>
  //       </motion.div>
  //     </div>
  
  //     {/* Floating Elements */}
  //     <motion.div
  //       animate={{
  //         y: [0, -20, 0],
  //         rotate: [0, 5, 0],
  //       }}
  //       transition={{
  //         duration: 6,
  //         repeat: Number.POSITIVE_INFINITY,
  //         ease: "easeInOut",
  //       }}
  //       className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-xl"
  //     />
  
  //     <motion.div
  //       animate={{
  //         y: [0, 15, 0],
  //         rotate: [0, -3, 0],
  //       }}
  //       transition={{
  //         duration: 8,
  //         repeat: Number.POSITIVE_INFINITY,
  //         ease: "easeInOut",
  //         delay: 2,
  //       }}
  //       className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
  //     />
  //   </section>
  // )
  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ y }}
    >
      {/* Background Video with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/210905_large.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-0" />

      {/* Content with smooth scroll fade */}
      <motion.div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Experience Dubai's{" "}
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
            >
              {words[currentWord]}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From luxury villas to exclusive nightlife, discover the finest experiences in the city of gold with our
            premium concierge services.
          </motion.p>
        </motion.div>

        {/* CTA Buttons with enhanced hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              Book Now
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="mb-2"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 group-hover:text-amber-400 transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Elements with smooth scroll interaction */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.8], [0.6, 0]),
        }}
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 80]),
          opacity: useTransform(scrollYProgress, [0, 0.8], [0.6, 0]),
        }}
        className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
      />
    </motion.section>
  )
}
