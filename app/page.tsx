import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuPreview } from "@/components/menu-preview"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingCall } from "@/components/floating-call"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCall />
    </main>
  )
}
