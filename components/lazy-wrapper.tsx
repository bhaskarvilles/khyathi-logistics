'use client'

import { Suspense, ComponentType } from 'react'
import { PageSkeleton } from '@/components/loading-skeleton'

interface LazyWrapperProps {
  component: ComponentType<any>
  fallback?: React.ReactNode
  [key: string]: any
}

export function LazyWrapper({ 
  component: Component, 
  fallback = <PageSkeleton />,
  ...props 
}: LazyWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}
