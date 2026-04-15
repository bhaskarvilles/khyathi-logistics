# Deployment Guide - Khyathi Logistics Website

This guide covers deploying the Khyathi Logistics Solutions website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or simply:
- Push your code to GitHub
- Visit [vercel.com](https://vercel.com)
- Import your repository
- Vercel will auto-detect Next.js and deploy

**Custom Domain**: Add your domain in Vercel dashboard → Settings → Domains

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
- Connect your Git repository to Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Or use Netlify CLI: `netlify deploy --prod`

### Option 3: Self-Hosted (VPS/Cloud)

#### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx (recommended for reverse proxy)

#### Steps:

1. **Clone and build**:
```bash
git clone <your-repo>
cd khyathi-logistics
npm install
npm run build
```

2. **Install PM2**:
```bash
npm install -g pm2
```

3. **Start the application**:
```bash
pm2 start npm --name "khyathi-logistics" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx** (optional but recommended):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Enable SSL with Let's Encrypt**:
```bash
sudo certbot --nginx -d yourdomain.com
```

### Option 4: Docker

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

2. **Build and run**:
```bash
docker build -t khyathi-logistics .
docker run -p 3000:3000 khyathi-logistics
```

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Contact Form (if using a backend API)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Performance Optimization

The website is already optimized with:
- Static page generation
- Image optimization (when images are added)
- Code splitting
- CSS optimization
- Font optimization

## 🔍 SEO Checklist

Before going live:
- [ ] Update all metadata in page files
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check page load speeds
- [ ] Verify contact form functionality

## 📱 Post-Deployment

1. **Test all pages**:
   - Home: /
   - About: /about
   - Services: /services
   - Gallery: /gallery
   - Contact: /contact
   - Terms: /terms
   - Privacy: /privacy
   - Damage Policy: /damage-policy

2. **Verify contact information** is correct on all pages

3. **Test contact form** submission

4. **Check mobile responsiveness**

5. **Test dark mode** toggle

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port already in use
```bash
# Change port
PORT=3001 npm start
```

### Styles not loading
- Ensure Tailwind CSS is properly configured
- Check `globals.css` is imported in layout

## 📞 Support

For deployment issues, contact:
- Email: info.khyathilogistics@gmail.com
- Phone: 9701557906 / 9491811144

## 🔄 Updates

To update the live site:
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy using your chosen method
5. Verify changes on live site
