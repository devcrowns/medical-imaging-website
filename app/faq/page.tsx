"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Search, MessageSquare, Phone } from "lucide-react"

const faqCategories = [
  {
    category: "Equipment & Products",
    faqs: [
      {
        question: "What types of CT scanners do you offer?",
        answer:
          "We offer a comprehensive range of CT scanners including 64-slice, 128-slice, and 256-slice systems from leading manufacturers. Our portfolio includes the MediScan CT 64 for routine diagnostics, ProScan CT 128 for advanced imaging, and EliteScan CT 256 for complex procedures.",
      },
      {
        question: "What's the difference between 1.5T and 3.0T MRI machines?",
        answer:
          "3.0T MRI machines provide higher magnetic field strength, resulting in better image resolution and faster scan times. They're ideal for advanced neuroimaging and research applications. 1.5T systems offer excellent image quality for routine diagnostics and are more cost-effective for general imaging needs.",
      },
      {
        question: "Do you provide refurbished equipment?",
        answer:
          "Yes, we offer certified refurbished equipment that undergoes rigorous testing and restoration. All refurbished systems come with warranties and meet the same quality standards as new equipment, providing a cost-effective solution for budget-conscious facilities.",
      },
      {
        question: "What warranties come with your equipment?",
        answer:
          "New equipment comes with comprehensive manufacturer warranties ranging from 1-3 years depending on the system. We also offer extended warranty options and comprehensive service contracts to ensure long-term protection and support.",
      },
    ],
  },
  {
    category: "Installation & Setup",
    faqs: [
      {
        question: "How long does installation typically take?",
        answer:
          "Installation timelines vary by equipment type. CT scanner installations typically take 2-3 weeks, while MRI installations can take 4-6 weeks due to site preparation requirements. We provide detailed project timelines during the planning phase.",
      },
      {
        question: "What site preparation is required?",
        answer:
          "Site preparation includes structural modifications, electrical upgrades, HVAC systems, and radiation shielding for CT scanners. MRI installations require additional considerations like magnetic shielding and helium venting. We provide comprehensive site assessment and preparation services.",
      },
      {
        question: "Do you handle regulatory approvals?",
        answer:
          "Yes, we assist with all necessary regulatory approvals including FDA, Health Canada, CE marking, and local health department requirements. Our team manages the documentation and approval process to ensure compliance.",
      },
      {
        question: "Can installation be done during operational hours?",
        answer:
          "We work with your facility to minimize disruption. While some installation phases require downtime, we can often schedule work during off-hours or weekends to maintain your operational schedule.",
      },
    ],
  },
  {
    category: "Service & Maintenance",
    faqs: [
      {
        question: "What's included in preventive maintenance?",
        answer:
          "Preventive maintenance includes regular system calibration, component inspection, software updates, performance testing, and replacement of wear items. We follow manufacturer-recommended protocols and provide detailed maintenance reports.",
      },
      {
        question: "How quickly do you respond to service calls?",
        answer:
          "Emergency service calls receive response within 4 hours, with critical system failures prioritized for immediate response. Routine service requests are typically scheduled within 24-48 hours depending on your service contract level.",
      },
      {
        question: "Do you provide 24/7 support?",
        answer:
          "Yes, we offer 24/7 emergency support hotline for critical issues. Our remote diagnostic capabilities allow us to troubleshoot many problems immediately, and we maintain a network of field service engineers for on-site support.",
      },
      {
        question: "What are Annual Maintenance Contracts (AMC)?",
        answer:
          "AMCs provide comprehensive coverage including all preventive maintenance, emergency repairs, genuine parts, software updates, and priority service response. They offer predictable costs and ensure optimal system performance throughout the year.",
      },
    ],
  },
  {
    category: "Training & Support",
    faqs: [
      {
        question: "What training do you provide?",
        answer:
          "We offer comprehensive training programs including operator certification, technical training for maintenance staff, and continuing education. Training includes hands-on sessions, online modules, and ongoing support to ensure proficiency.",
      },
      {
        question: "Is training included with equipment purchase?",
        answer:
          "Yes, initial operator training is included with all equipment purchases. This covers system operation, safety protocols, basic troubleshooting, and quality assurance procedures. Additional advanced training is available separately.",
      },
      {
        question: "Do you provide ongoing technical support?",
        answer:
          "Absolutely. We provide ongoing technical support through multiple channels including phone, email, remote assistance, and on-site visits. Our support team includes certified technicians and clinical specialists.",
      },
      {
        question: "Can you provide training for new staff members?",
        answer:
          "Yes, we offer refresher training and new staff orientation programs. These can be scheduled as needed and are available both on-site at your facility or at our training centers.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Find answers to common questions about our medical imaging equipment, services, and support.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">{category.category}</h2>
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={faqIndex} className="border-border">
                        <Collapsible open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                          <CollapsibleTrigger asChild>
                            <button className="w-full p-6 text-left hover:bg-muted/50 transition-colors">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                                <ChevronDown
                                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                                    isOpen ? "transform rotate-180" : ""
                                  }`}
                                />
                              </div>
                            </button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-0 pb-6 px-6">
                              <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No FAQs found matching "{searchTerm}". Try different keywords or contact our support team.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-balance">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Our expert support team is here to help with any questions not covered in our FAQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
