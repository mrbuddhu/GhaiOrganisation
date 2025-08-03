import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, HandHeart } from "@/components/icons"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Empowering Lives,
                <span className="text-orange-500"> Building Hope</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Ghai Organisation is dedicated to uplifting underprivileged communities across India through education,
                healthcare, and sustainable development programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="#donate">
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#volunteer">Join as Volunteer</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50,000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1,200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <HandHeart className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Programs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Children studying in rural India"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-orange-500">₹2.5 Cr+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Funds Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
