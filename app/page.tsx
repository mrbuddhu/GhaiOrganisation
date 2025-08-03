import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Impact } from "@/components/impact"
import { Donation } from "@/components/donation"
import { Volunteer } from "@/components/volunteer"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Donation />
        <Volunteer />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
