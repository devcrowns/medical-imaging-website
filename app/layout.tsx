import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

export const metadata: Metadata = {
  title: "Qube Medical System - Advanced Medical Imaging Solutions",
  description:
    "Leading provider of CT scanners and MRI machines with comprehensive installation, maintenance, and support services for healthcare facilities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppBubble />
        <Analytics />
      </body>
    </html>
  )
}
