"use client"

import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Calendar, MapPin, Clock, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { label: "Total Bookings", value: "24", icon: Calendar },
    { label: "Completed", value: "18", icon: Clock },
    { label: "Earned", value: "₹45,000", icon: TrendingUp },
    { label: "Rating", value: "4.8/5", icon: MapPin },
  ]

  const upcomingBookings = [
    { id: 1, service: "Home Cleaning", date: "2024-01-15", time: "10:00 AM", location: "Downtown" },
    { id: 2, service: "Plumbing Repair", date: "2024-01-16", time: "2:00 PM", location: "Midtown" },
    { id: 3, service: "Electrical Work", date: "2024-01-17", time: "9:00 AM", location: "Uptown" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Upcoming Bookings */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Bookings</h2>
        <div className="space-y-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">{booking.service}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {booking.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {booking.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {booking.location}
                  </span>
                </div>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
