import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, Settings, Shield, Truck, GraduationCap, Clock, CheckCircle, Phone, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Truck,
    title: "Installation & Setup",
    description:
      "Complete installation services including site preparation, equipment delivery, and system commissioning.",
    features: [
      "Site assessment and preparation",
      "Professional equipment delivery",
      "Complete system installation",
      "Initial calibration and testing",
      "Staff training and handover",
    ],
    badge: "Essential",
  },
  {
    icon: Settings,
    title: "Calibration Services",
    description: "Precision calibration services to ensure optimal image quality and regulatory compliance.",
    features: [
      "Daily, weekly, and monthly QA protocols",
      "Phantom-based calibration testing",
      "Image quality optimization",
      "Compliance documentation",
      "Performance verification reports",
    ],
    badge: "Quality Assured",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to maximize equipment uptime and extend system lifespan.",
    features: [
      "Comprehensive maintenance schedules",
      "Genuine parts replacement",
      "System performance monitoring",
      "Preventive component replacement",
      "Detailed maintenance reports",
    ],
    badge: "Recommended",
  },
  {
    icon: Shield,
    title: "Corrective Maintenance",
    description: "Emergency repair services with rapid response times to minimize equipment downtime.",
    features: [
      "24/7 emergency support hotline",
      "Remote diagnostic capabilities",
      "On-site repair services",
      "Genuine replacement parts",
      "Priority response for critical issues",
    ],
    badge: "24/7 Available",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training programs for operators, technicians, and maintenance staff.",
    features: [
      "Operator certification programs",
      "Technical training workshops",
      "Online learning modules",
      "Hands-on practical sessions",
      "Continuing education credits",
    ],
    badge: "Certified",
  },
  {
    icon: Clock,
    title: "Annual Maintenance Contracts",
    description: "Comprehensive service agreements providing complete coverage and peace of mind.",
    features: [
      "All-inclusive maintenance coverage",
      "Priority service response",
      "Genuine parts included",
      "Performance guarantees",
      "Cost-effective annual pricing",
    ],
    badge: "Best Value",
  },
]

const serviceStats = [
  { number: "500+", label: "Installations Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "< 4hrs", label: "Average Response Time" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Comprehensive Medical Imaging Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From installation to ongoing maintenance, we provide complete lifecycle support for your medical imaging
              equipment with unmatched expertise and reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {serviceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Service Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A systematic approach ensuring quality service delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial assessment of your facility's needs and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed service plan development and resource allocation",
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional service delivery by certified technicians",
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Quality assurance and ongoing support documentation",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                <p className="text-muted-foreground text-pretty">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance">Need Service Support?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Our service experts are ready to help with installation, maintenance, or emergency support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call Service Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  )
}
