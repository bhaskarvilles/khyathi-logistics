'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedCard } from '@/components/animated-card'
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem,
  viewportOptions 
} from '@/lib/animations'
import { 
  RiTruckLine, 
  RiShieldCheckLine,
  RiArrowRightLine,
  RiCheckLine,
  RiTeamLine,
  RiAwardLine,
  RiGlobalLine,
  RiHandHeartLine,
  RiUserStarLine,
  RiRoadMapLine,
  RiSettings4Line,
  RiCustomerService2Line
} from '@remixicon/react'

export default function PartnersPage() {
  const partnerBenefits = [
    {
      icon: RiGlobalLine,
      title: 'Pan India Network',
      description: 'Access to our extensive network covering 500+ cities across India with verified transport partners.'
    },
    {
      icon: RiShieldCheckLine,
      title: 'Verified & Trusted',
      description: 'All partners undergo thorough verification and background checks for reliability and safety.'
    },
    {
      icon: RiCustomerService2Line,
      title: 'Dedicated Support',
      description: '24/7 support team to assist with operations, queries, and issue resolution.'
    },
    {
      icon: RiSettings4Line,
      title: 'Technology Platform',
      description: 'Advanced mobile and web applications for seamless booking, tracking, and management.'
    },
    {
      icon: RiHandHeartLine,
      title: 'Fair Pricing',
      description: 'Transparent and competitive pricing with timely payments and no hidden charges.'
    },
    {
      icon: RiAwardLine,
      title: 'Growth Opportunities',
      description: 'Expand your business with consistent load availability and new market access.'
    }
  ]

  const partnerTypes = [
    {
      icon: RiTruckLine,
      title: 'Transport Operators',
      description: 'Own a fleet? Partner with us to maximize utilization and revenue.',
      features: [
        'Consistent load availability',
        'Multiple vehicle types supported',
        'Flexible payment terms',
        'Route optimization support'
      ]
    },
    {
      icon: RiUserStarLine,
      title: 'Individual Drivers',
      description: 'Independent truck owners can join our network for regular business.',
      features: [
        'Direct booking opportunities',
        'Fair freight rates',
        'Fuel advance options',
        'Insurance support'
      ]
    },
    {
      icon: RiRoadMapLine,
      title: 'Logistics Companies',
      description: 'Collaborate with us for mutual growth and expanded service offerings.',
      features: [
        'White-label solutions',
        'API integration',
        'Shared resources',
        'Joint marketing opportunities'
      ]
    }
  ]

  const requirements = [
    'Valid commercial vehicle registration',
    'Valid driving license and permits',
    'Vehicle insurance and fitness certificate',
    'PAN card and GST registration',
    'Bank account details',
    'Address and identity proof'
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Register',
      description: 'Fill out the partner registration form with your details and documents.'
    },
    {
      step: '02',
      title: 'Verification',
      description: 'Our team verifies your documents and conducts background checks.'
    },
    {
      step: '03',
      title: 'Onboarding',
      description: 'Complete training on our platform and receive your partner credentials.'
    },
    {
      step: '04',
      title: 'Start Earning',
      description: 'Begin accepting bookings and grow your business with us.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-4">Partner With Us</Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={staggerItem}
            >
              Grow Your Business<br />
              <span className="text-primary">With Khyathi Logistics</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={staggerItem}
            >
              Join India's fastest-growing logistics network. Partner with us for consistent business, 
              fair pricing, and cutting-edge technology support.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerItem}
            >
              <Button size="lg" asChild>
                <Link href="#register">Become a Partner</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#benefits">
                  Learn More <RiArrowRightLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Active Partners' },
              { value: '10K+', label: 'Monthly Loads' },
              { value: '98%', label: 'Partner Satisfaction' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Partner Benefits */}
      <section id="benefits">
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a network that values your growth and success as much as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
      </section>

      {/* Partner Types */}
      <AnimatedSection className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Partner Categories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Can Partner?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We welcome various types of partners to join our growing network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partnerTypes.map((type, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <Card className="h-full border-t-4 border-t-primary/50 hover:border-t-primary hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <type.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Become a Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to join our network and start earning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Requirements */}
      <AnimatedSection className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Requirements</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You Need
              </h2>
              <p className="text-muted-foreground">
                Basic documents and requirements to become a partner.
              </p>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {requirements.map((req, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOptions}
                      transition={{ delay: index * 0.05 }}
                    >
                      <RiCheckLine className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section id="register">
      <AnimatedSection className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Network?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start your partnership journey today and unlock new growth opportunities 
            for your logistics business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">
                Contact Partnership Team
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
      </section>
    </div>
  )
}
