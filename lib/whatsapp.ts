// WhatsApp Integration Utilities

const WHATSAPP_NUMBERS = {
  primary: '919701557906',
  secondary: '919491811144',
}

export interface WhatsAppMessageData {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  type?: 'contact' | 'quote' | 'inquiry' | 'support'
}

/**
 * Format form data into a WhatsApp message
 */
export function formatWhatsAppMessage(data: WhatsAppMessageData): string {
  const lines: string[] = []
  
  // Header
  lines.push('*NEW INQUIRY - KHYATHI LOGISTICS*')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push('')
  
  // Contact Details
  if (data.name) {
    lines.push(`*Name:* ${data.name}`)
  }
  
  if (data.phone) {
    lines.push(`*Phone:* ${data.phone}`)
  }
  
  if (data.email) {
    lines.push(`*Email:* ${data.email}`)
  }
  
  if (data.company) {
    lines.push(`*Company:* ${data.company}`)
  }
  
  // Service Details
  if (data.service) {
    lines.push('')
    const serviceMap: { [key: string]: string } = {
      'express': 'Express Delivery',
      'ftl': 'Full Truck Load (FTL)',
      'ptl': 'Part Truck Load (PTL)',
      'machinery': 'Heavy Machinery Transport',
      'tracking': 'Real-Time Tracking',
      'aggregator': 'Aggregator Platform'
    }
    const serviceName = serviceMap[data.service.toLowerCase()] || data.service
    lines.push(`*Service Interested:* ${serviceName}`)
  }
  
  // Message
  if (data.message) {
    lines.push('')
    lines.push('*Message:*')
    lines.push(data.message.trim())
  }
  
  // Footer
  lines.push('')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━')
  const timestamp = new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  lines.push(`_Received: ${timestamp}_`)
  
  return lines.join('\n')
}

/**
 * Send message to WhatsApp
 */
export function sendToWhatsApp(data: WhatsAppMessageData, phoneNumber?: string): void {
  const message = formatWhatsAppMessage(data)
  const number = phoneNumber || WHATSAPP_NUMBERS.primary
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  
  window.open(url, '_blank')
}

/**
 * Get WhatsApp chat URL
 */
export function getWhatsAppURL(message?: string, phoneNumber?: string): string {
  const number = phoneNumber || WHATSAPP_NUMBERS.primary
  const text = message || 'Hello! I would like to inquire about your logistics services.'
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(message?: string, phoneNumber?: string): void {
  const url = getWhatsAppURL(message, phoneNumber)
  window.open(url, '_blank')
}
