"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"

export function FloatingCall() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Expanded Card */}
      <div 
        className={`absolute bottom-full right-0 mb-4 bg-card border border-border p-6 w-72 transition-all duration-300 ${
          isExpanded ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsExpanded(false)}
          className="absolute top-3 right-3 text-foreground/40 hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
            <span className="text-primary">ق</span>
          </div>
          <div>
            <h3 className="text-foreground text-sm font-light tracking-wide">Al Qasr</h3>
            <p className="text-primary/60 text-xs tracking-wider">Reservations</p>
          </div>
        </div>
        
        <p className="text-foreground/50 text-sm mb-4 leading-relaxed">
          Ready to experience authentic Middle Eastern cuisine? Call us now to reserve your table.
        </p>
        
        <a
          href="tel:+1234567890"
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          +1 (234) 567-890
        </a>
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-foreground/30 text-xs text-center">
            Open daily from 5PM - 12AM
          </p>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-all duration-300"
        aria-label="Call us"
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-primary animate-ping opacity-20" />
        
        {/* Icon */}
        <Phone className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-foreground/30" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-foreground/30" />
      </button>
    </div>
  )
}
