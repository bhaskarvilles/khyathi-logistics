# Social Media & Icon Setup Guide

## Overview
This document explains the Open Graph (OG), Twitter Card, and favicon/icon setup for Khyathi Logistics website.

## What's Been Configured

### 1. Open Graph (OG) Images
- **File**: `app/opengraph-image.tsx`
- **Purpose**: Automatically generates OG images for link sharing on Facebook, LinkedIn, WhatsApp, etc.
- **Size**: 1200x630px (optimal for social media)
- **Features**: 
  - Brand colors (green gradient)
  - Company name and tagline
  - Key features highlighted
  - Professional card design

### 2. Twitter Card Images
- **File**: `app/twitter-image.tsx`
- **Purpose**: Generates Twitter-specific card images
- **Size**: 1200x630px
- **Card Type**: `summary_large_image` (shows large preview)

### 3. Favicons & Icons
- **Standard Favicon**: `app/icon.tsx` (32x32px)
- **Apple Touch Icon**: `app/apple-icon.tsx` (180x180px)
- **PWA Icons**: Configured in `app/manifest.ts` (192x192px, 512x512px)

### 4. Metadata Configuration
- **File**: `app/metadata.ts`
- Updated with proper icon references
- OG and Twitter metadata configured
- SEO-optimized descriptions

## How It Works

Next.js 14+ automatically:
1. Generates images from the `.tsx` files at build time
2. Serves them at the correct URLs (`/opengraph-image`, `/twitter-image`, `/icon`, etc.)
3. Includes proper meta tags in the HTML `<head>`

## Testing Your Setup

### Test Open Graph
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
3. **WhatsApp**: Share your URL in a chat to see the preview

### Test Twitter Cards
1. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
2. Enter your website URL to see the preview

### Test Favicons
1. Open your website in different browsers
2. Check the browser tab icon
3. Add to home screen on mobile devices

## Customization

### Change the Logo/Brand
If you want to use your actual logo image instead of the generated "K" icon:

1. Add your logo files to `/public/`:
   - `logo-og.png` (1200x630px for OG/Twitter)
   - `favicon.ico` (32x32px)
   - `apple-touch-icon.png` (180x180px)
   - `icon-192.png` (192x192px)
   - `icon-512.png` (512x512px)

2. Update `app/metadata.ts`:
```typescript
openGraph: {
  images: [
    {
      url: '/logo-og.png',
      width: 1200,
      height: 630,
      alt: 'Khyathi Logistics Solutions',
      type: 'image/png',
    },
  ],
},
twitter: {
  images: ['/logo-og.png'],
},
icons: {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
}
```

3. Delete or rename the generated image files:
   - `app/opengraph-image.tsx`
   - `app/twitter-image.tsx`
   - `app/icon.tsx`
   - `app/apple-icon.tsx`

### Customize Generated Images
Edit the `.tsx` files to change:
- Colors (update the gradient values)
- Text content
- Layout and styling
- Add your logo image using `<img>` tags

Example with logo:
```tsx
<div style={{ marginBottom: 20 }}>
  <img 
    src="/assets/logo-kh.png" 
    width={200} 
    height={80} 
    alt="Logo"
  />
</div>
```

## Page-Specific OG Images

To create custom OG images for specific pages, add `opengraph-image.tsx` to that page's folder:

```
app/
  services/
    opengraph-image.tsx  ← Custom image for services page
    page.tsx
  contact/
    opengraph-image.tsx  ← Custom image for contact page
    page.tsx
```

## Best Practices

1. **Image Sizes**:
   - OG/Twitter: 1200x630px (1.91:1 ratio)
   - Favicon: 32x32px or 16x16px
   - Apple Touch: 180x180px
   - PWA: 192x192px and 512x512px

2. **File Formats**:
   - Use PNG for transparency
   - Use JPG for photos
   - Use ICO for favicons (optional)

3. **Text on Images**:
   - Keep text large and readable
   - Use high contrast
   - Avoid small details

4. **Testing**:
   - Always test on actual platforms
   - Clear cache when testing changes
   - Check on mobile and desktop

## Troubleshooting

### Images not updating?
1. Clear your browser cache
2. Use the social media debugger tools to refresh
3. Rebuild your Next.js app: `npm run build`

### Wrong image showing?
1. Check the metadata in `app/metadata.ts`
2. Verify file paths are correct
3. Ensure images are in the `/public` folder

### Icons not appearing?
1. Check browser console for 404 errors
2. Verify icon files exist
3. Clear browser cache and hard reload

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
