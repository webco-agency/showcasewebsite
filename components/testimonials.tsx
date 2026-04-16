import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    quote: "An extraordinary dining experience. Every dish is a masterpiece, and the ambiance is simply unmatched in the city.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Regular Guest",
    quote: "Flefals has become our go-to for special occasions. The attention to detail and impeccable service never disappoints.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Wedding Anniversary",
    quote: "The perfect setting for our anniversary dinner. From the moment we walked in, everything was absolutely perfect.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Guest Experiences
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            What They Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-border hover:border-primary/30 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="text-foreground font-medium">{testimonial.name}</p>
                <p className="text-foreground/50 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
