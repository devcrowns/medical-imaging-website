import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, MessageSquare, Phone, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample product data - in a real app this would come from a database
const products = {
  "proscan-ct-128": {
    id: "ct-001",
    name: "ProScan CT 128",
    category: "CT Scanner",
    description:
      "High-resolution 128-slice CT scanner with advanced imaging capabilities and low radiation dose technology.",
    longDescription:
      "The ProScan CT 128 represents the pinnacle of computed tomography technology, offering exceptional image quality with significantly reduced radiation exposure. This state-of-the-art system is designed for high-volume facilities requiring fast, accurate diagnostic imaging across a wide range of clinical applications.",
    images: ["/modern-ct-scanner-in-hospital-room.jpg", "/ct-scanner-control-room.jpg", "/ct-scanner-patient-table.jpg"],
    keyFeatures: [
      "128-slice helical scanning with sub-millimeter resolution",
      "Ultra-low dose protocols reducing radiation by up to 80%",
      "Advanced cardiac imaging with retrospective gating",
      "AI-powered reconstruction for enhanced image quality",
      "Fast acquisition times (0.28s rotation)",
      "Wide bore design (78cm) for patient comfort",
    ],
    specifications: {
      "Slice Configuration": "128 x 0.6mm",
      "Rotation Time": "0.28 seconds",
      "Bore Size": "78cm",
      "Table Weight Capacity": "227kg (500lbs)",
      "kV Range": "80, 100, 120, 140 kV",
      "Power Requirements": "125 kW",
      "Room Size": "6m x 6m minimum",
    },
    applications: [
      "Routine diagnostic imaging",
      "Cardiac CT angiography",
      "Trauma and emergency imaging",
      "Oncology staging and follow-up",
      "Pediatric imaging protocols",
    ],
    isNew: true,
    price: "Contact for pricing",
  },
  "magnaview-mri-3t": {
    id: "mri-001",
    name: "MagnaView MRI 3.0T",
    category: "MRI Machine",
    description:
      "High-field 3.0 Tesla MRI system delivering exceptional image quality for advanced diagnostic imaging.",
    longDescription:
      "The MagnaView MRI 3.0T sets new standards in magnetic resonance imaging with its powerful 3.0 Tesla magnetic field and advanced gradient technology. This premium system delivers unparalleled image resolution and contrast, making it ideal for complex neurological, musculoskeletal, and cardiovascular imaging.",
    images: ["/3t-mri-machine-in-hospital-setting.jpg", "/mri-control-console.jpg", "/mri-patient-preparation-area.jpg"],
    keyFeatures: [
      "3.0 Tesla superconducting magnet for superior image quality",
      "Wide bore design (70cm) for patient comfort",
      "Advanced neuroimaging capabilities including DTI and fMRI",
      "Silent scan technology reducing noise by 99%",
      "Comprehensive coil portfolio for all anatomies",
      "AI-assisted scan planning and optimization",
    ],
    specifications: {
      "Magnetic Field": "3.0 Tesla",
      "Bore Diameter": "70cm",
      "Magnet Length": "157cm",
      "Patient Table Capacity": "250kg (550lbs)",
      "Gradient Strength": "45 mT/m",
      "Slew Rate": "200 T/m/s",
      "Helium Consumption": "<0.1L/day",
    },
    applications: [
      "Advanced neuroimaging and brain studies",
      "Musculoskeletal imaging",
      "Cardiac and vascular imaging",
      "Oncology imaging and staging",
      "Research applications",
    ],
    isNew: true,
    price: "Contact for pricing",
  },
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  {product.isNew && <Badge className="bg-secondary text-secondary-foreground">New Model</Badge>}
                </div>
                <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
                <p className="text-xl text-muted-foreground text-pretty">{product.longDescription}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Request Quote
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Expert
                  </Button>
                </div>
                <Button size="lg" variant="secondary" className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-border">
                        <span className="font-medium text-foreground">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Complete Feature Set</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                        <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Clinical Applications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
