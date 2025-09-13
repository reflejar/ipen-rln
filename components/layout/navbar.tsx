"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-0 right-0 mx-auto w-10/12 bg-white border-b-2 z-50 rounded-full shadow-[5px_5px_0px_rgba(0,0,0,0.9)]  md:h-nav h-navMobile  flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="">
              <Image
                src="/img/logo3_transparent.png"
                width={0}
                height={0}
                className="w-24"
                sizes="100vw"
                alt="logo reescribiendo la narrativa"
              />
              {/* <span className="font-bold text-black text-sm">LOGO</span> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200 ${
                  pathname !== "/" ? "line-through" : ""
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/articulos"
                className={`text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200 ${
                  pathname !== "/articulos" ? "line-through" : ""
                }`}
              >
                Artículos
              </Link>
              <Link
                href="/sobre"
                className={`text-black hover:text-violet-600 font-medium text-sm transition-colors duration-200 ${
                  pathname !== "/sobre" ? "line-through" : ""
                }`}
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
