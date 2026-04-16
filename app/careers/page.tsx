import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  RiMapPinLine,
  RiBriefcaseLine,
  RiTimeLine,
  RiMoneyRupeeCircleLine,
  RiTeamLine,
  RiRocketLine,
  RiHeartLine,
  RiTrophyLine,
} from '@remixicon/react'

export const metadata: Metadata = {
  title: 'Careers - Join Khyathi Logistics Solutions',
  description: 'Explore career opportunities at Khyathi Logistics Solutions. Join our team and be part of India\'s growing logistics industry.',
}

const jobOpenings = [
  {
    id: 1,
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Tirupati, Andhra Pradesh',
    type: 'Full-time',
    experience: '5-7 years',
    salary: '₹8-12 LPA',
    description: 'Lead and optimize daily operations, manage fleet, and ensure timely deliveries.',
  },
  {
    id: 2,
    title: 'Fleet Coordinator',
    department: 'Logistics',
    location: 'Nellore, Andhra Pradesh',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹5-7 LPA',
    description: 'Coordinate vehicle movements, track shipments, and maintain fleet efficiency.',
  },
  {
    id: 3,
    title: 'Customer Service Executive',
    department: 'Customer Support',
    location: 'Tirupati, Andhra Pradesh',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹3-5 LPA',
    description: 'Handle customer inquiries, resolve issues, and ensure customer satisfaction.',
  },
  {
    id: 4,
    title: 'Software Developer',
    department: 'Technology',
    location: 'Remote / Tirupati',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹6-10 LPA',
    description: 'Develop and maintain our logistics platform, tracking systems, and mobile apps.',
  },
  {
    id: 5,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹4-6 LPA + Incentives',
    description: 'Acquire new clients, maintain relationships, and achieve sales targets.',
  },
  {
    id: 6,
    title: 'Warehouse Supervisor',
    department: 'Warehouse',
    location: 'Tada, Andhra Pradesh',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹4-6 LPA',
    description: 'Supervise warehouse operations, inventory management, and staff coordination.',
  },
]

const benefits = [
  {
    icon: RiMoneyRupeeCircleLine,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages',
  },
  {
    icon: RiHeartLine,
    title: 'Health Insurance',
    description: 'Comprehensive medical coverage for you and family',
  },
  {
    icon: RiRocketLine,
    title: 'Career Growth',
    description: 'Clear career progression and learning opportunities',
  },
  {
    icon: RiTrophyLine,
    title: 'Performance Bonuses',
    description: 'Rewards for exceptional performance',
  },
]

export default function CareersPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Join Our Team
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Be part of India's growing logistics industry. Build your career with Khyathi Logistics Solutions.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Work With Us?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold">Current Openings</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-start justify-between">
                  <Badge variant="secondary">{job.department}</Badge>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RiMapPinLine className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RiBriefcaseLine className="h-4 w-4" />
                  {job.experience} experience
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RiMoneyRupeeCircleLine className="h-4 w-4" />
                  {job.salary}
                </div>
                <Button className="mt-4 w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <CardContent className="p-8 text-center md:p-12">
          <RiTeamLine className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h3 className="mb-3 text-2xl font-bold">Don't See Your Role?</h3>
          <p className="mb-6 text-muted-foreground">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">Send Your Resume</Button>
        </CardContent>
      </Card>
    </div>
  )
}
