'use client'
import Link from 'next/link'

interface SiteLogoProps {
  variant?: 'color' | 'white'   // color = header (dark text), white = footer (white text)
  height?: number
}

export default function SiteLogo({ variant = 'color', height = 44 }: SiteLogoProps) {
  const isDark = variant === 'white'

  return (
    <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:10, textDecoration:'none', flexShrink:0 }}>
      {/* ── Icon SVG ── */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ciac-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#0ea5e9"/>
          </linearGradient>
        </defs>
        {/* Background */}
        <rect width="52" height="52" rx="11" fill={isDark ? 'rgba(255,255,255,0.15)' : 'url(#ciac-g)'}/>
        {/* Left signal arcs */}
        <path d="M8 38 Q12 26 8 14" stroke="white" strokeWidth="2.7" strokeLinecap="round" opacity="0.72"/>
        <path d="M13.5 36 Q18 26 13.5 16" stroke="white" strokeWidth="2.7" strokeLinecap="round" opacity="0.92"/>
        {/* Right signal arcs */}
        <path d="M44 38 Q40 26 44 14" stroke="white" strokeWidth="2.7" strokeLinecap="round" opacity="0.72"/>
        <path d="M38.5 36 Q34 26 38.5 16" stroke="white" strokeWidth="2.7" strokeLinecap="round" opacity="0.92"/>
        {/* Compare arrows */}
        <line x1="21" y1="26" x2="31" y2="26" stroke="white" strokeWidth="2.3" strokeLinecap="round"/>
        <polyline points="28,22.5 31,26 28,29.5" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="24,22.5 21,26 24,29.5" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="26" r="3" fill="white"/>
        {/* Top wifi arc */}
        <path d="M18 14 Q26 9 34 14" stroke="white" strokeWidth="2.3" strokeLinecap="round" opacity="0.9"/>
        <path d="M21.5 10 Q26 7 30.5 10" stroke="white" strokeWidth="1.9" strokeLinecap="round" opacity="0.65"/>
      </svg>

      {/* ── Text ── */}
      <div style={{ lineHeight: 1.25 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: Math.round(height * 0.36),
          color: isDark ? 'rgba(255,255,255,0.92)' : '#0f172a',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          Compare
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: Math.round(height * 0.36),
          color: isDark ? '#a78bfa' : '#7c3aed',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          Internet &amp; Cable
        </div>
      </div>
    </Link>
  )
}
