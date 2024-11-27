
"use client"
import { useState } from "react";
import Link from "next/link";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600
     text-white shadow-lg">
      <div className="px-5 md:px-20 lg:px-28">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              My Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="/project" className="hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>

          </div>                 

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-gray-300"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 transition-all duration-300">
          <div className="px-4 pb-4 space-y-1">
            <Link href="/" className="block hover:bg-blue-300 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="#about" className="block hover:bg-blue-300 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="#skills" className="block hover:bg-blue-300 px-3 py-2 rounded-md">
              Skills
            </Link>
            <Link href="/project" className="block hover:bg-blue-300 px-3 py-2 rounded-md">
              Projects
            </Link>
            <Link href="#contact" className="block hover:bg-blue-300 px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
