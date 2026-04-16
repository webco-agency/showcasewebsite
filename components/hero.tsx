"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Play } from "lucide-react"

const heroImages = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Luxurious dining"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 pattern-overlay" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-primary/20 pointer-events-none" />
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-primary" />

      {/* Left Side Info */}
      <div 
        className={`hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-8 transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] text-primary/70 uppercase rotate-180 [writing-mode:vertical-rl]">
            Since 1985
          </span>
        </div>
      </div>

      {/* Right Side Social */}
      <div 
        className={`hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        {["Fb", "Ig", "Tw"].map((social, index) => (
          <a
            key={social}
            href="#"
            className="text-xs tracking-widest text-foreground/40 hover:text-primary transition-colors rotate-90"
          >
            {social}
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Arabic Ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary text-2xl">✦</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>

          {/* Subtitle */}
          <p className="text-primary tracking-[0.5em] uppercase text-xs md:text-sm mb-6">
            Authentic Middle Eastern Cuisine
          </p>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light tracking-[0.15em] text-foreground leading-none mb-4">
            AL QASR
          </h1>

          {/* Arabic Script */}
          <p className="text-3xl md:text-4xl text-primary/60 mb-8 font-normal" style={{ fontFamily: 'serif' }}>
            القصر
          </p>

          {/* Tagline */}
          <p className="text-foreground/50 text-sm md:text-base tracking-wider max-w-md mx-auto leading-relaxed mb-12">
            Where ancient culinary traditions meet contemporary elegance. 
            A journey through the flavors of Arabia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/menu"
              className="group relative px-12 py-4 bg-primary text-primary-foreground overflow-hidden"
            >
              <span className="relative z-10 text-xs tracking-[0.3em] uppercase">
                Explore Menu
              </span>
              <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-3 px-8 py-4 border border-foreground/20 hover:border-primary transition-colors"
            >
              <div className="w-8 h-8 border border-primary/50 flex items-center justify-center group-hover:bg-primary transition-all">
                <Play className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-foreground/70 group-hover:text-foreground transition-colors">
                Virtual Tour
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 py-6 bg-background/50 backdrop-blur-sm border-t border-border/30 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase">Location</span>
            <span className="text-sm text-foreground/70">Downtown District</span>
          </div>
          <div className="h-8 w-px bg-border/50" />
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase">Hours</span>
            <span className="text-sm text-foreground/70">5PM - 12AM Daily</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <span className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
        </div>

        {/* Image Indicators */}
        <div className="hidden md:flex items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-8 h-px transition-all duration-300 ${
                currentImage === index ? "bg-primary w-12" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
