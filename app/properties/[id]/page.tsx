"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowLeft,
  MessageCircle,
  Heart,
  Share2,
  Star,
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize,
  TrendingUp,
  Shield,
  Phone,
  Building,
  Wifi,
  Zap,
  Droplets,
  Wind,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0)

  const heroRef = useRef(null)
  const detailsRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const detailsInView = useInView(detailsRef, { once: true })

  // Mock property data - in real app, this would come from API
  const property = {
    id: Number.parseInt(params.id),
    title: "Alpha Commercial Hub",
    location: "Alpha 1, Greater Noida",
    price: "₹45 Lakh",
    originalPrice: "₹50 Lakh",
    area: "1200 sq ft",
    type: "Commercial",
    category: "commercial",
    rating: 4.8,
    reviews: 124,
    bedrooms: null,
    bathrooms: 2,
    parking: 2,
    yearBuilt: 2023,
    developer: "Alpha Developers",
    possession: "Ready to Move",
    roi: "15-18%",
    description:
      "Premium commercial space in the heart of Greater Noida's business district. This modern office complex offers state-of-the-art amenities and excellent connectivity to major business hubs.",
    features: ["Prime Location", "Ready to Move", "High ROI", "Metro Connectivity", "24/7 Security", "Power Backup"],
    amenities: [
      { name: "24/7 Security", icon: Shield },
      { name: "Power Backup", icon: Zap },
      { name: "High Speed Internet", icon: Wifi },
      { name: "Water Supply", icon: Droplets },
      { name: "Air Conditioning", icon: Wind },
      { name: "Elevator", icon: Building },
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    ],
    floorPlans: [
      { name: "Ground Floor", image: "ground floor plan commercial office" },
      { name: "First Floor", image: "first floor plan commercial office" },
      { name: "Typical Floor", image: "typical floor plan commercial office" },
    ],
    nearbyPlaces: [
      { name: "Metro Station", distance: "0.5 km", type: "transport" },
      { name: "Shopping Mall", distance: "1.2 km", type: "shopping" },
      { name: "Hospital", distance: "2.1 km", type: "healthcare" },
      { name: "School", distance: "1.8 km", type: "education" },
      { name: "Bank", distance: "0.3 km", type: "finance" },
      { name: "Restaurant", distance: "0.8 km", type: "dining" },
    ],
    specifications: {
      "Built-up Area": "1200 sq ft",
      "Carpet Area": "1000 sq ft",
      Floor: "Ground to 5th",
      Facing: "North-East",
      Furnishing: "Semi-Furnished",
      Parking: "2 Covered",
      "Age of Property": "New Construction",
      Possession: "Ready to Move",
    },
    priceBreakdown: {
      basePrice: "₹45,00,000",
      registrationCharges: "₹1,35,000",
      stampDuty: "₹2,25,000",
      legalCharges: "₹50,000",
      total: "₹49,10,000",
    },
    agent: {
      name: "dreamintorealty",
      designation: "Premium Property Consultant",
      phone: "+91 98765 43210",
      email: "contact@dreamintorealty.com",
      image: "/images/logo.png",
      experience: "10+ years",
      deals: "500+ properties sold",
    },
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "+919876543210"
    const message = `Hi! I'm interested in ${property.title} at ${property.location}. Can you provide more details?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this amazing property: ${property.title}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Dream Into Realty" width={180} height={60} className="h-12 w-auto" />
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/properties">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Properties
                </Link>
              </Button>

              <Button
                onClick={handleWhatsAppContact}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Gallery */}
      <section ref={heroRef} className="relative pt-20">
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src={property.images[currentImageIndex] || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 z-20 flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full backdrop-blur-sm ${
                isFavorite ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-2">
              {property.images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Property Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      {property.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{property.rating}</span>
                      <span className="text-white/70">({property.reviews} reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
                  <p className="text-xl text-white/90 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {property.price}
                  </div>
                  {property.originalPrice && (
                    <div className="text-lg text-white/60 line-through">{property.originalPrice}</div>
                  )}
                  <div className="text-white/80">{property.area}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={detailsRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={detailsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <Maximize className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                        <div className="text-gray-600 text-sm">Total Area</div>
                      </div>
                      {property.bedrooms && (
                        <div className="text-center">
                          <Bed className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                          <div className="text-gray-600 text-sm">Bedrooms</div>
                        </div>
                      )}
                      <div className="text-center">
                        <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                        <div className="text-gray-600 text-sm">Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <Car className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{property.parking}</div>
                        <div className="text-gray-600 text-sm">Parking</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tabbed Content */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={detailsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="amenities" className="data-[state=active]:bg-white">
                      Amenities
                    </TabsTrigger>
                    <TabsTrigger value="floor-plans" className="data-[state=active]:bg-white">
                      Floor Plans
                    </TabsTrigger>
                    <TabsTrigger value="location" className="data-[state=active]:bg-white">
                      Location
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-2xl">Property Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">{property.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-gray-900 font-semibold mb-3">Key Features</h3>
                            <div className="space-y-2">
                              {property.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-gray-900 font-semibold mb-3">Specifications</h3>
                            <div className="space-y-2">
                              {Object.entries(property.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-gray-700">
                                  <span>{key}:</span>
                                  <span className="font-semibold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="amenities" className="mt-6">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-2xl">Amenities & Facilities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {property.amenities.map((amenity, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                            >
                              <amenity.icon className="w-6 h-6 text-purple-600" />
                              <span className="text-gray-900">{amenity.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="floor-plans" className="mt-6">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-2xl">Floor Plans</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex space-x-2">
                            {property.floorPlans.map((plan, index) => (
                              <Button
                                key={index}
                                variant={selectedFloorPlan === index ? "default" : "outline"}
                                onClick={() => setSelectedFloorPlan(index)}
                                className={
                                  selectedFloorPlan === index
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                }
                              >
                                {plan.name}
                              </Button>
                            ))}
                          </div>
                          <div className="relative h-96 bg-gray-50 rounded-lg overflow-hidden">
                            <Image
                              src={`/abstract-geometric-shapes.png?height=400&width=600&query=${property.floorPlans[selectedFloorPlan].image}`}
                              alt={property.floorPlans[selectedFloorPlan].name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="location" className="mt-6">
                    <Card className="shadow-lg border-0">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-2xl">Location & Nearby Places</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8974359726!2d77.50633731508!3d28.574389982431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cdf6b9!2sAlpha%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                          />
                        </div>

                        <div>
                          <h3 className="text-gray-900 font-semibold mb-4">Nearby Places</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {property.nearbyPlaces.map((place, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <span className="text-gray-900">{place.name}</span>
                                <Badge variant="outline" className="text-gray-700 border-gray-300">
                                  {place.distance}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Price Breakdown */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-xl">Price Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(property.priceBreakdown).map(([key, value]) => (
                      <div
                        key={key}
                        className={`flex justify-between ${
                          key === "total" ? "border-t border-gray-200 pt-3 font-bold text-purple-600" : "text-gray-700"
                        }`}
                      >
                        <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Agent */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-xl">Contact Agent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src="/images/logo.png"
                          alt={property.agent.name}
                          fill
                          className="object-contain rounded-full bg-gray-100 p-2"
                        />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold">{property.agent.name}</h3>
                        <p className="text-gray-600 text-sm">{property.agent.designation}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>{property.agent.experience}</span>
                          <span>{property.agent.deals}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button
                        onClick={handleWhatsAppContact}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        onClick={() => setIsContactFormOpen(true)}
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Request Callback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* ROI Calculator */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-xl flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                      Investment Potential
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-gray-900">
                      <span>Expected ROI:</span>
                      <span className="font-bold text-purple-600">{property.roi}</span>
                    </div>
                    <div className="flex justify-between text-gray-900">
                      <span>Possession:</span>
                      <span>{property.possession}</span>
                    </div>
                    <div className="flex justify-between text-gray-900">
                      <span>Developer:</span>
                      <span>{property.developer}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mt-4 font-semibold">
                      Calculate Returns
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-md bg-white border-0 shadow-xl">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Request Callback</h2>
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <Input
                placeholder="Phone Number"
                className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <Input
                placeholder="Email Address"
                className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 min-h-[100px]"
              />
              <Button
                onClick={() => {
                  setIsContactFormOpen(false)
                  handleWhatsAppContact()
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
              >
                Send Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={handleWhatsAppContact}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
          </svg>
        </Button>
      </motion.div>
    </div>
  )
}
