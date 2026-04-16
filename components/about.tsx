export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
                  alt="Chef preparing dish"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                  alt="Restaurant ambiance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="aspect-[3/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
                  alt="Fine dining experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-8 leading-tight">
              A Legacy of
              <br />
              <span className="text-primary">Culinary Excellence</span>
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Founded in 2018, Flefals emerged from a simple yet profound vision: 
                to create a sanctuary where every meal becomes a cherished memory. 
                Our journey began with a passion for authentic flavors and an 
                unwavering commitment to excellence.
              </p>
              <p>
                Today, we continue to honor that legacy, blending time-honored 
                techniques with contemporary innovation. Each dish tells a story, 
                crafted with locally-sourced ingredients and served with the warmth 
                that has become our signature.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-4xl font-light text-primary mb-2">8+</p>
                <p className="text-sm tracking-wider uppercase text-foreground/50">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="text-4xl font-light text-primary mb-2">50K</p>
                <p className="text-sm tracking-wider uppercase text-foreground/50">
                  Happy Guests
                </p>
              </div>
              <div>
                <p className="text-4xl font-light text-primary mb-2">15</p>
                <p className="text-sm tracking-wider uppercase text-foreground/50">
                  Expert Chefs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
