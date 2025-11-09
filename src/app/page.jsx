"use client"

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ChevronRight, Star, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Trusted
              <span className="text-blue-600"> Services </span>
              Near You
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with verified service professionals. From home repairs to personal services, get things done with
              confidence.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book a Service <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Become a Provider
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-orange-400 rounded-xl h-96 flex items-center justify-center">
            <img src="/placeholder.svg" alt="Hero" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose QuickKaam?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Professionals</h3>
              <p className="text-gray-600">
                All service providers are thoroughly verified and rated by real customers.
              </p>
            </Card>
            <Card className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Location Matching</h3>
              <p className="text-gray-600">Find services in your area with our intelligent location matching system.</p>
            </Card>
            <Card className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Community</h3>
              <p className="text-gray-600">
                Join thousands of satisfied customers who found quality services on QuickKaam.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "Landscaping", "AC Repair", "More"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="text-4xl mb-3 text-center">🔧</div>
                  <p className="font-semibold text-gray-900">{category}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 opacity-90">Join millions of users who trust QuickKaam for their service needs.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
