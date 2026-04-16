"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingCall } from "@/components/floating-call"

const menuCategories = [
  {
    id: "mezze",
    name: "Mezze",
    arabic: "مقبلات",
    description: "Traditional appetizers to begin your journey",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        name: "Hummus Al Qasr",
        arabic: "حمص القصر",
        description: "Creamy chickpea dip with tahini, olive oil, and toasted pine nuts",
        price: "$12",
        tags: ["Vegetarian", "Signature"],
      },
      {
        name: "Baba Ghanoush",
        arabic: "بابا غنوج",
        description: "Smoky roasted eggplant with tahini, garlic, and pomegranate seeds",
        price: "$14",
        tags: ["Vegetarian"],
      },
      {
        name: "Falafel Platter",
        arabic: "فلافل",
        description: "Crispy herb falafel served with tahini and pickled vegetables",
        price: "$16",
        tags: ["Vegan"],
      },
      {
        name: "Kibbeh",
        arabic: "كبة",
        description: "Fried bulgur shells filled with spiced lamb and pine nuts",
        price: "$18",
        tags: ["Chef's Choice"],
      },
      {
        name: "Fattoush Salad",
        arabic: "فتوش",
        description: "Fresh garden vegetables, sumac, pomegranate molasses, crispy pita",
        price: "$14",
        tags: ["Vegan"],
      },
      {
        name: "Stuffed Vine Leaves",
        arabic: "ورق عنب",
        description: "Tender grape leaves filled with herbed rice and served warm",
        price: "$16",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "grills",
    name: "From The Grill",
    arabic: "المشويات",
    description: "Charcoal-grilled perfection",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    items: [
      {
        name: "Mixed Grill Royale",
        arabic: "مشاوي ملكية",
        description: "Selection of lamb kebab, chicken shish, kofte, with saffron rice",
        price: "$68",
        tags: ["Signature", "For Two"],
      },
      {
        name: "Lamb Ouzi",
        arabic: "أوزي",
        description: "Slow-roasted lamb shoulder with spiced rice, nuts, and raisins",
        price: "$58",
        tags: ["Chef's Choice"],
      },
      {
        name: "Shish Tawook",
        arabic: "شيش طاووق",
        description: "Marinated chicken breast skewers with garlic sauce",
        price: "$32",
        tags: [],
      },
      {
        name: "Lamb Kofta",
        arabic: "كفتة لحم",
        description: "Hand-minced lamb with herbs and spices, charcoal grilled",
        price: "$36",
        tags: [],
      },
      {
        name: "Wagyu Kebab",
        arabic: "كباب واجيو",
        description: "Premium wagyu beef kebab with sumac onions",
        price: "$52",
        tags: ["Premium"],
      },
      {
        name: "Whole Grilled Hammour",
        arabic: "هامور مشوي",
        description: "Fresh Arabian Sea fish with tahini and grilled vegetables",
        price: "$62",
        tags: ["Seafood", "Signature"],
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    arabic: "الأطباق الرئيسية",
    description: "Hearty traditional dishes",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        name: "Lamb Machboos",
        arabic: "مجبوس لحم",
        description: "Aromatic spiced rice with tender lamb and dried lime",
        price: "$42",
        tags: ["Traditional"],
      },
      {
        name: "Chicken Mansaf",
        arabic: "منسف دجاج",
        description: "Jordanian specialty with jameed sauce over rice",
        price: "$38",
        tags: ["Traditional"],
      },
      {
        name: "Lamb Tagine",
        arabic: "طاجين لحم",
        description: "Slow-cooked lamb with apricots, almonds, and Moroccan spices",
        price: "$46",
        tags: ["Chef's Choice"],
      },
      {
        name: "Seafood Sayadia",
        arabic: "صيادية",
        description: "Spiced fish with caramelized onion rice and tahini",
        price: "$44",
        tags: ["Seafood"],
      },
      {
        name: "Vegetable Moussaka",
        arabic: "مسقعة",
        description: "Layered eggplant, tomato, and chickpeas with tahini",
        price: "$28",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "rice",
    name: "Rice & Bread",
    arabic: "الأرز والخبز",
    description: "Perfect accompaniments",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        name: "Saffron Rice",
        arabic: "أرز بالزعفران",
        description: "Fragrant basmati with saffron threads and toasted almonds",
        price: "$12",
        tags: [],
      },
      {
        name: "Freekeh",
        arabic: "فريكة",
        description: "Roasted green wheat with caramelized onions",
        price: "$14",
        tags: ["Healthy"],
      },
      {
        name: "Fresh Saj Bread",
        arabic: "خبز صاج",
        description: "Thin flatbread baked on traditional dome",
        price: "$6",
        tags: [],
      },
      {
        name: "Garlic Naan",
        arabic: "نان بالثوم",
        description: "Fluffy bread brushed with garlic butter",
        price: "$8",
        tags: [],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    arabic: "الحلويات",
    description: "Sweet endings",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        name: "Kunafa",
        arabic: "كنافة",
        description: "Crispy vermicelli pastry with sweet cheese and rose syrup",
        price: "$16",
        tags: ["Signature"],
      },
      {
        name: "Umm Ali",
        arabic: "أم علي",
        description: "Egyptian bread pudding with pistachios and cream",
        price: "$14",
        tags: ["Traditional"],
      },
      {
        name: "Baklava Selection",
        arabic: "بقلاوة",
        description: "Assorted phyllo pastries with nuts and honey",
        price: "$12",
        tags: [],
      },
      {
        name: "Saffron Ice Cream",
        arabic: "آيس كريم زعفران",
        description: "House-made Persian ice cream with pistachios",
        price: "$10",
        tags: [],
      },
      {
        name: "Arabic Coffee & Dates",
        arabic: "قهوة عربية وتمر",
        description: "Traditional cardamom coffee with premium dates",
        price: "$8",
        tags: [],
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    arabic: "المشروبات",
    description: "Refreshing selections",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1974&auto=format&fit=crop",
    items: [
      {
        name: "Fresh Mint Lemonade",
        arabic: "ليموناضة بالنعناع",
        description: "Freshly squeezed lemon with crushed mint",
        price: "$8",
        tags: [],
      },
      {
        name: "Turkish Coffee",
        arabic: "قهوة تركية",
        description: "Traditional preparation with cardamom",
        price: "$6",
        tags: [],
      },
      {
        name: "Moroccan Tea",
        arabic: "شاي مغربي",
        description: "Green tea with fresh mint and orange blossom",
        price: "$6",
        tags: [],
      },
      {
        name: "Jallab",
        arabic: "جلاب",
        description: "Date and grape molasses with rose water and pine nuts",
        price: "$9",
        tags: ["Traditional"],
      },
      {
        name: "Ayran",
        arabic: "عيران",
        description: "Salted yogurt drink, refreshing and cooling",
        price: "$6",
        tags: [],
      },
    ],
  },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("mezze")

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 pattern-overlay opacity-50" />
        </div>

        {/* Decorative Frame */}
        <div className="absolute top-24 left-8 right-8 bottom-8 border border-primary/10 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Culinary Excellence</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-[0.1em] text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-2xl text-primary/60 mb-6" style={{ fontFamily: 'serif' }}>
            قائمة الطعام
          </p>
          <p className="text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            A journey through the authentic flavors of Arabia. Each dish tells a story 
            of tradition, craftsmanship, and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-24 z-30 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/60 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          {currentCategory && (
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Category Info */}
              <div className="lg:sticky lg:top-48 lg:h-fit">
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-4 border border-primary/20" />
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-3xl text-primary/60 block mb-2" style={{ fontFamily: 'serif' }}>
                      {currentCategory.arabic}
                    </span>
                    <h2 className="text-3xl font-light text-foreground tracking-wide">
                      {currentCategory.name}
                    </h2>
                    <p className="text-foreground/50 text-sm mt-2">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>

                {/* Category Quick Nav */}
                <div className="hidden lg:block">
                  <h3 className="text-xs tracking-[0.2em] text-foreground/40 uppercase mb-4">Categories</h3>
                  <div className="space-y-2">
                    {menuCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-all ${
                          activeCategory === cat.id
                            ? "text-primary bg-primary/10 border-l-2 border-primary"
                            : "text-foreground/50 hover:text-foreground hover:bg-card/50"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="lg:col-span-2">
                <div className="space-y-1">
                  {currentCategory.items.map((item, index) => (
                    <div
                      key={item.name}
                      className="group p-6 bg-card/30 hover:bg-card border border-transparent hover:border-border transition-all duration-300"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          {/* Tags */}
                          {item.tags.length > 0 && (
                            <div className="flex gap-2 mb-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`text-[10px] tracking-wider uppercase px-2 py-0.5 ${
                                    tag === "Signature" || tag === "Chef's Choice"
                                      ? "bg-primary/20 text-primary"
                                      : tag === "Premium"
                                      ? "bg-accent/20 text-accent"
                                      : "bg-secondary text-secondary-foreground"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Name */}
                          <div className="flex items-baseline gap-3 mb-2">
                            <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors tracking-wide">
                              {item.name}
                            </h3>
                            <span className="text-primary/40 text-lg" style={{ fontFamily: 'serif' }}>
                              {item.arabic}
                            </span>
                          </div>
                          
                          {/* Description */}
                          <p className="text-foreground/50 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-2xl font-light text-primary">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Decorative line */}
                      <div className="mt-4 h-px bg-gradient-to-r from-border via-transparent to-transparent group-hover:from-primary/30 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto mt-20 px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-primary">✦</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <p className="text-foreground/40 text-sm italic leading-relaxed">
            Please inform your server of any allergies or dietary restrictions. 
            All prices are subject to applicable taxes and a discretionary service charge.
            We source our ingredients from trusted local and international purveyors.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCall />
    </main>
  )
}
