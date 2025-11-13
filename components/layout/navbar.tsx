"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-3 left-0 right-0 mx-auto w-10/12 bg-white border-b-2 z-50  shadow-[5px_5px_0px_rgba(0,0,0,0.9)]  md:h-nav ${
        menuOpen ? "rounded-3xl" : "rounded-full h-navMobile"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className=" relative flex items-center flex-wrap justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <Image
                src="/img/logo3_transparent.png"
                width={0}
                height={0}
                className="w-24"
                sizes="100vw"
                alt="logo reescribiendo la narrativa"
              />
              {/* <span className="font-bold text-black text-sm">LOGO</span> */}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" onClick={handleMenu}>
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

          {/* Navigation Links */}
          <div
            id="menu-link"
            className={`md:block overflow-hidden max-h-0 md:max-h-full w-full md:w-auto ${
              menuOpen ? "top-full bg-white w-full !max-h-screen" : ""
            } `}
            style={{
              transition: menuOpen ? "max-height .5s ease-in-out" : "",
            }}
          >
            <div className="ml-10 flex flex-col md:flex-row items-end md:items-baseline space-x-8 gap-4 md:gap-0 mb-8 md:mb-0">
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
              <Link
                href="https://form.jotform.com/252871988769079"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
              >
                Sumate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
