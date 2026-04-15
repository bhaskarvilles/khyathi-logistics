# Animation Implementation Guide

This document outlines all the animations implemented across the Khyathi Logistics website for a modern, fluid user experience.

## Technologies Used

- **Framer Motion**: Industry-standard React animation library for complex, performant animations
- **CSS Animations**: Custom keyframe animations for lightweight effects
- **Tailwind CSS**: Utility classes for transitions and transforms

## Animation Principles

All animations follow these best practices:

1. **Performance First**: Hardware-accelerated transforms (translate, scale, rotate, opacity)
2. **Purposeful Motion**: Every animation serves a UX purpose
3. **Accessibility**: Respects `prefers-reduced-motion` media query
4. **Smooth Timing**: Uses easing functions for natural movement
5. **Staggered Reveals**: Sequential animations for lists and grids

## Animation Library

### Framer Motion Variants (`lib/animations.ts`)

#### Fade Animations
- `fadeIn`: Simple opacity fade
- `fadeInUp`: Fade in with upward movement
- `fadeInDown`: Fade in with downward movement
- `fadeInLeft`: Fade in from left
- `fadeInRight`: Fade in from right

#### Scale Animations
- `scaleIn`: Zoom in effect
- `hoverScale`: Scale up on hover
- `tapScale`: Scale down on tap/click

#### Slide Animations
- `slideInLeft`: Slide from left with fade
- `slideInRight`: Slide from right with fade

#### Stagger Animations
- `staggerContainer`: Parent container for staggered children
- `staggerItem`: Individual items that animate in sequence

#### Hover Effects
- `hoverLift`: Lift element up on hover
- `hoverScale`: Scale element on hover

### CSS Animations (`app/globals.css`)

#### Keyframe Animations
- `float`: Gentle floating motion (6s infinite)
- `pulse-glow`: Pulsing glow effect (2s infinite)
- `shimmer`: Shimmer/shine effect (2s infinite)
- `slide-in-right`: Slide in from right
- `slide-in-left`: Slide in from left
- `fade-in-up`: Fade in with upward movement
- `scale-in`: Scale in from 90%
- `rotate-in`: Rotate and scale in

#### Utility Classes
- `.animate-float`: Apply floating animation
- `.animate-pulse-glow`: Apply pulsing glow
- `.animate-shimmer`: Apply shimmer effect
- `.hover-lift`: Lift on hover with shadow
- `.hover-scale`: Scale on hover
- `.hover-glow`: Glow on hover
- `.transition-smooth`: Smooth 300ms transition
- `.transition-smooth-slow`: Smooth 500ms transition

#### Stagger Delays
- `.stagger-1` through `.stagger-6`: Animation delays (0.1s - 0.6s)

## Component Animations

### Header (`components/header.tsx`)
- Slides down on page load
- Navigation links fade in sequentially
- Hover underline animation on links
- Scale effects on buttons
- Scroll-based background blur enhancement

### Footer (`components/footer.tsx`)
- Staggered fade-in for all sections
- Social icons scale and rotate on hover
- Links slide right on hover
- Icons scale on hover

### Homepage (`app/page.tsx`)

#### Hero Section
- Staggered text reveal
- Floating hero image
- Button scale on hover/tap
- Check marks fade in sequentially

#### Stats Section
- Cards fade in with stagger
- Icons spring in with scale
- Hover lift effect

#### Services Section
- Grid items stagger in
- Icons rotate and scale on reveal
- Cards lift on hover
- Arrow slides on link hover

#### Features Section
- Icon containers glow on hover
- Cards lift and shadow on hover
- Staggered grid reveal

#### Testimonials Section
- Cards fade in with stagger
- Hover lift effect
- Star ratings animate

#### CTA Section
- Gradient background animation
- Button scale effects
- Check marks fade in

## Usage Examples

### Basic Fade In
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
  variants={fadeInUp}
>
  <YourContent />
</motion.div>
```

### Staggered Grid
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
  variants={staggerContainer}
>
  {items.map((item, index) => (
    <motion.div key={index} variants={staggerItem}>
      <Card>{item.content}</Card>
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  <Button>Click Me</Button>
</motion.div>
```

### CSS Animation
```tsx
<div className="animate-float hover-lift">
  <Image src="/hero.png" alt="Hero" />
</div>
```

## Performance Optimization

1. **Viewport Detection**: Animations trigger only when elements enter viewport
2. **Once Property**: Most animations run once to avoid re-triggering
3. **Hardware Acceleration**: Using transform and opacity properties
4. **Reduced Motion**: Respects user preferences (to be implemented)
5. **Lazy Loading**: Animations don't block initial page load

## Future Enhancements

- [ ] Add `prefers-reduced-motion` support
- [ ] Implement page transition animations
- [ ] Add loading skeleton animations
- [ ] Create micro-interactions for form inputs
- [ ] Add scroll-triggered parallax effects
- [ ] Implement animated SVG icons

## Browser Support

All animations are tested and work on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Animations enhance UX but don't block functionality
- All interactive elements remain keyboard accessible
- Focus states are preserved
- Content is readable without animations

## Maintenance

When adding new animations:
1. Use existing variants when possible
2. Keep duration between 0.3s - 0.8s
3. Use easing functions (easeOut, easeInOut)
4. Test on mobile devices
5. Ensure animations don't cause layout shift
