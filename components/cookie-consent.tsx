'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RiCloseLine, RiShieldCheckLine } from '@remixicon/react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after 1 second delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-in-up">
      <Card className="mx-4 mb-4 border-2 bg-card/95 p-4 shadow-2xl backdrop-blur-lg sm:mx-auto sm:max-w-2xl md:p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <RiShieldCheckLine className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-semibold text-foreground">
              We value your privacy
            </h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. By clicking "Accept All", you consent to our use 
              of cookies. Read our{' '}
              <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                Privacy Policy
              </a>{' '}
              to learn more.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none"
                size="sm"
              >
                Accept All
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="flex-1 sm:flex-none"
                size="sm"
              >
                Decline
              </Button>
              <Button
                onClick={declineCookies}
                variant="ghost"
                size="sm"
                className="sm:ml-auto"
              >
                <RiCloseLine className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
