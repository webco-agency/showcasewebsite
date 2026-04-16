"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Food Critic, Gourmet Arabia",
    quote: "Al Qasr captures the soul of Middle Eastern cuisine. Every dish is a journey through centuries of culinary tradition, executed with modern precision.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Sarah Mitchell",
    role: "Travel & Lifestyle Writer",
    quote: "An oasis of authenticity in the heart of the city. The ambiance transports you to a palace, while the flavors speak of generations of culinary mastery.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Anniversary Celebration",
    quote: "We chose Al Qasr for our anniversary and it exceeded all expectations. The attention to detail, from service to presentation, was impeccable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Guest Experiences</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Words of Praise
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Discover why guests return to Al Qasr time and time again.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative bg-card border border-border hover:border-primary/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <div className="p-8 pt-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/70 leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-light tracking-wide">{testimonial.name}</p>
                    <p className="text-primary/60 text-xs tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col items-center mt-20">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-foreground text-lg font-light mb-2">4.9 out of 5</p>
          <p className="text-foreground/50 text-sm">Based on 500+ reviews</p>
        </div>
      </div>
    </section>
  )
}
