import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, ImageIcon, Video } from "lucide-react"

const downloadCategories = [
  {
    category: "Product Brochures",
    icon: FileText,
    items: [
      {
        title: "ProScan CT 128 Brochure",
        description: "Comprehensive product overview with specifications and features",
        type: "PDF",
        size: "2.4 MB",
        downloads: "1,234",
        date: "2024-03-01",
      },
      {
        title: "MagnaView MRI 3.0T Brochure",
        description: "Detailed specifications and clinical applications",
        type: "PDF",
        size: "3.1 MB",
        downloads: "987",
        date: "2024-02-28",
      },
      {
        title: "Complete Product Catalog 2024",
        description: "Full catalog of all CT scanners and MRI machines",
        type: "PDF",
        size: "15.2 MB",
        downloads: "2,156",
        date: "2024-01-15",
      },
    ],
  },
  {
    category: "Technical Documentation",
    icon: FileText,
    items: [
      {
        title: "Installation Planning Guide",
        description: "Site preparation requirements and installation procedures",
        type: "PDF",
        size: "4.7 MB",
        downloads: "543",
        date: "2024-02-20",
      },
      {
        title: "Maintenance Manual - CT Systems",
        description: "Comprehensive maintenance procedures and schedules",
        type: "PDF",
        size: "8.9 MB",
        downloads: "321",
        date: "2024-02-15",
      },
      {
        title: "Safety Protocols Handbook",
        description: "Complete safety guidelines for medical imaging equipment",
        type: "PDF",
        size: "3.2 MB",
        downloads: "876",
        date: "2024-02-10",
      },
    ],
  },
  {
    category: "Training Materials",
    icon: Video,
    items: [
      {
        title: "CT Scanner Operation Training",
        description: "Video training series for CT scanner operators",
        type: "MP4",
        size: "245 MB",
        downloads: "432",
        date: "2024-03-05",
      },
      {
        title: "MRI Safety Training Module",
        description: "Interactive training on MRI safety protocols",
        type: "ZIP",
        size: "89 MB",
        downloads: "654",
        date: "2024-02-25",
      },
      {
        title: "Quality Assurance Procedures",
        description: "Step-by-step QA procedures and checklists",
        type: "PDF",
        size: "2.8 MB",
        downloads: "398",
        date: "2024-02-18",
      },
    ],
  },
  {
    category: "Case Studies & Whitepapers",
    icon: FileText,
    items: [
      {
        title: "ROI Analysis: Medical Imaging Equipment",
        description: "Comprehensive ROI analysis framework and case studies",
        type: "PDF",
        size: "1.9 MB",
        downloads: "765",
        date: "2024-03-10",
      },
      {
        title: "AI in Medical Imaging Whitepaper",
        description: "Future trends and applications of AI in diagnostic imaging",
        type: "PDF",
        size: "2.3 MB",
        downloads: "1,123",
        date: "2024-02-22",
      },
      {
        title: "Pediatric Imaging Best Practices",
        description: "Guidelines for safe and effective pediatric imaging",
        type: "PDF",
        size: "1.7 MB",
        downloads: "456",
        date: "2024-02-12",
      },
    ],
  },
  {
    category: "Software & Utilities",
    icon: Download,
    items: [
      {
        title: "DICOM Viewer Software",
        description: "Free DICOM image viewing and analysis software",
        type: "EXE",
        size: "45 MB",
        downloads: "2,345",
        date: "2024-03-08",
      },
      {
        title: "System Diagnostic Tool",
        description: "Diagnostic utility for system performance monitoring",
        type: "ZIP",
        size: "12 MB",
        downloads: "567",
        date: "2024-02-28",
      },
      {
        title: "Calibration Calculator",
        description: "Excel-based calculator for calibration parameters",
        type: "XLSX",
        size: "0.8 MB",
        downloads: "234",
        date: "2024-02-20",
      },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Download Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Access comprehensive resources including product brochures, technical documentation, training materials,
              and software tools.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input type="text" placeholder="Search downloads..." className="pl-10 pr-4 py-2" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pdf">PDF Documents</SelectItem>
                  <SelectItem value="video">Video Files</SelectItem>
                  <SelectItem value="software">Software</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {downloadCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-border hover:shadow-lg transition-shadow">
                      <CardHeader className="space-y-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg text-card-foreground leading-tight">{item.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Size: {item.size}</span>
                          <span>{item.downloads} downloads</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Updated: {new Date(item.date).toLocaleDateString()}
                          </span>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom Resources */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-balance">Need Custom Resources?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Can't find what you're looking for? Our team can create custom documentation and training materials for your
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Request Custom Resource</Button>
            <Button size="lg" variant="outline">
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
