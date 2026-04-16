"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/98 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top decorative line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center gap-3">
            <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
              <span className="text-primary text-lg">ق</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl tracking-[0.3em] text-foreground font-light">
                AL QASR
              </span>
              <span className="text-[10px] tracking-[0.4em] text-primary/60 uppercase">
                Fine Dining
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs tracking-[0.25em] uppercase text-foreground/70 hover:text-primary transition-colors duration-500 hover-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+1234567890"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs tracking-widest">+1 234 567 890</span>
            </a>
            <div className="h-6 w-px bg-border" />
            <Link
              href="/#contact"
              className="relative overflow-hidden group px-8 py-3 border border-primary/40 hover:border-primary transition-colors"
            >
              <span className="relative z-10 text-xs tracking-[0.25em] uppercase text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                Reserve
              </span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "97px" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl tracking-[0.3em] uppercase text-foreground/80 hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px w-24 bg-primary/30 my-4" />
          <a href="tel:+1234567890" className="flex items-center gap-3 text-primary">
            <Phone className="w-5 h-5" />
            <span className="tracking-widest">+1 234 567 890</span>
          </a>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-12 py-4 border border-primary text-primary tracking-[0.25em] uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </nav>
  )
}
