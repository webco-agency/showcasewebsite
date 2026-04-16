"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Elegant dining room",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    alt: "Grilled lamb",
    category: "Cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    alt: "Restaurant bar",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Appetizers",
    category: "Cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Private dining",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
    alt: "Fresh salad",
    category: "Cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Fine dining experience",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop",
    alt: "Signature dishes",
    category: "Cuisine",
  },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
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

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedIndex === null) return
    if (direction === "prev") {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    } else {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section ref={sectionRef} id="gallery" className="relative py-32 bg-card">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Visual Journey</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Step inside the world of Al Qasr. Experience our ambiance and culinary artistry.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={`relative ${index === 0 || index === 5 ? "aspect-square" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />
                
                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs tracking-[0.3em] text-primary uppercase mb-2">{image.category}</span>
                  <span className="text-foreground text-lg tracking-wide">{image.alt}</span>
                  <div className="w-8 h-px bg-primary mt-4" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] mx-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-center mt-6">
              <span className="text-xs tracking-[0.3em] text-primary uppercase">{galleryImages[selectedIndex].category}</span>
              <p className="text-foreground mt-2">{galleryImages[selectedIndex].alt}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-primary text-2xl font-light">{String(selectedIndex + 1).padStart(2, "0")}</span>
            <div className="w-8 h-px bg-foreground/30" />
            <span className="text-foreground/50 text-sm">{String(galleryImages.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}
    </section>
  )
}
