'use client'
import Link from 'next/link'
import SiteLogo from '@/components/SiteLogo'
import { useState, useEffect } from 'react'
import type { ProviderData, SiteConfig } from '@/lib/sheet-data'

export default function Header({ siteConfig, providers }: { siteConfig: SiteConfig; providers: Record<string, ProviderData> }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Main header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', height:66, display:'flex', alignItems:'center', gap:28 }}>

          {/* Logo */}
          <SiteLogo variant="color" height={44} />

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display:'flex', alignItems:'center', gap:2, flex:1 }}>
            {[
              { label:'Internet', items:[['⚡ Fiber Internet','/internet/fiber'],['📺 Cable Internet','/internet/cable'],['📶 5G Internet','/internet/5g'],['💰 Cost-effective Plans','/internet/cheap'],['All Internet Plans →','/internet']] },
              { label:'Providers', items: Object.values(providers).map(p=>[p.name,`/providers/${p.slug}`]).concat([['Cable Alternatives','/providers/cable-alternatives'],['Cable vs Fiber','/providers/cable-vs-fiber'],['Compare All →','/providers']]) },
              { label:'Guide', items:[['Fiber vs Cable','/guide/fiber-vs-cable'],['Moving Checklist','/guide/moving-checklist'],['Blog','/guide/blog'],['All Guides →','/guide']] },
            ].map(group => (
              <div key={group.label} style={{ position:'relative' }}
                onMouseEnter={e => { const dd = (e.currentTarget as HTMLElement).querySelector('.dd') as HTMLElement; if(dd){dd.style.opacity='1';dd.style.visibility='visible';dd.style.transform='translateY(0)'} }}
                onMouseLeave={e => { const dd = (e.currentTarget as HTMLElement).querySelector('.dd') as HTMLElement; if(dd){dd.style.opacity='0';dd.style.visibility='hidden';dd.style.transform='translateY(-6px)'} }}>
                <button style={{ display:'flex', alignItems:'center', gap:4, padding:'8px 14px', color:'#334155', fontSize:14, fontWeight:600, fontFamily:'var(--font-display)', borderRadius:8, background:'none', border:'none', cursor:'pointer', transition:'all 0.15s', whiteSpace:'nowrap' }}>
                  {group.label} <span style={{fontSize:10}}>▾</span>
                </button>
                <div className="dd" style={{ position:'absolute', top:'calc(100% + 8px)', left:0, background:'white', border:'1px solid #e2e8f0', borderRadius:14, padding:8, minWidth:210, boxShadow:'0 16px 48px rgba(0,0,0,0.12)', opacity:0, visibility:'hidden', transform:'translateY(-6px)', transition:'all 0.2s', zIndex:50 }}>
                  {group.items.map(([label, href]) => (
                    <Link key={href} href={href} style={{ display:'block', padding:'10px 14px', color:'#334155', fontSize:14, fontWeight:500, borderRadius:9, textDecoration:'none', fontFamily:'var(--font-body)', transition:'all 0.15s' }}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {[['Deals','/deals'],['About','/about']].map(([l,h]) => (
              <Link key={h} href={h} style={{ padding:'8px 14px', color:'#334155', fontSize:14, fontWeight:600, fontFamily:'var(--font-display)', borderRadius:8, textDecoration:'none', transition:'all 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='#7c3aed';(e.currentTarget as HTMLElement).style.background='#f5f3ff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='#334155';(e.currentTarget as HTMLElement).style.background='transparent' }}>
                {l}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display:'flex', alignItems:'center', gap:10, marginLeft:'auto' }}>
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="hide-mobile" style={{ display:'flex', alignItems:'center', gap:6, color:'#7c3aed', fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, textDecoration:'none', whiteSpace:'nowrap' }}>
              📞 {siteConfig.phone}
            </a>
            <Link href="/#zip-widget" className="btn-primary" style={{ fontSize:13, padding:'9px 18px' }}>
              Check Availability
            </Link>
            <button className="show-mobile" onClick={() => setOpen(true)} style={{ background:'none', border:'none', cursor:'pointer', padding:8, display:'flex', flexDirection:'column', gap:5 }}>
              {[0,1,2].map(i => <span key={i} style={{ display:'block', width:22, height:2, background:'#334155', borderRadius:2 }}/>)}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div style={{ position:'fixed', inset:0, zIndex:60, background:'white', display:'flex', flexDirection:'column', padding:24, overflowY:'auto' }}>
          <button onClick={() => setOpen(false)} style={{ alignSelf:'flex-end', background:'none', border:'none', fontSize:28, cursor:'pointer', color:'#334155', marginBottom:20 }}>✕</button>
          <nav style={{ display:'flex', flexDirection:'column' }}>
            {[
              ['/internet','Internet Plans'],
              ['/internet/fiber','↳ Fiber'],
              ['/internet/cable','↳ Cable'],
              ['/internet/5g','↳ 5G'],
              ['/internet/cheap','↳ Cost-effective Plans'],
              ['/providers','All Providers'],
              ['/providers/cable-alternatives','↳ Cable Alternatives'],
              ['/providers/cable-vs-fiber','↳ Cable vs Fiber'],
              ...Object.values(providers).map(p => [`/providers/${p.slug}`, `↳ ${p.name}`]),
              ['/guide','Internet Guide'],
              ['/guide/fiber-vs-cable','↳ Fiber vs Cable'],
              ['/guide/moving-checklist','↳ Moving Checklist'],
              ['/guide/blog','↳ Blog'],
              ['/deals','Deals'],
              ['/about','About'],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} style={{
                padding: label.startsWith('↳') ? '8px 0 8px 16px' : '14px 0',
                color: label.startsWith('↳') ? '#94a3b8' : '#0f172a',
                borderBottom: label.startsWith('↳') ? 'none' : '1px solid #f1f5f9',
                fontSize: label.startsWith('↳') ? 14 : 17,
                fontWeight: label.startsWith('↳') ? 400 : 700,
                fontFamily: 'var(--font-display)',
                textDecoration: 'none', display: 'block'
              }}>{label}</Link>
            ))}
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} style={{ marginTop:16, color:'#7c3aed', fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, textDecoration:'none', padding:'14px 0', borderTop:'2px solid #ede9fe', display:'block' }}>
              📞 {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
