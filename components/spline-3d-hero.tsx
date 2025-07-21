"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Spline3DHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
          <motion.div
            className="text-white text-xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading 3D Experience...
          </motion.div>
        </div>
      )}

      {/* 3D Spline Scene */}
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Try Spline embed first */}
        <iframe
          src="https://my.spline.design/untitled-7d8e8c4c9c6c4c4b8b5c5c5c5c5c5c5c"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ border: "none" }}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // Fallback to CSS 3D animation
            setIsLoaded(true)
          }}
        />
      </motion.div>

      {/* Fallback 3D CSS Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50">
        {/* 3D Building Complex */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end justify-center space-x-6 perspective-1000">
          {/* Main Tower */}
          <motion.div
            className="relative"
            initial={{ y: 200, rotateY: -15 }}
            animate={{ y: 0, rotateY: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-20 h-80 bg-gradient-to-t from-amber-600/30 to-amber-400/60 backdrop-blur-sm border border-amber-400/40 relative transform rotateY-10">
              {/* Building Details */}
              <div className="absolute inset-2 grid grid-cols-3 gap-1">
                {[...Array(36)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-amber-300/40 rounded-sm"
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      backgroundColor: [
                        "rgba(252, 211, 77, 0.4)",
                        "rgba(245, 158, 11, 0.8)",
                        "rgba(252, 211, 77, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
              {/* Antenna */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-amber-400/60"></div>
            </div>
          </motion.div>

          {/* Side Buildings */}
          {[
            { height: "h-48", width: "w-14", delay: 0.5, rotate: "rotateY-5" },
            { height: "h-64", width: "w-16", delay: 0.3, rotate: "rotateY-8" },
            { height: "h-40", width: "w-12", delay: 0.7, rotate: "rotateY-3" },
            { height: "h-56", width: "w-14", delay: 0.4, rotate: "rotateY-6" },
          ].map((building, i) => (
            <motion.div
              key={i}
              className={`${building.height} ${building.width} bg-gradient-to-t from-slate-600/30 to-slate-400/50 backdrop-blur-sm border border-slate-400/30 relative transform ${building.rotate}`}
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: building.delay, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-1 grid grid-cols-2 gap-1">
                {[...Array(12)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="bg-blue-300/30 rounded-sm"
                    animate={{ opacity: [0.1, 0.6, 0.1] }}
                    transition={{ duration: 4, delay: j * 0.2, repeat: Number.POSITIVE_INFINITY }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, -60, -30],
                x: [-10, 10, -10],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Ground Reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-400/10 to-transparent"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
    </div>
  )
}
