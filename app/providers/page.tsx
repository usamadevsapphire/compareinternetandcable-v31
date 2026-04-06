import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import PageHero from '@/components/PageHero'
import ProviderLogo from '@/components/ProviderLogo'
import AuthorizedLogoBar from '@/components/AuthorizedLogoBar'

export const metadata: Metadata = {
  title: 'Compare All Internet Providers, AT&T, Xfinity, Frontier, Optimum, T-Mobile',
  description: 'Side-by-side comparison of all major internet service providers. See speeds, pricing, availability, and real customer ratings. Authorized dealer, exclusive deals available.',
  keywords: ['compare internet providers','best internet provider 2026','AT&T vs Xfinity','Frontier vs Comcast','internet provider comparison','ISP comparison','fiber vs cable internet providers'],
  alternates: { canonical: 'https://compareinternetandcable.com/providers' },
  openGraph: { title: 'Compare Internet Providers, Speeds, Pricing, Ratings', description: 'Find the right internet provider at your address. Compare all major ISPs side by side.' },
}

export default function ProvidersPage() {
  const { providers, siteConfig } = getSheetData()
  const list = Object.values(providers)
  const S = {
    inner: { maxWidth:1280, margin:'0 auto' } as React.CSSProperties,
    tag:   { fontSize:11, fontWeight:700, fontFamily:'var(--font-display)' as const, textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#a78bfa', marginBottom:12, display:'block' } as React.CSSProperties,
    h2:    { fontFamily:'var(--font-display)' as const, fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#0f172a', lineHeight:1.15, letterSpacing:'-0.025em', marginBottom:16 } as React.CSSProperties,
  }

  return (
    <>
      {/* CHANGE 3 — Independence disclaimer */}
      <div style={{background:'#fffbeb',borderLeft:'4px solid #f59e0b',borderBottom:'1px solid #fde68a',padding:'16px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'flex',gap:12,alignItems:'flex-start'}}>
          <span style={{fontSize:20,flexShrink:0}}>⚠️</span>
          <div>
            <p style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#92400e',fontSize:14,marginBottom:4}}>Independent Authorized Dealer — Not a Carrier</p>
            <p style={{color:'#78350f',fontSize:13,lineHeight:1.7,margin:0}}>Adbyte Digital LLC DBA Compare Internet and Cable is an independent authorized dealer — not an employee, official representative, or corporate affiliate of any carrier listed below. All carrier trademarks are property of their respective owners. Our authorization to sell Optimum plans operates through Perfect Vision, an Optimum-authorized master dealer.</p>
          </div>
        </div>
      </div>

      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Providers'}]}
        badge="All 5 Carriers"
        title={<>Compare <span className="gradient-text">Authorized</span> Internet Providers</>}
        subtitle="Matches standard provider phone pricing, plus exclusive dealer promotions not available on carrier websites."
      >
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-glow">📞 Call an Expert, {siteConfig.phone}</a>
          <Link href="/#zip-widget" className="btn-ghost">Check My ZIP →</Link>
        </div>
      </PageHero>

      {/* Why authorized */}
      <section style={{background:'#f8fafc',padding:'48px 24px'}}>
        <div style={S.inner}>
          <div style={{background:'rgba(124,58,237,0.06)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:20,padding:'36px 40px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40}}>
            {[['🏆','Same Price, Better Deals','Authorized dealers match carrier pricing exactly, plus exclusive promotions not available online.'],
              ['👥','Real Agents, No Chatbots','50+ trained agents answer your call. We compare all options and find what works for you.'],
              ['🆓','Always Free to Use','Carriers pay our fee. You never pay more by calling us, you often pay less.'],
            ].map(([icon,title,desc])=>(
              <div key={String(title)} style={{textAlign:'center'}}>
                <div style={{fontSize:32,marginBottom:12}}>{icon}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,marginBottom:8}}>{title}</h3>
                <p style={{color:'#64748b',fontSize:13,lineHeight:1.6}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider grid */}
      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={S.inner}>
          <div style={{marginBottom:48}}>
            <span style={S.tag}>All Providers</span>
            <h2 style={S.h2}>5 Carriers We Are Authorized to Sell</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:32}}>
            {list.map(p=>{
              const [spNum,spUnit=''] = p.maxSpeed.split(' ')
              return (
                <div key={p.slug} style={{
                  background:'#ffffff',border:'1.5px solid #e2e8f0',
                  borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'column',
                  position:'relative',transition:'all 0.25s'
                }}>
                  <div style={{height:3,background:`linear-gradient(90deg,${p.color},${p.color2})`}}/>
                  <div style={{position:'absolute',top:3,right:14,fontSize:10,fontWeight:800,fontFamily:'var(--font-display)',color:'#0f172a',padding:'4px 10px',borderRadius:'0 0 8px 8px',textTransform:'uppercase',letterSpacing:'0.05em',background:`linear-gradient(135deg,${p.color},${p.color2})`}}>{p.badge}</div>
                  <div style={{padding:'22px',flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
                      <div style={{height:48,display:'flex',alignItems:'center',marginBottom:4}}><ProviderLogo slug={p.slug} variant="authorized" height={44} /></div>
                      <span style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',background:'#ffffff',color:'#94a3b8',padding:'4px 10px',borderRadius:100,textTransform:'uppercase'}}>{p.technology}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:4}}>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:40,color:'#0f172a',letterSpacing:'-0.03em',lineHeight:1}}>{spNum}</span>
                      <span style={{color:'#94a3b8',fontSize:14}}>{spUnit}</span>
                    </div>
                    <p style={{fontSize:11,color:'#94a3b8',marginBottom:14,textTransform:'uppercase',letterSpacing:'0.06em'}}>Max speed · {p.availability}</p>
                    <ul style={{listStyle:'none',marginBottom:18,flex:1,display:'flex',flexDirection:'column',gap:7}}>
                      {p.pros.slice(0,4).map((pro,i)=>(
                        <li key={i} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#475569',fontSize:13}}>
                          <span style={{color:'#10b981',fontWeight:700,fontSize:11,flexShrink:0,marginTop:1}}>✓</span>{pro}
                        </li>
                      ))}
                    </ul>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:16,borderTop:'1px solid #f1f5f9'}}>
                      <div style={{display:'flex',alignItems:'baseline',gap:4}}>
                        <span style={{fontSize:11,color:'#94a3b8'}}>from</span>
                        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:24,color:'#0f172a',letterSpacing:'-0.02em'}}>{p.fromPrice}</span>
                        <span style={{fontSize:11,color:'#475569',fontWeight:600}}>/mo</span>
                        <div style={{fontSize:10,color:'#475569',fontWeight:600,marginTop:2}}>w/ AutoPay*</div>
                      </div>
                      <div style={{display:'flex',gap:8}}>
                        <Link href={`/providers/${p.slug}`} style={{padding:'8px 14px',borderRadius:9,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)',border:'1.5px solid #e2e8f0',color:'#475569',textDecoration:'none'}}>Details</Link>
                        <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-glow" style={{fontSize:12,padding:'8px 14px'}}>📞 Call</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{background:'#f8fafc',padding:'72px 24px'}}>
        <div style={S.inner}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={S.tag}>Side by Side</span>
            <h2 style={{...S.h2,textAlign:'center'}}>Quick <span className="gradient-text">Comparison</span></h2>
          </div>
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0'}}>
            <table className="data-table" style={{minWidth:700}}>
              <thead>
                <tr>
                  {['Provider','Technology','Max Speed','Starting Price','Contract','Data Cap','Coverage','Order'].map(h=>(
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {list.map(p=>(
                  <tr key={p.slug}>
                    <td><ProviderLogo slug={p.slug} variant="authorized" height={32} /></td>
                    <td style={{color:'#64748b',fontSize:13}}>{p.technology}</td>
                    <td><span style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a'}}>{p.maxSpeed}</span></td>
                    <td><span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#a78bfa',fontSize:16}}>{p.fromPrice}/mo</span><div style={{fontSize:10,color:'#64748b',fontWeight:600,marginTop:2}}>w/ AutoPay*</div></td>
                    <td><span style={{background:'#dcfce7',color:'#15803d',fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',padding:'3px 10px',borderRadius:100}}>No Contract</span></td>
                    <td><span style={{background:'#dcfce7',color:'#15803d',fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',padding:'3px 10px',borderRadius:100}}>No Cap</span></td>
                    <td style={{color:'#64748b',fontSize:12}}>{p.availability}</td>
                    <td><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-glow" style={{fontSize:11,padding:'7px 14px'}}>📞 Call</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:11,color:'#cbd5e1',marginTop:12}}>*Prices require autopay. Taxes extra. Availability varies by address.</p>
        </div>
      </section>
      <section style={{background:'#f8fafc',padding:'24px'}}><div style={{maxWidth:1280,margin:'0 auto'}}><PriceDisclaimer variant="compact" /></div></section>
    </>
  )
}
