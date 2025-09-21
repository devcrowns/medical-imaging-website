# Qube Medical System - Medical Imaging Equipment Website

A professional business website for Qube Medical System, specializing in CT scanners and MRI machines sales, installation, and maintenance services.

## 🏥 About

Qube Medical System is a comprehensive medical imaging equipment company offering:
- CT Scanner and MRI Machine sales
- Professional installation and calibration services
- Maintenance and Annual Maintenance Contracts (AMC)
- Technical training and support
- 24/7 customer service

## 🚀 Tech Stack

### Core Framework
- **Next.js 14.2.25** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety and developer experience

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Modern component library
- **Geist Font** - Typography system
- **Custom Design System** - Healthcare-themed colors and components

### Features & Integrations
- **React Hook Form + Zod** - Form handling and validation
- **Recharts** - Data visualization for analytics
- **Vercel Analytics** - Performance monitoring
- **WhatsApp Integration** - Direct customer communication
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching support

### Development Tools
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **PNPM** - Fast package manager

## 📋 Prerequisites

- Node.js 18 or higher
- PNPM package manager
- Modern web browser

## 🛠️ Installation & Setup

### 1. Clone or Download Project
```bash
# If using Git
git clone <repository-url>
cd qube-medical-website

# Or download ZIP from v0 interface (three dots → Download ZIP)
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Variables (Optional)
Create a `.env.local` file for email functionality:
```env
# Email Service (Optional - for contact form emails)
RESEND_API_KEY=your_resend_api_key_here

# WhatsApp Business Number (Update in components/whatsapp-bubble.tsx)
WHATSAPP_PHONE=1234567890
```

### 4. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
qube-medical-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About us page
│   ├── blog/              # News & articles with filtering
│   ├── case-studies/      # Customer success stories
│   ├── contact/           # Contact forms and information
│   ├── downloads/         # Resource download center
│   ├── faq/               # Frequently asked questions
│   ├── products/          # CT scanners & MRI machines
│   ├── services/          # Installation & maintenance services
│   ├── api/               # API routes for form submissions
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/                # shadcn/ui components
│   ├── navigation.tsx     # Header navigation
│   ├── hero-section.tsx   # Homepage hero
│   ├── product-card.tsx   # Product display cards
│   ├── footer.tsx         # Site footer
│   └── whatsapp-bubble.tsx # Floating WhatsApp button
├── lib/                   # Utility functions
├── public/                # Static assets (images, logos)
└── hooks/                 # Custom React hooks
```

## 🌐 Deployment

### Vercel (Recommended)
1. Click "Publish" in v0 interface for instant deployment
2. Or connect GitHub repository to Vercel dashboard

### Manual Deployment
```bash
pnpm build
# Deploy the .next folder to your hosting provider
```

## ✨ Key Features

- **Responsive Design** - Works on all devices
- **Product Catalog** - CT scanners and MRI machines with detailed specs
- **Service Pages** - Installation, maintenance, and training information
- **Contact Forms** - General inquiry and service request forms
- **Case Studies** - Customer success stories and testimonials
- **Blog/News** - Filterable articles by category
- **Download Center** - Brochures and technical documentation
- **WhatsApp Integration** - Floating chat button on all pages
- **FAQ Section** - Searchable frequently asked questions
- **Professional Design** - Healthcare-focused color scheme and typography

## 📧 Contact Form Setup

The contact forms can send emails using Resend service:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to environment variables
4. Update recipient email in `app/api/contact/route.ts`

## 🎨 Customization

### Colors
Update design tokens in `app/globals.css`:
```css
:root {
  --primary: 210 100% 50%;        /* Blue primary */
  --secondary: 210 20% 95%;       /* Light gray */
  --accent: 142 76% 36%;          /* Green accent */
}
```

### Company Information
Update company details in:
- `components/navigation.tsx` - Logo and contact info
- `components/footer.tsx` - Address and social links
- `components/whatsapp-bubble.tsx` - WhatsApp number

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Support

For technical support or customization requests:
- Email: support@qubemedical.com
- WhatsApp: Available on all pages
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary software for Qube Medical System.

## Author

- DevCrown Technologies

---

Built with ❤️ using Next.js and modern web technologies.
