"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, MessageCircle, ChevronDown, Building2, Factory, Home, Search, X, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PropertyImage {
  id: string
  title: string
  location: string
  price: string
  image: string
  type: "commercial" | "residential" | "industrial"
  rating: number
}

const propertyImages: PropertyImage[] = [
  {
    id: "1",
    title: "Alpha Commercial Hub",
    location: "Alpha 1, Greater Noida",
    price: "₹45L+",
    image: "/images/greater-noida-plot.jpg",
    type: "commercial",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Tech Park Plaza",
    location: "Knowledge Park",
    price: "₹65L+",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    type: "commercial",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Industrial Gateway",
    location: "Surajpur",
    price: "₹35L+",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    type: "industrial",
    rating: 4.7,
  },
  {
    id: "4",
    title: "Green Valley Apartments",
    location: "Sector Pi 2",
    price: "₹75L+",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    type: "residential",
    rating: 4.6,
  },
  {
    id: "5",
    title: "Skyline Residency",
    location: "Techzone 4",
    price: "₹95L+",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    type: "residential",
    rating: 4.8,
  },
]

interface EnhancedNavigationProps {
  onWhatsAppContact: () => void
  onScrollToSection: (sectionId: string) => void
}

export function EnhancedNavigation({ onWhatsAppContact, onScrollToSection }: EnhancedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate property images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handlePropertyClick = (property: PropertyImage) => {
    const phoneNumber = "+919876543210"
    const message = `Hi! I'm interested in *${property.title}*

📍 *Location:* ${property.location}
💰 *Price:* ${property.price}
⭐ *Rating:* ${property.rating}/5

Please provide more details about this property including:
- Available units and floor plans
- Payment plans and financing options
- Site visit arrangements
- Documentation process

Looking forward to hearing from you!`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsPropertiesOpen(false)
  }

  return (
    <>
      {/* Enhanced Glass Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
          isScrolled ? "w-[98%] max-w-7xl mt-2" : "w-[95%] max-w-6xl mt-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`backdrop-blur-3xl bg-gradient-to-r from-white/20 via-white/15 to-white/20 border border-white/40 rounded-3xl shadow-2xl transition-all duration-700 ${
            isScrolled ? "py-3 px-6" : "py-4 px-8"
          }`}
          style={{
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.25) 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo with Property Preview */}
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  {/* Property Preview Ring */}
                  <div className="absolute -inset-1 rounded-full border-2 border-amber-400/50 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    DreamIntoRealty
                  </span>
                  <div className="text-xs text-white/70">Premium Properties</div>
                </div>
              </motion.div>

              {/* Featured Property Preview */}
              <motion.div
                className="hidden lg:flex items-center space-x-3 bg-white/10 rounded-2xl p-2 border border-white/20"
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePropertyClick(propertyImages[currentImageIndex])}
                style={{ cursor: "pointer" }}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                  <Image
                    src={propertyImages[currentImageIndex].image || "/placeholder.svg"}
                    alt={propertyImages[currentImageIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-1 left-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-sm font-semibold">{propertyImages[currentImageIndex].title}</div>
                  <div className="text-xs text-white/70 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {propertyImages[currentImageIndex].location}
                  </div>
                </div>
                <div className="text-amber-400 font-bold text-sm">{propertyImages[currentImageIndex].price}</div>
              </motion.div>
            </div>

            {/* Centered Navigation Menu */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              <motion.button
                onClick={() => onScrollToSection("home")}
                className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                Home
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>

              {/* Enhanced Properties Dropdown with Images */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                  className="text-white/90 hover:text-white transition-all duration-300 font-medium flex items-center space-x-1 relative group"
                  whileHover={{ y: -2 }}
                >
                  <span>Properties</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPropertiesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>

                {/* Enhanced Dropdown with Property Images */}
                <AnimatePresence>
                  {isPropertiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {/* Property Categories */}
                      <div className="p-4 border-b border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-white font-semibold">Browse Properties</h3>
                          <button onClick={() => setIsPropertiesOpen(false)} className="text-white/70 hover:text-white">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            {
                              icon: Building2,
                              label: "Commercial",
                              href: "/properties/commercial",
                              color: "bg-blue-500",
                            },
                            {
                              icon: Factory,
                              label: "Industrial",
                              href: "/properties/industrial",
                              color: "bg-orange-500",
                            },
                            {
                              icon: Home,
                              label: "Residential",
                              href: "/properties/residential",
                              color: "bg-green-500",
                            },
                          ].map((category, index) => (
                            <Link
                              key={index}
                              href={category.href}
                              className="flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-colors"
                              onClick={() => setIsPropertiesOpen(false)}
                            >
                              <div
                                className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center mb-2`}
                              >
                                <category.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-xs">{category.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Featured Properties with Images */}
                      <div className="p-4">
                        <h4 className="text-white/80 text-sm font-medium mb-3">Featured Properties</h4>
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                          {propertyImages.slice(0, 4).map((property) => (
                            <motion.div
                              key={property.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handlePropertyClick(property)}
                              className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 cursor-pointer transition-colors"
                            >
                              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={property.image || "/placeholder.svg"}
                                  alt={property.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <Badge
                                  className={`absolute top-1 left-1 text-xs px-1 py-0 ${
                                    property.type === "commercial"
                                      ? "bg-blue-500"
                                      : property.type === "residential"
                                        ? "bg-green-500"
                                        : "bg-orange-500"
                                  }`}
                                >
                                  {property.type.charAt(0).toUpperCase()}
                                </Badge>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white text-sm font-medium truncate">{property.title}</div>
                                <div className="text-white/60 text-xs flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {property.location}
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-amber-400 text-sm font-bold">{property.price}</span>
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-white/70 text-xs">{property.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <Link
                          href="/properties"
                          className="block text-center text-amber-400 hover:text-amber-300 text-sm font-medium mt-3 py-2 border-t border-white/10"
                          onClick={() => setIsPropertiesOpen(false)}
                        >
                          View All Properties →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={() => onScrollToSection("contact")}
                className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                Contact Us
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </div>

            {/* WhatsApp Button with Property Count */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-white/80 text-xs">150+ Properties</span>
                <span className="text-amber-400 text-xs font-semibold">Available Now</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onWhatsAppContact}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-6 py-2 flex items-center space-x-2 shadow-lg border border-green-400/30 relative"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                  {/* Notification Dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                className="text-white/90 hover:text-white flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Browse Properties</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPropertiesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className="text-amber-400 text-sm font-semibold">150+ Available</div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Property Overlay */}
      <AnimatePresence>
        {isPropertiesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsPropertiesOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-white/20 p-6 mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                {propertyImages.slice(0, 4).map((property) => (
                  <motion.div
                    key={property.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handlePropertyClick(property)}
                    className="bg-white/10 rounded-xl p-3 cursor-pointer"
                  >
                    <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-white text-sm font-medium truncate">{property.title}</div>
                    <div className="text-amber-400 text-sm font-bold">{property.price}</div>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/properties"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold"
                onClick={() => setIsPropertiesOpen(false)}
              >
                View All Properties
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
