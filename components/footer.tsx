import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "@/components/icons"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Ghai Organisation</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Empowering communities across India through education, healthcare, and sustainable development programs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                info@ghaiorganisation.org
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                New Delhi, India
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#volunteer"
                  className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Clean Water
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Skill Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Theme</h3>
              <DarkModeToggle />
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 dark:text-gray-400 text-sm">
                © 2024 Ghai Organisation. All rights reserved. | Registered under Section 80G
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
                Built with ❤️ by{" "}
                <Link
                  href="https://sanganak.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                >
                  Sanganak - #1 Premium IT Boutique
                </Link>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-500 transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
