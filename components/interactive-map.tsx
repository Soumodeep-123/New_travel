"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X, Star, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  const locations = [
    {
      id: 1,
      name: "Burj Al Arab",
      type: "Luxury Hotel",
      position: { x: 25, y: 60 },
      image: "/placeholder.svg?height=200&width=300&text=Burj+Al+Arab",
      rating: 4.9,
      description: "Iconic sail-shaped luxury hotel offering world-class amenities",
      amenities: ["Spa", "Fine Dining", "Private Beach"],
      contact: "+971 4 301 7777",
    },
    {
      id: 2,
      name: "Dubai Marina",
      type: "Entertainment District",
      position: { x: 15, y: 45 },
      image: "/placeholder.svg?height=200&width=300&text=Dubai+Marina",
      rating: 4.8,
      description: "Vibrant waterfront district with luxury dining and nightlife",
      amenities: ["Restaurants", "Nightlife", "Marina Walk"],
      contact: "+971 4 367 3333",
    },
    {
      id: 3,
      name: "Palm Jumeirah",
      type: "Luxury Resort Area",
      position: { x: 20, y: 55 },
      image: "/placeholder.svg?height=200&width=300&text=Palm+Jumeirah",
      rating: 4.9,
      description: "Artificial archipelago with exclusive resorts and villas",
      amenities: ["Private Villas", "Beach Clubs", "Water Sports"],
      contact: "+971 4 426 2000",
    },
    {
      id: 4,
      name: "Downtown Dubai",
      type: "Business & Shopping",
      position: { x: 45, y: 40 },
      image: "/placeholder.svg?height=200&width=300&text=Downtown+Dubai",
      rating: 4.7,
      description: "Heart of Dubai with Burj Khalifa and Dubai Mall",
      amenities: ["Shopping", "Dining", "Entertainment"],
      contact: "+971 4 888 3444",
    },
    {
      id: 5,
      name: "Dubai Creek",
      type: "Cultural Heritage",
      position: { x: 60, y: 35 },
      image: "/placeholder.svg?height=200&width=300&text=Dubai+Creek",
      rating: 4.6,
      description: "Historic waterway showcasing traditional Dubai culture",
      amenities: ["Heritage Sites", "Traditional Souks", "Dhow Cruises"],
      contact: "+971 4 353 7373",
    },
    {
      id: 6,
      name: "Jumeirah Beach",
      type: "Beach Resort",
      position: { x: 30, y: 65 },
      image: "/placeholder.svg?height=200&width=300&text=Jumeirah+Beach",
      rating: 4.8,
      description: "Pristine beach with luxury resorts and beach clubs",
      amenities: ["Beach Clubs", "Water Sports", "Luxury Resorts"],
      contact: "+971 4 348 0000",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Explore Dubai's Finest Locations
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover premium destinations across Dubai, each offering unique luxury experiences and world-class
            amenities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Dubai Map Background */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('./Screenshot 2025-06-04 191531.jpg')`,
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />

            {/* Location Pins */}
            {locations.map((location, index) => (
              <motion.button
                key={location.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                onClick={() => setSelectedLocation(location.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${location.position.x}%`,
                  top: `${location.position.y}%`,
                }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="relative">
                  {/* Pin */}
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>

                  {/* Pulse Animation */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 bg-amber-400 rounded-full"
                  />

                  {/* Hover Label */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                </motion.div>
              </motion.button>
            ))}

            {/* Animated Route Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 240 360 Q 300 300 480 240 Q 600 200 720 210"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Location Details Modal */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedLocation(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                >
                  {(() => {
                    const location = locations.find((l) => l.id === selectedLocation)
                    if (!location) return null

                    return (
                      <>
                        {/* Header Image */}
                        <div className="relative h-48">
                          <img
                            src={location.image || "/placeholder.svg"}
                            alt={location.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                          {/* Close Button */}
                          <button
                            onClick={() => setSelectedLocation(null)}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          {/* Title Overlay */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-1">{location.name}</h3>
                            <p className="text-white/80 text-sm">{location.type}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(location.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                              {location.rating}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {location.description}
                          </p>

                          {/* Amenities */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Amenities</h4>
                            <div className="flex flex-wrap gap-2">
                              {location.amenities.map((amenity, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="flex items-center text-slate-600 dark:text-slate-300 mb-6">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">{location.contact}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl">
                              Book Now
                            </Button>
                            <Button variant="outline" className="flex-1 rounded-xl">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </>
                    )
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: MapPin, number: "50+", label: "Premium Locations" },
            { icon: Star, number: "4.9", label: "Average Rating" },
            { icon: Clock, number: "24/7", label: "Concierge Service" },
            { icon: Phone, number: "1000+", label: "Happy Guests" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
