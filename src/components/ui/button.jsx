import React from "react"

const Button = React.forwardRef(({ className = "", variant = "default", size = "md", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500",
    ghost: "text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  }

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }
