'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/logo'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiFacebookLine, RiTwitterXLine, RiLinkedinLine, RiInstagramLine } from '@remixicon/react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-16 w-auto transition-transform duration-300 hover:scale-105" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Driving Connections. Delivering Success.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive end-to-end logistics solutions with real-time tracking across India.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: RiFacebookLine, href: '#', label: 'Facebook' },
                { icon: RiTwitterXLine, href: '#', label: 'Twitter' },
                { icon: RiLinkedinLine, href: '#', label: 'LinkedIn' },
                { icon: RiInstagramLine, href: '#', label: 'Instagram' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/partners', label: 'Partners' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/services#ptl', label: 'PTL Services' },
                { href: '/services#ftl', label: 'FTL Services' },
                { href: '/services#express', label: 'Express Delivery' },
                { href: '/services#tracking', label: 'Real-Time Tracking' },
                { href: '/services#machinery', label: 'Heavy Transport' },
                { href: '/get-quote', label: 'Get Quote' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start group">
                <RiPhoneLine className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <a href="tel:9701557906" className="hover:text-primary transition-colors duration-300">9701557906</a><br />
                  <a href="tel:9491811144" className="hover:text-primary transition-colors duration-300">9491811144</a>
                </div>
              </li>
              <li className="flex items-start group">
                <RiMailLine className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:info.khyathilogistics@gmail.com" className="hover:text-primary transition-colors duration-300 break-all">
                  info.khyathilogistics@gmail.com
                </a>
              </li>
              <li className="flex items-start group">
                <RiMapPinLine className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-muted-foreground">
                  Tada, Nellore, Andhra Pradesh - 524401
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 pt-8 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Khyathi Logistics Solutions Private Limited. All rights reserved.<br />
              <span className="text-xs">CIN: U52290AP2025PTC118981 | Reg. No: 118981</span>
            </p>
            <div className="flex space-x-4 text-sm">
              {[
                { href: '/terms', label: 'Terms & Conditions' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/damage-policy', label: 'Damage Policy' }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="hover:text-primary transition-all duration-300 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
