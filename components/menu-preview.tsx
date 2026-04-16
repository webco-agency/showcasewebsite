import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredDishes = [
  {
    name: "Seared Wagyu Tenderloin",
    description: "Black truffle, roasted bone marrow, red wine reduction",
    price: "$78",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Pan-Roasted Branzino",
    description: "Fennel purée, citrus beurre blanc, crispy capers",
    price: "$52",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Handmade Tagliatelle",
    description: "Wild mushroom ragù, aged parmesan, fresh herbs",
    price: "$38",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
  },
]

export function MenuPreview() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Culinary Creations
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Signature Dishes
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of our most celebrated creations, each crafted with 
            the finest ingredients and meticulous attention to detail.
          </p>
        </div>

        {/* Featured Dishes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary text-2xl font-light">{dish.price}</span>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">
                {dish.name}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {dish.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/menu">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.2em] uppercase text-xs px-10 py-6 group"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
