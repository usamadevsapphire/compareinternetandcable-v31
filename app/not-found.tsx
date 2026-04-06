import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Compare Internet and Cable',
  description: 'This page does not exist on Compare Internet and Cable.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '60px 24px',
      background: '#f8fafc',
    }}>

      {/* 404 number */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px,15vw,140px)',
        fontWeight: 900,
        color: '#e2e8f0',
        lineHeight: 1,
        marginBottom: 8,
        letterSpacing: '-0.05em',
      }}>
        404
      </div>

      {/* Main message */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(22px,3vw,32px)',
        fontWeight: 800,
        color: '#0f172a',
        marginBottom: 16,
        letterSpacing: '-0.02em',
      }}>
        This page does not exist
      </h1>

      {/* Explanation */}
      <p style={{
        color: '#64748b',
        fontSize: 16,
        lineHeight: 1.7,
        maxWidth: 480,
        marginBottom: 8,
      }}>
        The page you are looking for has been removed, renamed, or never existed on this website.
      </p>

      <p style={{
        color: '#94a3b8',
        fontSize: 13,
        lineHeight: 1.6,
        maxWidth: 480,
        marginBottom: 36,
      }}>
        If you followed a link or bookmark to get here, that link is no longer valid.
        Please use the button below to return to the home page.
      </p>

      {/* Home button */}
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
          color: 'white',
          padding: '14px 32px',
          borderRadius: 12,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 16,
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(124,58,237,0.35)',
        }}
      >
        ← Go to Home Page
      </Link>

      {/* Secondary links */}
      <div style={{
        display: 'flex',
        gap: 24,
        marginTop: 32,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {[
          ['Browse Providers', '/providers'],
          ['See Deals', '/deals'],
          ['Compare Internet Types', '/internet'],
          ['About Us', '/about'],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              color: '#7c3aed',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              textDecoration: 'none',
            }}
          >
            {label} →
          </Link>
        ))}
      </div>

    </div>
  )
}
