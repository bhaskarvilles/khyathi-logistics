import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  RiArrowLeftLine, 
  RiCalendarLine, 
  RiTimeLine, 
  RiUserLine,
  RiShareLine,
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiWhatsappFill
} from '@remixicon/react'

// Blog post data
const blogPosts = {
  'future-of-logistics-technology': {
    title: 'The Future of Logistics: Technology and Innovation',
    excerpt: 'Explore how technology is transforming the logistics industry with real-time tracking, AI optimization, and automated solutions.',
    category: 'Technology',
    date: '2025-04-15',
    readTime: '5 min read',
    author: 'Khyathi Logistics Team',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    content: `
      <p>The logistics industry is undergoing a massive transformation driven by technological innovation. From artificial intelligence to blockchain, new technologies are reshaping how goods move across the globe.</p>

      <h2>Real-Time Tracking Revolution</h2>
      <p>GPS-enabled tracking systems have become the backbone of modern logistics. At Khyathi Logistics, we've implemented advanced tracking solutions that provide:</p>
      <ul>
        <li>Live location updates every 30 seconds</li>
        <li>Automated milestone notifications</li>
        <li>Predictive ETA calculations</li>
        <li>Geofencing and route deviation alerts</li>
      </ul>

      <h2>AI-Powered Route Optimization</h2>
      <p>Artificial intelligence is revolutionizing route planning. Our AI algorithms analyze multiple factors including traffic patterns, weather conditions, road quality, and delivery priorities to generate the most efficient routes.</p>
      <p>This technology has helped our clients achieve:</p>
      <ul>
        <li>30% reduction in fuel costs</li>
        <li>25% faster delivery times</li>
        <li>40% improvement in on-time performance</li>
      </ul>

      <h2>Automated Warehouse Management</h2>
      <p>Modern warehouses are becoming increasingly automated with robotics, IoT sensors, and smart inventory systems. These technologies enable:</p>
      <ul>
        <li>Real-time inventory tracking</li>
        <li>Automated picking and packing</li>
        <li>Predictive maintenance</li>
        <li>Optimized space utilization</li>
      </ul>

      <h2>The Role of Mobile Technology</h2>
      <p>Mobile apps have transformed how logistics operations are managed. Our Flutter-based mobile applications provide drivers, clients, and administrators with powerful tools at their fingertips.</p>

      <h2>Looking Ahead</h2>
      <p>The future of logistics will be shaped by emerging technologies like autonomous vehicles, drone deliveries, and blockchain-based supply chains. At Khyathi Logistics, we're committed to staying at the forefront of these innovations.</p>
    `
  },
  'safe-heavy-machinery-transport': {
    title: 'Best Practices for Safe Heavy Machinery Transport',
    excerpt: 'Learn essential tips and guidelines for safely transporting heavy machinery and oversized cargo across India.',
    category: 'Safety',
    date: '2025-04-10',
    readTime: '7 min read',
    author: 'Safety Team',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80',
    content: `
      <p>Transporting heavy machinery requires specialized knowledge, equipment, and careful planning. This comprehensive guide covers everything you need to know about safe heavy machinery transport.</p>

      <h2>Pre-Transport Assessment</h2>
      <p>Before moving any heavy equipment, conduct a thorough assessment:</p>
      <ul>
        <li>Measure exact dimensions (height, width, length, weight)</li>
        <li>Identify center of gravity</li>
        <li>Check for removable parts</li>
        <li>Document existing damage</li>
        <li>Verify insurance coverage</li>
      </ul>

      <h2>Route Planning and Permits</h2>
      <p>Heavy machinery transport requires careful route planning:</p>
      <ul>
        <li>Survey the route for clearance issues</li>
        <li>Identify low bridges and narrow passages</li>
        <li>Obtain necessary permits and approvals</li>
        <li>Plan for escort vehicles if required</li>
        <li>Schedule transport during off-peak hours</li>
      </ul>

      <h2>Loading and Securing</h2>
      <p>Proper loading is critical for safe transport:</p>
      <ul>
        <li>Use appropriate loading ramps and equipment</li>
        <li>Position machinery to distribute weight evenly</li>
        <li>Secure with heavy-duty chains and straps</li>
        <li>Use chocks and blocks to prevent movement</li>
        <li>Double-check all securing points</li>
      </ul>

      <h2>Transportation Best Practices</h2>
      <p>During transport, follow these guidelines:</p>
      <ul>
        <li>Maintain safe speeds appropriate for load</li>
        <li>Avoid sudden braking or acceleration</li>
        <li>Monitor load stability regularly</li>
        <li>Communicate with escort vehicles</li>
        <li>Document the journey with photos</li>
      </ul>

      <h2>Unloading Procedures</h2>
      <p>Safe unloading is as important as loading:</p>
      <ul>
        <li>Inspect securing points before release</li>
        <li>Use proper unloading equipment</li>
        <li>Clear the unloading area of obstacles</li>
        <li>Have qualified personnel supervise</li>
        <li>Conduct post-transport inspection</li>
      </ul>

      <h2>Why Choose Professional Services</h2>
      <p>At Khyathi Logistics, our heavy machinery transport team has years of experience handling complex moves. We provide comprehensive insurance, specialized equipment, and expert handling to ensure your valuable equipment arrives safely.</p>
    `
  },
  'ptl-vs-ftl-guide': {
    title: 'Understanding PTL vs FTL: Which is Right for Your Business?',
    excerpt: 'A comprehensive guide to help you choose between Part Truck Load and Full Truck Load services for your shipping needs.',
    category: 'Guide',
    date: '2025-04-05',
    readTime: '6 min read',
    author: 'Logistics Experts',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
    content: `
      <p>Choosing between Part Truck Load (PTL) and Full Truck Load (FTL) services can significantly impact your logistics costs and efficiency. This guide will help you make the right decision for your business.</p>

      <h2>What is Full Truck Load (FTL)?</h2>
      <p>FTL means your shipment occupies the entire truck capacity. The truck travels directly from pickup to delivery without intermediate stops.</p>
      <p><strong>Key Characteristics:</strong></p>
      <ul>
        <li>Exclusive use of entire truck</li>
        <li>Direct point-to-point delivery</li>
        <li>Faster transit times</li>
        <li>Higher security</li>
        <li>Better for large shipments</li>
      </ul>

      <h2>What is Part Truck Load (PTL)?</h2>
      <p>PTL involves sharing truck space with other shippers. Your cargo is consolidated with other shipments heading in the same direction.</p>
      <p><strong>Key Characteristics:</strong></p>
      <ul>
        <li>Shared transportation</li>
        <li>Multiple pickup and delivery stops</li>
        <li>Cost-effective for smaller loads</li>
        <li>Flexible scheduling</li>
        <li>Environmentally friendly</li>
      </ul>

      <h2>Cost Comparison</h2>
      <p><strong>FTL Pricing:</strong> You pay for the entire truck regardless of how much space you use. Cost per unit decreases as you fill more of the truck.</p>
      <p><strong>PTL Pricing:</strong> You only pay for the space your cargo occupies. More economical for smaller shipments.</p>

      <h2>When to Choose FTL</h2>
      <ul>
        <li>Shipment weight exceeds 10,000 kg</li>
        <li>Time-sensitive deliveries</li>
        <li>High-value or fragile cargo</li>
        <li>Need for enhanced security</li>
        <li>Direct delivery required</li>
        <li>Bulk shipments</li>
      </ul>

      <h2>When to Choose PTL</h2>
      <ul>
        <li>Shipment weight under 10,000 kg</li>
        <li>Flexible delivery timelines</li>
        <li>Cost optimization priority</li>
        <li>Regular small shipments</li>
        <li>Multiple delivery locations</li>
        <li>Standard cargo</li>
      </ul>

      <h2>Transit Time Considerations</h2>
      <p><strong>FTL:</strong> Typically 1-3 days for most routes within India, depending on distance.</p>
      <p><strong>PTL:</strong> Usually 3-7 days due to consolidation and multiple stops.</p>

      <h2>Making the Right Choice</h2>
      <p>Consider these factors when deciding:</p>
      <ul>
        <li>Shipment size and weight</li>
        <li>Delivery urgency</li>
        <li>Budget constraints</li>
        <li>Cargo value and fragility</li>
        <li>Frequency of shipments</li>
      </ul>

      <h2>Hybrid Approach</h2>
      <p>Many businesses use both services strategically. Use FTL for urgent or large shipments and PTL for regular, smaller deliveries. At Khyathi Logistics, we help you optimize your shipping strategy based on your specific needs.</p>
    `
  },
  'real-time-tracking-benefits': {
    title: 'How Real-Time Tracking Improves Supply Chain Efficiency',
    excerpt: 'Discover the benefits of real-time shipment tracking and how it enhances transparency and customer satisfaction.',
    category: 'Technology',
    date: '2025-03-28',
    readTime: '4 min read',
    author: 'Technology Team',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    content: `
      <p>Real-time tracking has become a game-changer in logistics, providing unprecedented visibility into shipment movements and transforming supply chain management.</p>

      <h2>What is Real-Time Tracking?</h2>
      <p>Real-time tracking uses GPS technology and mobile connectivity to provide live updates on shipment location, status, and estimated arrival times. At Khyathi Logistics, our tracking system updates every 30 seconds.</p>

      <h2>Key Benefits for Businesses</h2>
      
      <h3>1. Complete Visibility</h3>
      <p>Know exactly where your shipment is at any moment. This visibility enables:</p>
      <ul>
        <li>Better inventory planning</li>
        <li>Reduced safety stock requirements</li>
        <li>Improved cash flow management</li>
        <li>Enhanced decision-making</li>
      </ul>

      <h3>2. Proactive Problem Resolution</h3>
      <p>Identify and address issues before they become major problems:</p>
      <ul>
        <li>Route deviations detected immediately</li>
        <li>Delays communicated in advance</li>
        <li>Alternative arrangements made quickly</li>
        <li>Customer expectations managed effectively</li>
      </ul>

      <h3>3. Enhanced Customer Communication</h3>
      <p>Keep customers informed with:</p>
      <ul>
        <li>Automated status notifications</li>
        <li>Accurate ETA predictions</li>
        <li>Self-service tracking portals</li>
        <li>Reduced "where is my order" calls</li>
      </ul>

      <h3>4. Improved Operational Efficiency</h3>
      <p>Optimize operations through data insights:</p>
      <ul>
        <li>Route performance analysis</li>
        <li>Driver behavior monitoring</li>
        <li>Fuel consumption tracking</li>
        <li>Delivery time optimization</li>
      </ul>

      <h2>Impact on Customer Satisfaction</h2>
      <p>Studies show that real-time tracking increases customer satisfaction by 40%. Customers appreciate:</p>
      <ul>
        <li>Transparency and control</li>
        <li>Reduced anxiety about deliveries</li>
        <li>Ability to plan for receipt</li>
        <li>Professional communication</li>
      </ul>

      <h2>Cost Savings</h2>
      <p>Real-time tracking delivers measurable cost benefits:</p>
      <ul>
        <li>15-20% reduction in customer service calls</li>
        <li>10-15% decrease in failed deliveries</li>
        <li>20-25% improvement in route efficiency</li>
        <li>Reduced theft and loss claims</li>
      </ul>

      <h2>Our Tracking Technology</h2>
      <p>Khyathi Logistics provides comprehensive tracking through:</p>
      <ul>
        <li>Mobile apps (Android & iOS)</li>
        <li>Web dashboard</li>
        <li>SMS notifications</li>
        <li>Email updates</li>
        <li>API integration for your systems</li>
      </ul>

      <h2>The Future of Tracking</h2>
      <p>Emerging technologies like IoT sensors and AI-powered predictions will make tracking even more powerful, providing insights into cargo conditions, predictive maintenance, and automated exception handling.</p>
    `
  },
  'sustainable-logistics-commitment': {
    title: 'Sustainable Logistics: Our Commitment to Green Transportation',
    excerpt: 'Learn about our initiatives to reduce carbon footprint and promote environmentally friendly logistics practices.',
    category: 'Sustainability',
    date: '2025-03-20',
    readTime: '5 min read',
    author: 'Sustainability Team',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    content: `
      <p>At Khyathi Logistics, we recognize our responsibility to minimize environmental impact while delivering exceptional logistics services. Here's how we're building a sustainable future.</p>

      <h2>Our Sustainability Goals</h2>
      <ul>
        <li>Reduce carbon emissions by 40% by 2030</li>
        <li>Transition 50% of fleet to electric/hybrid by 2028</li>
        <li>Achieve zero-waste operations by 2027</li>
        <li>Implement 100% renewable energy in facilities by 2026</li>
      </ul>

      <h2>Green Fleet Initiatives</h2>
      
      <h3>Vehicle Modernization</h3>
      <p>We're upgrading our fleet with:</p>
      <ul>
        <li>BS-VI compliant vehicles</li>
        <li>Electric delivery vans for urban areas</li>
        <li>Hybrid trucks for long-haul routes</li>
        <li>Regular maintenance for optimal efficiency</li>
      </ul>

      <h3>Route Optimization</h3>
      <p>Our AI-powered route planning reduces fuel consumption by:</p>
      <ul>
        <li>Minimizing empty miles</li>
        <li>Consolidating shipments</li>
        <li>Avoiding traffic congestion</li>
        <li>Optimizing delivery sequences</li>
      </ul>

      <h2>Eco-Friendly Packaging</h2>
      <p>We promote sustainable packaging through:</p>
      <ul>
        <li>Biodegradable packing materials</li>
        <li>Reusable containers and pallets</li>
        <li>Minimal packaging guidelines</li>
        <li>Recycling programs</li>
      </ul>

      <h2>Warehouse Sustainability</h2>
      <p>Our facilities feature:</p>
      <ul>
        <li>Solar panel installations</li>
        <li>LED lighting systems</li>
        <li>Rainwater harvesting</li>
        <li>Energy-efficient HVAC</li>
        <li>Waste segregation and recycling</li>
      </ul>

      <h2>Carbon Offset Programs</h2>
      <p>For emissions we can't eliminate yet, we:</p>
      <ul>
        <li>Invest in reforestation projects</li>
        <li>Support renewable energy initiatives</li>
        <li>Partner with carbon offset organizations</li>
        <li>Provide carbon-neutral shipping options</li>
      </ul>

      <h2>Measuring Our Impact</h2>
      <p>We track and report on:</p>
      <ul>
        <li>Total carbon emissions</li>
        <li>Fuel efficiency metrics</li>
        <li>Waste reduction percentages</li>
        <li>Renewable energy usage</li>
        <li>Sustainable packaging adoption</li>
      </ul>

      <h2>Partner with Us for Sustainability</h2>
      <p>When you choose Khyathi Logistics, you're choosing a partner committed to environmental responsibility. Together, we can build a more sustainable supply chain.</p>
    `
  },
  'express-delivery-services': {
    title: 'Express Delivery Services: Speed Meets Reliability',
    excerpt: 'How our express delivery services ensure your urgent shipments reach their destination on time, every time.',
    category: 'Services',
    date: '2025-03-15',
    readTime: '4 min read',
    author: 'Operations Team',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80',
    content: `
      <p>In today's fast-paced business environment, speed is often as important as reliability. Our express delivery services are designed to meet your most urgent shipping needs without compromising on quality.</p>

      <h2>What Makes Express Delivery Different?</h2>
      <p>Express delivery isn't just about speed—it's about priority handling at every stage:</p>
      <ul>
        <li>Priority pickup within 2 hours</li>
        <li>Dedicated express lanes</li>
        <li>Minimal handling points</li>
        <li>Real-time tracking</li>
        <li>Guaranteed delivery timeframes</li>
      </ul>

      <h2>Service Options</h2>
      
      <h3>Same-Day Delivery</h3>
      <p>For ultra-urgent shipments within the same city:</p>
      <ul>
        <li>Pickup within 1 hour</li>
        <li>Delivery within 4-6 hours</li>
        <li>Ideal for documents and small parcels</li>
        <li>Available in major metros</li>
      </ul>

      <h3>Next-Day Delivery</h3>
      <p>Guaranteed delivery by next business day:</p>
      <ul>
        <li>Pickup by 6 PM</li>
        <li>Delivery by 12 PM next day</li>
        <li>Available across 500+ cities</li>
        <li>Weight up to 100 kg</li>
      </ul>

      <h3>Express Freight</h3>
      <p>For larger urgent shipments:</p>
      <ul>
        <li>Dedicated truck services</li>
        <li>2-3 day delivery nationwide</li>
        <li>Weight up to 10,000 kg</li>
        <li>Priority handling</li>
      </ul>

      <h2>Industries We Serve</h2>
      
      <h3>Healthcare & Pharmaceuticals</h3>
      <p>Time-critical medical supplies and medications delivered with temperature control and compliance.</p>

      <h3>E-commerce</h3>
      <p>Fast fulfillment for online orders, meeting customer expectations for quick delivery.</p>

      <h3>Manufacturing</h3>
      <p>Emergency parts and components to minimize production downtime.</p>

      <h3>Legal & Financial</h3>
      <p>Secure, time-sensitive document delivery with proof of delivery.</p>

      <h2>Our Express Delivery Process</h2>
      <ol>
        <li><strong>Instant Booking:</strong> Book online or call for immediate confirmation</li>
        <li><strong>Rapid Pickup:</strong> Our team arrives within 1-2 hours</li>
        <li><strong>Priority Processing:</strong> Your shipment gets express lane treatment</li>
        <li><strong>Direct Transport:</strong> Minimal stops, maximum speed</li>
        <li><strong>Confirmed Delivery:</strong> Proof of delivery with signature</li>
      </ol>

      <h2>Quality Assurance</h2>
      <p>Every express shipment includes:</p>
      <ul>
        <li>Comprehensive insurance coverage</li>
        <li>Specialized packaging if needed</li>
        <li>Dedicated customer support</li>
        <li>Real-time status updates</li>
        <li>Money-back guarantee on delays</li>
      </ul>

      <h2>Pricing</h2>
      <p>Express delivery is premium-priced but offers exceptional value through:</p>
      <ul>
        <li>Transparent pricing with no hidden fees</li>
        <li>Volume discounts for regular users</li>
        <li>Flexible payment terms</li>
        <li>Cost savings from avoiding delays</li>
      </ul>

      <h2>Get Started</h2>
      <p>Need express delivery? Contact us now for instant quotes and booking. Our team is available 24/7 to handle your urgent shipping needs.</p>
    `
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Khyathi Logistics Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const shareUrl = `https://khyathilogistics.com/blog/${params.slug}`
  const shareText = encodeURIComponent(post.title)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
              <RiArrowLeftLine className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <RiUserLine className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <RiCalendarLine className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <RiTimeLine className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button size="sm" variant="outline" asChild>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                  <RiFacebookFill className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer">
                  <RiTwitterXFill className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                  <RiLinkedinFill className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer">
                  <RiWhatsappFill className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto -mt-10">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:text-muted-foreground
                prose-li:my-2
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Separator className="my-12" />

            {/* Author Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <RiUserLine className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team of logistics experts shares insights and best practices to help businesses 
                      optimize their supply chain operations and stay ahead in the competitive logistics industry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Card key={slug} className="hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${slug}`}>
                          Read More <RiArrowLeftLine className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help streamline your supply chain operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
