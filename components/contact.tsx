import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-8">
              Visit Us Today
            </h2>
            <p className="text-foreground/60 mb-12 leading-relaxed">
              We would love to welcome you to Flefals. Whether you&apos;re planning 
              a romantic dinner, a business meeting, or a special celebration, 
              our team is here to make it memorable.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-foreground/50 text-sm">Call Us</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@flefals.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-foreground/50 text-sm">Email Us</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    hello@flefals.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground/50 text-sm">Location</p>
                  <p className="text-foreground">
                    123 Culinary Avenue, Downtown
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground/50 text-sm">Opening Hours</p>
                  <p className="text-foreground">
                    Mon - Sun: 5:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1234567890">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] uppercase text-xs px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 tracking-[0.2em] uppercase text-xs px-8 py-6"
              >
                Make Reservation
              </Button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-muted overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368505617!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flefals Restaurant Location"
              />
            </div>
            {/* Overlay with address card */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-6 border border-border">
              <h3 className="text-lg font-light text-foreground mb-2">Flefals Restaurant</h3>
              <p className="text-foreground/60 text-sm">
                123 Culinary Avenue, Downtown District
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
