import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                {/* Image of the logo */}
                <Image
                  alt="Inocrate Logo"
                  height={200}
                  width={200}
                  src={"/logo.png"}
                  className="object-cover"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              An innovative technology solutions company specializing in
              building systems for schools, fintech, and agritech sectors. We
              drive digital transformation through cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.twitter.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/education"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Education Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fintech"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Fintech Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/agritech"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Agritech Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-600 text-sm">
                  Ntinda, Kigoowa Road. Kampala, Uganda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <a href="tel:+256701618653" className="text-gray-600 text-sm">
                  +256 701 618 653
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a
                  href="mailto:info@inocrate.com"
                  className="text-gray-600 text-sm"
                >
                  info@inocrate.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Inocrate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
