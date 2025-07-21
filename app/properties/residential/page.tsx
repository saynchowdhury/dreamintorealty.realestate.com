"use client"

import { motion } from "framer-motion"
import { Home, MapPin, ArrowLeft, MessageCircle, TrendingUp, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResidentialProperties() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "+919876543210"
    const message = "Hi! I'm interested in residential properties in Greater Noida. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const residentialProperties = [
    {
      id: 1,
      title: "Green Valley Apartments",
      location: "Sector Pi 2, Greater Noida",
      price: "₹65 Lakh onwards",
      area: "1200-2500 sq ft",
      image: "green valley apartments sector pi greater noida modern residential",
      features: ["2-3 BHK", "Swimming Pool", "Gym", "Kids Play Area"],
      description: "Luxury residential apartments with modern amenities and green spaces.",
      roi: "8-12%",
      possession: "Ready to Move",
    },
    {
      id: 2,
      title: "Skyline Residency",
      location: "Techzone 4, Greater Noida",
      price: "₹85 Lakh onwards",
      area: "1500-3000 sq ft",
      image: "skyline residency techzone high rise apartments",
      features: ["3-4 BHK", "Club House", "Security", "Power Backup"],
      description: "Premium high-rise apartments with panoramic city views.",
      roi: "10-14%",
      possession: "Under Construction",
    },
    {
      id: 3,
      title: "Garden Homes",
      location: "Omega 1, Greater Noida",
      price: "₹1.2 Cr onwards",
      area: "2000-4000 sq ft",
      image: "garden homes omega independent villas greater noida",
      features: ["Independent Villas", "Private Garden", "Car Parking", "Gated Community"],
      description: "Spacious independent villas with private gardens in gated community.",
      roi: "12-16%",
      possession: "Ready to Move",
    },
    {
      id: 4,
      title: "Metro Heights",
      location: "Alpha 2, Greater Noida",
      price: "₹75 Lakh onwards",
      area: "1300-2200 sq ft",
      image: "metro heights alpha 2 apartments metro connectivity",
      features: ["Metro Connected", "Shopping Mall", "Hospital", "Schools"],
      description: "Well-connected apartments near metro station with all amenities.",
      roi: "9-13%",
      possession: "Ready to Move",
    },
    {
      id: 5,
      title: "Riverside Towers",
      location: "Sector Zeta, Greater Noida",
      price: "₹95 Lakh onwards",
      area: "1600-2800 sq ft",
      image: "riverside towers sector zeta river view apartments",
      features: ["River View", "Balcony", "Modular Kitchen", "Parking"],
      description: "Premium apartments with scenic river views and modern interiors.",
      roi: "11-15%",
      possession: "Under Construction",
    },
    {
      id: 6,
      title: "Smart City Homes",
      location: "Knowledge Park 3, Greater Noida",
      price: "₹70 Lakh onwards",
      area: "1400-2400 sq ft",
      image: "smart city homes knowledge park 3 modern technology",
      features: ["Smart Home", "Solar Power", "EV Charging", "Fiber Internet"],
      description: "Technology-enabled smart homes with sustainable living features.",
      roi: "10-14%",
      possession: "Ready to Move",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 py-20">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Residential Properties"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 mr-4 bg-transparent"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Home className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Residential <span className="text-emerald-300">Properties</span>
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium residential apartments and villas in Greater Noida's finest neighborhoods
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Home, label: "Residential Projects", value: "30+" },
              { icon: TrendingUp, label: "Average ROI", value: "10-15%" },
              { icon: Users, label: "Happy Families", value: "1000+" },
              { icon: Shield, label: "RERA Approved", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Available <span className="text-emerald-400">Residential Properties</span>
            </h2>
            <p className="text-xl text-white/80">Your dream home awaits in Greater Noida's premium locations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&query=${property.image}`}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">Available</Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="text-white border-white/30 bg-black/30">
                        ROI: {property.roi}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{property.title}</CardTitle>
                    <CardDescription className="text-white/70 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-white/80 text-sm">{property.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-white">
                          <span className="text-white/70">Price:</span>
                          <div className="font-bold text-emerald-400">{property.price}</div>
                        </div>
                        <div className="text-white">
                          <span className="text-white/70">Area:</span>
                          <div className="font-semibold">{property.area}</div>
                        </div>
                        <div className="text-white">
                          <span className="text-white/70">ROI:</span>
                          <div className="font-semibold text-green-400">{property.roi}</div>
                        </div>
                        <div className="text-white">
                          <span className="text-white/70">Status:</span>
                          <div className="font-semibold">{property.possession}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-white border-white/30 text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        onClick={handleWhatsAppContact}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                      >
                        Get Details via WhatsApp
                        <MessageCircle className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Dream Home Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized assistance in finding the perfect residential property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Contact via WhatsApp
                <MessageCircle className="w-6 h-6 ml-2" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
              >
                <Link href="/">View All Properties</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
