# Khyathi Logistics Website - Site Structure

## 📁 Project Structure

```
khyathi-logistics/
├── app/
│   ├── about/
│   │   └── page.tsx              # About Us page
│   ├── contact/
│   │   └── page.tsx              # Contact page with form
│   ├── damage-policy/
│   │   └── page.tsx              # Damage & Shortage Policy
│   ├── gallery/
│   │   └── page.tsx              # Gallery (placeholder)
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── terms/
│   │   └── page.tsx              # Terms & Conditions
│   ├── favicon.ico               # Site favicon
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout with header/footer
│   ├── manifest.ts               # PWA manifest
│   ├── metadata.ts               # Site metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # shadcn/ui components (55 files)
│   ├── footer.tsx                # Site footer
│   ├── header.tsx                # Site header with navigation
│   └── theme-provider.tsx        # Dark mode provider
├── hooks/
│   └── use-mobile.ts             # Mobile detection hook
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── CUSTOMIZATION.md              # Customization guide
├── DEPLOYMENT.md                 # Deployment instructions
├── README.md                     # Project documentation
├── SITE_STRUCTURE.md             # This file
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript config
```

## 🌐 Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero, services, features |
| `/about` | `app/about/page.tsx` | Company information, mission, vision |
| `/services` | `app/services/page.tsx` | Detailed service offerings |
| `/gallery` | `app/gallery/page.tsx` | Fleet and operations gallery |
| `/contact` | `app/contact/page.tsx` | Contact form and information |
| `/terms` | `app/terms/page.tsx` | Terms and conditions |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy |
| `/damage-policy` | `app/damage-policy/page.tsx` | Damage and shortage policy |

## 🎨 Components

### Layout Components
- **Header** (`components/header.tsx`)
  - Logo/Brand
  - Navigation menu
  - Mobile menu toggle
  - Phone number
  - CTA button

- **Footer** (`components/footer.tsx`)
  - Company info
  - Quick links
  - Services links
  - Contact information
  - Social media (ready to add)
  - Copyright & legal links

### UI Components (shadcn/ui)
All located in `components/ui/`:
- accordion, alert, alert-dialog
- avatar, badge, breadcrumb
- button, button-group
- calendar, card, carousel, chart
- checkbox, collapsible, combobox, command
- context-menu, dialog, direction, drawer
- dropdown-menu, empty, field
- hover-card, input, input-group, input-otp
- kbd, label, menubar, navigation-menu
- pagination, popover, progress
- radio-group, resizable, scroll-area
- select, separator, sheet, skeleton
- slider, sonner, spinner, switch
- table, tabs, textarea, toast, toaster
- toggle, toggle-group, tooltip

## 📄 Page Content

### Home Page (`/`)
- Hero section with tagline
- Services overview (4 cards)
- Features section with stats
- Why choose us section
- CTA section

### About Page (`/about`)
- Hero section
- Mission, Vision, Innovation cards
- Company description
- Strengths section
- Technology platform details

### Services Page (`/services`)
- Hero section
- 6 main services with features:
  - PTL (Part Truck Load)
  - FTL (Full Truck Load)
  - Express Delivery
  - Heavy Machinery Transport
  - Real-Time Tracking
  - Logistics Aggregator Platform
- Additional capabilities
- USPs section
- CTA section

### Gallery Page (`/gallery`)
- Hero section
- Category cards (placeholder)
- Ready for image integration

### Contact Page (`/contact`)
- Hero section
- Contact information card:
  - Phone numbers
  - Email
  - Address
  - Business hours
- Contact form:
  - Name, Email, Phone
  - Company, Service
  - Message
- Emergency support section

### Policy Pages
- **Terms & Conditions**: Service terms, liability, payment
- **Privacy Policy**: Data collection, usage, rights
- **Damage Policy**: Claims process, documentation, liability

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile menu for small screens
- Flexible grid layouts

### Dark Mode
- Theme toggle capability
- Separate color schemes
- Smooth transitions

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators

### Performance
- Static page generation
- Optimized images (when added)
- Code splitting
- CSS optimization

### SEO
- Metadata for all pages
- Semantic structure
- Clean URLs
- Sitemap ready

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint rules
- `.prettierrc` - Code formatting
- `components.json` - shadcn/ui config

## 📊 Technology Stack

- **Framework**: Next.js 16.1.7 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.2.1
- **UI Library**: shadcn/ui with Radix UI
- **Icons**: Remix Icon (@remixicon/react)
- **Fonts**: Raleway, Geist Mono
- **Theme**: next-themes
- **Notifications**: Sonner

## 🚀 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run typecheck  # Check TypeScript types
```

## 📱 Contact Information

**Khyathi Logistics Solutions**

- **Business Name**: Khyathi Logistics Solutions / KHYATHI
- **Industry**: Logistics / Transportation / Freight
- **Tagline**: "Driving Connections. Delivering Success."

**Contact Details**:
- Email: info.khyathilogistics@gmail.com
- Phone: 9701557906, 9491811144
- Address: Flat No: 402, 5th Floor, Akshara Apartments, Srikalahasti Road, Bathalavallam Gram Panchayat, Chedulapakkam Village, Varadaiahpalem Mandal, Tirupati District, Andhra Pradesh – 517541

**Services**:
- Express Delivery Services
- PTL (Part Truck Load)
- FTL (Full Truck Load)
- Machinery / Heavy Transport
- Logistics Aggregator Platform
- Real-Time Tracking
- Pan India Transportation

## 📝 Next Steps

1. **Add Images**: Replace gallery placeholders with actual photos
2. **Connect Form**: Integrate contact form with backend/email service
3. **Add Content**: Expand service descriptions if needed
4. **SEO**: Submit sitemap to search engines
5. **Analytics**: Add Google Analytics or similar
6. **Testing**: Test all forms and links
7. **Deploy**: Choose deployment platform and go live

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Remix Icon](https://remixicon.com)
