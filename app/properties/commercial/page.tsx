"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, ArrowLeft, MessageCircle, TrendingUp, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommercialProperties() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "+919876543210"
    const message = "Hi! I'm interested in commercial properties in Greater Noida. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const commercialProperties = [
    {
      id: 1,
      title: "Alpha Commercial Hub",
      location: "Alpha 1, Greater Noida",
      price: "₹45 Lakh onwards",
      area: "500-2000 sq ft",
      image: "modern office building commercial space alpha greater noida",
      features: ["Prime Location", "Ready to Move", "High ROI", "Metro Connectivity"],
      description: "Premium commercial spaces in the heart of Greater Noida's business district.",
      roi: "12-15%",
      possession: "Ready to Move",
    },
    {
      id: 2,
      title: "Tech Park Plaza",
      location: "Knowledge Park, Greater Noida",
      price: "₹65 Lakh onwards",
      area: "800-3000 sq ft",
      image: "tech park office building modern knowledge park",
      features: ["IT Hub", "Metro Connectivity", "Furnished", "24/7 Security"],
      description: "State-of-the-art office spaces designed for modern businesses.",
      roi: "15-18%",
      possession: "Under Construction",
    },
    {
      id: 3,
      title: "Business Central",
      location: "Beta 2, Greater Noida",
      price: "₹55 Lakh onwards",
      area: "600-2500 sq ft",
      image: "business center commercial building beta greater noida",
      features: ["Central Location", "Parking", "Power Backup", "High Speed Internet"],
      description: "Modern commercial complex with excellent connectivity and amenities.",
      roi: "13-16%",
      possession: "Ready to Move",
    },
    {
      id: 4,
      title: "Corporate Tower",
      location: "Sector Omega, Greater Noida",
      price: "₹75 Lakh onwards",
      area: "1000-4000 sq ft",
      image: "corporate tower office building omega sector",
      features: ["Premium Location", "Conference Rooms", "Cafeteria", "Gym"],
      description: "Luxury commercial spaces for established businesses and corporates.",
      roi: "16-20%",
      possession: "Ready to Move",
    },
    {
      id: 5,
      title: "Retail Plaza",
      location: "Gamma 1, Greater Noida",
      price: "₹35 Lakh onwards",
      area: "300-1500 sq ft",
      image: "retail plaza shopping complex gamma greater noida",
      features: ["High Footfall", "Ground Floor", "Parking", "Food Court"],
      description: "Prime retail spaces in busy commercial area with high footfall.",
      roi: "18-22%",
      possession: "Under Construction",
    },
    {
      id: 6,
      title: "IT Park Complex",
      location: "Techzone 4, Greater Noida",
      price: "₹85 Lakh onwards",
      area: "1200-5000 sq ft",
      image: "IT park complex techzone greater noida modern",
      features: ["IT Zone", "Fiber Internet", "Cafeteria", "Helipad"],
      description: "Premium IT spaces with world-class infrastructure and amenities.",
      roi: "20-25%",
      possession: "Ready to Move",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Commercial Properties"
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
              <Building2 className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Commercial <span className="text-cyan-300">Properties</span>
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium commercial spaces in Greater Noida's prime business locations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: "Commercial Projects", value: "25+" },
              { icon: TrendingUp, label: "Average ROI", value: "15-20%" },
              { icon: Users, label: "Happy Clients", value: "300+" },
              { icon: Shield, label: "RERA Approved", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Available <span className="text-cyan-400">Commercial Properties</span>
            </h2>
            <p className="text-xl text-white/80">Choose from our handpicked commercial investments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProperties.map((property, index) => (
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
                          <div className="font-bold text-cyan-400">{property.price}</div>
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
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Invest in Commercial Real Estate?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert guidance and exclusive deals on premium commercial properties
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
