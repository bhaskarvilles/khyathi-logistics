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
import { Checkbox } from '@/components/ui/checkbox'
import { 
  RiTruckLine, 
  RiCalculatorLine, 
  RiCheckLine,
  RiAlertLine,
  RiTimeLine,
  RiShieldCheckLine
} from '@remixicon/react'

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    urgency: '',
    additionalServices: [] as string[],
    specialRequirements: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
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

  const handleCheckboxChange = (service: string, checked: boolean) => {
    setFormData({
      ...formData,
      additionalServices: checked
        ? [...formData.additionalServices, service]
        : formData.additionalServices.filter(s => s !== service),
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
            <Badge className="mb-4">Instant Quote</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your logistics needs and receive a customized quote within 24 hours. 
              No hidden fees, transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <RiTimeLine className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Get your quote within 24 hours
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <RiCalculatorLine className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden fees or surprises
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <RiShieldCheckLine className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Competitive Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Best value for your logistics needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below with your shipment details
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-primary bg-primary/10">
                    <RiCheckLine className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-primary">
                      <p className="font-medium">Quote Request Submitted!</p>
                      <p className="text-sm mt-1">
                        Thank you! We'll send you a detailed quote within 24 hours.
                      </p>
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
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
                  </div>

                  <Separator />

                  {/* Service Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="express">Express Delivery</SelectItem>
                            <SelectItem value="ftl">Full Truck Load (FTL)</SelectItem>
                            <SelectItem value="ptl">Part Truck Load (PTL)</SelectItem>
                            <SelectItem value="machinery">Heavy Machinery Transport</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargoType">Cargo Type *</Label>
                        <Select
                          value={formData.cargoType}
                          onValueChange={(value) => setFormData({ ...formData, cargoType: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select cargo type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Cargo</SelectItem>
                            <SelectItem value="fragile">Fragile Items</SelectItem>
                            <SelectItem value="perishable">Perishable Goods</SelectItem>
                            <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                            <SelectItem value="machinery">Heavy Machinery</SelectItem>
                            <SelectItem value="vehicles">Vehicles</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Shipment Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Shipment Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Approximate Weight *</Label>
                        <Input
                          id="weight"
                          name="weight"
                          placeholder="e.g., 500 kg"
                          required
                          value={formData.weight}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions (L x W x H)</Label>
                        <Input
                          id="dimensions"
                          name="dimensions"
                          placeholder="e.g., 2m x 1m x 1m"
                          value={formData.dimensions}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation">Pickup Location *</Label>
                        <Input
                          id="pickupLocation"
                          name="pickupLocation"
                          placeholder="City, State"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                        <Input
                          id="deliveryLocation"
                          name="deliveryLocation"
                          placeholder="City, State"
                          required
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupDate">Preferred Pickup Date *</Label>
                        <Input
                          id="pickupDate"
                          name="pickupDate"
                          type="date"
                          required
                          value={formData.pickupDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select
                          value={formData.urgency}
                          onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                            <SelectItem value="express">Express (2-3 days)</SelectItem>
                            <SelectItem value="urgent">Urgent (24-48 hours)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="insurance"
                          checked={formData.additionalServices.includes('insurance')}
                          onCheckedChange={(checked) => handleCheckboxChange('insurance', checked as boolean)}
                        />
                        <Label htmlFor="insurance" className="font-normal cursor-pointer">
                          Cargo Insurance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="tracking"
                          checked={formData.additionalServices.includes('tracking')}
                          onCheckedChange={(checked) => handleCheckboxChange('tracking', checked as boolean)}
                        />
                        <Label htmlFor="tracking" className="font-normal cursor-pointer">
                          Real-Time GPS Tracking
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="packaging"
                          checked={formData.additionalServices.includes('packaging')}
                          onCheckedChange={(checked) => handleCheckboxChange('packaging', checked as boolean)}
                        />
                        <Label htmlFor="packaging" className="font-normal cursor-pointer">
                          Professional Packaging
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="loading"
                          checked={formData.additionalServices.includes('loading')}
                          onCheckedChange={(checked) => handleCheckboxChange('loading', checked as boolean)}
                        />
                        <Label htmlFor="loading" className="font-normal cursor-pointer">
                          Loading/Unloading Assistance
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Special Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Special Requirements</h3>
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Additional Information</Label>
                      <Textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        placeholder="Any special handling requirements, delivery instructions, or other details..."
                        rows={4}
                        value={formData.specialRequirements}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <RiTruckLine className="mr-2 h-4 w-4" />
                          Get Quote
                        </>
                      )}
                    </Button>
                    <Button type="button" size="lg" variant="outline" asChild>
                      <a href="/contact">
                        Contact Us Instead
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Khyathi Logistics?</h2>
            <p className="text-muted-foreground">
              We're committed to providing reliable, efficient, and cost-effective logistics solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <RiCheckLine className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Best rates in the industry with no hidden charges
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <RiCheckLine className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  98% on-time delivery rate across all services
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <RiCheckLine className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock customer support for your peace of mind
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <RiCheckLine className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Secure Transport</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced security measures and cargo insurance options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary">
            <CardHeader>
              <RiAlertLine className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Need Help?</CardTitle>
              <CardDescription>
                Our team is here to assist you with your quote request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:9701557906">
                    Call Us: +91 9701557906
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">
                    Visit Contact Page
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
