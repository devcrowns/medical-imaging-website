"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, MessageSquare } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  category: string
  image: string
  description: string
  keyFeatures: string[]
  isNew?: boolean
  slug: string
}

export function ProductCard({ id, name, category, image, description, keyFeatures, isNew, slug }: ProductCardProps) {
  const handleRequestQuote = () => {
    window.location.href = `/contact?tab=inquiry&subject=quote-request&product=${encodeURIComponent(name)}`
  }

  const handleDownloadBrochure = () => {
    window.location.href = `/downloads?category=brochures&product=${slug}`
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border">
      <div className="relative overflow-hidden rounded-t-lg">
        {isNew && (
          <Badge className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground">New Model</Badge>
        )}
        <div className="aspect-[4/3] bg-card">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-secondary font-medium">{category}</div>
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-muted-foreground text-pretty">{description}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-card-foreground">Key Features:</h4>
          <ul className="space-y-1">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <div className="flex gap-2 w-full">
          <Button asChild className="flex-1" size="sm">
            <Link href={`/products/${slug}`}>
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Link>
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadBrochure}>
            <Download className="w-4 h-4 mr-2" />
            Brochure
          </Button>
        </div>
        <Button variant="secondary" size="sm" className="w-full" onClick={handleRequestQuote}>
          <MessageSquare className="w-4 h-4 mr-2" />
          Request Quote
        </Button>
      </CardFooter>
    </Card>
  )
}
