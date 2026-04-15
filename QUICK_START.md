# Quick Start Guide - Khyathi Logistics Website

Get your website up and running in 5 minutes!

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

That's it! Your website is now running locally.

## 🎯 What You Get

✅ **8 Complete Pages**:
- Home page with hero and services
- About page with company info
- Services page with detailed offerings
- Gallery page (ready for images)
- Contact page with form
- Terms & Conditions
- Privacy Policy
- Damage & Shortage Policy

✅ **Fully Responsive**: Works on mobile, tablet, and desktop

✅ **Dark Mode Ready**: Theme switching capability built-in

✅ **Modern UI**: Professional design with shadcn/ui components

✅ **SEO Optimized**: Proper metadata and structure

## 🔧 Essential Customizations

### Update Contact Info (5 minutes)

1. **Phone Numbers** - Update in 2 files:
   - `components/header.tsx` (line 42)
   - `components/footer.tsx` (lines 44-45)

2. **Email** - Update in:
   - `components/footer.tsx` (line 50)
   - `app/contact/page.tsx` (line 75)

3. **Address** - Update in:
   - `components/footer.tsx` (line 56)
   - `app/contact/page.tsx` (lines 81-89)

### Add Your Logo (2 minutes)

Replace text logo in `components/header.tsx` (line 18):
```tsx
<Link href="/" className="flex items-center space-x-2">
  <div className="text-2xl font-bold text-primary">YOUR LOGO</div>
</Link>
```

### Change Colors (3 minutes)

Edit `app/globals.css` (lines 52-53):
```css
--primary: oklch(0.508 0.118 165.612); /* Your brand color */
```

Use [oklch.com](https://oklch.com) to pick colors.

## 📱 Test Your Site

### Check All Pages Work:
- ✅ Home: http://localhost:3000
- ✅ About: http://localhost:3000/about
- ✅ Services: http://localhost:3000/services
- ✅ Gallery: http://localhost:3000/gallery
- ✅ Contact: http://localhost:3000/contact

### Test Responsive Design:
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes

### Test Dark Mode:
Press `d` key to toggle dark mode

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - 2 minutes)
```bash
npm install -g vercel
vercel
```

### Option 2: Build and Deploy Manually
```bash
npm run build
npm start
```

See `DEPLOYMENT.md` for detailed deployment options.

## 📝 Common Tasks

### Add New Service
Edit `app/services/page.tsx` and add to `mainServices` array

### Update Company Description
Edit `app/about/page.tsx`

### Modify Home Page Content
Edit `app/page.tsx`

### Add Gallery Images
Edit `app/gallery/page.tsx` and replace placeholder

### Connect Contact Form
Edit `app/contact/page.tsx` - see `handleSubmit` function

## 🎨 Customization

For detailed customization instructions, see:
- `CUSTOMIZATION.md` - Complete customization guide
- `SITE_STRUCTURE.md` - Full site structure
- `DEPLOYMENT.md` - Deployment options

## 📊 Available Scripts

```bash
npm run dev        # Development server (with hot reload)
npm run build      # Production build
npm start          # Start production server
npm run lint       # Check code quality
npm run format     # Format code
npm run typecheck  # Check TypeScript
```

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
PORT=3001 npm run dev
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading?
Clear browser cache and restart dev server

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Update all contact information
- [ ] Add your logo
- [ ] Customize colors (optional)
- [ ] Add gallery images
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Review all content
- [ ] Test dark mode
- [ ] Run `npm run build` successfully

## 📞 Need Help?

**Khyathi Logistics Solutions**
- Email: info.khyathilogistics@gmail.com
- Phone: 9701557906 / 9491811144

## 🎉 You're Ready!

Your professional logistics website is ready to go. Just customize the content, add your images, and deploy!

**Next Steps**:
1. Customize contact information (10 minutes)
2. Add your branding (5 minutes)
3. Review and edit content (30 minutes)
4. Add gallery images (15 minutes)
5. Deploy to production (5 minutes)

**Total Time to Launch**: ~1 hour

Good luck with your website! 🚀
