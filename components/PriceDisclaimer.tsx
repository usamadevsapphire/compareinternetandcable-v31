import Link from 'next/link'

interface Props {
  variant?: 'default' | 'compact' | 'inline'
}

export default function PriceDisclaimer({ variant = 'default' }: Props) {
  if (variant === 'inline') {
    return (
      <p style={{ fontSize:11, color:'#334155', lineHeight:1.6, marginTop:8 }}>
        ⚠️ All prices are subject to change by their respective providers. Adbyte Digital LLC DBA Compare Internet and Cable is not responsible for any pricing changes. Taxes and fees extra. Requires AutoPay where noted. New customers only.{' '}
        <Link href="/advertising-disclosure" style={{ color:'#7c3aed', textDecoration:'none', fontWeight:600 }}>Advertising Disclosure</Link>
      </p>
    )
  }

  if (variant === 'compact') {
    return (
      <div style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:10, padding:'10px 16px', marginTop:16 }}>
        <p style={{ fontSize:11, color:'#334155', lineHeight:1.65, margin:0 }}>
          ⚠️ <strong style={{ color:'#334155' }}>Disclaimer:</strong> All prices displayed are promotional rates subject to change at any time by their respective providers. Adbyte Digital LLC DBA Compare Internet and Cable is an independent authorized dealer and is not responsible for pricing changes, service interruptions, or billing disputes after activation. Taxes, equipment fees, and other charges not included. AutoPay discount required where noted. New customers only. See our{' '}
          <Link href="/advertising-disclosure" style={{ color:'#7c3aed', textDecoration:'none', fontWeight:600 }}>Advertising Disclosure</Link> and{' '}
          <Link href="/terms" style={{ color:'#7c3aed', textDecoration:'none', fontWeight:600 }}>Terms & Conditions</Link> for full details.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background:'#fffbeb', border:'1.5px solid #fde68a', borderRadius:14, padding:'18px 22px', marginTop:24 }}>
      <div style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
        <span style={{ fontSize:18, flexShrink:0, marginTop:1 }}>⚠️</span>
        <div>
          <p style={{ fontFamily:'var(--font-display)', fontWeight:700, color:'#92400e', fontSize:13, marginBottom:6 }}>
            Pricing Disclaimer
          </p>
          <p style={{ color:'#78350f', fontSize:12, lineHeight:1.7, margin:0 }}>
            All prices are promotional rates set by their respective providers and are subject to change at any time without notice. Adbyte Digital LLC DBA Compare Internet and Cable is an independent authorized dealer — not an employee or official representative of any carrier. We are not responsible for pricing changes, service interruptions, equipment issues, or billing disputes after activation. Prices typically require AutoPay enrollment. Taxes and fees extra. New customers only unless stated. Always confirm current pricing with your agent before ordering.{' '}
            <Link href="/advertising-disclosure" style={{ color:'#7c3aed', fontWeight:600, textDecoration:'none' }}>Advertising Disclosure</Link>
            {' · '}
            <Link href="/terms" style={{ color:'#7c3aed', fontWeight:600, textDecoration:'none' }}>Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
