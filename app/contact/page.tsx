"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock, MessageSquare, Wrench, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+1 (555) 123-4567", "24/7 Emergency: +1 (555) 911-HELP"],
    description: "Speak directly with our experts",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info@qubemedical.com", "support@qubemedical.com"],
    description: "Get detailed responses within 2 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
    description: "Visit our main facility and showroom",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Emergency: 24/7 Available"],
    description: "We're here when you need us",
  },
]

const offices = [
  {
    region: "North America",
    locations: [
      { city: "New York", address: "456 Park Avenue, NY 10016", phone: "+1 (212) 555-0123" },
      { city: "Los Angeles", address: "789 Sunset Blvd, CA 90028", phone: "+1 (323) 555-0456" },
      { city: "Toronto", address: "321 Bay Street, ON M5H 2R2", phone: "+1 (416) 555-0789" },
    ],
  },
  {
    region: "Europe",
    locations: [
      { city: "London", address: "10 Harley Street, W1G 9PF", phone: "+44 20 7555 0123" },
      { city: "Berlin", address: "Unter den Linden 1, 10117", phone: "+49 30 555 0456" },
      { city: "Paris", address: "123 Champs-Élysées, 75008", phone: "+33 1 55 55 01 23" },
    ],
  },
  {
    region: "Asia Pacific",
    locations: [
      { city: "Tokyo", address: "1-1-1 Shibuya, Tokyo 150-0002", phone: "+81 3 5555 0123" },
      { city: "Singapore", address: "1 Marina Bay, Singapore 018989", phone: "+65 6555 0123" },
      { city: "Sydney", address: "123 George Street, NSW 2000", phone: "+61 2 5555 0123" },
    ],
  },
]

