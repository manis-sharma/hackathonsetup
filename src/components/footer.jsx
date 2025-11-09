"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                Q
              </div>
              <span className="font-bold text-white">QuickKaam</span>
            </div>
            <p className="text-sm text-gray-400">Connect with trusted professionals for all your service needs.</p>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="font-bold text-white mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="font-bold text-white mb-4">For Providers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/become-service-provider" className="hover:text-white">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Earning Guide
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; 2025 QuickKaam. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
