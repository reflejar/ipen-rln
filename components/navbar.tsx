"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-violet-300 border-2 border-black rounded-full px-4 py-2">
              <span className="font-bold text-black text-sm">LOGO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="#" 
                className="text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link 
                href="#" 
                className="text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200"
              >
                Artículos
              </Link>
              <Link 
                href="#" 
                className="text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200"
              >
                Sobre nosotros
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200">
              Sumate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black hover:text-violet-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}