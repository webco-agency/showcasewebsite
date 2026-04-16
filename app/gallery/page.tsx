"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCall } from "@/components/floating-call"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "interior", label: "Interior" },
  { id: "cuisine", label: "Cuisine" },
  { id: "events", label: "Events" },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Main dining hall",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    alt: "Grilled lamb",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    alt: "Bar lounge",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Mezze platter",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Private dining",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
    alt: "Fresh salad",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Fine dining setup",
    category: "events",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop",
    alt: "Signature dishes",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop",
    alt: "Chef at work",
    category: "events",
  },
  {
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    alt: "Grilled fish",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2070&auto=format&fit=crop",
    alt: "Mixed grill",
    category: "cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop",
    alt: "Celebration dinner",
    category: "events",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedIndex === null) return
    if (direction === "prev") {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1)
    } else {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Gallery"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Visual Journey</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-[0.1em] text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-2xl text-primary/60 mb-6" style={{ fontFamily: 'serif' }}>
            معرض الصور
          </p>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            Explore the beauty of Al Qasr through our collection of images.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex justify-center gap-4 flex-wrap">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/60 hover:border-primary/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden cursor-pointer ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className={`relative ${index % 5 === 0 ? "aspect-square" : "aspect-[4/5]"} overflow-hidden`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-foreground text-lg tracking-wide text-center px-4">{image.alt}</span>
                    <div className="w-8 h-px bg-primary mt-4" />
                  </div>

                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-5 h-5" />
          </button>

          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-center mt-6">
              <p className="text-foreground">{filteredImages[selectedIndex].alt}</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-primary text-2xl font-light">{String(selectedIndex + 1).padStart(2, "0")}</span>
            <div className="w-8 h-px bg-foreground/30" />
            <span className="text-foreground/50 text-sm">{String(filteredImages.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}

      <Footer />
      <FloatingCall />
    </main>
  )
}
