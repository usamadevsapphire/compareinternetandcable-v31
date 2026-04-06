import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import ProviderLogo from '@/components/ProviderLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Cable Internet Alternatives 2026 — Compare AT&T, Xfinity, Frontier & More',
  description: 'Looking for a better cable internet option? Compare AT&T Fiber, Xfinity, Frontier, and T-Mobile. Better speeds, lower prices, no contracts. Authorized dealer — free to call.',
  keywords: ['cable internet alternatives','best cable internet alternatives','switch cable internet','cable internet comparison','better than cable internet','fiber vs cable internet','cable internet options 2026'],
  alternates: { canonical: 'https://compareinternetandcable.com/providers/cable-alternatives' },
}

const S = {
  section: { padding:'72px 24px', background:'#ffffff' } as React.CSSProperties,
  sectionAlt: { padding:'72px 24px', background:'#f8fafc' } as React.CSSProperties,
  inner: { maxWidth:1100, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(24px,3.5vw,36px)', color:'#0f172a', letterSpacing:'-0.025em', lineHeight:1.2, marginBottom:16 } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
  tag: { fontSize:11, fontWeight:700 as const, fontFamily:'var(--font-display)', textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#7c3aed', display:'block', marginBottom:10 } as React.CSSProperties,
}

const WHY_SWITCH = [
  { icon:'💰', title:'Price Increases After Promo', desc:'Many cable providers raise rates $20-40/mo after 12 months. Fiber alternatives like Frontier and AT&T offer price-stable plans.' },
  { icon:'📦', title:'Equipment Rental Fees', desc:'Most cable providers charge monthly equipment rental fees. Many fiber alternatives include free equipment or allow your own router.' },
  { icon:'🐌', title:'Upload Speeds Are Limited', desc:'Standard cable internet upload speeds max at 35 Mbps on most plans. Fiber alternatives offer symmetrical speeds up to 5 Gbps.' },
]

export default function CableAlternativesPage() {
  const { siteConfig, providers } = getSheetData()
  const alts = ['att','xfinity','frontier','optimum','tmobile'].map(s => providers[s]).filter(Boolean)

  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Providers',href:'/providers'},{label:'Cable Alternatives'}]}
        title={<>Best <span className="gradient-text">Cable Internet Alternatives</span> in 2026</>}
        subtitle="Ready to switch your cable internet? Compare the best alternatives at your address — AT&T Fiber, Xfinity, Frontier, and T-Mobile. Matching standard provider phone pricing, plus exclusive deals."
      >
        <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
          <span style={{background:'#fffbeb',border:'1px solid #fde68a',color:'#92400e',padding:'6px 14px',borderRadius:100,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)'}}>
            ⚠️ Independent Authorized Dealer
          </span>
          <span style={{color:'#64748b',fontSize:13}}>Independent comparison. Updated March 2026.</span>
        </div>
      </PageHero>

      {/* Non-affiliation disclaimer */}
      <div style={{background:'#fef2f2',borderBottom:'1px solid #fecaca',padding:'14px 24px',textAlign:'center'}}>
        <p style={{color:'#991b1b',fontSize:13,margin:0,maxWidth:900,marginLeft:'auto',marginRight:'auto'}}>
          <strong>Disclaimer:</strong> Compare Internet and Cable (Adbyte Digital LLC) is an independent authorized dealer for AT&T, Xfinity, Frontier, and T-Mobile. This page is an independent editorial comparison of cable internet options. We are not affiliated with or an authorized dealer for any cable-only provider not listed.
        </p>
      </div>

      {/* Why customers switch */}
      <section style={S.sectionAlt}>
        <div style={S.inner}>
          <span style={S.tag}>Common Reasons to Switch</span>
          <h2 style={S.h2}>Why Customers <span className="gradient-text">Switch Cable Providers</span></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginBottom:32}}>
            {WHY_SWITCH.map(w => (
              <div key={w.title} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'22px 24px',display:'flex',gap:16}}>
                <span style={{fontSize:28,flexShrink:0}}>{w.icon}</span>
                <div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,marginBottom:6}}>{w.title}</div>
                  <div style={{color:'#64748b',fontSize:13,lineHeight:1.65}}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={S.section}>
        <div style={S.inner}>
          <span style={S.tag}>Head-to-Head Comparison</span>
          <h2 style={S.h2}>Cable Internet vs. Top Alternatives</h2>
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0',boxShadow:'0 4px 16px rgba(0,0,0,0.06)'}}>
            <table style={{width:'100%',borderCollapse:'separate',borderSpacing:0,minWidth:700}}>
              <thead>
                <tr style={{background:'#0f172a'}}>
                  {['Provider','Max Speed','Starting Price','Upload Speed','Contract','Data Cap',].map((h,i) => (
                    <th key={h} style={{padding:'13px 16px',textAlign:'left',fontSize:11,fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:i===0?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.6)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Typical Cable',speed:'1 Gbps',price:'$49.99/mo',upload:'35 Mbps',contract:'No',cap:'None',highlight:false,note:'(representative pricing)'},
                  {name:'AT&T Fiber',speed:'5 Gbps',price:'$65/mo',upload:'Symmetrical',contract:'No',cap:'None',highlight:true},
                  {name:'Xfinity',speed:'1.2 Gbps',price:'$40/mo',upload:'35 Mbps',contract:'No',cap:'1.2 TB',highlight:true},
                  {name:'Frontier Fiber',speed:'5 Gbps',price:'$40/mo',upload:'Symmetrical',contract:'No',cap:'None',highlight:true},
                  {name:'Optimum',speed:'2 Gbps',price:'$35/mo',upload:'Symmetrical',contract:'No',cap:'None',highlight:true},
                  {name:'T-Mobile 5G',speed:'300 Mbps',price:'$50/mo',upload:'25 Mbps',contract:'No',cap:'None',highlight:true},
                ].map((row,i) => (
                  <tr key={row.name} style={{borderBottom:'1px solid #f1f5f9',background:row.highlight&&i%2===0?'#faf5ff':row.highlight&&i%2!==0?'#f5f0ff':i%2===0?'#f9fafb':'#f3f4f6'}}>
                    <td style={{padding:'13px 16px'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:row.highlight?'#0f172a':'#64748b',fontSize:14}}>
                        {row.name} {row.note && <span style={{fontSize:11,color:'#94a3b8',fontWeight:400}}>{row.note}</span>}
                      </div>
                      {row.highlight && <span style={{fontSize:10,color:'#7c3aed',fontWeight:700,fontFamily:'var(--font-display)'}}>Authorized Dealer</span>}
                    </td>
                    <td style={{padding:'13px 16px',color:'#334155',fontSize:13,fontFamily:'var(--font-display)',fontWeight:600}}>{row.speed}</td>
                    <td style={{padding:'13px 16px',color:row.highlight?'#7c3aed':'#94a3b8',fontSize:13,fontFamily:'var(--font-display)',fontWeight:700}}>{row.price}</td>
                    <td style={{padding:'13px 16px',fontSize:13}}>
                      <span style={{color:row.upload==='Symmetrical'?'#059669':'#475569',fontWeight:row.upload==='Symmetrical'?700:400}}>{row.upload}</span>
                    </td>
                    <td style={{padding:'13px 16px',color:'#059669',fontSize:13,fontWeight:600}}>{row.contract}</td>
                    <td style={{padding:'13px 16px',color:'#475569',fontSize:13}}>{row.cap}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{color:'#94a3b8',fontSize:11,marginTop:12}}>*Cable provider data sourced from publicly available pricing for comparison purposes only. Representative pricing — actual rates vary. Subject to change without notice.</p>
        </div>
      </section>

      {/* Our authorized alternatives */}
      <section style={S.sectionAlt}>
        <div style={S.inner}>
          <span style={S.tag}>Our Authorized Providers</span>
          <h2 style={S.h2}>Cable Alternatives We Can Help You With</h2>
          <p style={{...S.p,maxWidth:680,marginBottom:32}}>As an authorized dealer for the following providers, we can check availability at your address and help you switch in one call — matching standard provider phone pricing, with exclusive promotions.</p>
          <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:32}}>
            {alts.map(p => (
              <div key={p.slug} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:14,padding:'20px 24px',display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
                <div style={{width:180,flexShrink:0}}>
                  <ProviderLogo slug={p.slug} variant="authorized" height={40} />
                </div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,marginBottom:4}}>
                    {p.name} — from {p.fromPrice}/mo
                  </div>
                  <div style={{color:'#64748b',fontSize:13}}>{p.technology} · Up to {p.maxSpeed} · {p.availability}</div>
                </div>
                <div style={{display:'flex',gap:10,flexShrink:0}}>
                  <Link href={`/providers/${p.slug}`} style={{padding:'9px 16px',borderRadius:9,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)',border:'1.5px solid #e2e8f0',color:'#475569',textDecoration:'none'}}>Details</Link>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:12,padding:'9px 16px'}}>📞 Call</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZIP widget CTA */}
      <section style={S.section}>
        <div style={{...S.inner,textAlign:'center'}}>
          <span style={S.tag}>Check Your Address</span>
          <h2 style={{...S.h2,textAlign:'center'}}>See Which Cable Alternatives Are Available at Your Address</h2>
          <p style={{...S.p,textAlign:'center',maxWidth:560,margin:'0 auto 32px'}}>Enter your ZIP code and our agents will tell you exactly which providers serve your area and what deals are available today.</p>
          <div style={{maxWidth:560,margin:'0 auto'}}>
            <ZipWidget phone={siteConfig.phone} />
          </div>
          <p style={{color:'#94a3b8',fontSize:11,marginTop:16}}>
            All prices subject to change. Availability varies by address.{' '}
            <Link href="/advertising-disclosure" style={{color:'#7c3aed',textDecoration:'none'}}>Advertising Disclosure</Link>
          </p>
        </div>
      </section>
    </>
  )
}
