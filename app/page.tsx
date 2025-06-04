"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import SmartSearchBar from "@/components/smart-search-bar"
import ServicesSection from "@/components/services-section"
import TestimonialsSlider from "@/components/testimonials-slider"
import InteractiveMap from "@/components/interactive-map"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import Hero from "@/components/hero-section"; 
// keep as is
//import BackgroundParallax from "@/components/background-parralx"; // new component

// export default function HomePage() {
//   return (
//     <>
//       <Hero /> {/* Don't apply parallax to Hero */}
//       <BackgroundParallax>
//         {/* All other sections go here */}
//         {/* Example sections */}
//         <section className="h-screen">Section 1</section>
//         <section className="h-screen">Section 2</section>
//         <section className="h-screen">Section 3</section>
//       </BackgroundParallax>
//     </>
//   );
// }

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <HeroSection />
        <SmartSearchBar />
        <ServicesSection />
        <TestimonialsSlider />
        <InteractiveMap />
        <Footer />
      </motion.main>
       {/* Don't apply parallax to Hero */}

    </div>
    </SmoothScrollProvider>
    
    
  )
}
