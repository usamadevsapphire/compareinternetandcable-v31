import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ProviderLogo from '@/components/ProviderLogo'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Best Internet Deals & Promotions 2026, Exclusive Authorized Dealer Offers',
  description: 'This week\'s best internet deals from AT&T, Xfinity, Frontier, Optimum & T-Mobile. Exclusive promotions, free installation offers, and exclusive promotions..',
  keywords: ['internet deals 2026','best internet promotions','Xfinity deals','AT&T fiber deals','Frontier promotions','Optimum discounts','T-Mobile internet deal','cheap internet plans','internet fiber upload speed'],
  alternates: { canonical: 'https://compareinternetandcable.com/deals' },
  openGraph: { title: 'Best Internet Deals 2026 — Exclusive Promotions', description: 'Exclusive internet promotions from all major providers. Free to claim, call us today.' },
}

export default function DealsPage() {
  const { deals, providers, siteConfig } = getSheetData()
  const allDeals = Object.values(providers).map(p => {
    const existing = deals.find(d => d.slug === p.slug)
    return existing || { provider:p.name, slug:p.slug, color:p.color, plan:p.plans[0]?.name||'Internet Plan',
      badge:p.badge, price:p.fromPrice.replace('$',''), promoPrice:p.fromPrice.replace('$',''),
      perks:['Call to confirm current promotions at your address','Free installation','No annual contract'],
      expiry:'Confirm with rep', autopay:'Yes' }
  })
  const S = { tag: { fontSize:11, fontWeight:700, fontFamily:'var(--font-display)' as const, textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#d97706', marginBottom:12, display:'block' } as React.CSSProperties }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Internet Deals & Promotions',
        description: 'Current internet service provider deals and promotions from Compare Internet and Cable.',
        url: 'https://compareinternetandcable.com/deals',
      }) }} />
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Deals'}]}
        title={<>This Week's Best <span className="gradient-text-warm">Internet Deals</span></>}
        subtitle="Exclusive promotions from all 5 carriers. Call us to claim any deal. Pricing confirmed with carrier reps. Call to verify current availability at your address."
      >
        <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <span style={{background:'rgba(16,185,129,0.12)',border:'1px solid rgba(16,185,129,0.25)',color:'#34d399',padding:'6px 16px',borderRadius:100,fontSize:12,fontWeight:700,fontFamily:'var(--font-display)'}}>
          </span>
          <span style={{color:'#94a3b8',fontSize:13}}>Deals change weekly. Call to confirm eligibility.</span>
        </div>
      </PageHero>

      {/* Deals grid */}
      <section style={{background:'#fffbeb',borderTop:'1px solid #fde68a',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:40,flexWrap:'wrap',gap:16}}>
            <div>
              <span style={S.tag}>🔥 Active Promotions</span>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,38px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',marginBottom:0}}>Current Internet Deals</h2>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
            {allDeals.map((d,i)=>(
              <div key={i} style={{
                background:'#ffffff',border:'1.5px solid #fde68a',
                borderRadius:20,padding:'24px',position:'relative',overflow:'hidden',transition:'all 0.25s'
              }}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${d.color},${d.color}60)`}}/>
                <span style={{display:'inline-flex',alignItems:'center',gap:4,background:'#fef3c7',color:'#b45309',fontSize:10,fontWeight:800,fontFamily:'var(--font-display)',padding:'4px 10px',borderRadius:100,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:14}}>{d.badge}</span>
                <div style={{height:48,display:'flex',alignItems:'center',marginBottom:8}}>
                  <ProviderLogo slug={d.slug} variant="authorized" height={40} />
                </div>
                <div style={{color:'#94a3b8',fontSize:13,marginBottom:14}}>{d.plan}</div>
                <div style={{display:'flex',alignItems:'baseline',gap:10,marginBottom:12}}>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:34,color:'#0f172a',letterSpacing:'-0.03em',lineHeight:1}}>
                    <sup style={{fontSize:16}}>$</sup>{d.promoPrice.replace('$','')}<sub style={{fontSize:12,color:'#94a3b8',fontWeight:400}}>/mo</sub>
                  </div>
                  {d.price!==d.promoPrice.replace('$','')&&<div style={{color:'#cbd5e1',fontSize:13,textDecoration:'line-through'}}>${d.price}/mo</div>}
                </div>
                <ul style={{listStyle:'none',marginBottom:14,display:'flex',flexDirection:'column',gap:6}}>
                  {d.perks.map((perk,j)=><li key={j} style={{fontSize:12,color:'#475569',display:'flex',alignItems:'flex-start',gap:6}}>🎁 {perk}</li>)}
                </ul>
                <div style={{display:'flex',gap:8,marginBottom:12,flexWrap:'wrap'}}>
                  <span style={{background:'#ffffff',color:'#94a3b8',fontSize:11,padding:'3px 10px',borderRadius:100,fontFamily:'var(--font-display)',fontWeight:600}}>Autopay: {d.autopay}</span>
                </div>
                <div style={{color:'#d97706',fontSize:11,fontWeight:600,marginBottom:14}}>⏰ {d.expiry}</div>
                <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} style={{display:'block',width:'100%',textAlign:'center',padding:'12px',borderRadius:12,background:'linear-gradient(135deg,#d97706,#b45309)',color:'white',fontFamily:'var(--font-display)',fontWeight:700,fontSize:13,textDecoration:'none'}}>
                  📞 Call to Claim, {siteConfig.phone}
                </a>
              </div>
            ))}
          </div>
          <PriceDisclaimer variant="default" />
        </div>
      </section>

      {/* How to get best deal */}
      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <span style={{...S.tag,color:'#a78bfa'}}>Insider Tips</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,38px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',textAlign:'center'}}>How to Get the <span className="gradient-text">Best Possible Deal</span></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            {[['1','Call Us First',"Tell us your current provider and bill. We'll find better options at your address immediately.",'#7c3aed'],
              ['2','Ask About Promos','We have promotions not listed online. Always ask "what\'s your best current deal?"','#5b21b6'],
              ['3','Mention Competitors','If another provider offers less, tell us, we can often match or beat it.','#06b6d4'],
              ['4','Ask About Bundles','Bundling internet with TV or mobile can save $15–30/month.','#10b981'],
            ].map(([n,t,d,col])=>(
              <div key={n} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'28px 22px',textAlign:'center'}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:`linear-gradient(135deg,${col},${col}99)`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontFamily:'var(--font-display)',fontWeight:800,color:'white',fontSize:17,boxShadow:`0 4px 16px ${col}40`}}>{n}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:8}}>{t}</h3>
                <p style={{color:'#64748b',fontSize:12,lineHeight:1.6}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'#f8fafc',padding:'72px 24px'}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:800,color:'#0f172a',marginBottom:28,letterSpacing:'-0.02em',textAlign:'center'}}>Deal Questions Answered</h2>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {[['Are these prices guaranteed?',`Prices are promotional rates set by the carriers and subject to change at any time. Call ${siteConfig.phone} to confirm today's exact rate before deciding.`],
              ['Do I pay more by calling vs ordering online?','No, you pay the same or less. We access exclusive promotions not listed on carrier websites.'],
              ['How long do promotions last?','Most promotional periods run 12 months. We always tell you what your rate will be after the promo ends.'],
              ['Can you price-match a competitor?','In many cases yes. Tell us what you\'ve been offered and we\'ll see what we can do.'],
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
    </>
  )
}
