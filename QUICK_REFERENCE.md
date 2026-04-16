# 🚀 Quick Reference Guide - Enterprise Features

## 📞 WhatsApp Integration

### Floating Button
Already active on all pages! Bottom-right corner with pulse animation.

### Send Form to WhatsApp
```typescript
import { sendToWhatsApp } from '@/lib/whatsapp'

sendToWhatsApp({
  type: 'contact',
  name: 'Customer Name',
  email: 'email@example.com',
  phone: '+91 9876543210',
  message: 'Your message here'
})
```

### Phone Numbers
- Primary: 919701557906
- Secondary: 919491811144
- Update in: `lib/whatsapp.ts` and `components/whatsapp-button.tsx`

---

## 🍪 Cookie Consent

### Already Active
Shows automatically after 1 second on first visit.

### Customize
Edit `components/cookie-consent.tsx` to change:
- Text content
- Button labels
- Styling
- Delay timing

---

## 🔍 SEO Features

### Sitemap
- **URL**: `https://yourdomain.com/sitemap.xml`
- **File**: `app/sitemap.ts`
- **Update**: Change baseUrl to your domain

### Robots.txt
- **URL**: `https://yourdomain.com/robots.txt`
- **File**: `app/robots.ts`
- **Update**: Change baseUrl to your domain

### Structured Data
- **Location**: `lib/structured-data.ts`
- **Active**: Organization schema on all pages
- **Add More**: Use `StructuredData` component

```typescript
import { StructuredData } from '@/components/structured-data'
import { getBreadcrumbSchema } from '@/lib/structured-data'

<StructuredData data={getBreadcrumbSchema([
  { name: 'Home', url: 'https://yourdomain.com' },
  { name: 'Page', url: 'https://yourdomain.com/page' }
])} />
```

---

## 🖼️ Image Optimization

### Use OptimizedImage Component
```typescript
import { OptimizedImage } from '@/components/optimized-image'

<OptimizedImage
  src="/assets/image.jpg"
  alt="Description"
  width={800}
  height={600}
  showSkeleton={true}
/>
```

### Features
- Automatic AVIF/WebP conversion
- Lazy loading
- Loading skeleton
- Error fallback

---

## ⏳ Loading States

### Skeleton Components
```typescript
import { Skeleton, CardSkeleton, PageSkeleton } from '@/components/loading-skeleton'

// Basic skeleton
<Skeleton className="h-4 w-full" />

// Card skeleton
<CardSkeleton />

// Full page skeleton
<PageSkeleton />
```

---

## 📄 New Pages

### Blog
- **URL**: `/blog`
- **File**: `app/blog/page.tsx`
- **Update**: Add real blog posts

### Careers
- **URL**: `/careers`
- **File**: `app/careers/page.tsx`
- **Update**: Add real job listings

### Track Shipment
- **URL**: `/track-shipment`
- **File**: `app/track-shipment/page.tsx`
- **Update**: Connect to tracking API

### FAQ (Enhanced)
- **URL**: `/faq`
- **File**: `app/faq/page.tsx`
- **Feature**: Search functionality active

---

## 🔒 Security Headers

Already configured in `next.config.mjs`:
- ✅ HSTS
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ XSS Protection
- ✅ Referrer Policy
- ✅ Permissions Policy

---

## 📱 Mobile Features

- ✅ Responsive WhatsApp button
- ✅ Mobile-optimized cookie banner
- ✅ Touch-friendly navigation
- ✅ Optimized images
- ✅ Fast loading

---

## 🎨 Animations

### Available Classes (in globals.css)
```css
.animate-slide-in-up    /* Slide from bottom */
.animate-float          /* Floating effect */
.animate-pulse-glow     /* Pulsing glow */
.animate-shimmer        /* Shimmer effect */
.hover-lift             /* Lift on hover */
.hover-scale            /* Scale on hover */
.hover-glow             /* Glow on hover */
```

---

## ⚙️ Configuration Files

### Must Update Before Launch

