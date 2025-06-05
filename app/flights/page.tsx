"use client"

import { motion } from "framer-motion"
import { Plane, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import AnimatedBackground from "@/components/animated-background"
import PlaneScene from "@/components/plane-scene"
import Lottie from "lottie-react"
//import clouds from "@/animations/clouds.json"

export default function FlightsPage() {
  const flightOptions = [
    {
      id: 1,
      aircraft: "Gulfstream G650",
      capacity: "14 passengers",
      range: "7,000 nm",
      speed: "516 kts",
      image: "/public/plane.jpg",
      price: "$8,500/hour",
      features: ["Wi-Fi", "Full Kitchen", "Bedroom", "Conference Room"],
    },
    {
      id: 2,
      aircraft: "Bombardier Global 7500",
      capacity: "19 passengers",
      range: "7,700 nm",
      speed: "516 kts",
      image: "/public/plane.jpg",
      price: "$9,200/hour",
      features: ["Master Suite", "Entertainment System", "Full Bar", "Shower"],
    },
    {
      id: 3,
      aircraft: "Cessna Citation X+",
      capacity: "12 passengers",
      range: "3,460 nm",
      speed: "527 kts",
      image: "/placeholder.svg?height=300&width=500&text=Cessna+Citation+X+",
      price: "$4,800/hour",
      features: ["High-Speed Wi-Fi", "Refreshment Center", "LED Lighting"],
    },
  ]

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="relative isolate z-10 w-full max-w-6xl mx-auto text-center py-20">
              {/* 3D Plane Animation Behind */}
              <PlaneScene />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >

                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            
                            <Plane className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                              Private Jet Charter
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                              Experience the ultimate in luxury travel with our fleet of premium private jets. Fly on your schedule
                              with unparalleled comfort and service.
                            </p>
                            <Button
                              size="lg"
                              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
                            >
                              Book Your Flight
                            </Button>
                    </motion.div>

              </motion.div>

          </div>
            
          </div>
        </section>

        {/* Aircraft Fleet */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Our Premium Fleet</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Choose from our carefully curated selection of luxury aircraft, each maintained to the highest standards
                of safety and comfort.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {flightOptions.map((aircraft, index) => (
                <motion.div
                  key={aircraft.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={aircraft.image || "/placeholder.svg"}
                      alt={aircraft.aircraft}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{aircraft.aircraft}</h3>
                      <div className="flex items-center text-white/80">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{aircraft.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Range</div>
                        <div className="font-semibold text-slate-800 dark:text-white">{aircraft.range}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Speed</div>
                        <div className="font-semibold text-slate-800 dark:text-white">{aircraft.speed}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {aircraft.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Starting at</div>
                        <div className="text-2xl font-bold text-amber-600">{aircraft.price}</div>
                      </div>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </SmoothScrollProvider>
    
  )
}