"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const handleScheduleConsultation = () => {
    window.location.href = "/contact?tab=service&serviceType=consultation"
  }

  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Advanced Medical Imaging Solutions for <span className="text-primary">Healthcare Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Leading provider of CT scanners and MRI machines with comprehensive installation, maintenance, and
                support services for hospitals and diagnostic centers worldwide.
              </p>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                 <span>ISO 13485 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>50+ Installations</span>
              </div>
            </div> */}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/products">
                  View Our Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={handleScheduleConsultation}>
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src="/modern-ct-scanner-and-mri-machine-in-hospital-sett.jpg"
                alt="Advanced CT scanner and MRI machine in modern hospital environment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-border">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-border">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
