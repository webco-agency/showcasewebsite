import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-light tracking-[0.2em] text-foreground">
                flefals
              </span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Where culinary artistry meets timeless elegance. Experience 
              unforgettable moments with us.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-foreground/60 group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground/60 group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground tracking-[0.15em] uppercase text-sm mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : item === "Menu" ? "/menu" : `/#${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground tracking-[0.15em] uppercase text-sm mb-6">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5PM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5PM - 9PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground tracking-[0.15em] uppercase text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@flefals.com" className="hover:text-primary transition-colors">
                  hello@flefals.com
                </a>
              </li>
              <li>
                123 Culinary Avenue
                <br />
                Downtown District
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Flefals. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
