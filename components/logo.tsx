export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="200" 
      height="53" 
      viewBox="0 0 1200 320" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Premium Blue Gradient */}
        <linearGradient id="premiumBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F5ED7"/>
          <stop offset="50%" stopColor="#0B47A1"/>
          <stop offset="100%" stopColor="#072C6C"/>
        </linearGradient>
        {/* Metallic Silver Gradient */}
        <linearGradient id="premiumSilver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E5E7EB"/>
          <stop offset="35%" stopColor="#C5C8CE"/>
          <stop offset="65%" stopColor="#8D939C"/>
          <stop offset="100%" stopColor="#5F6670"/>
        </linearGradient>
        {/* Shadow */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.18"/>
        </filter>
      </defs>
      
      {/* ICON GROUP */}
      <g transform="translate(35,35)" filter="url(#softShadow)">
        {/* Globe */}
        <circle cx="120" cy="120" r="72" fill="none" stroke="url(#premiumBlue)" strokeWidth="10"/>
        {/* Globe Meridians */}
        <path d="M120 48 C90 78 90 162 120 192" fill="none" stroke="url(#premiumBlue)" strokeWidth="5"/>
        <path d="M120 48 C150 78 150 162 120 192" fill="none" stroke="url(#premiumBlue)" strokeWidth="5"/>
        <path d="M48 120 H192" stroke="url(#premiumBlue)" strokeWidth="5"/>
        <path d="M65 88 C105 103 135 103 175 88" fill="none" stroke="url(#premiumBlue)" strokeWidth="4"/>
        <path d="M65 152 C105 137 135 137 175 152" fill="none" stroke="url(#premiumBlue)" strokeWidth="4"/>
        
        {/* Truck Icon - positioned at bottom right of globe */}
        <g transform="translate(140, 140)">
          {/* Truck body */}
          <rect x="0" y="15" width="45" height="25" rx="3" fill="url(#premiumBlue)"/>
          {/* Truck cabin */}
          <path d="M45 15 L60 15 L60 35 L45 35 Z" fill="url(#premiumBlue)"/>
          <path d="M45 15 L52 8 L60 8 L60 15 Z" fill="url(#premiumBlue)"/>
          {/* Truck windows */}
          <rect x="48" y="10" width="8" height="6" rx="1" fill="white" opacity="0.9"/>
          {/* Truck wheels */}
          <circle cx="12" cy="42" r="6" fill="#1a1a1a" stroke="url(#premiumBlue)" strokeWidth="2"/>
          <circle cx="12" cy="42" r="3" fill="url(#premiumBlue)"/>
          <circle cx="52" cy="42" r="6" fill="#1a1a1a" stroke="url(#premiumBlue)" strokeWidth="2"/>
          <circle cx="52" cy="42" r="3" fill="url(#premiumBlue)"/>
          {/* Motion lines */}
          <line x1="-8" y1="20" x2="0" y2="20" stroke="url(#premiumBlue)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="-12" y1="28" x2="0" y2="28" stroke="url(#premiumBlue)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="-8" y1="36" x2="0" y2="36" stroke="url(#premiumBlue)" strokeWidth="2" strokeLinecap="round"/>
        </g>
        
        {/* Dynamic Road / Arrow */}
        <path d="M15 235C55 185, 95 150, 155 100L230 38L210 88C165 122, 120 160, 75 235Z" fill="url(#premiumBlue)"/>
        {/* Road Center Lane */}
        <path 
          d="M78 215C110 165, 145 130, 195 82"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="14 14"
        />
      </g>
      
      {/* TEXT GROUP */}
      <g transform="translate(340,70)">
        {/* KHYATHI */}
        <text 
          x="0" 
          y="95"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="104"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="1"
          fill="url(#premiumBlue)"
        >
          KHYATHI
        </text>
        {/* LOGISTICS */}
        <text 
          x="8" 
          y="170"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="50"
          fontWeight="700"
          letterSpacing="12"
          fill="url(#premiumBlue)"
        >
          LOGISTICS
        </text>
        {/* Accent Line */}
        <rect x="5" y="190" width="520" height="6" rx="3" fill="url(#premiumBlue)" opacity="0.85"/>
      </g>
    </svg>
  )
}
