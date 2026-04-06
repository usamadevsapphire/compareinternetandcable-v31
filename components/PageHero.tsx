import Link from 'next/link'

interface Crumb { label: string; href?: string }
interface Props {
  crumbs: Crumb[]
  badge?: string
  topLogo?: React.ReactNode
  title: React.ReactNode
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHero({ crumbs, badge, topLogo, title, subtitle, children }: Props) {
  return (
    <section style={{
      /* White → light blue gradient exactly matching front.png */
      background: 'linear-gradient(160deg, #eef5fc 0%, #f3f8fe 35%, #f8faff 65%, #ffffff 100%)',
      padding: '64px 24px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle dot pattern top-left */}
      <div style={{ position:'absolute', top:28, left:40, opacity:0.12, pointerEvents:'none' }}>
        {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
          <div key={`${row}-${col}`} style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'#7c3aed', top:row*9, left:col*9 }}/>
        )))}
      </div>
      {/* Dot pattern top-right */}
      <div style={{ position:'absolute', top:28, right:40, opacity:0.12, pointerEvents:'none' }}>
        {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
          <div key={`${row}-${col}`} style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'#7c3aed', top:row*9, left:col*9 }}/>
        )))}
      </div>

      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Breadcrumb */}
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:24, flexWrap:'wrap' }}>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display:'flex', alignItems:'center', gap:8 }}>
              {i > 0 && <span style={{ color:'#cbd5e1', fontSize:13 }}>›</span>}
              {c.href
                ? <Link href={c.href} style={{ color:'#94a3b8', fontSize:13, fontFamily:'var(--font-display)', textDecoration:'none', transition:'color 0.15s' }}>{c.label}</Link>
                : <span style={{ color:'#64748b', fontSize:13, fontFamily:'var(--font-display)' }}>{c.label}</span>
              }
            </span>
          ))}
        </div>

        {/* Optional top logo */}
        {topLogo && <div style={{ marginBottom:14 }}>{topLogo}</div>}

        {/* Optional badge */}
        {badge && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#ede9fe', border: '1px solid #ddd6fe',
            padding: '5px 14px', borderRadius: 100, marginBottom: 20,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#7c3aed', display:'inline-block' }}/>
            <span style={{ fontFamily:'var(--font-display)', fontSize:11, fontWeight:700, color:'#7c3aed', textTransform:'uppercase', letterSpacing:'0.1em' }}>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: '#0f172a',
          fontSize: 'clamp(30px,4.5vw,54px)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 16,
        }}>{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{ color:'#64748b', fontSize:18, lineHeight:1.7, maxWidth:620, marginBottom:28 }}>{subtitle}</p>
        )}

        {children}
      </div>
    </section>
  )
}
