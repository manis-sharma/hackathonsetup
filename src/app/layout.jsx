"use client"

import { Inter } from "next/font/google"
import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
