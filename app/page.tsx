'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem,
  scaleIn,
  viewportOptions 
} from '@/lib/animations'
import { 
  RiTruckLine, 
  RiMapPinLine, 
  RiTimeLine, 
  RiShieldCheckLine,
  RiArrowRightLine,
  RiCheckLine,
  RiPhoneLine,
  RiSpeedLine,
  RiBox3Line,
  RiSettings4Line,
  RiExchangeLine,
  RiGlobalLine,
  RiCustomerService2Line,
  RiPriceTag3Line,
  RiSmartphoneLine,
  RiTeamLine,
  RiAwardLine,
  RiStarFill,
  RiDoubleQuotesL
} from '@remixicon/react'

export default function HomePage() {
  const services = [
    {
      icon: RiSpeedLine,
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery for time-critical shipments across India.',
      link: '/services#express',
    },
    {
      icon: RiTruckLine,
      title: 'FTL Services',
      description: 'Full Truck Load services for dedicated transportation of large shipments.',
      link: '/services#ftl',
    },
    {
      icon: RiBox3Line,
      title: 'PTL Services',
      description: 'Part Truck Load solutions for cost-effective shipping of smaller consignments.',
      link: '/services#ptl',
    },
    {
      icon: RiSettings4Line,
      title: 'Heavy Machinery',
      description: 'Specialized transport for heavy equipment and oversized cargo.',
      link: '/services#machinery',
    },
    {
      icon: RiMapPinLine,
      title: 'Real-Time Tracking',
      description: 'Track your shipments in real-time with continuous updates and transparency.',
      link: '/services#tracking',
    },
    {
      icon: RiExchangeLine,
      title: 'Aggregator Platform',
      description: 'Connect with verified transport providers for efficient freight movement.',
      link: '/services#aggregator',
    },
  ]

  const features = [
    {
      icon: RiGlobalLine,
      title: 'Pan India Coverage',
      description: 'Extensive network across 500+ cities covering all major and remote locations in India.',
    },
    {
      icon: RiPriceTag3Line,
      title: 'Transparent Pricing',
      description: 'Clear, competitive pricing with no hidden charges. Get instant quotes online.',
    },
    {
      icon: RiSmartphoneLine,
      title: 'Technology Enabled',
      description: 'Advanced mobile apps and web platform for seamless booking and tracking.',
    },
    {
      icon: RiCustomerService2Line,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency assistance available.',
    },
    {
      icon: RiShieldCheckLine,
      title: 'Secure & Reliable',
      description: 'Verified carriers, comprehensive insurance, and proven track record.',
    },
    {
      icon: RiTimeLine,
      title: 'On-Time Delivery',
      description: '98% on-time delivery rate with real-time tracking and proactive updates.',
    },
  ]

  const stats = [
    { value: '500+', label: 'Cities Covered', icon: RiGlobalLine },
    { value: '10,000+', label: 'Shipments Delivered', icon: RiTruckLine },
    { value: '98%', label: 'On-Time Delivery', icon: RiTimeLine },
    { value: '24/7', label: 'Customer Support', icon: RiCustomerService2Line },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Manufacturing Ltd.',
      role: 'Supply Chain Manager',
      text: 'Khyathi Logistics has transformed our supply chain operations. Their real-time tracking and reliable service have significantly reduced our delivery times and costs.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    },
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Pvt. Ltd.',
      role: 'Operations Head',
      text: 'Outstanding service! The team is professional, responsive, and always goes the extra mile. Their technology platform makes logistics management effortless.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    },
    {
      name: 'Arun Patel',
      company: 'Industrial Equipment Co.',
      role: 'Logistics Director',
      text: 'We trust Khyathi for all our heavy machinery transport needs. Their expertise and attention to detail ensure our equipment arrives safely every time.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
    },
  ]

  const whyChooseUs = [
    {
      icon: RiTeamLine,
      title: 'Expert Team',
      description: 'Experienced logistics professionals with deep industry knowledge and commitment to excellence.',
      stat: 98,
      statLabel: 'Customer Satisfaction'
    },
    {
      icon: RiAwardLine,
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring consistent quality and reliability in every shipment.',
      stat: 100,
      statLabel: 'Quality Score'
    },
    {
      icon: RiShieldCheckLine,
      title: 'Comprehensive Insurance',
      description: 'Full cargo insurance coverage for peace of mind on every shipment.',
      stat: 100,
      statLabel: 'Insured Shipments'
    },
    {
      icon: RiSmartphoneLine,
      title: 'Digital Platform',
      description: 'User-friendly mobile apps and web dashboard for seamless logistics management.',
      stat: 95,
      statLabel: 'Platform Uptime'
    },
  ]

  const faqs = [
    {
      question: 'What areas do you cover?',
      answer: 'We provide comprehensive logistics services across 500+ cities in India, covering all major metropolitan areas and remote locations. Our extensive network ensures reliable delivery to virtually any destination in the country.'
    },
    {
      question: 'How do I track my shipment?',
      answer: 'You can track your shipment in real-time through our mobile app or web dashboard. Simply enter your tracking number to get live GPS location updates, estimated delivery time, and complete shipment history.'
    },
    {
      question: 'What types of cargo do you handle?',
      answer: 'We handle all types of cargo including documents, parcels, palletized goods, heavy machinery, and specialized equipment. Our fleet includes vehicles of various sizes to accommodate different cargo requirements.'
    },
    {
      question: 'Do you provide insurance coverage?',
      answer: 'Yes, all shipments are covered by comprehensive cargo insurance. We offer different coverage levels based on your cargo value and requirements. Additional insurance can be purchased for high-value shipments.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options including credit terms for registered businesses, online payment, bank transfer, and cash on delivery. Corporate clients can apply for monthly billing cycles.'
    },
  ]

  const industries = [
    'Manufacturing',
    'E-commerce',
    'Retail',
    'Automotive',
    'Pharmaceuticals',
    'FMCG',
    'Electronics',
    'Textiles',
    'Agriculture',
    'Construction',
    'Chemicals',
    'Food & Beverage',
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <Badge className="mb-4">Logistics That Deliver Excellence</Badge>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={staggerItem}
              >
                Driving Connections.<br />
                <span className="text-primary">Delivering Success.</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                variants={staggerItem}
              >
                Comprehensive end-to-end logistics solutions with real-time tracking, 
                pan India connectivity, and flexible shipping options tailored to your business needs.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={staggerItem}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild className="hover:bg-primary/5 transition-all duration-300">
                    <Link href="/services">
                      Our Services <RiArrowRightLine className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-6 text-sm"
                variants={staggerItem}
              >
                {[
                  { icon: RiCheckLine, text: '500+ Cities' },
                  { icon: RiCheckLine, text: 'Real-Time Tracking' },
                  { icon: RiCheckLine, text: '24/7 Support' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <item.icon className="h-5 w-5 text-primary mr-2" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image 
                    src="/assets/hero-image.png" 
                    alt="Khyathi Logistics Services" 
                    width={600} 
                    height={500}
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile */}
      <section className="py-12 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 lg:hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOptions}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                    >
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    </motion.div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUp}
          >
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From express delivery to heavy machinery transport, we provide comprehensive 
              logistics solutions for every shipping need across India.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="express">Express</TabsTrigger>
              <TabsTrigger value="freight">Freight</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={staggerContainer}
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <motion.div
                          whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-t-4 border-t-primary/50 hover:border-t-primary h-full">
                            <CardHeader>
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={viewportOptions}
                                transition={{ delay: index * 0.1, type: 'spring' }}
                              >
                                <service.icon className="h-12 w-12 text-primary mb-4" />
                              </motion.div>
                              <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="mb-4">{service.description}</CardDescription>
                              <Link href={service.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center group">
                                Learn More 
                                <RiArrowRightLine className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Quick Info</h4>
                          <p className="text-sm text-muted-foreground">
                            Click to learn more about our {service.title.toLowerCase()} and get a customized quote.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="express" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.filter(s => s.link.includes('express')).map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <Link href={service.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                        Learn More <RiArrowRightLine className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="freight" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.link.includes('ftl') || s.link.includes('ptl') || s.link.includes('machinery')).map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <Link href={service.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                        Learn More <RiArrowRightLine className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.filter(s => s.link.includes('tracking') || s.link.includes('aggregator')).map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <Link href={service.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                        Learn More <RiArrowRightLine className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services <RiArrowRightLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver 
              exceptional logistics solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Commitment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Logistics Partner
              </h2>
              <p className="text-muted-foreground mb-8">
                At Khyathi Logistics Solutions, we don't just move goods – we build lasting 
                partnerships. Our commitment to excellence, transparency, and innovation makes 
                us the preferred choice for businesses across India.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <span className="text-sm font-bold text-primary">{item.stat}%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <Progress value={item.stat} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{item.statLabel}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link href="/about">
                  Learn More About Us <RiArrowRightLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl">500+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90">Verified Transport Partners</p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary">100%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Secure & Insured</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-3xl text-accent">15+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/20 to-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary">5000+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say 
              about their experience with Khyathi Logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-accent/50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <RiStarFill key={i} className="h-4 w-4 text-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <RiDoubleQuotesL className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="text-xs font-medium text-primary">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/testimonials">
                View All Testimonials <RiArrowRightLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing specialized logistics solutions across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary cursor-pointer group">
                <CardContent className="pt-6 text-center">
                  <p className="font-medium group-hover:text-primary transition-colors">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Technology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Technology Platform
            </h2>
            <p className="text-muted-foreground mb-12">
              Our comprehensive technology stack ensures seamless operations and real-time visibility
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="text-left hover:shadow-xl transition-all border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <RiSmartphoneLine className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Mobile Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Android & iOS apps built with Flutter</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-time shipment tracking</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Instant notifications and updates</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Easy booking and management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-left hover:shadow-xl transition-all border-l-4 border-l-accent">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                    <RiMapPinLine className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Web Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive admin panel</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Financial management tools</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Route optimization</span>
                    </li>
                    <li className="flex items-start">
                      <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analytics and reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our logistics services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Our Support Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team today for a customized logistics solution 
            that meets your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="tel:9701557906">
                <RiPhoneLine className="mr-2 h-4 w-4" />
                Call Us Now
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <RiCheckLine className="h-5 w-5 mr-2" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <RiCheckLine className="h-5 w-5 mr-2" />
              <span>Instant Quote</span>
            </div>
            <div className="flex items-center">
              <RiCheckLine className="h-5 w-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