export default function ContactPage() {
  const { toast } = useToast()

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [serviceForm, setServiceForm] = useState({
    facilityName: "",
    contactName: "",
    email: "",
    phone: "",
    equipmentType: "",
    serviceType: "",
    urgency: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [activeTab, setActiveTab] = useState("inquiry")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get("tab")
    const subject = urlParams.get("subject")
    const product = urlParams.get("product")
    const serviceType = urlParams.get("serviceType")

    if (tab) {
      setActiveTab(tab)
    }

    if (subject && subject === "quote-request") {
      setInquiryForm((prev) => ({
        ...prev,
        subject: "quote-request",
        message: product
          ? `I would like to request a quote for ${product}.`
          : "I would like to request a quote for your products.",
      }))
    }

    if (serviceType === "consultation") {
      setActiveTab("service")
      setServiceForm((prev) => ({
        ...prev,
        serviceType: "consultation",
        description: "I would like to schedule a consultation to discuss our medical imaging needs.",
      }))
    }
  }, [])

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "inquiry",
          ...inquiryForm,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Inquiry Submitted Successfully!",
          description: "We will contact you within 2 hours.",
        })

        setSubmitStatus({
          type: "success",
          message: "Your inquiry has been submitted successfully! We will contact you within 2 hours.",
        })

        setInquiryForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      })

      setSubmitStatus({ type: "error", message: "There was an error submitting your inquiry. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "service",
          ...serviceForm,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Service Request Submitted Successfully!",
          description: "Our team will contact you shortly.",
        })

        setSubmitStatus({
          type: "success",
          message: "Your service request has been submitted successfully! Our team will contact you shortly.",
        })

        setServiceForm({
          facilityName: "",
          contactName: "",
          email: "",
          phone: "",
          equipmentType: "",
          serviceType: "",
          urgency: "",
          description: "",
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your service request. Please try again.",
        variant: "destructive",
      })

      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your service request. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about your medical imaging equipment and services.",
    )
    window.open(`https://wa.me/15551234567?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to discuss your medical imaging needs? Our experts are here to help with equipment selection,
              service support, or any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm font-medium text-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Forms */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Contact Forms</CardTitle>
                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="inquiry" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        General Inquiry
                      </TabsTrigger>
                      <TabsTrigger value="service" className="flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        Service Request
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="inquiry" className="space-y-6 mt-6">
                      <form onSubmit={handleInquirySubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Full Name *</label>
                            <Input
                              required
                              value={inquiryForm.name}
                              onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Email Address *</label>
                            <Input
                              type="email"
                              required
                              value={inquiryForm.email}
                              onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Company/Organization</label>
                            <Input
                              value={inquiryForm.company}
                              onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                              placeholder="Enter company name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Phone Number</label>
                            <Input
                              type="tel"
                              value={inquiryForm.phone}
                              onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Subject *</label>
                            <Select
                              value={inquiryForm.subject}
                              onValueChange={(value) => setInquiryForm({ ...inquiryForm, subject: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="product-info">Product Information</SelectItem>
                                <SelectItem value="quote-request">Quote Request</SelectItem>
                                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message *</label>
                          <Textarea
                            required
                            rows={4}
                            value={inquiryForm.message}
                            onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                            placeholder="Please describe your inquiry in detail..."
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          <Send className="w-4 h-4 mr-2" />
                          {isSubmitting ? "Sending..." : "Send Inquiry"}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="service" className="space-y-6 mt-6">
                      <form onSubmit={handleServiceSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Facility Name *</label>
                            <Input
                              required
                              value={serviceForm.facilityName}
                              onChange={(e) => setServiceForm({ ...serviceForm, facilityName: e.target.value })}
                              placeholder="Enter facility name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Contact Name *</label>
                            <Input
                              required
                              value={serviceForm.contactName}
                              onChange={(e) => setServiceForm({ ...serviceForm, contactName: e.target.value })}
                              placeholder="Enter contact person name"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Email Address *</label>
                            <Input
                              type="email"
                              required
                              value={serviceForm.email}
                              onChange={(e) => setServiceForm({ ...serviceForm, email: e.target.value })}
                              placeholder="Enter email address"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Phone Number *</label>
                            <Input
                              type="tel"
                              required
                              value={serviceForm.phone}
                              onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Equipment Type *</label>
                            <Select
                              value={serviceForm.equipmentType}
                              onValueChange={(value) => setServiceForm({ ...serviceForm, equipmentType: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select equipment type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ct-scanner">CT Scanner</SelectItem>
                                <SelectItem value="mri-machine">MRI Machine</SelectItem>
                                <SelectItem value="both">Both CT & MRI</SelectItem>
                                <SelectItem value="other">Other Equipment</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Service Type *</label>
                            <Select
                              value={serviceForm.serviceType}
                              onValueChange={(value) => setServiceForm({ ...serviceForm, serviceType: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="installation">Installation</SelectItem>
                                <SelectItem value="maintenance">Preventive Maintenance</SelectItem>
                                <SelectItem value="repair">Emergency Repair</SelectItem>
                                <SelectItem value="calibration">Calibration</SelectItem>
                                <SelectItem value="training">Training</SelectItem>
                                <SelectItem value="amc">AMC Contract</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Urgency Level *</label>
                          <Select
                            value={serviceForm.urgency}
                            onValueChange={(value) => setServiceForm({ ...serviceForm, urgency: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                              <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                              <SelectItem value="normal">Normal (Within 3 days)</SelectItem>
                              <SelectItem value="scheduled">Scheduled (Flexible timing)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Service Description *</label>
                          <Textarea
                            required
                            rows={4}
                            value={serviceForm.description}
                            onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                            placeholder="Please describe the service needed, any issues, or specific requirements..."
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-secondary hover:bg-secondary/90"
                          disabled={isSubmitting}
                        >
                          <Wrench className="w-4 h-4 mr-2" />
                          {isSubmitting ? "Submitting..." : "Submit Service Request"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center space-y-2">
                      <MapPin className="w-8 h-8 text-primary mx-auto" />
                      <p className="text-sm text-muted-foreground">Interactive Map</p>
                      <p className="text-xs text-muted-foreground">123 Medical Center Drive</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Get Directions
                    </Button>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Schedule Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="sm" className="w-full" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: +1 (555) 123-4567
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button size="sm" variant="secondary" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <div className="text-center pt-2">
                    <p className="text-sm text-muted-foreground">Average response time: 2 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground text-balance">Global Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Find your local Qube Medical System office for personalized support and service.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((region, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">{region.region}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {region.locations.map((location, locationIndex) => (
                    <div key={locationIndex} className="space-y-2 pb-4 border-b border-border last:border-b-0">
                      <h4 className="font-semibold text-foreground">{location.city}</h4>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                      <p className="text-sm font-medium text-primary">{location.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
