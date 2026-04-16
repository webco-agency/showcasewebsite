"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    number: "01",
    title: "Heritage Recipes",
    description: "Authentic recipes passed down through generations, preserving the essence of Middle Eastern cuisine.",
  },
  {
    number: "02",
    title: "Premium Ingredients",
    description: "We source the finest spices from souks and the freshest ingredients from trusted purveyors.",
  },
  {
    number: "03",
    title: "Master Chefs",
    description: "Our culinary team brings decades of experience from renowned kitchens across the Arab world.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/30" />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
                alt="Chef preparing dishes"
                className="w-full h-full object-cover img-hover-gold"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-primary/20 pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 md:right-12 bg-card p-8 border border-border">
              <div className="flex gap-8">
                <div className="text-center">
                  <span className="block text-4xl font-light text-primary">38</span>
                  <span className="text-xs tracking-[0.2em] text-foreground/50 uppercase">Years</span>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <span className="block text-4xl font-light text-primary">150+</span>
                  <span className="text-xs tracking-[0.2em] text-foreground/50 uppercase">Dishes</span>
                </div>
              </div>
            </div>

            {/* Small Floating Image */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 border border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                alt="Spices"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase">Our Story</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              A Legacy of
              <span className="block text-primary">Culinary Excellence</span>
            </h2>

            {/* Description */}
            <p className="text-foreground/60 leading-relaxed mb-12 text-lg">
              Founded in 1985, Al Qasr began as a family dream to bring the authentic 
              flavors of the Middle East to the world. Today, we continue that legacy, 
              honoring time-tested traditions while embracing culinary innovation.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div 
                  key={feature.number}
                  className="group flex gap-6 items-start hover:bg-card/50 p-4 -m-4 transition-colors"
                >
                  <span className="text-3xl font-light text-primary/30 group-hover:text-primary transition-colors">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-lg text-foreground mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
