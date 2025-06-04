"use client"

import { motion } from "framer-motion"
import { Plane, Car, Home, Music, Smartphone, Utensils, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: Plane,
      title: "Private Jets",
      description: "Luxury private jet charters with premium amenities",
      image: "/public/plane.jpg",
      stats: "50+ Aircraft",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Car,
      title: "Luxury Cars",
      description: "Premium vehicle rentals and chauffeur services",
      image: "/public/cars.avif",
      stats: "200+ Vehicles",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Home,
      title: "Elite Villas",
      description: "Exclusive villa rentals with concierge services",
      image: "/public/villa.avif",
      stats: "100+ Properties",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Music,
      title: "VIP Nightlife",
      description: "Access to exclusive clubs and premium experiences",
      image: "/public/night.avif",
      stats: "25+ Venues",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Smartphone,
      title: "Global eSIM",
      description: "Stay connected worldwide with premium data plans",
      image: "/placeholder.svg?height=300&width=400&text=eSIM+Card",
      stats: "150+ Countries",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Reservations at Michelin-starred restaurants",
      image: "/placeholder.svg?height=300&width=400&text=Fine+Dining",
      stats: "75+ Restaurants",
      color: "from-red-500 to-red-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Premium Services</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experience Dubai's finest with our curated selection of luxury services, each designed to exceed your
            expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{service.stats}</span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">4.9 (200+ reviews)</span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-300 rounded-xl"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 rounded-3xl`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
