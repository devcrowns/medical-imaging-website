import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Wrench, HeadphonesIcon, Download } from "lucide-react"

export function FeaturesOverview() {
  const features = [
    {
      icon: Stethoscope,
      title: "Premium Equipment",
      description:
        "State-of-the-art CT scanners and MRI machines from leading manufacturers with cutting-edge technology.",
    },
    {
      icon: Wrench,
      title: "Complete Services",
      description:
        "Full-service support including installation, calibration, maintenance, and upgrades for optimal performance.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and emergency services to ensure minimal downtime for your facility.",
    },
    {
      icon: Download,
      title: "Digital Resources",
      description:
        "Comprehensive documentation, training materials, and software updates available through our portal.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Why Choose MedImaging Pro?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We provide comprehensive medical imaging solutions with unmatched expertise, quality equipment, and
            dedicated support services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
