'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { sendToWhatsApp } from '@/lib/whatsapp'
import { 
  RiPhoneLine, 
  RiMailLine, 
  RiMapPinLine, 
  RiTimeLine,
  RiSendPlaneLine,
  RiAlertLine,
  RiWhatsappFill
} from '@remixicon/react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Send to WhatsApp
    sendToWhatsApp({
      type: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.serviceType,
      message: `${formData.subject}\n\n${formData.message}`,
    })
    
    // Simulate API call for email/database
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our services? Need a quote? Our team is here to help 
              you find the perfect logistics solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <RiPhoneLine className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:9701557906" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 9701557906
                      </a>
                      <br />
                      <a href="tel:9491811144" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 9491811144
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <RiMailLine className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:info.khyathilogistics@gmail.com" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        info.khyathilogistics@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <RiMapPinLine className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Registered Office</p>
                      <p className="text-sm text-muted-foreground">
                        Plot No. 408, 5th Floor<br />
                        Akshara Apartments<br />
                        Tada, Nellore<br />
                        Andhra Pradesh - 524401<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <RiTimeLine className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM IST<br />
                        <span className="text-primary font-medium">24/7 Emergency Support</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/get-quote">Request a Quote</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/services">View Services</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/faq">Read FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <Alert className="mb-6 border-primary bg-primary/10">
                      <RiAlertLine className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-primary">
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-sm mt-1">
                          Thank you for contacting us. We'll respond to your inquiry shortly.
                        </p>
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="express">Express Delivery</SelectItem>
                          <SelectItem value="ftl">Full Truck Load (FTL)</SelectItem>
                          <SelectItem value="ptl">Part Truck Load (PTL)</SelectItem>
                          <SelectItem value="machinery">Heavy Machinery Transport</SelectItem>
                          <SelectItem value="tracking">Real-Time Tracking</SelectItem>
                          <SelectItem value="aggregator">Aggregator Platform</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="e.g., Quote Request for FTL Service"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your logistics requirements..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <p className="text-xs text-muted-foreground">
                        Please include details like pickup/delivery locations, cargo type, and timeline.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <RiSendPlaneLine className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground mt-4">
                      <RiWhatsappFill className="inline h-4 w-4 text-[#25D366] mr-1" />
                      Your message will be sent via WhatsApp for instant response
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">Visit our registered office in Tada, Nellore, Andhra Pradesh</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.2499770317447!2d80.0194338561474!3d13.583736176586594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d77aff8eb8fe7%3A0x32f2c6e737fee476!2sAkshara%20Apartments!5e0!3m2!1sen!2sin!4v1776324588881!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Khyathi Logistics Office Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary">
            <CardHeader>
              <RiAlertLine className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Emergency Support</CardTitle>
              <CardDescription>
                Need immediate assistance? Our emergency support team is available 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:9701557906">
                    <RiPhoneLine className="mr-2 h-4 w-4" />
                    Call Emergency Line
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info.khyathilogistics@gmail.com">
                    <RiMailLine className="mr-2 h-4 w-4" />
                    Email Support
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                For urgent shipment issues, tracking problems, or emergency logistics support
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
