'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { 
  RiTruckLine, 
  RiMapPinLine, 
  RiTimeLine, 
  RiShieldCheckLine,
  RiSettings4Line,
  RiExchangeLine,
  RiCheckLine,
  RiArrowRightLine,
  RiRouteLine,
  RiBox3Line,
  RiSpeedLine,
  RiGlobalLine
} from '@remixicon/react'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('express')

  const mainServices = [
    {
      id: 'express',
      icon: RiSpeedLine,
      title: 'Express Delivery Services',
      description: 'Time-critical shipments delivered with speed and precision across India.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
      features: [
        'Same-day and next-day delivery options',
        'Priority handling and processing',
        'Dedicated express lanes',
        'Time-definite delivery commitments',
        'Real-time tracking and updates',
        'Specialized packaging for fragile items'
      ],
      process: [
        'Instant booking confirmation',
        'Priority pickup within 2 hours',
        'Express route optimization',
        'Continuous tracking updates',
        'Guaranteed delivery timeframe'
      ],
      benefits: [
        'Fastest transit times in the industry',
        'Reduced inventory holding costs',
        'Enhanced customer satisfaction',
        'Competitive express rates'
      ]
    },
    {
      id: 'ftl',
      icon: RiTruckLine,
      title: 'Full Truck Load (FTL)',
      description: 'Dedicated truck services for large shipments requiring exclusive transportation.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      features: [
        'Exclusive use of entire truck capacity',
        'Direct point-to-point delivery',
        'No intermediate stops or handling',
        'Faster transit times',
        'Enhanced security for valuable cargo',
        'Flexible scheduling options'
      ],
      process: [
        'Cargo assessment and truck allocation',
        'Scheduled pickup at your facility',
        'Direct transportation to destination',
        'GPS tracking throughout journey',
        'Proof of delivery documentation'
      ],
      benefits: [
        'Lower per-unit shipping costs',
        'Reduced damage risk',
        'Predictable delivery schedules',
        'Ideal for bulk shipments'
      ]
    },
    {
      id: 'ptl',
      icon: RiBox3Line,
      title: 'Part Truck Load (PTL)',
      description: 'Cost-effective solution for smaller consignments sharing truck space.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      features: [
        'Shared transportation for cost savings',
        'Flexible scheduling and routing',
        'Ideal for small to medium shipments',
        'Consolidated freight management',
        'Regular departure schedules',
        'Professional cargo handling'
      ],
      process: [
        'Shipment consolidation planning',
        'Optimized route scheduling',
        'Secure loading and segregation',
        'Multi-stop delivery coordination',
        'Individual tracking for each consignment'
      ],
      benefits: [
        'Significant cost reduction',
        'Environmentally friendly',
        'No minimum volume requirements',
        'Reliable delivery timelines'
      ]
    },
    {
      id: 'machinery',
      icon: RiSettings4Line,
      title: 'Heavy Machinery Transportation',
      description: 'Specialized transportation for heavy equipment, industrial machinery, and oversized cargo.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      features: [
        'Specialized heavy-duty vehicles',
        'Expert loading and securing',
        'Route survey and planning',
        'Permit acquisition support',
        'Escort vehicle arrangements',
        'Comprehensive insurance coverage'
      ],
      process: [
        'Site inspection and assessment',
        'Custom transportation plan',
        'Specialized equipment deployment',
        'Careful loading and securing',
        'Monitored transportation',
        'Professional unloading at destination'
      ],
      benefits: [
        'Safe handling of valuable equipment',
        'Experienced heavy haul team',
        'Compliance with regulations',
        'End-to-end project management'
      ]
    },
    {
      id: 'tracking',
      icon: RiMapPinLine,
      title: 'Real-Time Shipment Tracking',
      description: 'Advanced GPS-enabled tracking system providing complete visibility of your cargo.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      features: [
        'Live GPS tracking on all vehicles',
        'Instant status notifications',
        'Mobile app and web access',
        'Detailed shipment history',
        'Geofencing and alerts',
        'ETA predictions and updates'
      ],
      process: [
        'Automatic tracking activation',
        'Real-time location updates',
        'Milestone notifications',
        'Route deviation alerts',
        'Delivery confirmation'
      ],
      benefits: [
        'Complete shipment visibility',
        'Proactive issue resolution',
        'Improved planning and coordination',
        'Enhanced customer communication'
      ]
    },
    {
      id: 'aggregator',
      icon: RiExchangeLine,
      title: 'Logistics Aggregator Platform',
      description: 'Connecting businesses with verified transport providers for efficient freight movement.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      features: [
        'Network of 500+ verified carriers',
        'Automated route and provider matching',
        'Competitive bidding system',
        'Unified booking platform',
        'Centralized communication',
        'Consolidated billing and payments'
      ],
      process: [
        'Submit shipment requirements',
        'Receive competitive quotes',
        'Select preferred carrier',
        'Automated booking confirmation',
        'Unified tracking and management'
      ],
      benefits: [
        'Access to extensive carrier network',
        'Best rates through competition',
        'Reduced administrative overhead',
        'Single point of contact'
      ]
    },
    {
      id: 'route',
      icon: RiRouteLine,
      title: 'Route Optimization',
      description: 'AI-powered route planning for maximum efficiency and cost savings.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
      features: [
        'Advanced route optimization algorithms',
        'Real-time traffic integration',
        'Multi-stop route planning',
        'Fuel efficiency optimization',
        'Weather and road condition analysis',
        'Dynamic route adjustments'
      ],
      process: [
        'Input pickup and delivery locations',
        'AI analyzes optimal routes',
        'Consider traffic and conditions',
        'Generate efficient route plan',
        'Monitor and adjust in real-time'
      ],
      benefits: [
        'Reduced transportation costs',
        'Faster delivery times',
        'Lower fuel consumption',
        'Improved on-time performance'
      ]
    },
    {
      id: 'panindia',
      icon: RiGlobalLine,
      title: 'Pan India Freight Network',
      description: 'Comprehensive coverage across all major cities and remote locations in India.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      features: [
        'Coverage in 500+ cities',
        'Reach to remote locations',
        'Inter-state transportation',
        'Hub-and-spoke network',
        'Last-mile delivery capabilities',
        'Regional expertise'
      ],
      process: [
        'Origin pickup anywhere in India',
        'Hub consolidation and sorting',
        'Long-haul transportation',
        'Regional distribution',
        'Final mile delivery'
      ],
      benefits: [
        'Nationwide reach',
        'Consistent service quality',
        'Local market knowledge',
        'Scalable solutions'
      ]
    },
  ]

  const additionalServices = [
    'Warehousing & Storage Solutions',
    'Cargo Insurance Services',
    'Custom Clearance Support',
    'Packaging & Crating',
    'Loading & Unloading Services',
    'Documentation Assistance',
    'Supply Chain Consulting',
    'Reverse Logistics',
    'Temperature Controlled Transport',
    'Hazardous Material Handling',
    'Project Cargo Management',
    'White Glove Delivery'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Comprehensive Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Logistics Services for Every Need
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From express delivery to heavy machinery transport, we provide flexible and reliable 
              logistics solutions tailored to your business requirements across India.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="express">Express</TabsTrigger>
              <TabsTrigger value="freight">Freight</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>

            <TabsContent value="express" className="space-y-8">
              {mainServices.filter(s => s.id === 'express').map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features">
                          <AccordionTrigger>Key Features</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="process">
                          <AccordionTrigger>How It Works</AccordionTrigger>
                          <AccordionContent>
                            <ol className="space-y-2">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mr-2">
                                    {idx + 1}
                                  </span>
                                  <span className="mt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="benefits">
                          <AccordionTrigger>Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Separator className="my-6" />

                      <Button asChild>
                        <Link href="/contact">
                          Get Quote for This Service <RiArrowRightLine className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="freight" className="space-y-8">
              {mainServices.filter(s => ['ftl', 'ptl', 'machinery'].includes(s.id)).map((service, index) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features">
                          <AccordionTrigger>Key Features</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="process">
                          <AccordionTrigger>How It Works</AccordionTrigger>
                          <AccordionContent>
                            <ol className="space-y-2">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mr-2">
                                    {idx + 1}
                                  </span>
                                  <span className="mt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="benefits">
                          <AccordionTrigger>Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Separator className="my-6" />

                      <Button asChild>
                        <Link href="/contact">
                          Get Quote for This Service <RiArrowRightLine className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="tech" className="space-y-8">
              {mainServices.filter(s => ['tracking', 'aggregator', 'route'].includes(s.id)).map((service, index) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features">
                          <AccordionTrigger>Key Features</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="process">
                          <AccordionTrigger>How It Works</AccordionTrigger>
                          <AccordionContent>
                            <ol className="space-y-2">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mr-2">
                                    {idx + 1}
                                  </span>
                                  <span className="mt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="benefits">
                          <AccordionTrigger>Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Separator className="my-6" />

                      <Button asChild>
                        <Link href="/contact">
                          Get Quote for This Service <RiArrowRightLine className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="network" className="space-y-8">
              {mainServices.filter(s => s.id === 'panindia').map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features">
                          <AccordionTrigger>Key Features</AccordionTrigger>
                          <AccordionContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="process">
                          <AccordionTrigger>How It Works</AccordionTrigger>
                          <AccordionContent>
                            <ol className="space-y-2">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mr-2">
                                    {idx + 1}
                                  </span>
                                  <span className="mt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="benefits">
                          <AccordionTrigger>Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Separator className="my-6" />

                      <Button asChild>
                        <Link href="/contact">
                          Get Quote for This Service <RiArrowRightLine className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics support services to complement your transportation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <RiCheckLine className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose the Right Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not sure which service fits your needs? Here's a quick comparison
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Express Delivery</CardTitle>
                <CardDescription>Best for time-critical shipments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ideal for:</strong> Urgent documents, samples, small parcels</p>
                <p><strong>Transit Time:</strong> Same-day to 2 days</p>
                <p><strong>Weight Range:</strong> Up to 100 kg</p>
                <p><strong>Cost:</strong> Premium pricing</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PTL Services</CardTitle>
                <CardDescription>Best for cost-effective shipping</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ideal for:</strong> Small to medium shipments</p>
                <p><strong>Transit Time:</strong> 3-7 days</p>
                <p><strong>Weight Range:</strong> 100 kg - 2 tons</p>
                <p><strong>Cost:</strong> Economical</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FTL Services</CardTitle>
                <CardDescription>Best for large shipments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ideal for:</strong> Bulk cargo, full loads</p>
                <p><strong>Transit Time:</strong> 2-5 days</p>
                <p><strong>Weight Range:</strong> 2+ tons</p>
                <p><strong>Cost:</strong> Best per-unit rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your logistics needs and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-quote">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
