'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu'
import { RiMenuLine, RiPhoneLine, RiArrowDownSLine, RiArrowRightLine } from '@remixicon/react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ]

  const servicesLinks = [
    { href: '/services#express', label: 'Express Delivery' },
    { href: '/services#ftl', label: 'Full Truck Load' },
    { href: '/services#ptl', label: 'Part Truck Load' },
    { href: '/services#machinery', label: 'Heavy Machinery' },
    { href: '/services#tracking', label: 'Real-Time Tracking' },
    { href: '/services#aggregator', label: 'Aggregator Platform' },
  ]

  const moreLinks = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md' 
          : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center">
              <Logo className="h-20 w-auto transition-transform duration-300 hover:scale-105" />
            </Link>
          </motion.div>

          <motion.nav 
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-primary relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                Services <RiArrowDownSLine className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {moreLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-primary relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div 
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="tel:9701557906" 
              className="flex items-center text-sm mr-2 transition-colors duration-300 hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RiPhoneLine className="mr-1 h-4 w-4" />
              9701557906
            </motion.a>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="sm" className="transition-all duration-300">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex md:hidden items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="relative">
                    <motion.div
                      animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RiMenuLine className="h-6 w-6" />
                    </motion.div>
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 overflow-y-auto">
                {/* Header Section */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b px-6 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Logo className="h-12 w-auto" />
                  </motion.div>
                </div>

                {/* Navigation Content */}
                <div className="px-6 py-6 space-y-6">
                  {/* Main Navigation */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <RiArrowRightLine className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Services Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 px-4">
                      <div className="h-px flex-1 bg-border"></div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Our Services
                      </span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    
                    <Link
                      href="/services"
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/15 hover:to-accent/15 transition-all duration-300 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-semibold text-primary">View All Services</span>
                      <RiArrowRightLine className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="grid grid-cols-1 gap-2">
                      {servicesLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.03 }}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-300 group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors flex-1">
                              {link.label}
                            </span>
                            <RiArrowRightLine className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* More Links */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    {moreLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.65 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <RiArrowRightLine className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Footer Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent px-6 py-6 space-y-4 border-t"
                >
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a 
                      href="tel:9701557906" 
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <RiPhoneLine className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Call us now</p>
                        <p className="font-semibold">9701557906</p>
                      </div>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="w-full shadow-lg">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        Get a Free Quote
                        <RiArrowRightLine className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[
                      { label: 'Cities', value: '500+' },
                      { label: 'Deliveries', value: '10K+' },
                      { label: 'On-Time', value: '98%' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        className="text-center p-3 rounded-lg bg-primary/5"
                      >
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
