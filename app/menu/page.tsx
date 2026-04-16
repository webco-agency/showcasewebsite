import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCall } from "@/components/floating-call"

const menuCategories = [
  {
    name: "Starters",
    description: "Begin your culinary journey",
    items: [
      {
        name: "Oysters on the Half Shell",
        description: "Fresh Atlantic oysters, mignonette, lemon, cocktail sauce",
        price: "$24",
      },
      {
        name: "Burrata Caprese",
        description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic",
        price: "$18",
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna, avocado, sesame, wonton crisps",
        price: "$22",
      },
      {
        name: "French Onion Soup",
        description: "Caramelized onions, beef broth, gruyère crouton",
        price: "$14",
      },
      {
        name: "Roasted Bone Marrow",
        description: "Herb gremolata, sea salt, grilled sourdough",
        price: "$19",
      },
    ],
  },
  {
    name: "Mains",
    description: "The heart of your experience",
    items: [
      {
        name: "Seared Wagyu Tenderloin",
        description: "8oz A5 wagyu, black truffle, roasted bone marrow, red wine reduction",
        price: "$78",
      },
      {
        name: "Pan-Roasted Branzino",
        description: "Mediterranean sea bass, fennel purée, citrus beurre blanc, crispy capers",
        price: "$52",
      },
      {
        name: "Handmade Tagliatelle",
        description: "Wild mushroom ragù, aged parmesan, fresh herbs, truffle oil",
        price: "$38",
      },
      {
        name: "Roasted Duck Breast",
        description: "Cherry gastrique, duck fat potatoes, wilted greens",
        price: "$48",
      },
      {
        name: "Grilled Lamb Chops",
        description: "Herb-crusted lamb, mint chimichurri, roasted vegetables",
        price: "$56",
      },
      {
        name: "Lobster Risotto",
        description: "Maine lobster, saffron arborio, mascarpone, chives",
        price: "$62",
      },
    ],
  },
  {
    name: "Sides",
    description: "Perfect accompaniments",
    items: [
      {
        name: "Truffle Fries",
        description: "Hand-cut fries, truffle oil, parmesan, herbs",
        price: "$12",
      },
      {
        name: "Grilled Asparagus",
        description: "Charred asparagus, hollandaise, lemon zest",
        price: "$14",
      },
      {
        name: "Creamed Spinach",
        description: "Baby spinach, cream, nutmeg, garlic",
        price: "$11",
      },
      {
        name: "Roasted Brussels Sprouts",
        description: "Crispy sprouts, pancetta, balsamic glaze",
        price: "$13",
      },
    ],
  },
  {
    name: "Desserts",
    description: "A sweet conclusion",
    items: [
      {
        name: "Chocolate Fondant",
        description: "Warm chocolate cake, molten center, vanilla gelato",
        price: "$16",
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla custard, caramelized sugar",
        price: "$14",
      },
      {
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
        price: "$15",
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh fruits, pastry cream, shortbread crust",
        price: "$14",
      },
    ],
  },
  {
    name: "Beverages",
    description: "Curated selections",
    items: [
      {
        name: "Signature Cocktails",
        description: "Ask your server for our seasonal creations",
        price: "$16-22",
      },
      {
        name: "Wine by the Glass",
        description: "Rotating selection of reds, whites, and rosés",
        price: "$14-28",
      },
      {
        name: "Craft Beers",
        description: "Local and imported selections",
        price: "$9-14",
      },
      {
        name: "Artisan Coffee & Tea",
        description: "Espresso, cappuccino, premium loose-leaf teas",
        price: "$6-8",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Our Offerings
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-foreground mb-6">
            The Menu
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Each dish is crafted with passion, featuring the finest seasonal 
            ingredients sourced from local artisans and trusted purveyors.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`py-16 ${
                categoryIndex !== menuCategories.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-2">
                  {category.name}
                </h2>
                <p className="text-foreground/50 text-sm tracking-wider">
                  {category.description}
                </p>
              </div>

              {/* Menu Items */}
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="group flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4">
                        <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dotted border-border/50 hidden md:block" />
                      </div>
                      <p className="text-foreground/50 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-primary text-xl font-light md:ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-foreground/40 text-sm italic">
            Please inform your server of any allergies or dietary restrictions. 
            A 20% gratuity may be added for parties of 6 or more. Prices do not 
            include applicable taxes.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCall />
    </main>
  )
}
