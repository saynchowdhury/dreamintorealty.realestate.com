"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search,
  Filter,
  MapPin,
  Building2,
  Star,
  Heart,
  Share2,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
  Users,
  Shield,
  Bed,
  Bath,
  Car,
  Maximize,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])

  const heroRef = useRef(null)
  const propertiesRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const propertiesInView = useInView(propertiesRef, { once: true })

  // Get search params from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get("type")
    const loc = urlParams.get("location")

    if (type) setPropertyType(type)
    if (loc) setSearchTerm(loc)
  }, [])

  const handleWhatsAppContact = (propertyDetails?: {
    title: string
    price: string
    area: string
    location: string
    type: string
  }) => {
    const phoneNumber = "+919876543210"
    let message = ""

    if (propertyDetails) {
      message = `Hi! I'm interested in *${propertyDetails.title}*

🏢 *Type:* ${propertyDetails.type}
📍 *Location:* ${propertyDetails.location}
💰 *Price:* ${propertyDetails.price}
📐 *Area:* ${propertyDetails.area}

Please provide more details about this property including:
- Available units and floor plans
- Payment plans and financing options
- Site visit arrangements
- Documentation and legal process
- Expected ROI and rental yields

Looking forward to hearing from you soon!`
    } else {
      message = "Hi! I'm interested in Greater Noida properties. Can you help me?"
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const properties = [
    {
      id: 1,
      title: "Alpha Commercial Hub",
      location: "Alpha 1, Greater Noida",
      price: "₹45 Lakh",
      originalPrice: "₹50 Lakh",
      area: "1200 sq ft",
      type: "Commercial",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      features: ["Prime Location", "Ready to Move", "High ROI", "Metro Connectivity"],
      rating: 4.8,
      reviews: 124,
      bedrooms: null,
      bathrooms: null,
      parking: 2,
      yearBuilt: 2023,
      developer: "Alpha Developers",
      possession: "Ready to Move",
      roi: "15-18%",
      amenities: ["24/7 Security", "Power Backup", "Elevator", "Parking"],
    },
    {
      id: 2,
      title: "Tech Park Plaza",
      location: "Knowledge Park, Greater Noida",
      price: "₹65 Lakh",
      originalPrice: "₹70 Lakh",
      area: "1800 sq ft",
      type: "Commercial",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      features: ["IT Hub", "Metro Connectivity", "Furnished", "24/7 Security"],
      rating: 4.9,
      reviews: 89,
      bedrooms: null,
      bathrooms: null,
      parking: 3,
      yearBuilt: 2024,
      developer: "Tech Builders",
      possession: "Under Construction",
      roi: "18-22%",
      amenities: ["Cafeteria", "Conference Rooms", "High Speed Internet", "AC"],
    },
    {
      id: 3,
      title: "Industrial Gateway",
      location: "Surajpur, Greater Noida",
      price: "₹35 Lakh",
      originalPrice: "₹40 Lakh",
      area: "2500 sq ft",
      type: "Industrial",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      features: ["Industrial Zone", "Wide Roads", "Power Backup", "Loading Dock"],
      rating: 4.7,
      reviews: 67,
      bedrooms: null,
      bathrooms: null,
      parking: 5,
      yearBuilt: 2023,
      developer: "Industrial Corp",
      possession: "Ready to Move",
      roi: "20-25%",
      amenities: ["Heavy Machinery Support", "24/7 Security", "Fire Safety", "Utilities"],
    },
    {
      id: 4,
      title: "Green Valley Apartments",
      location: "Sector Pi 2, Greater Noida",
      price: "₹75 Lakh",
      originalPrice: "₹80 Lakh",
      area: "1400 sq ft",
      type: "Residential",
      category: "residential",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      features: ["2-3 BHK", "Swimming Pool", "Gym", "Kids Play Area"],
      rating: 4.6,
      reviews: 156,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      yearBuilt: 2024,
      developer: "Green Homes",
      possession: "Ready to Move",
      roi: "10-12%",
      amenities: ["Swimming Pool", "Gym", "Garden", "Club House"],
    },
    {
      id: 5,
      title: "Skyline Residency",
      location: "Techzone 4, Greater Noida",
      price: "₹95 Lakh",
      originalPrice: "₹1 Cr",
      area: "1800 sq ft",
      type: "Residential",
      category: "residential",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      features: ["3-4 BHK", "Club House", "Security", "Power Backup"],
      rating: 4.8,
      reviews: 203,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      yearBuilt: 2025,
      developer: "Skyline Builders",
      possession: "Under Construction",
      roi: "12-15%",
      amenities: ["Rooftop Garden", "Gym", "Security", "Elevator"],
    },
    {
      id: 6,
      title: "Manufacturing Hub",
      location: "Site 4, Greater Noida",
      price: "₹55 Lakh",
      originalPrice: "₹60 Lakh",
      area: "3000 sq ft",
      type: "Industrial",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      features: ["Heavy Industry", "Rail Connectivity", "Utilities", "Crane Facility"],
      rating: 4.5,
      reviews: 45,
      bedrooms: null,
      bathrooms: null,
      parking: 8,
      yearBuilt: 2023,
      developer: "Manufacturing Ltd",
      possession: "Ready to Move",
      roi: "22-28%",
      amenities: ["Crane Support", "Rail Access", "Power Substation", "Security"],
    },
  ]

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = propertyType === "all" || property.category === propertyType
    const matchesLocation = location === "all" || property.location.toLowerCase().includes(location.toLowerCase())

    return matchesSearch && matchesType && matchesLocation
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Dream Into Realty" width={180} height={60} className="h-12 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Home
              </Link>
              <Link
                href="/properties/commercial"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Commercial Properties
              </Link>
              <Link
                href="/properties/residential"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Residential Properties
              </Link>
              <Link
                href="/properties/industrial"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Industrial Properties
              </Link>
              <Link href="/properties" className="text-purple-600 font-semibold">
                All Properties
              </Link>
            </div>

            <Button
              onClick={() => handleWhatsAppContact()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section ref={heroRef} className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-20 pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Property
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover premium properties in Greater Noida with detailed information and expert guidance
            </p>

            {/* Search and Filter Section */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-4xl mx-auto border border-white/20"
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="alpha">Alpha</SelectItem>
                    <SelectItem value="knowledge park">Knowledge Park</SelectItem>
                    <SelectItem value="surajpur">Surajpur</SelectItem>
                    <SelectItem value="techzone">Techzone</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: "Total Properties", value: "150+" },
              { icon: TrendingUp, label: "Average ROI", value: "15-25%" },
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Shield, label: "Verified Properties", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section ref={propertiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={propertiesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Available{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Properties
              </span>
            </h2>
            <p className="text-xl text-gray-600">{filteredProperties.length} properties found matching your criteria</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ y: 50, opacity: 0 }}
                animate={propertiesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <Card className="bg-white border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />

                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          property.category === "commercial"
                            ? "bg-blue-500"
                            : property.category === "residential"
                              ? "bg-green-500"
                              : "bg-orange-500"
                        } text-white border-0`}
                      >
                        {property.type}
                      </Badge>
                    </div>

                    {/* Discount Badge */}
                    {property.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white border-0">
                          Save ₹
                          {Number.parseInt(property.originalPrice.replace(/[₹,Lakh]/g, "")) -
                            Number.parseInt(property.price.replace(/[₹,Lakh]/g, ""))}{" "}
                          L
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(property.id)}
                        className={`p-2 rounded-full backdrop-blur-sm ${
                          favorites.includes(property.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/90 text-gray-700 hover:bg-white"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-current" : ""}`} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white backdrop-blur-sm"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{property.rating}</span>
                      <span className="text-white/70 text-xs">({property.reviews})</span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-gray-900 text-xl">{property.title}</CardTitle>
                        <CardDescription className="text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {property.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {property.price}
                        </div>
                        {property.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{property.originalPrice}</div>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Property Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Maximize className="w-4 h-4 text-blue-600" />
                          <span>{property.area}</span>
                        </div>
                        {property.bedrooms && (
                          <div className="flex items-center space-x-2 text-gray-700">
                            <Bed className="w-4 h-4 text-green-600" />
                            <span>{property.bedrooms} BHK</span>
                          </div>
                        )}
                        {property.bathrooms && (
                          <div className="flex items-center space-x-2 text-gray-700">
                            <Bath className="w-4 h-4 text-purple-600" />
                            <span>{property.bathrooms} Bath</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Car className="w-4 h-4 text-orange-600" />
                          <span>{property.parking} Parking</span>
                        </div>
                      </div>

                      {/* ROI and Possession */}
                      <div className="flex justify-between text-sm">
                        <div className="text-gray-700">
                          <span className="text-gray-500">ROI:</span>
                          <div className="font-semibold text-green-600">{property.roi}</div>
                        </div>
                        <div className="text-gray-700">
                          <span className="text-gray-500">Status:</span>
                          <div className="font-semibold">{property.possession}</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {property.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-gray-700 border-gray-300 text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {property.features.length > 3 && (
                          <Badge variant="outline" className="text-gray-700 border-gray-300 text-xs">
                            +{property.features.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={() =>
                              handleWhatsAppContact({
                                title: property.title,
                                price: property.price,
                                area: property.area,
                                location: property.location,
                                type: property.type,
                              })
                            }
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            asChild
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                          >
                            <Link href={`/properties/${property.id}`}>View Details</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div className="text-center mt-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 font-semibold"
            >
              Load More Properties
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-white/90 mb-8">Get personalized assistance from our real estate experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleWhatsAppContact()}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Contact via WhatsApp
                  <MessageCircle className="w-6 h-6 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
          onClick={() => handleWhatsAppContact()}
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
