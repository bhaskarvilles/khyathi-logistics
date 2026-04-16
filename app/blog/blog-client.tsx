'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RiArrowRightLine, RiCalendarLine, RiTimeLine } from '@remixicon/react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Logistics: Technology and Innovation',
    excerpt: 'Explore how technology is transforming the logistics industry with real-time tracking, AI optimization, and automated solutions.',
    category: 'Technology',
    date: '2025-04-15',
    readTime: '5 min read',
    slug: 'future-of-logistics-technology',
  },
  {
    id: 2,
    title: 'Best Practices for Safe Heavy Machinery Transport',
    excerpt: 'Learn essential tips and guidelines for safely transporting heavy machinery and oversized cargo across India.',
    category: 'Safety',
    date: '2025-04-10',
    readTime: '7 min read',
    slug: 'safe-heavy-machinery-transport',
  },
  {
    id: 3,
    title: 'Understanding PTL vs FTL: Which is Right for Your Business?',
    excerpt: 'A comprehensive guide to help you choose between Part Truck Load and Full Truck Load services for your shipping needs.',
    category: 'Guide',
    date: '2025-04-05',
    readTime: '6 min read',
    slug: 'ptl-vs-ftl-guide',
  },
  {
    id: 4,
    title: 'How Real-Time Tracking Improves Supply Chain Efficiency',
    excerpt: 'Discover the benefits of real-time shipment tracking and how it enhances transparency and customer satisfaction.',
    category: 'Technology',
    date: '2025-03-28',
    readTime: '4 min read',
    slug: 'real-time-tracking-benefits',
  },
  {
    id: 5,
    title: 'Sustainable Logistics: Our Commitment to Green Transportation',
    excerpt: 'Learn about our initiatives to reduce carbon footprint and promote environmentally friendly logistics practices.',
    category: 'Sustainability',
    date: '2025-03-20',
    readTime: '5 min read',
    slug: 'sustainable-logistics-commitment',
  },
  {
    id: 6,
    title: 'Express Delivery Services: Speed Meets Reliability',
    excerpt: 'How our express delivery services ensure your urgent shipments reach their destination on time, every time.',
    category: 'Services',
    date: '2025-03-15',
    readTime: '4 min read',
    slug: 'express-delivery-services',
  },
]

const categories = ['All', 'Technology', 'Safety', 'Guide', 'Sustainability', 'Services']

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visiblePosts, setVisiblePosts] = useState(6)

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMore = visiblePosts < filteredPosts.length

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Blog & Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Logistics Insights & Industry News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest insights, industry trends, and updates from the world of logistics
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category)
                  setVisiblePosts(6)
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <RiTimeLine className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 text-xs">
                    <RiCalendarLine className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <RiArrowRightLine className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" onClick={handleLoadMore}>
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
