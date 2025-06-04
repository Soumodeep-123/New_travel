"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import LottieAnimation from "./lottie-animation"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <LottieAnimation width={40} height={40} className="mb-2" />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/70 text-sm font-medium"
        >
          Scroll to explore
        </motion.div>
        <ChevronDown className="w-6 h-6 text-white/70 mt-1" />
      </motion.div>
    </motion.div>
  )
}
