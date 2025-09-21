import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Users, TrendingUp, Clock, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Footer } from "@/components/footer"

const caseStudies = [
  {
    id: 1,
    title: "Metropolitan General Hospital",
    location: "New York, USA",
    type: "Large Hospital",
    equipment: ["ProScan CT 128", "MagnaView MRI 3.0T"],
    challenge:
      "Needed to upgrade aging imaging equipment while maintaining 24/7 emergency services and reducing patient wait times.",
    solution:
      "Implemented phased installation of new CT and MRI systems with minimal downtime, including staff training and workflow optimization.",
    results: [
      "50% reduction in patient wait times",
      "30% increase in daily scan capacity",
      "99.9% system uptime achieved",
      "ROI achieved within 18 months",
    ],
    testimonial: {
      quote:
        "MedImaging Pro's expertise and support throughout the installation process was exceptional. The new equipment has transformed our diagnostic capabilities.",
      author: "Dr. Sarah Johnson",
      role: "Chief of Radiology",
    },
    image: "/placeholder.svg?key=metro-hospital",
    stats: {
      patients: "50,000+",
      scans: "200/day",
      uptime: "99.9%",
    },
  },
  {
    id: 2,
    title: "Regional Diagnostic Center",
    location: "Toronto, Canada",
    type: "Diagnostic Center",
    equipment: ["MediScan CT 64", "FlexiMRI 1.5T"],
    challenge:
      "Small facility needed cost-effective imaging solutions without compromising on quality for their growing patient base.",
    solution:
      "Provided compact, efficient imaging systems with comprehensive training and flexible service contracts tailored to their budget.",
    results: [
      "40% increase in patient throughput",
      "25% reduction in operating costs",
      "Expanded service offerings",
      "Improved patient satisfaction scores",
    ],
    testimonial: {
      quote:
        "The team understood our unique needs as a smaller facility and provided solutions that fit perfectly within our budget and space constraints.",
      author: "Michael Chen",
      role: "Facility Director",
    },
    image: "/placeholder.svg?key=regional-center",
    stats: {
      patients: "15,000+",
      scans: "80/day",
      uptime: "99.5%",
    },
  },
  {
    id: 3,
    title: "University Medical Center",
    location: "London, UK",
    type: "Academic Hospital",
    equipment: ["EliteScan CT 256", "MagnaView MRI 3.0T"],
    challenge:
      "Research hospital required advanced imaging capabilities for both clinical care and medical research programs.",
    solution:
      "Installed state-of-the-art systems with research-grade capabilities, including specialized software and protocols for academic use.",
    results: [
      "Advanced research capabilities enabled",
      "20+ published research papers",
      "Improved clinical outcomes",
      "Enhanced medical education programs",
    ],
    testimonial: {
      quote:
        "The advanced imaging capabilities have opened new research opportunities and significantly enhanced our medical education programs.",
      author: "Prof. Emma Williams",
      role: "Head of Medical Imaging",
    },
    image: "/placeholder.svg?key=university-medical",
    stats: {
      patients: "75,000+",
      scans: "300/day",
      uptime: "99.8%",
    },
  },
  {
    id: 4,
    title: "Children's Specialty Hospital",
    location: "Sydney, Australia",
    type: "Pediatric Hospital",
    equipment: ["ProScan CT 128", "CompactMRI 1.0T"],
    challenge:
      "Pediatric facility needed child-friendly imaging equipment with specialized protocols for young patients.",
    solution:
      "Customized installation with pediatric-specific features, child-friendly environments, and specialized training for pediatric imaging.",
    results: [
      "Reduced sedation requirements by 60%",
      "Improved patient comfort scores",
      "Faster scan times for children",
      "Enhanced diagnostic accuracy",
    ],
    testimonial: {
      quote:
        "The pediatric-focused approach made all the difference. Our young patients are much more comfortable, and the image quality is outstanding.",
      author: "Dr. Lisa Park",
      role: "Pediatric Radiologist",
    },
    image: "/placeholder.svg?key=childrens-hospital",
    stats: {
      patients: "25,000+",
      scans: "120/day",
      uptime: "99.7%",
    },
  },
]

const successMetrics = [
  { metric: "1000+", label: "Successful Installations" },
  { metric: "99.8%", label: "Average System Uptime" },
  { metric: "95%", label: "Customer Satisfaction" },
  { metric: "40+", label: "Countries Served" },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover how healthcare facilities worldwide have transformed their diagnostic capabilities with our
              medical imaging solutions and comprehensive support services.
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{item.metric}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="border-border overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-card">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{study.stats.patients}</div>
                          <div className="text-xs text-muted-foreground">Patients Served</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{study.stats.scans}</div>
                          <div className="text-xs text-muted-foreground">Daily Scans</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{study.stats.uptime}</div>
                          <div className="text-xs text-muted-foreground">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="secondary">{study.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            {study.location}
                          </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground">{study.title}</h2>
                        <div className="flex flex-wrap gap-2">
                          {study.equipment.map((item, equipIndex) => (
                            <Badge key={equipIndex} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                          <p className="text-muted-foreground text-pretty">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                          <p className="text-muted-foreground text-pretty">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Key Results</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <blockquote className="text-foreground italic text-pretty">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm">
                          <div className="font-semibold text-foreground">{study.testimonial.author}</div>
                          <div className="text-muted-foreground">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From small diagnostic centers to major academic hospitals, we serve diverse healthcare facilities
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Major Hospitals",
                description: "Large healthcare systems with high-volume imaging needs",
                count: "200+",
              },
              {
                icon: Users,
                title: "Diagnostic Centers",
                description: "Specialized imaging facilities and outpatient centers",
                count: "300+",
              },
              {
                icon: TrendingUp,
                title: "Academic Institutions",
                description: "Universities and research hospitals with advanced requirements",
                count: "150+",
              },
              {
                icon: Clock,
                title: "Emergency Centers",
                description: "Trauma centers requiring 24/7 reliable imaging services",
                count: "100+",
              },
            ].map((client, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <client.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{client.count}</div>
                    <h3 className="text-lg font-semibold text-card-foreground">{client.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{client.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance">
            Ready to Transform Your Imaging Capabilities?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join hundreds of healthcare facilities who have achieved success with our medical imaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
