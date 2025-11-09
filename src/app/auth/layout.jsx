"use client"

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">QuickKaam</h1>
          <p className="text-blue-100 mt-2">Professional Services at Your Fingertips</p>
        </div>
        {children}
      </div>
    </div>
  )
}
