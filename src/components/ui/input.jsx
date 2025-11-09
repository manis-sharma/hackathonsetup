import React from "react"

const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
))

Input.displayName = "Input"

export { Input }
