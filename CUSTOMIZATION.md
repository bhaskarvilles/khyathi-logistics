# Customization Guide

This guide helps you customize the Khyathi Logistics website to match your specific needs.

## 🎨 Branding & Colors

### Update Primary Color

Edit `app/globals.css` to change the primary brand color:

```css
:root {
    --primary: oklch(0.508 0.118 165.612); /* Change this */
    --primary-foreground: oklch(0.979 0.021 166.113);
}

.dark {
    --primary: oklch(0.432 0.095 166.913); /* And this for dark mode */
    --primary-foreground: oklch(0.979 0.021 166.113);
}
```

Use [oklch.com](https://oklch.com) to pick colors in OKLCH format.

### Update Logo

Replace the text logo in `components/header.tsx`:

```tsx
<Link href="/" className="flex items-center space-x-2">
  <Image src="/logo.png" alt="Khyathi" width={120} height={40} />
</Link>
```

### Update Favicon

Replace `app/favicon.ico` with your company favicon.

## 📝 Content Updates

### Contact Information

Update in multiple files:

1. **Header** (`components/header.tsx`):
```tsx
<a href="tel:YOUR_PHONE">YOUR_PHONE</a>
```

2. **Footer** (`components/footer.tsx`):
```tsx
<a href="tel:YOUR_PHONE">YOUR_PHONE</a>
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
```

3. **Contact Page** (`app/contact/page.tsx`):
Update all contact details in the contact information card.

### Company Address

Update the full address in:
- `components/footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/damage-policy/page.tsx`
- `app/terms/page.tsx`

### Tagline & Messaging

Update the tagline "Driving Connections. Delivering Success." in:
- `app/page.tsx` (Hero section)
- `components/footer.tsx`
- `app/metadata.ts`

## 🖼️ Adding Images

### Gallery Page

Replace placeholder in `app/gallery/page.tsx`:

```tsx
const galleryItems = [
  { src: '/images/fleet-1.jpg', alt: 'Truck Fleet', category: 'Fleet' },
  { src: '/images/warehouse.jpg', alt: 'Warehouse', category: 'Facilities' },
  // Add more images
]

// Then map through them
<div className="grid md:grid-cols-3 gap-6">
  {galleryItems.map((item, index) => (
    <Card key={index}>
      <Image 
        src={item.src} 
        alt={item.alt} 
        width={400} 
        height={300}
        className="rounded-lg"
      />
    </Card>
  ))}
</div>
```

### Hero Images

Add background images to hero sections in any page:

```tsx
<section 
  className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20"
  style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
>
```

## 📋 Services

### Add New Service

In `app/services/page.tsx`, add to the `mainServices` array:

```tsx
{
  id: 'new-service',
  icon: RiTruckLine, // Choose appropriate icon
  title: 'New Service Name',
  description: 'Service description',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
}
```

### Remove Service

Simply remove the service object from the `mainServices` array.

## 📱 Contact Form

### Connect to Backend

Update `app/contact/page.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Thank you! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    }
  } catch (error) {
    alert('Error sending message. Please try again.')
  }
}
```

### Add Form Fields

Add new fields in the form:

```tsx
<div className="space-y-2">
  <Label htmlFor="newfield">New Field</Label>
  <Input
    id="newfield"
    name="newfield"
    value={formData.newfield}
    onChange={handleChange}
  />
</div>
```

## 🔗 Navigation

### Add New Page

1. Create page file: `app/newpage/page.tsx`
2. Add to navigation in `components/header.tsx`:

```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/newpage', label: 'New Page' }, // Add here
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]
```

### Remove Page

1. Delete the page folder from `app/`
2. Remove from navigation array in `components/header.tsx`

## 🎭 Testimonials

Add testimonials section to home page (`app/page.tsx`):

```tsx
const testimonials = [
  {
    name: 'Client Name',
    company: 'Company Name',
    text: 'Testimonial text here...',
    rating: 5,
  },
]

// Add section
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{testimonial.name}</CardTitle>
            <CardDescription>{testimonial.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{testimonial.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

## 📊 Analytics

### Add Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🌐 Multi-language Support

To add multiple languages:

1. Install next-intl:
```bash
npm install next-intl
```

2. Follow [next-intl documentation](https://next-intl-docs.vercel.app/) for setup

## 🔔 Notifications

Add toast notifications using the included Sonner:

```tsx
import { toast } from 'sonner'

// In your component
toast.success('Message sent successfully!')
toast.error('Failed to send message')
```

## 💼 Business Hours

Update in `app/contact/page.tsx`:

```tsx
<p className="text-sm text-muted-foreground">
  Monday - Saturday: 9:00 AM - 6:00 PM<br />
  Sunday: Closed
</p>
```

## 🎨 Component Styling

All components use Tailwind CSS. Modify classes directly:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Button
</Button>
```

## 📱 Social Media Links

Add to `components/footer.tsx`:

```tsx
<div className="flex space-x-4">
  <a href="https://facebook.com/yourpage" className="hover:text-primary">
    <RiFacebookLine className="h-5 w-5" />
  </a>
  <a href="https://twitter.com/yourhandle" className="hover:text-primary">
    <RiTwitterXLine className="h-5 w-5" />
  </a>
  <a href="https://linkedin.com/company/yourcompany" className="hover:text-primary">
    <RiLinkedinLine className="h-5 w-5" />
  </a>
</div>
```

## 🔍 SEO Optimization

Update metadata for each page:

```tsx
export const metadata = {
  title: 'Your Page Title - Khyathi Logistics',
  description: 'Your page description',
  keywords: ['keyword1', 'keyword2'],
}
```

## 📞 Need Help?

For customization assistance:
- Email: info.khyathilogistics@gmail.com
- Phone: 9701557906 / 9491811144