1. **Domain URLs** (Update in 4 files):
   ```
   app/sitemap.ts          → Line 4
   app/robots.ts           → Line 4
   app/metadata.ts         → Line 4
   lib/structured-data.ts  → Line 23
   ```
   Replace: `https://khyathilogistics.com`

2. **WhatsApp Numbers** (Verify in 2 files):
   ```
   lib/whatsapp.ts                    → Lines 3-6
   components/whatsapp-button.tsx     → Line 7
   ```

3. **Social Media** (Add URLs):
   ```
   lib/structured-data.ts  → Line 35 (sameAs array)
   app/metadata.ts         → Line 56 (Twitter handle)
   ```

---

## 🧪 Testing Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

---

## 📊 Validation Tools

### SEO
- **Structured Data**: https://search.google.com/test/rich-results
- **Meta Tags**: https://metatags.io
- **Open Graph**: https://www.opengraph.xyz

### Performance
- **Lighthouse**: Chrome DevTools
- **PageSpeed**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com

### Security
- **Headers**: https://securityheaders.com
- **SSL**: https://www.ssllabs.com/ssltest

---

## 🚀 Deployment Checklist

- [ ] Update all domain URLs
- [ ] Verify WhatsApp numbers
- [ ] Add social media links
- [ ] Test cookie consent
- [ ] Test WhatsApp integration
- [ ] Validate structured data
- [ ] Run Lighthouse audit
- [ ] Test on mobile
- [ ] Check all links
- [ ] Deploy to production
- [ ] Submit sitemap to Google
- [ ] Monitor analytics

---

## 📞 Quick Contact Integration

### Add WhatsApp to Any Button
```typescript
import { openWhatsApp } from '@/lib/whatsapp'

<Button onClick={() => openWhatsApp('Custom message')}>
  Contact Us
</Button>
```

### Get WhatsApp URL
```typescript
import { getWhatsAppURL } from '@/lib/whatsapp'

const url = getWhatsAppURL('Hello!')
// Use in <a href={url}>
```

---

## 🎯 Key Features at a Glance

| Feature | Location | Status |
|---------|----------|--------|
| Cookie Consent | Bottom of page | ✅ Active |
| WhatsApp Button | Bottom-right | ✅ Active |
| Sitemap | /sitemap.xml | ✅ Active |
| Robots | /robots.txt | ✅ Active |
| Structured Data | All pages | ✅ Active |
| Blog | /blog | ✅ Active |
| Careers | /careers | ✅ Active |
| Track Shipment | /track-shipment | ✅ Active |
| FAQ Search | /faq | ✅ Active |
| Security Headers | All pages | ✅ Active |
| Image Optimization | All images | ✅ Active |

---

## 💡 Pro Tips

1. **WhatsApp**: Test with your actual phone number first
2. **SEO**: Submit sitemap to Google Search Console
3. **Performance**: Use OptimizedImage for all images
4. **Mobile**: Test on real devices, not just browser
5. **Analytics**: Add Google Analytics for tracking
6. **Content**: Update blog weekly for SEO
7. **Monitoring**: Set up uptime monitoring
8. **Backup**: Regular backups before updates

---

## 🆘 Troubleshooting

### WhatsApp Not Opening
- Check phone number format (no spaces, include country code)
- Verify WhatsApp is installed on device
- Test URL in browser first

### Cookie Banner Not Showing
- Clear localStorage
- Check browser console for errors
- Verify component is in layout.tsx

### Images Not Loading
- Check file paths
- Verify images exist in public folder
- Check next.config.mjs settings

### Build Errors
- Run `npm run typecheck`
- Check for missing imports
- Verify all files are saved

---

## 📚 Documentation Files

- `ENTERPRISE_FEATURES.md` - Detailed feature documentation
- `IMPLEMENTATION_SUMMARY.md` - Complete implementation details
- `QUICK_REFERENCE.md` - This file
- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment guide

---

**Need Help?** Check the detailed documentation in `ENTERPRISE_FEATURES.md`

**Ready to Deploy?** Follow `DEPLOYMENT.md` guide

**Quick Start?** Run `npm run dev` and visit http://localhost:3000

---

✅ **All Features Active and Ready to Use!**
