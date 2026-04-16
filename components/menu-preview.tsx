"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredDishes = [
  {
    name: "Lamb Ouzi",
    arabic: "أوزي",
    description: "Slow-roasted lamb shoulder with saffron rice, toasted nuts, and aromatic spices",
    price: "$58",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
  },
  {
    name: "Grilled Hammour",
    arabic: "هامور مشوي",
    description: "Fresh Arabian Sea hammour with tahini sauce and roasted vegetables",
    price: "$52",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Mixed Grill Royale",
    arabic: "مشاوي ملكية",
    description: "Premium selection of kebabs, shish tawook, and kofte with saffron rice",
    price: "$68",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Stuffed Vine Leaves",
    arabic: "ورق عنب",
    description: "Tender grape leaves filled with herbed rice and served with yogurt sauce",
    price: "$18",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  },
]

export function MenuPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase">Culinary Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Signature
              <span className="block text-primary">Creations</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 mt-8 lg:mt-0 text-foreground/70 hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-[0.2em] uppercase">View Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-background/40 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`} />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 border border-primary/30">
                  <span className="text-primary text-lg font-light">{dish.price}</span>
                </div>

                {/* Corner accents */}
                <div className={`absolute top-3 left-3 w-6 h-6 border-t border-l transition-all duration-500 ${
                  hoveredIndex === index ? "border-primary" : "border-transparent"
                }`} />
                <div className={`absolute bottom-3 right-3 w-6 h-6 border-b border-r transition-all duration-500 ${
                  hoveredIndex === index ? "border-primary" : "border-transparent"
                }`} />
              </div>

              {/* Content */}
              <div className="relative">
                <span className="text-xl text-primary/40 block mb-1" style={{ fontFamily: 'serif' }}>
                  {dish.arabic}
                </span>
                <h3 className="text-xl font-light text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-24 bg-primary/30" />
            <span className="text-primary">✦</span>
            <div className="h-px w-24 bg-primary/30" />
          </div>
          <p className="text-center text-foreground/50 max-w-xl mb-8">
            Explore our complete menu featuring over 150 authentic Middle Eastern dishes, 
            each prepared with passion and the finest ingredients.
          </p>
          <Link
            href="/menu"
            className="group relative overflow-hidden px-12 py-4 border border-primary/40 hover:border-primary transition-colors"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase text-foreground group-hover:text-primary-foreground transition-colors">
              Discover Full Menu
            </span>
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
