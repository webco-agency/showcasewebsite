"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="Elegant restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Est. 2018
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.1em] text-foreground mb-8 leading-none">
          flefals
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
          Where culinary artistry meets timeless elegance. Experience an unforgettable 
          journey through flavors crafted with passion and precision.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs px-10 py-6"
          >
            Reserve Your Table
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 tracking-[0.2em] uppercase text-xs px-10 py-6"
          >
            Explore Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-foreground/50">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-foreground/50" />
      </div>
    </section>
  )
}
