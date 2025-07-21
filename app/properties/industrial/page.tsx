"use client"

import { motion } from "framer-motion"
import { Factory, MapPin, ArrowLeft, MessageCircle, TrendingUp, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function IndustrialProperties() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "+919876543210"
    const message = "Hi! I'm interested in industrial properties in Greater Noida. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const industrialProperties = [
    {
      id: 1,
      title: "Industrial Gateway",
      location: "Surajpur, Greater Noida",
      price: "₹35 Lakh onwards",
      area: "1000-5000 sq ft",
      image: "industrial warehouse modern facility surajpur",
      features: ["Industrial Zone", "Wide Roads", "Power Backup", "24/7 Security"],
      description: "Modern industrial facilities with excellent connectivity and infrastructure.",
      roi: "20-25%",
      possession: "Ready to Move",
    },
    {
      id: 2,
      title: "Manufacturing Hub",
      location: "Site 4, Greater Noida",
      price: "₹50 Lakh onwards",
      area: "2000-10000 sq ft",
      image: "manufacturing hub industrial complex site 4",
      features: ["Heavy Industry", "Rail Connectivity", "Utilities", "Crane Facility"],
      description: "Large-scale manufacturing spaces with heavy industry approvals.",
      roi: "18-22%",
      possession: "Under Construction",
    },
    {
      id: 3,
      title: "Logistics Park",
      location: "Ecotech Extension, Greater Noida",
      price: "₹40 Lakh onwards",
      area: "1500-8000 sq ft",
      image: "logistics park warehouse ecotech extension",
      features: ["Highway Access", "Loading Docks", "Cold Storage", "GPS Tracking"],
      description: "Strategic logistics facilities near major highways and transport hubs.",
      roi: "22-28%",
      possession: "Ready to Move",
    },
    {
      id: 4,
      title: "Tech Manufacturing",
      location: "Knowledge Park 5, Greater Noida",
      price: "₹65 Lakh onwards",
      area: "1200-6000 sq ft",
      image: "tech manufacturing facility knowledge park clean room",
      features: ["Clean Room", "ETP Plant", "Solar Power", "IT Infrastructure"],
      description: "High-tech manufacturing spaces for electronics and precision industries.",
      roi: "25-30%",
      possession: "Ready to Move",
    },
    {
      id: 5,
      title: "Food Processing Unit",
      location: "Kasna, Greater Noida",
      price: "₹45 Lakh onwards",
      area: "1800-7000 sq ft",
      image: "food processing unit kasna industrial facility",
      features: ["FSSAI Approved", "Cold Chain", "Quality Labs", "Export Facility"],
      description: "Specialized food processing facilities with all necessary certifications.",
      roi: "20-24%",
      possession: "Under Construction",
    },
    {
      id: 6,
      title: "Auto Component Hub",
      location: "Surajpur Industrial Area",
      price: "₹55 Lakh onwards",
      area: "2500-12000 sq ft",
      image: "auto component manufacturing hub surajpur industrial",
      features: ["Auto Cluster", "Testing Lab", "R&D Facility", "Skilled Labor"],
      description: "Automotive component manufacturing spaces in established auto cluster.",
      roi: "18-23%",
      possession: "Ready to Move",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Industrial Properties"
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
              <Factory className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Industrial <span className="text-orange-300">Properties</span>
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Modern industrial facilities and manufacturing spaces in Greater Noida's industrial corridors
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Factory, label: "Industrial Projects", value: "15+" },
              { icon: TrendingUp, label: "Average ROI", value: "20-25%" },
              { icon: Users, label: "Manufacturing Units", value: "200+" },
              { icon: Shield, label: "Pollution Clearance", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Available <span className="text-orange-400">Industrial Properties</span>
            </h2>
            <p className="text-xl text-white/80">Premium industrial spaces for manufacturing and logistics</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialProperties.map((property, index) => (
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
                          <div className="font-bold text-orange-400">{property.price}</div>
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
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Industrial Investment Journey</h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert guidance on industrial real estate with high ROI potential
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
