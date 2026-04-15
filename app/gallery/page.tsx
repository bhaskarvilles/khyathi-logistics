'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'warehouse', label: 'Warehouse' },
    { id: 'operations', label: 'Operations' },
    { id: 'technology', label: 'Technology' },
  ]

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      alt: 'Modern logistics truck fleet',
      category: 'fleet',
      title: 'Heavy Duty Trucks'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      alt: 'Container trucks in logistics yard',
      category: 'fleet',
      title: 'Container Fleet'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
      alt: 'Delivery van for express services',
      category: 'fleet',
      title: 'Express Delivery Vans'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      alt: 'Modern warehouse facility',
      category: 'warehouse',
      title: 'Warehouse Facility'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      alt: 'Warehouse storage racks',
      category: 'warehouse',
      title: 'Storage Solutions'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      alt: 'Logistics operations center',
      category: 'operations',
      title: 'Operations Center'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      alt: 'Loading operations',
      category: 'operations',
      title: 'Loading Operations'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      alt: 'Heavy machinery transport',
      category: 'operations',
      title: 'Heavy Cargo Handling'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      alt: 'GPS tracking system',
      category: 'technology',
      title: 'Real-Time Tracking'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      alt: 'Logistics management dashboard',
      category: 'technology',
      title: 'Management Dashboard'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
      alt: 'Route optimization system',
      category: 'technology',
      title: 'Route Planning'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      alt: 'Fleet management',
      category: 'fleet',
      title: 'Fleet Management'
    },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null)
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See Our Operations in Action
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our modern fleet, state-of-the-art facilities, and the dedicated team 
              that makes Khyathi Logistics a trusted partner in transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold">{item.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <RiCloseLine className="h-8 w-8" />
          </button>

          {selectedImage > 0 && (
            <button
              className="absolute left-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              aria-label="Previous"
            >
              <RiArrowLeftLine className="h-8 w-8" />
            </button>
          )}

          {selectedImage < filteredItems.length - 1 && (
            <button
              className="absolute right-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Next"
            >
              <RiArrowRightLine className="h-8 w-8" />
            </button>
          )}

          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[selectedImage].src}
              alt={filteredItems[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">{filteredItems[selectedImage].title}</p>
              <p className="text-white/70 text-sm mt-1">
                {selectedImage + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Vehicles in Fleet</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Partner Carriers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Sq Ft Warehouse</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
