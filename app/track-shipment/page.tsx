'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  RiSearchLine,
  RiTruckLine,
  RiCheckboxCircleLine,
  RiMapPinLine,
  RiTimeLine,
  RiPhoneLine,
} from '@remixicon/react'

export default function TrackShipmentPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      setTrackingResult({
        id: trackingId,
        status: 'In Transit',
        origin: 'Tirupati, Andhra Pradesh',
        destination: 'Mumbai, Maharashtra',
        currentLocation: 'Pune, Maharashtra',
        estimatedDelivery: '2025-04-18',
        driver: {
          name: 'Rajesh Kumar',
          phone: '+91-9876543210',
          vehicle: 'TN 01 AB 1234',
        },
        timeline: [
          {
            status: 'Order Placed',
            location: 'Tirupati, AP',
            date: '2025-04-15 10:30 AM',
            completed: true,
          },
          {
            status: 'Picked Up',
            location: 'Tirupati, AP',
            date: '2025-04-15 02:15 PM',
            completed: true,
          },
          {
            status: 'In Transit',
            location: 'Pune, MH',
            date: '2025-04-16 11:45 AM',
            completed: true,
          },
          {
            status: 'Out for Delivery',
            location: 'Mumbai, MH',
            date: 'Expected: 2025-04-18 09:00 AM',
            completed: false,
          },
          {
            status: 'Delivered',
            location: 'Mumbai, MH',
            date: 'Pending',
            completed: false,
          },
        ],
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Track Your Shipment
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Enter your tracking ID to get real-time updates on your shipment
        </p>
      </div>

      {/* Tracking Form */}
      <Card className="mx-auto mb-12 max-w-2xl">
        <CardHeader>
          <CardTitle>Enter Tracking Details</CardTitle>
          <CardDescription>
            Your tracking ID can be found in your booking confirmation email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tracking-id">Tracking ID</Label>
              <div className="flex gap-2">
                <Input
                  id="tracking-id"
                  placeholder="e.g., KLS2025041500123"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    'Tracking...'
                  ) : (
                    <>
                      <RiSearchLine className="mr-2 h-4 w-4" />
                      Track
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Tracking Results */}
      {trackingResult && (
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Status Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Tracking ID: {trackingResult.id}</CardTitle>
                  <CardDescription className="mt-2">
                    <div className="flex items-center gap-2">
                      <RiMapPinLine className="h-4 w-4" />
                      {trackingResult.origin} → {trackingResult.destination}
                    </div>
                  </CardDescription>
                </div>
                <Badge className="text-sm">
                  {trackingResult.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Current Location</p>
                  <p className="font-medium">{trackingResult.currentLocation}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="font-medium">
                    {new Date(trackingResult.estimatedDelivery).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driver Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RiTruckLine className="h-5 w-5" />
                Driver Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Driver Name</p>
                  <p className="font-medium">{trackingResult.driver.name}</p>
                </div>
                <Button variant="outline" size="sm">
                  <RiPhoneLine className="mr-2 h-4 w-4" />
                  {trackingResult.driver.phone}
                </Button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vehicle Number</p>
                <p className="font-medium">{trackingResult.driver.vehicle}</p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Shipment Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trackingResult.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          event.completed
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {event.completed ? (
                          <RiCheckboxCircleLine className="h-5 w-5" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-current" />
                        )}
                      </div>
                      {index < trackingResult.timeline.length - 1 && (
                        <div
                          className={`h-full w-0.5 ${
                            event.completed ? 'bg-primary' : 'bg-muted'
                          }`}
                          style={{ minHeight: '40px' }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <RiTimeLine className="h-3 w-3" />
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Need help with your shipment?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline">Contact Support</Button>
                <Button variant="outline">Report Issue</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
