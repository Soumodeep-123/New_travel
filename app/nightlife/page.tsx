"use client"

import { motion } from "framer-motion"
import { Music, Users, Clock, Star, ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NightlifePage() {
  const venues = [
    {
      id: 1,
      name: "Zero Gravity",
      type: "Beach Club & Nightclub",
      location: "Dubai Marina",
      image: "/placeholder.svg?height=400&width=600&text=Zero+Gravity+Club",
      rating: 4.8,
      reviews: 234,
      priceRange: "$$$",
      openHours: "6 PM - 3 AM",
      capacity: 2000,
      features: ["Beachfront Location", "International DJs", "VIP Cabanas", "Infinity Pool", "Fine Dining"],
      musicGenres: ["House", "Techno", "Commercial"],
      description: "Dubai's premier beachfront destination combining luxury dining, beach club vibes, and world-class nightlife.",
      vipPackages: [
        { name: "VIP Table", price: "$800", includes: ["Reserved Table", "Bottle Service", "Dedicated Server"] },
        { name: "Cabana Experience", price: "$1,500", includes: ["Private Cabana", "Pool Access", "Premium Service"] }
      ]
    },
    {
      id: 2,
      name: "WHITE Dubai",
      type: "Rooftop Nightclub",
      location: "Meydan",
      image: "/placeholder.svg?height=400&width=600&text=WHITE+Dubai",
      rating: 4.9,
      reviews: 189,
      priceRange: "$$$$",
      openHours: "10 PM - 4 AM",
      capacity: 1500,
      features: ["Rooftop Terrace", "Celebrity DJs", "LED Ceiling", "Premium Sound", "Skyline Views"],
      musicGenres: ["EDM", "Progressive House", "Trance"],
      description: "Iconic rooftop venue featuring world-renowned DJs and breathtaking views of Dubai's skyline.",
      vipPackages: [
        { name: "Premium Table", price: "$1,200", includes: ["Prime Location", "Bottle Service", "VIP Entry"] },
        { name: "Skyline Suite", price: "$2,500", includes: ["Private Suite", "Panoramic Views", "Butler Service"] }
      ]
    },
    {
      id: 3,
      name: "Soho Garden",
      type: "Restaurant & Nightclub",
      location: "Meydan",
      image: "/placeholder.svg?height=400&width=600&text=Soho+Garden",
      rating: 4.7,
      reviews: 312,
      priceRange: "$$$",
      openHours: "7 PM - 3 AM",
      capacity: 3000,
      features: ["Multi-Level Venue", "Garden Setting", "Live Entertainment", "Gourmet Dining", "Shisha Lounge"],
      musicGenres: ["Hip Hop", "R&B", "Commercial", "Latin"],
      description: "Sprawling entertainment complex offering dining, nightlife, and live performances in a garden setting.",
      vipPackages: [
        { name: "Garden Table", price: "$600", includes: ["Outdoor Seating", "Bottle Service", "Garden Views"] },
        { name: "VIP Lounge", price: "$1,000", includes: ["Private Lounge", "Premium Location", "Concierge Service"] }
      ]
    },
    {
      id: 4,
      name: "Cavalli Lounge",
      type: "Luxury Lounge",
      location: "Fairmont Hotel",
      image: "/placeholder.svg?height=400&width=600&text=Cavalli+Lounge",
      rating: 4.6,
      reviews: 156,
      priceRange: "$$$$",
      openHours: "8 PM - 2 AM",
      capacity: 800,
      features: ["Designer Interior", "Signature Cocktails", "Live Music", "Fashion Shows", "Art Exhibitions"],
      musicGenres: ["Jazz", "Lounge", "Deep House"],
      description: "Sophisticated lounge designed by Roberto Cavalli, offering luxury ambiance and premium entertainment.",
      vipPackages: [
        { name: "Designer Table", price: "$900", includes: ["Premium Seating", "Signature Cocktails", "Personal Host"] },
        { name: "Cavalli Experience", price: "$1,800", includes: ["Private Area", "Champagne Service", "Fashion Show Access"] }
      ]
    }
  ]

  const nightlifeServices = [
    {
      icon: Users,
      title: "VIP Access",
      description: "Skip the lines with guaranteed entry to exclusive venues"
    },
    {
      icon: Sparkles,
      title: "Table Reservations",
      description: "Premium table bookings at Dubai's hottest nightspots"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Custom nightlife experiences for special occasions"
    },
    {
      icon: Clock,
      title: "24/7 Concierge",
      description: "Round-the-clock assistance for all your nightlife needs"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Music className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                VIP Nightlife Experiences
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                Experience Dubai's legendary nightlife scene with exclusive access to the city's most prestigious venues, 
                world-class DJs, and unforgettable VIP experiences.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Explore Nightlife
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nightlifeServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Venue Listings */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                Premier Nightlife Venues
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Discover Dubai's most exclusive nightlife destinations, from rooftop clubs to beachfront venues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {venues.map((venue, index) => (
                <motion.div
                  key={venue.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 group"
                >
                  {/* Venue Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full px-3 py-1">
                      <span className="text-sm font-medium">{venue.type}</span>
                    </div>

                    {/* Price Range */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{venue.priceRange}</span>
                    </div>

                    {/* Venue Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{venue.name}</h3>
                      <div className="flex items-center text-white/80 space-x-4 mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{venue.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{venue.openHours}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-white/80">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">Capacity: {venue.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {venue.description}
                    </p>

                    {/* Music Genres */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Music Genres</h4>
                      <div className="flex flex-wrap gap-2">
                        {venue.musicGenres.map((genre, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {venue.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                        {venue.features.length > 3 && (
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm">
                            +{venue.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* VIP Packages */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">VIP Packages</h4>
                      <div className="space-y-2">
                        {venue.vipPackages.map((pkg, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div>
                              <div className="font-medium text-slate-800 dark:text-white">{pkg.name}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                {pkg.includes.join(" • ")}
                              </div>
                            </div>
                            <div className="text-lg font-bold text-amber-600">{pkg.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(venue.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                          {venue.rating} ({venue.reviews} reviews)
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl">
                        Book VIP
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
  )
}
