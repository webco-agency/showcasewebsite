"use client"

import { Phone } from "lucide-react"

export function FloatingCall() {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 group-hover:animate-pulse" />
      <span className="absolute right-full mr-3 bg-background text-foreground text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Call Now
      </span>
    </a>
  )
}
