'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { ProviderData } from '@/lib/sheet-data'
import ProviderLogo from './ProviderLogo'

interface Props { providers: ProviderData[]; phone: string }

export default function ProviderSlider({ providers, phone }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    trackRef.current.scrollLeft = scrollLeft - (e.pageX - trackRef.current.offsetLeft - startX) * 1.4
  }
  const onMouseUp = () => setIsDragging(false)
  const scroll = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  const slides = [...providers, ...providers]

  return (
    <div style={{ position:'relative' }}>
      {/* Arrow buttons */}
      {(['left','right'] as const).map(dir => (
        <button key={dir} onClick={() => scroll(dir)} aria-label={`Scroll ${dir}`}
          style={{
            position:'absolute', [dir==='left'?'left':'right']:-20,
            top:'50%', transform:'translateY(-50%)', zIndex:10,
            width:42, height:42, borderRadius:'50%',
            background:'#ffffff', border:'1.5px solid #e2e8f0',
            boxShadow:'0 4px 14px rgba(0,0,0,0.1)',
            cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:22, color:'#64748b', fontWeight:300, lineHeight:1, transition:'all 0.2s',
          }}>
          {dir === 'left' ? '‹' : '›'}
        </button>
      ))}

      {/* Scrollable track */}
      <div ref={trackRef}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove}
        onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
        style={{
          display:'flex', gap:16,
          overflowX:'auto', paddingBottom:8, paddingTop:4,
          scrollbarWidth:'none', WebkitOverflowScrolling:'touch',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect:'none',
        }}>
        {slides.map((p, i) => {
          const [spNum, spUnit = ''] = p.maxSpeed.split(' ')
          return (
            <div key={`${p.slug}-${i}`} style={{
              flexShrink:0, width:300,
              background:'#ffffff',
              border:'1.5px solid #e2e8f0',
              borderRadius:18,
              overflow:'hidden',
              display:'flex', flexDirection:'column',
              position:'relative',
              boxShadow:'0 2px 8px rgba(0,0,0,0.05)',
              transition:'box-shadow 0.25s, border-color 0.25s, transform 0.25s',
            }}>
              {/* Colour top strip */}
              <div style={{ height:4, background:`linear-gradient(90deg,${p.color},${p.color2})` }} />

              {/* Award badge */}
              <div style={{
                position:'absolute', top:4, right:12,
                fontSize:9, fontWeight:800, fontFamily:'var(--font-display)',
                color:'white', padding:'3px 9px', borderRadius:'0 0 7px 7px',
                textTransform:'uppercase', letterSpacing:'0.04em',
                background:`linear-gradient(135deg,${p.color},${p.color2})`,
              }}>{p.badge}</div>

              <div style={{ padding:'20px 20px 18px', flex:1, display:'flex', flexDirection:'column' }}>

                {/* ── AUTHORIZED LOGO — prominent, like compare.png ── */}
                <div style={{
                  height:56, display:'flex', alignItems:'center',
                  marginBottom:14, paddingRight:60,
                }}>
                  <ProviderLogo slug={p.slug} variant="authorized" height={44} />
                </div>

                {/* Technology pill */}
                <div style={{ marginBottom:12 }}>
                  <span style={{
                    fontSize:10, fontWeight:700, fontFamily:'var(--font-display)',
                    background:'#f1f5f9', color:'#64748b',
                    padding:'3px 10px', borderRadius:100,
                    textTransform:'uppercase', letterSpacing:'0.04em',
                  }}>{p.technology}</span>
                </div>

                {/* Max speed — big number like compare.png */}
                <div style={{ display:'flex', alignItems:'baseline', gap:5, marginBottom:2 }}>
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:40, color:'#0f172a', letterSpacing:'-0.03em', lineHeight:1 }}>{spNum}</span>
                  <span style={{ color:'#94a3b8', fontSize:14, fontWeight:500 }}>{spUnit}</span>
                </div>
                <p style={{ fontSize:10, color:'#94a3b8', marginBottom:16, textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600 }}>Max download speed</p>

                {/* Features */}
                <ul style={{ listStyle:'none', marginBottom:20, flex:1, display:'flex', flexDirection:'column', gap:7 }}>
                  {p.pros.slice(0,3).map((pro, j) => (
                    <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:8, color:'#475569', fontSize:13 }}>
                      <span style={{ color:'#10b981', fontWeight:700, fontSize:12, flexShrink:0, marginTop:1 }}>✓</span>{pro}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div style={{ borderTop:'1px solid #f1f5f9', paddingTop:16, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div>
                    <span style={{ fontSize:11, color:'#94a3b8', fontWeight:500 }}>from </span>
                    <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:26, color:'#0f172a', letterSpacing:'-0.02em' }}>{p.fromPrice}</span>
                    <span style={{ fontSize:12, color:'#475569', fontWeight:600 }}>/mo</span>
                    <div style={{ fontSize:10, color:'#475569', fontWeight:600, marginTop:2 }}>w/ AutoPay*</div>
                  </div>
                  <div style={{ display:'flex', gap:8 }}>
                    <Link href={`/providers/${p.slug}`}
                      style={{ padding:'8px 14px', borderRadius:9, fontSize:12, fontWeight:600, fontFamily:'var(--font-display)', border:'1.5px solid #e2e8f0', color:'#475569', textDecoration:'none' }}>
                      Details
                    </Link>
                    <a href={`tel:${phone.replace(/\D/g,'')}`}
                      style={{ padding:'8px 14px', borderRadius:9, fontSize:12, fontWeight:700, fontFamily:'var(--font-display)', background:'linear-gradient(135deg,#7c3aed,#5b21b6)', color:'white', textDecoration:'none', display:'flex', alignItems:'center', gap:4 }}>
                      📞 Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Fade edges */}
      <div style={{ position:'absolute', top:0, left:0, bottom:8, width:52, background:'linear-gradient(to right, #ffffff, transparent)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:0, right:0, bottom:8, width:52, background:'linear-gradient(to left, #ffffff, transparent)', pointerEvents:'none' }} />
    </div>
  )
}
