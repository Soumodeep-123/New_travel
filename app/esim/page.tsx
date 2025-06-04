"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Zap, Shield, ArrowRight, Wifi, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ESimPage() {
  const plans = [
    {
      id: 1,
      name: "UAE Explorer",
      region: "United Arab Emirates",
      flag: "🇦🇪",
      data: "10GB",
      validity: "30 days",
      price: "$25",
      speed: "5G/4G",
      features: ["Unlimited calls within UAE", "100 SMS", "Hotspot enabled", "No roaming charges"],
      popular: false,
    },
    {
      id: 2,
      name: "Middle East Premium",
      region: "UAE, Saudi Arabia, Qatar, Kuwait",
      flag: "🌍",
      data: "20GB",
      validity: "30 days",
      price: "$45",
      speed: "5G/4G",
      features: ["Multi-country coverage", "Unlimited regional calls", "500 SMS", "Premium support"],
      popular: true,
    },
    {
      id: 3,
      name: "Global Traveler",
      region: "150+ Countries",
      flag: "🌎",
      data: "50GB",
      validity: "90 days",
      price: "$89",
      speed: "5G/4G/3G",
      features: ["Worldwide coverage", "Unlimited calls", "1000 SMS", "24/7 support", "Data rollover"],
      popular: false,
    },
    {
      id: 4,
      name: "Business Elite",
      region: "Global + Premium Networks",
      flag: "💼",
      data: "100GB",
      validity: "90 days",
      price: "$149",
      speed: "5G Priority",
      features: ["Priority network access", "Unlimited everything", "Dedicated support", "VPN included"],
      popular: false,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get connected within minutes of purchase",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Stay connected in 150+ countries worldwide",
    },
    {
      icon: Shield,
      title: "Secure Connection",
      description: "Enterprise-grade security and privacy protection",
    },
    {
      icon: Wifi,
      title: "High-Speed Data",
      description: "5G and 4G LTE speeds for seamless connectivity",
    },
  ]

  const supportedDevices = [
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14",
    "iPhone 13 Series",
    "Samsung Galaxy S23 Ultra",
    "Samsung Galaxy S23",
    "Google Pixel 7 Pro",
    "iPad Pro",
    "iPad Air",
    "Samsung Galaxy Tab S8",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Smartphone className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                Global eSIM Solutions
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                Stay connected worldwide with our premium eSIM plans. Instant activation, global coverage, and
                high-speed data for the modern traveler.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Get Your eSIM
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
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
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Plans Section */}
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
                Choose Your Perfect Plan
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                From local UAE coverage to global connectivity, find the perfect eSIM plan for your travel needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-300 ${
                    plan.popular ? "border-amber-400 shadow-amber-400/20" : "border-white/20 hover:border-amber-400/50"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="p-6 pt-12">
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">{plan.flag}</div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{plan.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{plan.region}</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-amber-600 mb-2">{plan.price}</div>
                      <div className="text-slate-500 dark:text-slate-400">
                        {plan.data} • {plan.validity}
                      </div>
                    </div>

                    {/* Plan Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Data</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{plan.data}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Validity</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{plan.validity}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-300">Speed</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{plan.speed}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Features</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full rounded-xl h-12 font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 hover:text-white"
                      }`}
                    >
                      Get This Plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">How It Works</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Get connected in just three simple steps. No physical SIM cards, no waiting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Plan",
                  description: "Select the perfect eSIM plan for your destination and data needs.",
                  icon: Globe,
                },
                {
                  step: "2",
                  title: "Instant Download",
                  description: "Receive your eSIM QR code instantly via email after purchase.",
                  icon: Smartphone,
                },
                {
                  step: "3",
                  title: "Scan & Connect",
                  description: "Scan the QR code with your device and start using data immediately.",
                  icon: Zap,
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Supported Devices */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Compatible Devices</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                Our eSIM works with all modern smartphones and tablets that support eSIM technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {supportedDevices.map((device, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <Smartphone className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-slate-800 dark:text-white">{device}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="rounded-xl">
                  Check Device Compatibility
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
