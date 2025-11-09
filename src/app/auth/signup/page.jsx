"use client"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Card } from "../../../components/ui/card"
import Link from "next/link"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "customer",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState("")

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "weak"
    if (pwd.length < 10) return "medium"
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return "strong"
    return "medium"
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    setTimeout(() => {
      setLoading(false)
      // Handle signup logic
    }, 1000)
  }

  return (
    <Card className="p-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>

      {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg mb-4">{error}</div>}

      <div className="flex gap-4 mb-6">
        {["customer", "provider"].map((type) => (
          <label key={type} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="userType"
              value={type}
              checked={formData.userType === type}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm font-medium text-gray-700 capitalize">
              {type === "customer" ? "I need services" : "I provide services"}
            </span>
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <Input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full"
          />
          {passwordStrength && (
            <div className="mt-2 flex gap-2">
              <div className={`flex-1 h-2 rounded ${passwordStrength === "weak" ? "bg-red-500" : "bg-gray-300"}`}></div>
              <div
                className={`flex-1 h-2 rounded ${passwordStrength === "strong" ? "bg-green-500" : passwordStrength === "medium" ? "bg-yellow-500" : "bg-gray-300"}`}
              ></div>
              <div
                className={`flex-1 h-2 rounded ${passwordStrength === "strong" ? "bg-green-500" : "bg-gray-300"}`}
              ></div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </Card>
  )
}
