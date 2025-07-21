"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Search, Heart, Clock, Mail, Phone, MapPin, Menu, X, MessageCircle, Send, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DreamIntoRealtyHome() {
  const [searchLocation, setSearchLocation] = useState("")
  const [searchType, setSearchType] = useState("For Sale")
  const [activeTab, setActiveTab] = useState("New projects")
  const [favorites, setFavorites] = useState<number[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false)
  const [sidebarFormData, setSidebarFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    enquiry: "",
    message: "",
  })

  const aboutRef = useRef(null)
  const propertiesRef = useRef(null)
  const contactRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true })
  const propertiesInView = useInView(propertiesRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  const handleWhatsAppContact = (propertyDetails?: any) => {
    const phoneNumber = "+919758806569"
    let message = ""

    if (propertyDetails) {
      message = `Hi! I'm interested in *${propertyDetails.title}*

📍 *Location:* ${propertyDetails.location}
💰 *Price:* ${propertyDetails.price}
🏠 *Details:* ${propertyDetails.beds} beds • ${propertyDetails.baths} baths • ${propertyDetails.sqft} sqft

Please provide more details about this property.`
    } else {
      message = "Hi! I'm interested in Greater Noida properties. Can you help me?"
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSidebarFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Quick Contact Inquiry:
Name: ${sidebarFormData.name}
Phone: ${sidebarFormData.phone}
Email: ${sidebarFormData.email}
Message: ${sidebarFormData.message}`

    const phoneNumber = "+919758806569"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form and close sidebar
    setSidebarFormData({ name: "", phone: "", email: "", message: "" })
    setIsContactSidebarOpen(false)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleSearch = () => {
    // Navigate to properties page with search params
    const params = new URLSearchParams({
      type: searchType.toLowerCase().replace(" ", ""),
      location: searchLocation,
    })
    window.location.href = `/properties?${params.toString()}`
  }

  const properties = [
    {
      id: 1,
      price: "₹450,000",
      beds: 4,
      baths: 1,
      sqft: 1931,
      ecoFriendly: true,
      timeAgo: "2years ago",
      title: "Plot 16 Chief Nwuke Street",
      subtitle: "Trans Amadi Industrial Layout",
      location: "Alpha 1, Greater Noida",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      type: "commercial",
    },
    {
      id: 2,
      price: "₹250,000",
      beds: 7,
      baths: 3,
      sqft: 1334,
      ecoFriendly: true,
      timeAgo: "3years ago",
      title: "44, Arinola Street, Ori Okuta.",
      subtitle: "Ikorodu",
      location: "Knowledge Park, Greater Noida",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      isNew: true,
      type: "residential",
    },
    {
      id: 3,
      price: "₹195,000",
      beds: 2,
      baths: 2,
      sqft: 1000,
      ecoFriendly: true,
      timeAgo: "3years ago",
      title: "5 Olaide Tomori Street, off",
      subtitle: "Simbiat Abiola Road, Ikeja",
      location: "Surajpur, Greater Noida",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      isNew: true,
      type: "industrial",
    },
    {
      id: 4,
      price: "₹450,000",
      beds: 4,
      baths: 1,
      sqft: 1931,
      ecoFriendly: true,
      timeAgo: "2years ago",
      title: "Modern Villa Complex",
      subtitle: "Alpha Commercial Belt",
      location: "Alpha 2, Greater Noida",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      type: "residential",
    },
    {
      id: 5,
      price: "₹250,000",
      beds: 7,
      baths: 3,
      sqft: 1334,
      ecoFriendly: true,
      timeAgo: "3years ago",
      title: "Luxury Apartment",
      subtitle: "Knowledge Park",
      location: "Techzone 4, Greater Noida",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      isNew: true,
      type: "commercial",
    },
    {
      id: 6,
      price: "₹195,000",
      beds: 2,
      baths: 2,
      sqft: 1000,
      ecoFriendly: true,
      timeAgo: "3years ago",
      title: "Garden View Home",
      subtitle: "Sector Pi Greater Noida",
      location: "Sector Pi, Greater Noida",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      badge: "FOR SALE",
      isNew: true,
      type: "residential",
    },
  ]

  // Filter properties based on active tab
  const filteredProperties = properties.filter((property) => {
    if (activeTab === "New projects") return property.isNew
    return property.type === activeTab
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Contact Form Inquiry:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Enquiry: ${formData.enquiry}
Message: ${formData.message}`

    const phoneNumber = "+919758806569"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Enhanced with Glass Effect and Contact Button */}
      <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/dream-into-realty-logo.jpeg"
                  alt="Dream Into Realty"
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
                {/* Logo glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation with Glass Cards */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-bold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transform"
              >
                Home
              </Link>
              <Link
                href="#properties"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-bold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transform"
              >
                New projects
              </Link>
              <Link
                href="/properties/industrial"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-bold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transform"
              >
                Industrial Properties
              </Link>
              <Link
                href="/properties/residential"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-bold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transform"
              >
                Residential Properties
              </Link>
              <Link
                href="/properties/commercial"
                className="text-white hover:text-yellow-400 transition-all duration-300 font-bold px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transform"
              >
                Commercial properties
              </Link>
            </div>

            {/* Contact Button and Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Contact Button */}
              <motion.button
                onClick={() => setIsContactSidebarOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg border border-purple-400/30 flex items-center space-x-2 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Contact Us</span>
              </motion.button>

              {/* Mobile menu button with glass effect */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-yellow-400 transition-colors p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10 rounded-b-2xl mt-2"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 block px-4 py-3 rounded-xl text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#properties"
                  className="text-white hover:text-yellow-400 block px-4 py-3 rounded-xl text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  New projects
                </Link>
                <Link
                  href="/properties/industrial"
                  className="text-white hover:text-yellow-400 block px-4 py-3 rounded-xl text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Industrial Properties
                </Link>
                <Link
                  href="/properties/residential"
                  className="text-white hover:text-yellow-400 block px-4 py-3 rounded-xl text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Residential Properties
                </Link>
                <Link
                  href="/properties/commercial"
                  className="text-white hover:text-yellow-400 block px-4 py-3 rounded-xl text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Commercial properties
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Contact Sidebar */}
      <AnimatePresence>
        {isContactSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Get In Touch</h2>
                    <p className="text-white/80">Let's discuss your property needs</p>
                  </div>
                  <button
                    onClick={() => setIsContactSidebarOpen(false)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="p-6">
                {/* Quick Contact Info */}
                <div className="mb-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us Now</h3>
                      <p className="text-purple-600 font-medium">+91 9758806569</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <button
                        onClick={() => handleWhatsAppContact()}
                        className="text-green-600 font-medium hover:text-green-700 transition-colors"
                      >
                        Chat with us instantly
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>

                  <form onSubmit={handleSidebarFormSubmit} className="space-y-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Your full name"
                        value={sidebarFormData.name}
                        onChange={(e) => setSidebarFormData({ ...sidebarFormData, name: e.target.value })}
                        className="pl-12 bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 h-12 rounded-xl"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Your phone number"
                        value={sidebarFormData.phone}
                        onChange={(e) => setSidebarFormData({ ...sidebarFormData, phone: e.target.value })}
                        className="pl-12 bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 h-12 rounded-xl"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={sidebarFormData.email}
                        onChange={(e) => setSidebarFormData({ ...sidebarFormData, email: e.target.value })}
                        className="pl-12 bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 h-12 rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Tell us about your property requirements..."
                        value={sidebarFormData.message}
                        onChange={(e) => setSidebarFormData({ ...sidebarFormData, message: e.target.value })}
                        className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 min-h-[120px] rounded-xl resize-none"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose Us?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• RERA Approved Properties</li>
                    <li>• No Hidden Charges</li>
                    <li>• Expert Guidance</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section with Updated Text */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-background.png" alt="Luxury Modern House" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              INVEST IN THE FUTURE OF{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                GREATER NOIDA
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                YAMUNA EXPRESSWAY
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover the Advantages of Luxury Homes with Our Premium Real Estate Agency.
            </p>
          </motion.div>

          {/* Smart Search Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 max-w-4xl mx-auto shadow-2xl flex items-center border border-white/20"
          >
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger className="border-none bg-transparent text-white font-medium min-w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="For Sale">For Sale</SelectItem>
                <SelectItem value="For Rent">For Rent</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 px-4">
              <Input
                placeholder="Enter an address, city, neighborhood, or ZIP code in delhi ncr..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="border-none bg-transparent text-white placeholder:text-white/70 focus:ring-0"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl p-3 h-12 w-12"
            >
              <Search className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-medium text-purple-600 mb-4 flex items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mr-4"></div>
                WHO WE ARE
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Discover Luxury Living with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dream Into Realty
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dream Into Realty is a premium real estate agency specializing in luxurious properties and homes in
                Greater Noida, Yamuna near Delhi-NCR. We offer a comprehensive range of properties, including
                commercial, residential, and industrial spaces.
              </p>

              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg flex items-center font-semibold">
                Our Company
                <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/luxury-villa-exterior.png"
                    alt="Luxury Property"
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" ref={propertiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={propertiesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Explore our properties{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Near You
              </span>
            </h2>

            {/* Property Tabs */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {["New projects", "commercial", "industrial", "residential"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
                    activeTab === tab
                      ? "text-purple-600 border-purple-600"
                      : "text-gray-500 border-transparent hover:text-purple-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ y: 50, opacity: 0 }}
                animate={propertiesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />

                    {/* Price and Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg">{property.price}</div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                        {property.badge}
                      </Badge>
                    </div>

                    {/* New Badge */}
                    {property.isNew && (
                      <Badge className="absolute top-4 right-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                        New
                      </Badge>
                    )}

                    {/* Heart Icon */}
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(property.id) ? "text-red-500 fill-current" : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>

                  <CardContent className="p-6">
                    {/* Property Details */}
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span>{property.beds} beds</span>
                      <span className="mx-2">•</span>
                      <span>{property.baths} baths</span>
                      <span className="mx-2">•</span>
                      <span>{property.sqft} sqft</span>
                      {property.ecoFriendly && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-green-600 font-medium">Eco-friendly</span>
                        </>
                      )}
                    </div>

                    {/* Time */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {property.timeAgo}
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{property.subtitle}</p>

                    {/* Contact Button */}
                    <Button
                      onClick={() => handleWhatsAppContact(property)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                    >
                      Contact for Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Properties Button */}
          <div className="text-center mt-12">
            <Link href="/properties">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Google Maps */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={contactInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 shadow-xl border-0">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full name*</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone number*</label>
                      <Input
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What is your enquiry about?*</label>
                    <Select
                      value={formData.enquiry}
                      onValueChange={(value) => setFormData({ ...formData, enquiry: value })}
                    >
                      <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Properties</SelectItem>
                        <SelectItem value="residential">Residential Properties</SelectItem>
                        <SelectItem value="industrial">Industrial Properties</SelectItem>
                        <SelectItem value="investment">Investment Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional information*</label>
                    <Textarea
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information with Google Maps */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={contactInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Get in touch to schedule a visit to your{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      new house
                    </span>
                  </h2>
                  <p className="text-gray-600">
                    Kindly fill this form with your details about your inquiries and we would respond your inquiry
                    shortly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Send an email</h3>
                      <p className="text-purple-600 font-medium">contactdreamintorealty@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Give us a call</h3>
                      <p className="text-purple-600 font-medium">+91 9758806569</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office address</h3>
                      <p className="text-purple-600 font-medium">
                        NUMBER- 505 5th floor SL TOWER alpha - 1 commercial belt greater noida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Working hours</h3>
                      <p className="text-purple-600 font-medium">anytime of convenience</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Find us on the map</h3>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="Dream Into Realty"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 mb-4">Your trusted partner in Greater Noida real estate investments.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <div className="space-y-2 text-white/80">
                <Link href="/" className="block hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/properties" className="block hover:text-white transition-colors">
                  Properties
                </Link>
                <Link href="#contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-white/80">
                <Link href="#" className="block hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Projects
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-white/80">
                <Link href="#" className="block hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Contact Support
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2013 Dream Into Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
