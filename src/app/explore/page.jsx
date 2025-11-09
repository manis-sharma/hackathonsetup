"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Card } from "../../components/ui/card"
import { Search, Star, Filter, Sliders } from "lucide-react"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["All", "Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "Landscaping"]

  const services = [
    {
      id: 1,
      name: "Professional Plumbing",
      provider: "John Plumber",
      rating: 4.8,
      reviews: 234,
      price: 500,
      category: "Plumbing",
    },
    {
      id: 2,
      name: "House Cleaning",
      provider: "Clean Team",
      rating: 4.9,
      reviews: 456,
      price: 300,
      category: "Cleaning",
    },
    {
      id: 3,
      name: "Electrical Work",
      provider: "ElectroPro",
      rating: 4.7,
      reviews: 189,
      price: 600,
      category: "Electrical",
    },
    {
      id: 4,
      name: "Carpentry Services",
      provider: "Wood Craft",
      rating: 4.6,
      reviews: 123,
      price: 800,
      category: "Carpentry",
    },
  ]

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "all" || service.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      service.price >= priceRange[0] &&
      service.price <= priceRange[1] &&
      (searchQuery === "" || service.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Explore Services</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 py-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <Card className="p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <Sliders className="w-5 h-5 text-gray-600" />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedCategory === cat.toLowerCase()}
                        onChange={() => setSelectedCategory(cat.toLowerCase())}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    className="w-1/2"
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-1/2"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </Card>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <div className="lg:hidden mb-4">
              <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-gradient-to-br from-blue-400 to-orange-400"></div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.provider}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{service.rating}</span>
                        <span className="text-gray-500 text-sm">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
                        <span className="text-sm text-gray-500">{service.category}</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-gray-600 mb-4">No services found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
