"use client"

import { motion } from "framer-motion"
import { Home, Users, MapPin, Wifi, Car, Utensils, Star, ArrowRight, Bath, Bed } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function VillasPage() {
  const villas = [
    {
      id: 1,
      name: "Palm Jumeirah Oceanfront Villa",
      location: "Palm Jumeirah",
      image: "/placeholder.svg?height=400&width=600&text=Palm+Jumeirah+Villa",
      price: "$2,500/night",
      bedrooms: 6,
      bathrooms: 8,
      guests: 12,
      area: "8,500 sq ft",
      rating: 4.9,
      reviews: 89,
      features: ["Private Beach", "Infinity Pool", "Chef Service", "Butler", "Spa Room", "Home Theater"],
      amenities: ["Ocean View", "Private Dock", "Gym", "Wine Cellar", "Rooftop Terrace", "Smart Home"],
      description: "Stunning oceanfront villa with panoramic views of the Arabian Gulf. Features luxury amenities and world-class service."
    },
    {
      id: 2,
      name: "Downtown Penthouse Villa",
      location: "Downtown Dubai",
      image: "/placeholder.svg?height=400&width=600&text=Downtown+Penthouse",
      price: "$3,200/night",
      bedrooms: 5,
      bathrooms: 6,
      guests: 10,
      area: "7,200 sq ft",
      rating: 4.8,
      reviews: 124,
      features: ["Burj Khalifa View", "Private Elevator", "Concierge", "Valet Parking", "Business Center"],
      amenities: ["City Skyline View", "Jacuzzi", "Library", "Game Room", "Private Dining", "24/7 Security"],
      description: "Luxurious penthouse with breathtaking views of Burj Khalifa and Dubai Fountain. Ultimate urban luxury experience."
    },
    {
      id: 3,
      name: "Desert Oasis Villa",
      location: "Al Barari",
      image: "/placeholder.svg?height=400&width=600&text=Desert+Oasis+Villa",
      price: "$1,800/night",
      bedrooms: 4,
      bathrooms: 5,
      guests: 8,
      area: "6,000 sq ft",
      rating: 4.9,
      reviews: 67,
      features: ["Garden View", "Private Pool", "BBQ Area", "Outdoor Kitchen", "Meditation Garden"],
      amenities: ["Eco-Friendly", "Solar Power", "Organic Garden", "Wellness Center", "Yoga Studio", "Pet Friendly"],
      description: "Serene villa surrounded by lush gardens and natural landscapes. Perfect retreat from the bustling city life."
    },
    {
      id: 4,
      name: "Marina Waterfront Villa",
      location: "Dubai Marina",
      image: "/placeholder.svg?height=400&width=600&text=Marina+Villa",
      price: "$2,200/night",
      bedrooms: 5,
      bathrooms: 6,
      guests: 10,
      area: "7,800 sq ft",
      rating: 4.7,
      reviews: 156,
      features: ["Marina View", "Private Yacht Berth", "Wine Tasting Room", "Chef Kitchen", "Entertainment Deck"],
      amenities: ["Waterfront Access", "Boat Rental", "Water Sports", "Marina Walk", "Fine Dining", "Nightlife Access"],
      description: "Sophisticated waterfront villa with direct marina access. Ideal for yacht enthusiasts and water lovers."
    }
  ]

  const villaServices = [
    {
      icon: Utensils,
      title: "Private Chef Service",
      description: "Michelin-trained chefs for personalized dining experiences"
    },
    {
      icon: Car,
      title: "Luxury Transportation",
      description: "Complimentary airport transfers and city tours"
    },
    {
      icon: Users,
      title: "Concierge Service",
      description: "24/7 personal concierge for all your needs"
    },
    {
      icon: Wifi,
      title: "Premium Amenities",
      description: "High-speed internet, entertainment systems, and more"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Home className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                Elite Villa Rentals
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                Discover Dubai's most exclusive private villas. From beachfront estates to urban penthouses, 
                experience unparalleled luxury and privacy.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Explore Villas
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {villaServices.map((service, index) => {
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

        {/* Villa Listings */}
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
                Exclusive Villa Collection
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Each villa in our collection offers unique luxury experiences with world-class amenities and personalized service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {villas.map((villa, index) => (
                <motion.div
                  key={villa.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 group"
                >
                  {/* Villa Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={villa.image || "/placeholder.svg"}
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-amber-600" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{villa.location}</span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full px-4 py-2">
                      <span className="font-bold">{villa.price}</span>
                    </div>

                    {/* Villa Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{villa.name}</h3>
                      <div className="flex items-center text-white/80 space-x-4">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span className="text-sm">{villa.bedrooms} bed</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span className="text-sm">{villa.bathrooms} bath</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="text-sm">{villa.guests} guests</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Villa Details */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {villa.description}
                    </p>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Area</div>
                        <div className="font-semibold text-slate-800 dark:text-white">{villa.area}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Max Guests</div>
                        <div className="font-semibold text-slate-800 dark:text-white">{villa.guests} people</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Premium Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {villa.features.slice(0, 4).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                        {villa.features.length > 4 && (
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm">
                            +{villa.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(villa.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                          {villa.rating} ({villa.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl h-12 text-lg font-semibold">
                      Book This Villa
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
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
