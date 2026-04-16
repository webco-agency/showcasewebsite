import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

const hours = [
  { days: "Monday - Thursday", time: "5PM - 11PM" },
  { days: "Friday - Saturday", time: "5PM - 12AM" },
  { days: "Sunday", time: "5PM - 10PM" },
]

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Main Footer */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
                <span className="text-primary text-lg">ق</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl tracking-[0.3em] text-foreground font-light">
                  AL QASR
                </span>
              </div>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Where ancient culinary traditions meet contemporary elegance. 
              A journey through the authentic flavors of Arabia.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-foreground uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              Navigate
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/50 hover:text-primary transition-colors text-sm tracking-wider hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-foreground uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              Hours
            </h4>
            <ul className="space-y-4">
              {hours.map((item) => (
                <li key={item.days} className="flex flex-col text-sm">
                  <span className="text-foreground/50 tracking-wider">{item.days}</span>
                  <span className="text-primary">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-foreground uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:reservations@alqasr.com" 
                  className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>reservations@alqasr.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Heritage Boulevard<br />
                  Downtown District<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Al Qasr. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs tracking-wider text-foreground/30">
            <span className="text-primary/60">✦</span>
            <span>Crafted with passion</span>
            <span className="text-primary/60">✦</span>
          </div>
          <div className="flex gap-6 text-xs tracking-wider text-foreground/30">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
