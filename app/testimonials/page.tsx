import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  RiStarFill, 
  RiDoubleQuotesL,
  RiArrowRightLine,
  RiCheckLine,
  RiTruckLine,
  RiTeamLine,
  RiAwardLine
} from '@remixicon/react'

export const metadata = {
  title: 'Client Testimonials - Khyathi Logistics Solutions Private Limited',
  description: 'Read what our clients say about Khyathi Logistics Solutions Private Limited. Real reviews from businesses across India.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Manufacturing Ltd.',
      role: 'Supply Chain Manager',
      location: 'Mumbai, Maharashtra',
      text: 'Khyathi Logistics has transformed our supply chain operations. Their real-time tracking and reliable service have significantly reduced our delivery times and costs. The team is professional, responsive, and always delivers on their promises.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      service: 'FTL Services',
    },
    {
      name: 'Priya Sharma',
      company: 'Tech Solutions Pvt. Ltd.',
      role: 'Operations Head',
      location: 'Bangalore, Karnataka',
      text: 'Outstanding service! The team is professional, responsive, and always goes the extra mile. Their technology platform makes logistics management effortless. We have been using their services for over 2 years now.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      service: 'Express Delivery',
    },
    {
      name: 'Arun Patel',
      company: 'Industrial Equipment Co.',
      role: 'Logistics Director',
      location: 'Ahmedabad, Gujarat',
      text: 'We trust Khyathi for all our heavy machinery transport needs. Their expertise and attention to detail ensure our equipment arrives safely every time. The insurance coverage and professional handling give us complete peace of mind.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
      service: 'Heavy Machinery Transport',
    },
    {
      name: 'Meera Reddy',
      company: 'Fashion Retail Chain',
      role: 'Distribution Manager',
      location: 'Hyderabad, Telangana',
      text: 'Excellent logistics partner for our retail operations. Their pan India network and timely deliveries have helped us maintain optimal inventory levels across all our stores. Highly recommended!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
      service: 'PTL Services',
    },
    {
      name: 'Vikram Singh',
      company: 'Pharma Distributors Ltd.',
      role: 'CEO',
      location: 'Delhi NCR',
      text: 'Temperature-controlled transport and time-critical deliveries are crucial for our pharmaceutical products. Khyathi has never let us down. Their tracking system and customer support are top-notch.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      service: 'Express Delivery',
    },
    {
      name: 'Anjali Desai',
      company: 'Electronics Manufacturing',
      role: 'Procurement Head',
      location: 'Pune, Maharashtra',
      text: 'The aggregator platform has given us access to multiple carriers at competitive rates. The transparency in pricing and real-time tracking makes it easy to manage our logistics operations efficiently.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
      service: 'Aggregator Platform',
    },
    {
      name: 'Suresh Iyer',
      company: 'FMCG Distribution Co.',
      role: 'Operations Manager',
      location: 'Chennai, Tamil Nadu',
      text: 'Reliable, cost-effective, and professional. Khyathi Logistics has been instrumental in expanding our distribution network across South India. Their customer service is exceptional.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
      service: 'FTL Services',
    },
    {
      name: 'Kavita Joshi',
      company: 'Textile Exports Ltd.',
      role: 'Export Manager',
      location: 'Surat, Gujarat',
      text: 'We handle large volumes of textile shipments, and Khyathi has consistently delivered quality service. Their documentation support and timely deliveries have improved our export operations significantly.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita',
      service: 'FTL Services',
    },
    {
      name: 'Ramesh Nair',
      company: 'Construction Materials Supplier',
      role: 'Business Owner',
      location: 'Kochi, Kerala',
      text: 'Transporting construction materials requires careful handling and reliable service. Khyathi has been our trusted partner for 3 years. Their heavy transport capabilities are excellent.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh',
      service: 'Heavy Machinery Transport',
    },
    {
      name: 'Neha Gupta',
      company: 'E-commerce Platform',
      role: 'Fulfillment Head',
      location: 'Noida, Uttar Pradesh',
      text: 'Fast, reliable, and scalable logistics solutions. Khyathi has helped us handle our growing order volumes efficiently. Their express delivery service is perfect for our same-day and next-day commitments.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      service: 'Express Delivery',
    },
    {
      name: 'Karthik Menon',
      company: 'Automotive Parts Distributor',
      role: 'Supply Chain Head',
      location: 'Coimbatore, Tamil Nadu',
      text: 'Precision and timing are critical in automotive logistics. Khyathi understands our requirements and consistently delivers. Their tracking system helps us keep our customers informed.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik',
      service: 'PTL Services',
    },
    {
      name: 'Deepa Rao',
      company: 'Food Processing Company',
      role: 'Logistics Coordinator',
      location: 'Mysore, Karnataka',
      text: 'Handling perishable goods requires special care and quick delivery. Khyathi\'s temperature-controlled transport and express services have been invaluable for our business growth.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepa',
      service: 'Express Delivery',
    },
  ]

  const stats = [
    { value: '5000+', label: 'Happy Clients' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Client Retention' },
    { value: '10,000+', label: 'Positive Reviews' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Client Testimonials</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say About Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Don't just take our word for it. Read real reviews from businesses across India 
              who trust Khyathi Logistics for their transportation needs.
            </p>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <RiStarFill key={i} className="h-8 w-8 text-yellow-500" />
              ))}
            </div>
            <p className="text-2xl font-bold">4.9 out of 5</p>
            <p className="text-muted-foreground">Based on 10,000+ reviews</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-primary/20"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.role}</CardDescription>
                      <CardDescription className="text-xs text-primary">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <RiStarFill key={i} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">{testimonial.service}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <RiDoubleQuotesL className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <span className="mr-1">📍</span> {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Clients Trust Us</h2>
              <p className="text-muted-foreground">
                Our commitment to excellence has earned us the trust of thousands of businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <RiTruckLine className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Reliable Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    98% on-time delivery rate with consistent quality across all shipments
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <RiTeamLine className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Experienced professionals dedicated to solving your logistics challenges
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <RiAwardLine className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ISO certified processes ensuring excellence in every aspect of service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Success Stories</Badge>
              <h2 className="text-3xl font-bold mb-4">Client Success Highlights</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>50% Cost Reduction</CardTitle>
                  <CardDescription>E-commerce Platform, Bangalore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    By leveraging our aggregator platform and route optimization, this e-commerce 
                    company reduced their logistics costs by 50% while improving delivery times.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>Zero Damage Claims</CardTitle>
                  <CardDescription>Electronics Manufacturer, Pune</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our specialized handling and packaging solutions helped this electronics 
                    manufacturer achieve zero damage claims over 12 months of operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>3x Faster Deliveries</CardTitle>
                  <CardDescription>Pharmaceutical Distributor, Delhi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Express delivery services and real-time tracking enabled this pharma 
                    distributor to triple their delivery speed for critical medications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Satisfied Clients
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the same level of service and reliability that our clients rave about. 
            Get started with Khyathi Logistics today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Your Free Quote <RiArrowRightLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <RiCheckLine className="h-5 w-5 mr-2" />
              <span>No Setup Fees</span>
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
