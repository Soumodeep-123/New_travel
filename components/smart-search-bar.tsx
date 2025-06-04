"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plane, Car, Home, Music, Smartphone, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SmartSearchBar() {
  const [activeTab, setActiveTab] = useState("flights")
  const [isSearching, setIsSearching] = useState(false)

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "cars", label: "Cars", icon: Car },
    { id: "villas", label: "Villas", icon: Home },
    { id: "nightlife", label: "Nightlife", icon: Music },
    { id: "esim", label: "eSIM", icon: Smartphone },
  ]

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
    }, 2000)
  }

  const getSearchFields = () => {
    switch (activeTab) {
      case "flights":
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="From" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="To" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Passengers" className="pl-10 h-12 rounded-xl" />
            </div>
          </div>
        )
      case "cars":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Pick-up location" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" placeholder="Pick-up date" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" placeholder="Return date" className="pl-10 h-12 rounded-xl" />
            </div>
          </div>
        )
      case "villas":
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Location" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" placeholder="Check-in" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" placeholder="Check-out" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Guests" className="pl-10 h-12 rounded-xl" />
            </div>
          </div>
        )
      case "nightlife":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Venue type" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="date" placeholder="Date" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Party size" className="pl-10 h-12 rounded-xl" />
            </div>
          </div>
        )
      case "esim":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Destination country" className="pl-10 h-12 rounded-xl" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Duration (days)" className="pl-10 h-12 rounded-xl" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="search-section" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
        >
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-slate-100 dark:bg-slate-700 rounded-2xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-600 text-amber-600 dark:text-amber-400 shadow-lg"
                      : "text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Search Fields */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              {getSearchFields()}
            </motion.div>
          </AnimatePresence>

          {/* Search Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Search {tabs.find((t) => t.id === activeTab)?.label}
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
