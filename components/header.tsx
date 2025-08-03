"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "@/components/icons"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Ghai Organisation</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Programs
            </Link>
            <Link
              href="#volunteer"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Volunteer
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="#volunteer">Volunteer</Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="#donate">Donate Now</Link>
            </Button>
          </div>

          <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                About
              </Link>
              <Link href="#programs" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                Programs
              </Link>
              <Link href="#volunteer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                Volunteer
              </Link>
              <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link href="#volunteer">Volunteer</Link>
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="#donate">Donate Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
