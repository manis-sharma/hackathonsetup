"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Bell, User } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Q</div>
          <span className="font-bold text-gray-900 hidden sm:inline">QuickKaam</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-gray-600 hover:text-gray-900">
            Explore
          </Link>
          <Link href="/become-service-provider" className="text-gray-600 hover:text-gray-900">
            Become Provider
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Link href="/auth/login">Sign In</Link>
          </Button>
        </div>

        {/* Authenticated Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          <Link href="/dashboard">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="/explore" className="block text-gray-600 hover:text-gray-900">
              Explore
            </Link>
            <Link href="/become-service-provider" className="block text-gray-600 hover:text-gray-900">
              Become Provider
            </Link>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
