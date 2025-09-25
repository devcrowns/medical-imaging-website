import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Heart, Target, Users } from "lucide-react"

const milestones = [
  { year: "1995", event: "Company founded with focus on medical imaging" },
  { year: "2000", event: "First international installation completed" },
  { year: "2005", event: "ISO 13485 certification achieved" },
  { year: "2010", event: "500th installation milestone reached" },
  { year: "2015", event: "Advanced AI imaging solutions introduced" },
  { year: "2020", event: "Global service network established" },
  { year: "2024", event: "Leading provider with 1000+ installations" },
]

const certifications = [
  // {
  //   name: "ISO 13485",
  //   description: "Medical Device Quality Management",
  //   icon: Shield,
  // },
  // {
  //   name: "FDA Approved",
  //   description: "US Food and Drug Administration",
  //   icon: Award,
  // },
  // {
  //   name: "CE Marking",
  //   description: "European Conformity Standards",
  //   icon: CheckCircle,
  // },
  // {
  //   name: "Health Canada",
  //   description: "Canadian Medical Device License",
  //   icon: Shield,
  // },
]

const teamStats = [
  { number: "150+", label: "Expert Engineers" },
  { number: "50+", label: "Service Technicians" },
  { number: "25+", label: "Years Experience" },
  { number: "40+", label: "Countries Served" },
]

const partners = [
  "Siemens Healthineers",
  "GE Healthcare",
  "Philips Healthcare",
  "Canon Medical",
  "Hitachi Healthcare",
  "Fujifilm Healthcare",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Leading Medical Imaging Excellence for <span className="text-primary">Over 25 Years</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Qube Medical System has been at the forefront of medical imaging technology, providing healthcare facilities
                worldwide with cutting-edge CT scanners, MRI machines, and comprehensive support services.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src="/placeholder.svg?key=about-hero"
                  alt="Qube Medical System team and facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  To advance healthcare outcomes by providing state-of-the-art medical imaging solutions, exceptional
                  service support, and innovative technologies that enable healthcare professionals to deliver the
                  highest quality patient care.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver cutting-edge imaging technology",
                    "Provide unmatched service excellence",
                    "Enable better patient outcomes",
                    "Foster healthcare innovation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  To be the global leader in medical imaging solutions, recognized for our commitment to innovation,
                  quality, and service excellence, while making advanced diagnostic imaging accessible to healthcare
                  facilities worldwide.
                </p>
                <ul className="space-y-3">
                  {[
                    "Global leadership in medical imaging",
                    "Continuous innovation and advancement",
                    "Accessible healthcare technology",
                    "Sustainable healthcare solutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Journey of Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Key milestones that have shaped our company and the medical imaging industry.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="text-sm font-bold">
                            {milestone.year}
                          </Badge>
                          <p className="text-foreground font-medium">{milestone.event}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our commitment to quality and safety is validated by industry-leading certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-card-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Trusted Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We work with leading medical imaging manufacturers to deliver the best solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-white rounded-lg border border-border flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-muted-foreground">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance">Ready to Partner with Us?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join hundreds of healthcare facilities worldwide who trust Qube Medical System for their imaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Users className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Globe className="w-5 h-5 mr-2" />
              Find Local Office
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
