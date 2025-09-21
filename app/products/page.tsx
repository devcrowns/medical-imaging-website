import { Navigation } from "@/components/navigation"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter } from "lucide-react"
import { Footer } from "@/components/footer"

const ctScanners = [
  {
    id: "ct-001",
    name: "ProScan CT 128",
    category: "CT Scanner",
    image: "/modern-ct-scanner-in-hospital-room.jpg",
    description:
      "High-resolution 128-slice CT scanner with advanced imaging capabilities and low radiation dose technology.",
    keyFeatures: [
      "128-slice helical scanning",
      "Ultra-low dose protocols",
      "Advanced cardiac imaging",
      "AI-powered reconstruction",
    ],
    isNew: true,
    slug: "proscan-ct-128",
  },
  {
    id: "ct-002",
    name: "MediScan CT 64",
    category: "CT Scanner",
    image: "/ct-scanner-medical-equipment.jpg",
    description: "Reliable 64-slice CT scanner perfect for routine diagnostic imaging with excellent image quality.",
    keyFeatures: ["64-slice scanning", "Fast acquisition times", "Pediatric protocols", "Automated positioning"],
    slug: "mediscan-ct-64",
  },
  {
    id: "ct-003",
    name: "EliteScan CT 256",
    category: "CT Scanner",
    image: "/advanced-ct-scanner-medical-imaging.jpg",
    description: "Premium 256-slice CT scanner with cutting-edge technology for complex diagnostic procedures.",
    keyFeatures: [
      "256-slice ultra-fast scanning",
      "Dual-energy imaging",
      "Perfusion studies",
      "Advanced post-processing",
    ],
    slug: "elitescan-ct-256",
  },
]

const mriMachines = [
  {
    id: "mri-001",
    name: "MagnaView MRI 3.0T",
    category: "MRI Machine",
    image: "/3t-mri-machine-in-hospital-setting.jpg",
    description:
      "High-field 3.0 Tesla MRI system delivering exceptional image quality for advanced diagnostic imaging.",
    keyFeatures: [
      "3.0 Tesla magnetic field",
      "Wide bore design (70cm)",
      "Advanced neuroimaging",
      "Silent scan technology",
    ],
    isNew: true,
    slug: "magnaview-mri-3t",
  },
  {
    id: "mri-002",
    name: "FlexiMRI 1.5T",
    category: "MRI Machine",
    image: "/1-5t-mri-scanner-medical-equipment.jpg",
    description: "Versatile 1.5 Tesla MRI system offering excellent image quality with patient comfort features.",
    keyFeatures: [
      "1.5 Tesla field strength",
      "Open architecture design",
      "Fast imaging sequences",
      "Comprehensive coil selection",
    ],
    slug: "fleximri-1-5t",
  },
  {
    id: "mri-003",
    name: "CompactMRI 1.0T",
    category: "MRI Machine",
    image: "/compact-mri-machine-medical-imaging.jpg",
    description:
      "Space-efficient 1.0 Tesla MRI system ideal for smaller facilities without compromising image quality.",
    keyFeatures: ["1.0 Tesla permanent magnet", "Compact footprint", "Low helium consumption", "Easy installation"],
    slug: "compactmri-1t",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our Medical Imaging Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our comprehensive range of CT scanners and MRI machines, designed to meet the diverse needs of
              modern healthcare facilities.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button variant="outline" size="default">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="ct">CT Scanners</TabsTrigger>
              <TabsTrigger value="mri">MRI Machines</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {/* CT Scanners */}
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">CT Scanners</h2>
                  <p className="text-muted-foreground">
                    Advanced computed tomography systems for precise diagnostic imaging
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ctScanners.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>

              {/* MRI Machines */}
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">MRI Machines</h2>
                  <p className="text-muted-foreground">
                    Magnetic resonance imaging systems for detailed soft tissue visualization
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mriMachines.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ct">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ctScanners.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mri">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mriMachines.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Our experts are here to help you find the perfect imaging solution for your facility's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
