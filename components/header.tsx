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
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            alt="Inocrate Logo"
            height={200}
            width={200}
            src={"/logo.png"}
            className="object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-900 transition-colors"
          >
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-bue-900 transition-colors cursor-pointer">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/services/education" className="cursor-pointer">
                  Education Systems
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/commtech" className="cursor-pointer">
                  Commtech Systems
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/couriertech" className="cursor-pointer">
                  CourierTech Systems
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-blue-900 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact" passHref legacyBehavior>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-500 text-white cursor-pointer transition-all duration-300">
              Get Started
            </Button>
          </Link>
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
              className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              About
            </Link>
            <div className="space-y-2">
              <span className="text-gray-700 font-medium cursor-pointer">
                Services
              </span>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/education"
                  className="block text-gray-600 hover:text-blue-900 transition-colors cursor-pointer"
                >
                  EduTech Systems
                </Link>
                <Link
                  href="/services/commtech"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  CommTech Systems
                </Link>
                <Link
                  href="/services/couriertech"
                  className="block text-gray-600 hover:text-orange-500 transition-colors"
                >
                  CourierTech Systems
                </Link>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-500 text-white w-full cursor-pointer">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
