"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Heart, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const stats = [
    { number: "5000+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "4.9", label: "Average Rating", icon: Star },
  ]

  const team = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Ahmed+CEO",
      bio: "Visionary leader with 20+ years in luxury hospitality and travel industry.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Concierge",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Concierge",
      bio: "Expert in creating bespoke luxury experiences for discerning travelers.",
    },
    {
      name: "Marcus Chen",
      role: "Operations Director",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Operations",
      bio: "Ensures seamless execution of all luxury services and experiences.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We are driven by an unwavering commitment to delivering exceptional experiences that exceed expectations.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Every client receives tailored attention and customized solutions that reflect their unique preferences.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Our worldwide network and local knowledge ensure authentic luxury experiences anywhere you travel.",
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We maintain the highest standards in every aspect of our service, from selection to execution.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">About Dubai Luxe</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                We are Dubai's premier luxury travel and lifestyle concierge service, dedicated to creating
                extraordinary experiences for discerning travelers from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Our Story</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Founded in 2008, Dubai Luxe began as a vision to redefine luxury travel experiences in the Middle
                  East. What started as a boutique concierge service has evolved into the region's most trusted luxury
                  lifestyle brand.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Today, we serve discerning clients from over 50 countries, offering everything from private jet
                  charters to exclusive villa rentals, ensuring every journey is nothing short of extraordinary.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/placeholder.svg?height=500&width=600&text=Dubai+Luxe+Story"
                  alt="Dubai Luxe Story"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Our Values</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are as a luxury service provider.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                The passionate professionals behind Dubai Luxe's exceptional service and unforgettable experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 group"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
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
