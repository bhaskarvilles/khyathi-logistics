import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  RiTargetLine, 
  RiEyeLine, 
  RiLightbulbLine,
  RiTeamLine,
  RiAwardLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiSpeedLine,
  RiCustomerService2Line,
  RiTruckLine,
  RiSmartphoneLine,
  RiBarChartLine,
  RiCheckLine,
  RiArrowRightLine
} from '@remixicon/react'

export const metadata = {
  title: 'About Us - Khyathi Logistics Solutions',
  description: 'Learn about Khyathi Logistics Solutions, our vision, mission, and commitment to delivering excellence in logistics and transportation services across India.',
}

export default function AboutPage() {
  const values = [
    {
      icon: RiTargetLine,
      title: 'Our Mission',
      description: 'To revolutionize freight movement across India by connecting businesses with reliable transport providers through our technology-driven aggregator platform, ensuring efficient, transparent, and cost-effective logistics solutions.',
    },
    {
      icon: RiEyeLine,
      title: 'Our Vision',
      description: 'To become India\'s most trusted logistics partner, setting new standards in freight transportation through innovation, reliability, and customer-centric service delivery.',
    },
    {
      icon: RiLightbulbLine,
      title: 'Core Values',
      description: 'Integrity, Innovation, Reliability, Customer Focus, and Operational Excellence drive everything we do. We believe in building lasting partnerships through transparent communication and consistent service quality.',
    },
  ]

  const whyChoose = [
    {
      icon: RiShieldCheckLine,
      title: 'Reliability & Trust',
      description: 'Verified carriers, comprehensive insurance, and proven track record of on-time deliveries.',
    },
    {
      icon: RiSpeedLine,
      title: 'Speed & Efficiency',
      description: 'Optimized routes, express delivery options, and streamlined operations for faster transit times.',
    },
    {
      icon: RiCustomerService2Line,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and emergency support for uninterrupted logistics operations.',
    },
    {
      icon: RiGlobalLine,
      title: 'Pan India Network',
      description: 'Extensive coverage across all major cities and remote locations throughout India.',
    },
    {
      icon: RiSmartphoneLine,
      title: 'Technology Driven',
      description: 'Advanced tracking systems, mobile apps, and web platforms for complete visibility.',
    },
    {
      icon: RiBarChartLine,
      title: 'Cost Optimization',
      description: 'Competitive pricing, transparent billing, and flexible payment terms for better ROI.',
    },
  ]

  const technology = [
    {
      title: 'Mobile Applications',
      features: [
        'Android & iOS apps built with Flutter',
        'Real-time shipment tracking',
        'Instant push notifications',
        'Easy booking and management',
        'Digital documentation',
        'In-app communication'
      ]
    },
    {
      title: 'Web Dashboard',
      features: [
        'Comprehensive admin panel',
        'Financial management tools',
        'Route optimization engine',
        'Analytics and reporting',
        'Multi-user access control',
        'API integration support'
      ]
    },
    {
      title: 'Tracking System',
      features: [
        'GPS-enabled live tracking',
        'Automated status updates',
        'Geofencing capabilities',
        'Historical route data',
        'ETA predictions',
        'Alert management'
      ]
    }
  ]

  const fleet = [
    { type: 'Light Commercial Vehicles', count: '50+', capacity: 'Up to 2 Tons' },
    { type: 'Medium Trucks', count: '100+', capacity: '2-10 Tons' },
    { type: 'Heavy Trucks', count: '75+', capacity: '10-25 Tons' },
    { type: 'Specialized Vehicles', count: '25+', capacity: 'Custom Loads' },
  ]

  const timeline = [
    { year: '2018', event: 'Company Founded', description: 'Khyathi Logistics established in Tirupati, Andhra Pradesh' },
    { year: '2019', event: 'Fleet Expansion', description: 'Expanded fleet to 50+ vehicles across South India' },
    { year: '2020', event: 'Technology Integration', description: 'Launched mobile apps and real-time tracking system' },
    { year: '2021', event: 'Pan India Operations', description: 'Extended services to cover all major Indian cities' },
    { year: '2022', event: 'Aggregator Platform', description: 'Launched logistics aggregator connecting 500+ carriers' },
    { year: '2023', event: 'Industry Recognition', description: 'Awarded for excellence in logistics innovation' },
    { year: '2024', event: 'Continued Growth', description: 'Serving 1000+ clients with 250+ vehicles network' },
  ]

  const leadership = [
    {
      name: 'Leadership Team',
      role: 'Executive Management',
      description: 'Experienced professionals with decades of combined expertise in logistics, technology, and business operations.',
    },
    {
      name: 'Operations Team',
      role: 'Ground Operations',
      description: 'Dedicated team ensuring smooth execution of every shipment with attention to detail and customer satisfaction.',
    },
    {
      name: 'Technology Team',
      role: 'Innovation & Development',
      description: 'Tech experts continuously improving our platform and developing new features for enhanced user experience.',
    },
    {
      name: 'Customer Support',
      role: '24/7 Service',
      description: 'Round-the-clock support team committed to resolving queries and ensuring seamless logistics operations.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">About Khyathi Logistics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Logistics Through Technology & Trust
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are India's leading logistics aggregator platform, connecting businesses with 
              reliable transport providers for efficient, transparent, and cost-effective freight movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-quote">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 in Tirupati, Andhra Pradesh, Khyathi Logistics Solutions emerged from a vision 
                to revolutionize India's fragmented logistics industry. We recognized the challenges businesses 
                faced in finding reliable transport providers and the inefficiencies in traditional freight management.
              </p>
              <p>
                Our journey began with a small fleet and a big dream – to create a technology-driven platform 
                that would connect businesses with verified carriers, ensuring transparency, reliability, and 
                cost-effectiveness. Today, we've grown into a comprehensive logistics aggregator serving over 
                1,000 clients across India.
              </p>
              <p>
                What sets us apart is our commitment to leveraging technology for operational excellence. Our 
                proprietary mobile applications and web-based dashboard provide real-time visibility, automated 
                workflows, and data-driven insights that empower businesses to make informed logistics decisions.
              </p>
              <p>
                We don't just move goods – we build partnerships. Every shipment is handled with the same care 
                and attention, whether it's a small parcel or heavy machinery. Our team of logistics professionals 
                works tirelessly to ensure your cargo reaches its destination safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Khyathi Logistics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional logistics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology-Driven Logistics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive technology stack ensures seamless operations and complete visibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technology.map((tech, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <RiCheckLine className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Fleet & Infrastructure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diverse fleet capable of handling all types of cargo across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fleet.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <RiTruckLine className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{item.count}</CardTitle>
                  <p className="text-sm font-semibold">{item.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.capacity}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Plus access to 500+ verified carrier partners across our aggregator network
            </p>
            <Button asChild>
              <Link href="/services">
                Explore Our Services <RiArrowRightLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growth Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our evolution into a leading logistics provider
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 group-hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your logistics success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <RiTeamLine className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 1,000 businesses that trust Khyathi Logistics for their transportation needs
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
