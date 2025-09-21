import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MI</span>
              </div>
              <span className="ml-3 text-xl font-bold text-card-foreground">Qube Medical System</span>
            </div>
            <p className="text-muted-foreground text-pretty">
              Leading provider of medical imaging solutions with over 25 years of experience in CT scanners, MRI
              machines, and comprehensive support services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 8681065538</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@medimagingpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">123 Medical Center Drive, Healthcare City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Quick Links</h3>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Products & Services</h3>
            <div className="space-y-3">
              {[
                "CT Scanners",
                "MRI Machines",
                "Installation Services",
                "Maintenance & Support",
                "Training Programs",
                "Technical Documentation",
              ].map((item) => (
                <div key={item} className="text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-card-foreground">Resources</h4>
              <div className="space-y-2">
                {[
                  { href: "/faq", label: "FAQ" },
                  { href: "/blog", label: "Blog & News" },
                  { href: "/downloads", label: "Download Center" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <div>© {currentYear} DevCrown Technologies. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
