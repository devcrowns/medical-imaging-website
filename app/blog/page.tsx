"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Medical Imaging: Transforming Diagnostic Accuracy",
    excerpt:
      "Explore how artificial intelligence is revolutionizing medical imaging with enhanced diagnostic capabilities, reduced scan times, and improved patient outcomes.",
    category: "Technology",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/placeholder.svg?key=ai-medical-imaging",
    featured: true,
    slug: "future-ai-medical-imaging",
  },
  {
    id: 2,
    title: "CT Scanner Maintenance: Best Practices for Optimal Performance",
    excerpt:
      "Learn essential maintenance practices to ensure your CT scanner operates at peak performance, minimizing downtime and extending equipment lifespan.",
    category: "Maintenance",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "/placeholder.svg?key=ct-maintenance",
    slug: "ct-scanner-maintenance-best-practices",
  },
  {
    id: 3,
    title: "MRI Safety Protocols: Ensuring Patient and Staff Protection",
    excerpt:
      "Comprehensive guide to MRI safety protocols, including magnetic field considerations, contrast agent guidelines, and emergency procedures.",
    category: "Safety",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "/placeholder.svg?key=mri-safety",
    slug: "mri-safety-protocols-guide",
  },
  {
    id: 4,
    title: "Pediatric Imaging: Specialized Considerations for Young Patients",
    excerpt:
      "Understanding the unique requirements for pediatric medical imaging, including child-friendly protocols and radiation dose optimization.",
    category: "Clinical",
    date: "2024-02-28",
    readTime: "7 min read",
    image: "/placeholder.svg?key=pediatric-imaging",
    slug: "pediatric-imaging-considerations",
  },
  {
    id: 5,
    title: "ROI Analysis: Calculating the Value of Medical Imaging Equipment",
    excerpt:
      "Financial analysis framework for evaluating medical imaging equipment investments, including cost-benefit calculations and performance metrics.",
    category: "Business",
    date: "2024-02-20",
    readTime: "9 min read",
    image: "/placeholder.svg?key=roi-analysis",
    slug: "roi-analysis-medical-imaging-equipment",
  },
  {
    id: 6,
    title: "Regulatory Updates: Latest FDA Guidelines for Medical Imaging",
    excerpt:
      "Stay informed about recent FDA regulatory changes affecting medical imaging equipment, compliance requirements, and approval processes.",
    category: "Regulatory",
    date: "2024-02-15",
    readTime: "5 min read",
    image: "/placeholder.svg?key=fda-guidelines",
    slug: "fda-guidelines-medical-imaging-updates",
  },
]

const categories = ["All", "Technology", "Maintenance", "Safety", "Clinical", "Business", "Regulatory"]

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const featuredPost = blogPosts.find((post) => post.featured)
  const filteredPosts = blogPosts.filter((post) => {
    if (!post.featured && (activeFilter === "All" || post.category === activeFilter)) {
      return true
    }
    return false
  })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Medical Imaging Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Stay informed with the latest trends, best practices, and innovations in medical imaging technology and
              healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">Featured Article</span>
              </div>
            </div>

            <Card className="overflow-hidden border-border">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-card">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{featuredPost.excerpt}</p>
                    <Button asChild size="lg">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeFilter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              {activeFilter === "All"
                ? `Showing all ${filteredPosts.length} articles`
                : `Showing ${filteredPosts.length} articles in ${activeFilter}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
              >
                <div className="aspect-[4/3] bg-card overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found in the {activeFilter} category.</p>
              <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setActiveFilter("All")}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance">
            Stay Updated with Medical Imaging Insights
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Subscribe to our newsletter for the latest articles, industry news, and expert insights delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
