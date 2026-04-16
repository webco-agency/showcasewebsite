"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "reservations@alqasr.com",
    href: "mailto:reservations@alqasr.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Heritage Boulevard, Downtown",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sun: 5PM - 12AM",
    href: null,
  },
]

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="relative py-32">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Content */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary uppercase">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              Visit
              <span className="block text-primary">Al Qasr</span>
            </h2>

            <p className="text-foreground/50 leading-relaxed mb-12">
              Experience the warmth of Arabian hospitality. Whether for an intimate 
              dinner or a grand celebration, we await the pleasure of your company.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="group flex items-start gap-4 p-4 bg-card/50 border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase block mb-1">
                        {item.label}
                      </span>
                      <span className="text-foreground text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={index} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="group relative overflow-hidden px-8 py-4 bg-primary text-primary-foreground inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-4 h-4" />
                <span className="text-xs tracking-[0.2em] uppercase relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#"
                className="group px-8 py-4 border border-foreground/20 hover:border-primary inline-flex items-center justify-center gap-3 transition-colors"
              >
                <span className="text-xs tracking-[0.2em] uppercase text-foreground">Reserve Online</span>
                <ArrowRight className="w-4 h-4 text-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative h-full min-h-[500px]">
              {/* Map Container */}
              <div className="absolute inset-0 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368505617!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) saturate(0.8)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Qasr Restaurant Location"
                />
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

              {/* Address Card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-background/95 backdrop-blur-sm p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary">ق</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-foreground tracking-wide">Al Qasr</h3>
                    <span className="text-xs text-primary/60 tracking-widest">Restaurant</span>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  123 Heritage Boulevard<br />
                  Downtown District, NY 10001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.2em] text-primary hover:text-foreground transition-colors uppercase"
                >
                  Get Directions
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
