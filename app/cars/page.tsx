"use client"

import { motion } from "framer-motion"
import { Car, Users, Settings, Star, ArrowRight, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CarsPage() {
  const carCategories = [
    {
      id: 1,
      category: "Super Luxury",
      vehicles: [
        {
          name: "Rolls-Royce Phantom",
          image: "/placeholder.svg?height=300&width=500&text=Rolls+Royce+Phantom",
          price: "$800/day",
          passengers: 4,
          features: ["Chauffeur Included", "Champagne Service", "Wi-Fi", "Premium Sound"],
          specs: { engine: "6.75L V12", power: "563 HP", transmission: "8-Speed Auto" },
        },
        {
          name: "Bentley Mulsanne",
          image: "/placeholder.svg?height=300&width=500&text=Bentley+Mulsanne",
          price: "$750/day",
          passengers: 4,
          features: ["Executive Seating", "Refrigerated Bar", "Massage Seats", "Privacy Glass"],
          specs: { engine: "6.75L V8", power: "505 HP", transmission: "8-Speed Auto" },
        },
      ],
    },
    {
      id: 2,
      category: "Sports Cars",
      vehicles: [
        {
          name: "Lamborghini Huracán",
          image: "/placeholder.svg?height=300&width=500&text=Lamborghini+Huracan",
          price: "$1,200/day",
          passengers: 2,
          features: ["Track Mode", "Carbon Fiber Interior", "Sport Exhaust", "Launch Control"],
          specs: { engine: "5.2L V10", power: "630 HP", transmission: "7-Speed DCT" },
        },
        {
          name: "Ferrari 488 GTB",
          image: "/placeholder.svg?height=300&width=500&text=Ferrari+488+GTB",
          price: "$1,500/day",
          passengers: 2,
          features: ["Race Mode", "Carbon Ceramic Brakes", "Alcantara Interior", "F1 Steering"],
          specs: { engine: "3.9L V8 Turbo", power: "661 HP", transmission: "7-Speed DCT" },
        },
      ],
    },
    {
      id: 3,
      category: "SUVs & Utility",
      vehicles: [
        {
          name: "Range Rover Autobiography",
          image: "/placeholder.svg?height=300&width=500&text=Range+Rover+Autobiography",
          price: "$400/day",
          passengers: 7,
          features: ["All-Terrain", "Panoramic Roof", "Meridian Sound", "Air Suspension"],
          specs: { engine: "5.0L V8", power: "518 HP", transmission: "8-Speed Auto" },
        },
        {
          name: "Mercedes G-Class AMG",
          image: "/placeholder.svg?height=300&width=500&text=Mercedes+G+Class+AMG",
          price: "$600/day",
          passengers: 5,
          features: ["AMG Performance", "Off-Road Package", "Burmester Audio", "AMG Styling"],
          specs: { engine: "4.0L V8 Biturbo", power: "577 HP", transmission: "9-Speed Auto" },
        },
      ],
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full coverage protection for peace of mind",
    },
    {
      icon: Clock,
      title: "24/7 Concierge",
      description: "Round-the-clock support and assistance",
    },
    {
      icon: Users,
      title: "Professional Chauffeurs",
      description: "Experienced drivers for luxury experience",
    },
    {
      icon: Settings,
      title: "Vehicle Customization",
      description: "Personalized setup for your preferences",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Car className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">Luxury Car Rentals</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                Drive Dubai in style with our premium fleet of luxury vehicles. From exotic supercars to elegant sedans,
                experience the ultimate in automotive luxury.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Browse Our Fleet
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
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

        {/* Vehicle Categories */}
        {carCategories.map((category, categoryIndex) => (
          <section key={category.id} className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                  {category.category}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {category.vehicles.map((vehicle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                        <div className="flex items-center text-white/80">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{vehicle.passengers} passengers</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Specifications */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Engine</div>
                          <div className="font-semibold text-slate-800 dark:text-white text-sm">
                            {vehicle.specs.engine}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Power</div>
                          <div className="font-semibold text-slate-800 dark:text-white text-sm">
                            {vehicle.specs.power}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Trans.</div>
                          <div className="font-semibold text-slate-800 dark:text-white text-sm">
                            {vehicle.specs.transmission}
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">4.9 (150+ reviews)</span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Starting at</div>
                          <div className="text-2xl font-bold text-amber-600">{vehicle.price}</div>
                        </div>
                        <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl">
                          Reserve Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  )
}
