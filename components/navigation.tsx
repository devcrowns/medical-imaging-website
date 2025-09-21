"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ]

  const handleRequestQuote = () => {
    window.location.href = "/contact?tab=inquiry&subject=quote-request"
  }

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:justify-center">
          {/* Logo - Centered on desktop */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src="/qube-medical-logo.jpg" alt="Qube Medical System" className="w-8 h-8" />
              </div>
              <span className="ml-3 text-xl font-bold text-primary">Qube Medical System</span>
            </Link>
          </div>

          {/* Contact Info & CTA - Right side on desktop */}
          <div className="hidden lg:flex items-center space-x-4 absolute right-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 8681065538</span>
            </div>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90" onClick={handleRequestQuote}>
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-center py-3">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-border mt-4">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 8681065538</span>
              </div>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90" onClick={handleRequestQuote}>
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
