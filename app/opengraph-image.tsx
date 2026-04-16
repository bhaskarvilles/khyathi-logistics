import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Khyathi Logistics Solutions - Professional Transportation Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '24px',
            padding: '60px',
            width: '100%',
            height: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#10b981',
              marginBottom: 20,
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Khyathi Logistics
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: 40,
              maxWidth: '900px',
            }}
          >
            Driving Connections. Delivering Success.
          </div>
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 24,
              color: '#374151',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ Real-Time Tracking
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ Pan India Coverage
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              ✓ 24/7 Support
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
