"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppBubble() {
  const handleWhatsAppClick = () => {
    console.log("[v0] WhatsApp bubble clicked")
    const phoneNumber = "1234567890" // Replace with actual WhatsApp business number (without + or spaces)
    const message = encodeURIComponent(
      "Hello! I would like to inquire about Qube Medical System's medical imaging equipment.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    console.log("[v0] Opening WhatsApp URL:", whatsappUrl)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </Button>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
    </div>
  )
}
