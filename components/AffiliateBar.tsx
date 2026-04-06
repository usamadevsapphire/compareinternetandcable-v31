// CHANGE 1 — Global header trust bar, appears above nav on every page
// Required for Google Ads Misrepresentation Policy compliance
export default function AffiliateBar() {
  return (
    <div style={{
      background: '#1e1b4b',
      borderBottom: '1px solid rgba(124,58,237,0.35)',
      padding: '8px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        margin: 0,
        fontSize: 12,
        color: 'rgba(255,255,255,0.82)',
        lineHeight: 1.5,
        fontFamily: 'var(--font-body)',
      }}>
        <strong style={{ color:'#c4b5fd', fontWeight:700 }}>Compare Internet &amp; Cable (Adbyte Digital LLC)</strong>
        {' '}is an independent authorized dealer — not affiliated with any carrier.{' '}
        <a href="/advertising-disclosure" style={{ color:'#a78bfa', textDecoration:'underline', fontWeight:600, whiteSpace:'nowrap' }}>
          How we make money →
        </a>
      </p>
    </div>
  )
}
