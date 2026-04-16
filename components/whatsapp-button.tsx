'use client'

import { useState } from 'react'
import { RiWhatsappFill, RiCloseLine } from '@remixicon/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const WHATSAPP_NUMBER = '919701557906' // Format: country code + number (no + or spaces)
const DEFAULT_MESSAGE = 'Hello! I would like to inquire about your logistics services.'

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Tooltip Card */}
        {showTooltip && (
          <Card className="animate-scale-in bg-card/95 p-3 shadow-xl backdrop-blur-lg">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <p className="text-sm font-medium">Need Help?</p>
                <p className="text-xs text-muted-foreground">
                  Chat with us on WhatsApp
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setShowTooltip(false)}
              >
                <RiCloseLine className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* WhatsApp Button */}
        <Button
          onClick={openWhatsApp}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-2xl transition-all hover:scale-110 hover:bg-[#20BA5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
        >
          <RiWhatsappFill className="h-7 w-7 text-white" />
          <span className="sr-only">Contact us on WhatsApp</span>
        </Button>

        {/* Pulse Animation Ring */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-20" />
      </div>
    </>
  )
}
