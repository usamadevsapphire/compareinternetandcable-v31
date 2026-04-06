import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSheetData } from '@/lib/sheet-data'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import ZipWidget from '@/components/ZipWidget'
import PageHero from '@/components/PageHero'
import ProviderLogo from '@/components/ProviderLogo'

export async function generateStaticParams() {
  // Always generate all provider pages using hardcoded slugs
  // This ensures pages are built even when xlsx data is partial
  return [
    { slug: 'att' },
    { slug: 'xfinity' },
    { slug: 'frontier' },
    { slug: 'northeast-internet' },
    { slug: 'tmobile' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const allProviders = getSheetData().providers
  const p = Object.values(allProviders).find(provider => provider.slug === slug)
  if (!p) return {}
  return { title: `${p.name} Internet Plans, Authorized Dealer | Compare Internet & Cable` }
}

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { providers, siteConfig } = getSheetData()
  const p = Object.values(providers).find(provider => provider.slug === slug)
  if (!p) notFound()
  const others = Object.values(providers).filter(x => x.slug !== slug)

  const S = { tag: { fontSize:11, fontWeight:700, fontFamily:'var(--font-display)' as const, textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#a78bfa', marginBottom:12, display:'block' } as React.CSSProperties }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compareinternetandcable.com' },
          { '@type': 'ListItem', position: 2, name: 'Providers', item: 'https://compareinternetandcable.com/providers' },
          { '@type': 'ListItem', position: 3, name: p.name, item: `https://compareinternetandcable.com/providers/${p.slug}` },
        ],
      }) }} />
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Providers',href:'/providers'},{label:p.name}]}
        topLogo={<ProviderLogo slug={p.slug} variant="authorized" height={56} style={{marginBottom:16}} />}
        title={<>{p.name} Internet Plans <span style={{fontSize:'clamp(14px,1.5vw,18px)',color:'#64748b',fontWeight:600}}>(Authorized Dealer)</span> —<br/><span className="gradient-text">Compare &amp; Order Through an Independent Authorized Dealer</span></>}
        subtitle={`${p.tagline} Matches standard provider phone pricing, plus exclusive promotions not available on ${p.name}'s own website.`}
      >
        <div style={{marginBottom:20}}>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:16}}>
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:15,padding:'13px 28px'}}>📞 Call to Order, {siteConfig.phone}</a>
          </div>
          <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
            {[p.noContract&&'✅ No Contract',p.noDataCap&&'✅ No Data Caps',p.freeInstall&&'✅ Free Installation',p.freeEquipment&&'✅ Free Equipment'].filter(Boolean).map(b=>(
              <span key={String(b)} style={{color:'#475569',fontFamily:'var(--font-display)',fontWeight:600,fontSize:13}}>{String(b)}</span>
            ))}
          </div>
        </div>
        <ZipWidget phone={siteConfig.phone} label={`Check ${p.name} availability at your address`} />
      </PageHero>


      {/* CHANGE 4b — Independence disclosure on every provider page */}
      <div style={{background:'#fffbeb',borderLeft:'4px solid #f59e0b',borderBottom:'1px solid #fde68a',padding:'16px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <p style={{color:'#78350f',fontSize:13,lineHeight:1.75,margin:0}}>
            <strong style={{fontFamily:'var(--font-display)',color:'#92400e'}}>Adbyte Digital LLC DBA Compare Internet and Cable</strong> is an independent authorized dealer for {p.name} internet services. We are not {p.name}&apos;s official website, customer service line, or corporate representative. If you are an existing {p.name} customer needing account support or billing help, please contact {p.name} directly. We help new customers find and sign up for the best {p.name} plan at their address.
          </p>
        </div>
      </div>

      {/* Plans Table */}
      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{marginBottom:32}}>
            <span style={S.tag}>Plans & Pricing</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',marginBottom:8}}>{p.name} Internet Plans</h2>
            <p style={{color:'#94a3b8',fontSize:13}}>All prices require autopay. $10/mo autopay discount included. Taxes extra.</p>
          </div>
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0'}}>
            <table className="data-table">
              <thead>
                <tr>{['Plan','Download','Upload','Monthly Price','Contract','Data Cap','Order'].map(h=><th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {p.plans.map((plan,i)=>(
                  <tr key={i}>
                    <td><span style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14}}>{plan.name}</span></td>
                    <td>{plan.down}</td>
                    <td><span>{plan.up}</span>{plan.sym&&<span style={{marginLeft:6,color:'#06b6d4',fontSize:11,fontWeight:700,fontFamily:'var(--font-display)'}}>SYM</span>}</td>
                    <td>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#a78bfa',fontSize:16}}>{plan.price}</div>
                      <div style={{color:'#94a3b8',fontSize:11,fontWeight:600}}>w/ AutoPay*</div>
                      <div style={{color:'#94a3b8',fontSize:10}}>{plan.promo}</div>
                    </td>
                    <td><span style={{background:'#dcfce7',color:'#15803d',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:100}}>{plan.contract}</span></td>
                    <td style={{color:'#64748b'}}>{plan.cap}</td>
                    <td><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:11,padding:'8px 14px',whiteSpace:'nowrap'}}>📞 Call</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CHANGE 5a — Optimum-specific Perfect Vision disclosure */}
      {slug === 'northeast-internet' && (
        <div style={{background:'#fff7ed',borderLeft:'4px solid #f97316',padding:'16px 24px'}}>
          <div style={{maxWidth:1280,margin:'0 auto',display:'flex',gap:12,alignItems:'flex-start'}}>
            <span style={{fontSize:20,flexShrink:0}}>⚠️</span>
            <div>
              <p style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#9a3412',fontSize:14,marginBottom:6}}>About Our Authorization — Northeast Internet Plans</p>
              <p style={{color:'#7c2d12',fontSize:13,lineHeight:1.75,margin:0}}>Adbyte Digital LLC DBA Compare Internet and Cable is authorized to sell these internet plans through <strong>PerfectVision</strong>, an authorized master dealer. This is a standard sub-dealer authorization structure in the telecom retail industry. We are an independent third-party dealer. If you need account support for your current service, please contact your provider directly.</p>
            </div>
          </div>
        </div>
      )}

      {/* Pros/Cons */}
      <section style={{background:'#f8fafc',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{marginBottom:32,textAlign:'center'}}>
            <span style={S.tag}>Honest Assessment</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>{p.name} Pros &amp; Cons</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
            <div style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.15)',borderRadius:16,padding:24}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#34d399',fontSize:14,marginBottom:14}}>✅ What We Love</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                {p.pros.map((pro,i)=><li key={i} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#334155',fontSize:14}}><span style={{color:'#34d399',fontWeight:700,flexShrink:0}}>✓</span>{pro}</li>)}
              </ul>
            </div>
            <div style={{background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.15)',borderRadius:16,padding:24}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#f87171',fontSize:14,marginBottom:14}}>⚠️ Things to Know</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                {p.cons.map((con,i)=><li key={i} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#334155',fontSize:14}}><span style={{color:'#f87171',fontWeight:700,flexShrink:0}}>✗</span>{con}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={S.tag}>Who It&apos;s For</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',textAlign:'center'}}>Who Is {p.name} Best For?</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14}}>
            {[['🎮','Gamers','Fast, low-latency connections for lag-free gaming.'],
              ['💼','Remote Workers','Reliable speeds for video calls and file transfers.'],
              ['🏠','Large Households','Enough bandwidth for multiple simultaneous devices.'],
              ['💰','Budget Shoppers','Competitive pricing with no hidden contract fees.'],
            ].map(([icon,title,desc])=>(
              <div key={String(title)} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'24px 20px',textAlign:'center'}}>
                <div style={{fontSize:32,marginBottom:12}}>{icon}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:8}}>{title}</h3>
                <p style={{color:'#64748b',fontSize:12,lineHeight:1.6}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'#f8fafc',padding:'72px 24px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={S.tag}>FAQ</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>{p.name} FAQ</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {[
              [`Is ${p.name} available at my address?`,`Enter your ZIP above or call us at ${siteConfig.phone}, our agents confirm in seconds.`],
              [`Do I need a contract with ${p.name}?`,`No, all ${p.name} plans we sell require no annual contract.`],
              [`Are there data caps?`, slug === 'northeast-internet' ? 'No data caps on the fiber plans we sell. Data cap policies on cable plans vary by location — ask your agent for details on your specific address.' : 'No data caps on any plans we sell.'],
              [`Can I get a better deal by calling?`,`Yes, as authorized dealers we access exclusive promotions not on ${p.name}'s website. Call ${siteConfig.phone}.`],
              [`How long does installation take?`,'Typically 5–7 business days. Some plans offer self-install.'],
            ].map(([q,a],i)=>(
              <details key={i} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:14}}>
                <summary style={{padding:'16px 20px',fontFamily:'var(--font-display)',fontWeight:600,color:'#0f172a',fontSize:14,cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  {q} <span style={{color:'#94a3b8',fontSize:12}}>▾</span>
                </summary>
                <div style={{padding:'0 20px 16px',color:'#475569',fontSize:14,lineHeight:1.7}}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Compare with others */}
      <section style={{background:'#ffffff',padding:'48px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',textAlign:'center'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#475569',fontSize:16,marginBottom:20}}>Compare {p.name} With Other Providers</h3>
          <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center'}}>
            {others.map(other=>(
              <Link key={other.slug} href="/providers" style={{
                display:'inline-flex',alignItems:'center',gap:8,padding:'10px 20px',
                border:'1.5px solid #e2e8f0',borderRadius:100,
                fontFamily:'var(--font-display)',fontWeight:600,fontSize:13,
                color:'#475569',textDecoration:'none',
                background:'#ffffff',transition:'all 0.15s'
              }}>
                {p.name} vs {other.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'#f8fafc',padding:'24px'}}><div style={{maxWidth:1280,margin:'0 auto'}}><PriceDisclaimer variant="compact" /></div></section>
    </>
  )
}
