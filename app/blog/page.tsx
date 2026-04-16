import { Metadata } from 'next'
import BlogClient from './blog-client'

export const metadata: Metadata = {
  title: 'Blog & News - Khyathi Logistics Solutions',
  description: 'Stay updated with the latest logistics industry news, insights, and updates from Khyathi Logistics Solutions.',
}

export default function BlogPage() {
  return <BlogClient />
}
