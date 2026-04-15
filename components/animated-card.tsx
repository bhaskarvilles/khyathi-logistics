'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverLift?: boolean
}

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  hoverLift = true 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverLift ? { y: -8, transition: { duration: 0.3 } } : {}}
    >
      <Card className={cn(
        'transition-all duration-300',
        hoverLift && 'hover:shadow-xl',
        className
      )}>
        {children}
      </Card>
    </motion.div>
  )
}
