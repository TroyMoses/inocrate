"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Inocrate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/services/education">Education Systems</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/fintech">Fintech Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/agritech">Agritech Platforms</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <div className="space-y-2">
              <span className="text-gray-700 font-medium">Services</span>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/education"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Education Systems
                </Link>
                <Link
                  href="/services/fintech"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Fintech Solutions
                </Link>
                <Link
                  href="/services/agritech"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Agritech Platforms
                </Link>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
