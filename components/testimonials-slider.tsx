"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      flag: "🇺🇸",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      text: "Dubai Luxe transformed our vacation into an unforgettable experience. The villa was spectacular, and the concierge service was impeccable. Every detail was perfectly arranged.",
      service: "Villa Rental",
    },
    {
      id: 2,
      name: "James Mitchell",
      location: "London, UK",
      flag: "🇬🇧",
      avatar: "/placeholder.svg?height=80&width=80&text=JM",
      rating: 5,
      text: "The private jet service exceeded all expectations. Professional crew, luxury amenities, and seamless booking process. Will definitely use Dubai Luxe for all future travels.",
      service: "Private Jet",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      flag: "🇪🇸",
      avatar: "/placeholder.svg?height=80&width=80&text=MR",
      rating: 5,
      text: "Outstanding nightlife experiences! Got VIP access to the best clubs in Dubai. The team knows exactly how to make your night special and memorable.",
      service: "VIP Nightlife",
    },
    {
      id: 4,
      name: "Ahmed Al-Rashid",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      avatar: "/placeholder.svg?height=80&width=80&text=AR",
      rating: 5,
      text: "Exceptional luxury car service. The Lamborghini was in perfect condition, and the chauffeur was professional and knowledgeable about Dubai. Highly recommended!",
      service: "Luxury Cars",
    },
    {
      id: 5,
      name: "Lisa Chen",
      location: "Singapore",
      flag: "🇸🇬",
      avatar: "/placeholder.svg?height=80&width=80&text=LC",
      rating: 5,
      text: "The eSIM service was a lifesaver during our Dubai trip. Instant connectivity, great speeds, and excellent customer support. Made our travel so much easier.",
      service: "Global eSIM",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover why travelers from around the world choose Dubai Luxe for their premium experiences.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar and Info */}
                    <div className="flex-shrink-0 text-center">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-amber-400"
                        />
                        <div className="absolute -top-2 -right-2 text-2xl">{testimonials[currentIndex].flag}</div>
                      </div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                      <div className="flex justify-center mt-2">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-amber-400 mb-4" />
                      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        {testimonials[currentIndex].text}
                      </p>
                      <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 w-8"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "5000+", label: "Happy Clients" },
            { number: "4.9", label: "Average Rating" },
            { number: "50+", label: "Countries Served" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
