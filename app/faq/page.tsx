'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedCard } from '@/components/animated-card'
import { 
  staggerContainer, 
  staggerItem,
  viewportOptions 
} from '@/lib/animations'
import { 
  RiQuestionLine,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiMailLine,
  RiPhoneLine,
  RiSearchLine
} from '@remixicon/react'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const generalFAQs = [
    {
      question: 'What areas do you cover?',
      answer: 'We provide comprehensive logistics services across 500+ cities in India, covering all major metropolitan areas and remote locations. Our extensive network ensures reliable delivery to virtually any destination in the country.'
    },
    {
      question: 'How do I track my shipment?',
      answer: 'You can track your shipment in real-time through our mobile app or web dashboard. Simply enter your tracking number to get live GPS location updates, estimated delivery time, and complete shipment history. You will also receive SMS and email notifications at key milestones.'
    },
    {
      question: 'What types of cargo do you handle?',
      answer: 'We handle all types of cargo including documents, parcels, palletized goods, heavy machinery, and specialized equipment. Our fleet includes vehicles of various sizes to accommodate different cargo requirements, from small vans to heavy-duty trucks.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'You can get an instant quote through our website by filling out the quote request form, or by calling our customer service team. We need details like pickup and delivery locations, cargo type, weight, dimensions, and preferred delivery timeline to provide an accurate quote.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our customer service team is available 24/7 to assist you. You can book shipments, track packages, and get support at any time through our mobile app, website, or by calling our helpline numbers.'
    }
  ]

  const pricingFAQs = [
    {
      question: 'How is pricing calculated?',
      answer: 'Pricing is based on several factors including distance, cargo weight and dimensions, type of service (express, FTL, PTL), delivery timeline, and any special handling requirements. We provide transparent pricing with no hidden charges.'
    },
    {
      question: 'Do you provide insurance coverage?',
      answer: 'Yes, all shipments are covered by comprehensive cargo insurance. We offer different coverage levels based on your cargo value and requirements. Additional insurance can be purchased for high-value shipments at competitive rates.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options including credit terms for registered businesses, online payment, bank transfer, and cash on delivery. Corporate clients can apply for monthly billing cycles with credit facilities based on their business volume.'
    },
    {
      question: 'Are there any additional charges?',
      answer: 'Our quotes include all standard charges. Additional charges may apply for services like loading/unloading assistance, special packaging, detention charges, or delivery to restricted areas. All such charges are communicated upfront before booking.'
    },
    {
      question: 'Do you offer discounts for bulk shipments?',
      answer: 'Yes, we offer attractive discounts for regular customers and bulk shipments. Corporate clients with consistent volumes can benefit from customized pricing plans. Contact our sales team to discuss volume-based pricing.'
    }
  ]

  const serviceFAQs = [
    {
      question: 'What is the difference between FTL and PTL?',
      answer: 'FTL (Full Truck Load) is when you book an entire truck for your shipment, ideal for large volumes. PTL (Part Truck Load) is when your cargo shares truck space with other shipments, making it cost-effective for smaller volumes. FTL offers faster delivery and dedicated service, while PTL is more economical.'
    },
    {
      question: 'How fast is express delivery?',
      answer: 'Our express delivery service offers same-day delivery for local shipments and next-day delivery for inter-city shipments within major metros. For other locations, express delivery typically takes 1-2 days depending on the distance and route.'
    },
    {
      question: 'Can you handle heavy machinery transport?',
      answer: 'Yes, we specialize in heavy machinery and oversized cargo transport. We have specialized vehicles, experienced drivers, and proper equipment for loading, securing, and transporting heavy equipment safely. We also handle all necessary permits and route planning.'
    },
    {
      question: 'Do you provide packaging services?',
      answer: 'Yes, we offer professional packaging services for fragile and valuable items. Our team can provide appropriate packaging materials and expert packing to ensure your cargo is protected during transit. This service can be added to your booking.'
    },
    {
      question: 'What is your aggregator platform?',
      answer: 'Our aggregator platform connects shippers with verified transport providers across India. It offers real-time pricing, instant booking, live tracking, and secure payments. Both businesses and transport operators can benefit from our technology-enabled marketplace.'
    }
  ]

  const supportFAQs = [
    {
      question: 'How do I file a claim for damaged goods?',
      answer: 'If your shipment is damaged, immediately notify our customer service team and file a claim within 24 hours. Provide photos of the damage, original packaging, and shipment documents. Our claims team will investigate and process your claim as per our damage policy.'
    },
    {
      question: 'What if my shipment is delayed?',
      answer: 'In case of delays, we proactively notify customers and provide updated delivery estimates. You can contact our support team for real-time updates. For significant delays beyond our control (weather, strikes, etc.), we work to find alternative solutions and keep you informed.'
    },
    {
      question: 'Can I change the delivery address after booking?',
      answer: 'Yes, delivery address changes are possible before the shipment reaches the destination city. Contact our customer service team as soon as possible with the new address. Additional charges may apply depending on the location change and distance.'
    },
    {
      question: 'How do I cancel a booking?',
      answer: 'You can cancel a booking through our app, website, or by contacting customer service. Cancellation charges may apply based on the timing of cancellation and whether the shipment has been picked up. Full refunds are provided for cancellations made before pickup.'
    },
    {
      question: 'What documents do I need for shipping?',
      answer: 'For domestic shipments, you need a valid ID proof, invoice or packing list, and GST documents if applicable. For certain goods like electronics or chemicals, additional permits or certificates may be required. Our team will guide you on specific documentation needs.'
    }
  ]

  const partnerFAQs = [
    {
      question: 'How can I become a partner?',
      answer: 'Visit our Partners page and fill out the registration form with your details and documents. Our team will verify your credentials and conduct background checks. Once approved, you will receive training on our platform and can start accepting bookings.'
    },
    {
      question: 'What are the requirements to join as a partner?',
      answer: 'You need a valid commercial vehicle registration, driving license, vehicle insurance, fitness certificate, PAN card, GST registration, and bank account details. All documents must be current and valid.'
    },
    {
      question: 'How do partners receive payments?',
      answer: 'Partners receive payments directly to their registered bank accounts on a weekly or bi-weekly basis, depending on the agreement. We provide detailed payment statements and support for any payment-related queries.'
    },
    {
      question: 'Is there a fee to join as a partner?',
      answer: 'No, there is no registration fee to join our partner network. We believe in building mutually beneficial partnerships and only charge a small commission on completed bookings.'
    },
    {
      question: 'What support do partners receive?',
      answer: 'Partners get access to our technology platform, 24/7 support team, training resources, and dedicated account managers. We also provide assistance with route optimization, documentation, and issue resolution.'
    }
  ]

  const categories = [
    { id: 'general', label: 'General', icon: RiQuestionLine, faqs: generalFAQs },
    { id: 'pricing', label: 'Pricing & Payment', icon: RiQuestionLine, faqs: pricingFAQs },
    { id: 'services', label: 'Services', icon: RiQuestionLine, faqs: serviceFAQs },
    { id: 'support', label: 'Support', icon: RiCustomerService2Line, faqs: supportFAQs },
    { id: 'partners', label: 'Partners', icon: RiQuestionLine, faqs: partnerFAQs }
  ]

  // Filter FAQs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories

    return categories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.faqs.length > 0)
  }, [searchQuery])

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
              <Badge className="mb-4">Help Center</Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={staggerItem}
            >
              Frequently Asked<br />
              <span className="text-primary">Questions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={staggerItem}
            >
              Find answers to common questions about our logistics services, pricing, 
              and support. Can't find what you're looking for? Contact our team.
            </motion.p>
            <motion.div variants={staggerItem} className="max-w-2xl mx-auto">
              <div className="relative">
                <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base bg-background/80 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          {searchQuery.trim() ? (
            // Search Results View
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Found {filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)} results for "{searchQuery}"
                </p>
              </div>
              {filteredCategories.length > 0 ? (
                <div className="space-y-8">
                  {filteredCategories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`}>
                            <AccordionTrigger className="text-left hover:text-primary">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <RiSearchLine className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try different keywords or browse categories below
                  </p>
                  <Button onClick={() => setSearchQuery('')} variant="outline">
                    Clear Search
                  </Button>
                </Card>
              )}
            </div>
          ) : (
            // Category Tabs View
            <Tabs defaultValue="general" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </AnimatedSection>

      {/* Contact Support */}
      <AnimatedSection className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Need More Help?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground">
                Our support team is here to help you 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard delay={0}>
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <RiPhoneLine className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>24/7 Phone Support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:9701557906" className="text-primary hover:underline font-medium">
                      9701557906
                    </a>
                    <br />
                    <a href="tel:9491811144" className="text-primary hover:underline font-medium">
                      9491811144
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <RiMailLine className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>Get Response in 24 Hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info.khyathilogistics@gmail.com" className="text-primary hover:underline font-medium break-all">
                      info.khyathilogistics@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <RiCustomerService2Line className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Send Us a Message</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Go to Contact Page
                        <RiArrowRightLine className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
