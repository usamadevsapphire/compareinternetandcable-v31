import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ProviderLogo from '@/components/ProviderLogo'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About Us, Adbyte Digital LLC DBA Compare Internet and Cable | Authorized Dealer',
  description: 'Learn about Compare Internet & Cable, an authorized dealer for AT&T, Xfinity, Frontier, Optimum, and T-Mobile. We help you find the best internet plan at no extra cost.',
  keywords: ['compare internet and cable about','authorized internet dealer','internet comparison service','Adbyte Digital LLC','independent internet dealer'],
  alternates: { canonical: 'https://compareinternetandcable.com/about' },
}

export default function AboutPage() {
  const { providers, siteConfig } = getSheetData()
  const list = Object.values(providers)
  const S = { tag: { fontSize:11, fontWeight:700, fontFamily:'var(--font-display)' as const, textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#a78bfa', marginBottom:12, display:'block' } as React.CSSProperties }

  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'About'}]}
        badge={`Founded ${siteConfig.foundedYear}`}
        title={<>Helping Americans Find <span className="gradient-text">Better Internet</span> Since {siteConfig.foundedYear}</>}
        subtitle="We're not a comparison site that runs ads. We're a licensed authorized retailer with real agents, direct carrier relationships, and a genuine commitment to finding you the best deal."
      />

      {/* Mission */}
      <section style={{background:'#ffffff',padding:'80px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>
          <div>
            <span style={S.tag}>Our Mission</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3.5vw,40px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',marginBottom:20}}>We Work For You —<br/>Not the Carriers</h2>
            <div style={{display:'flex',flexDirection:'column',gap:14,color:'#475569',fontSize:15,lineHeight:1.8}}>
              <p style={{fontSize:15,color:'#475569',lineHeight:1.85,marginBottom:16}}>Compare Internet &amp; Cable was founded with a simple mission: make it easier for Americans to find and switch to a better internet plan, without the confusion, hidden fees, and pressure that comes with calling carriers directly.</p>
              <p style={{fontSize:15,color:'#475569',lineHeight:1.85,marginBottom:16}}>As an independent authorized dealer for all major carriers, we have direct partner agreements with every provider — which means exclusive promotions you won&apos;t find anywhere online, and experienced agents who compare your options in real time.</p>
              <p style={{fontSize:15,color:'#475569',lineHeight:1.85,marginBottom:16}}>Our service is completely free. Carriers pay our fee, you never pay more by calling us. In most cases, you pay less.</p>
            </div>

            <div style={{marginTop:24,background:'rgba(124,58,237,0.04)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:14,padding:'20px 24px'}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#0f172a',fontSize:17,marginBottom:12,letterSpacing:'-0.01em'}}>About the Founder</h3>
              <p style={{fontSize:15,color:'#475569',lineHeight:1.85,margin:0}}>Compare Internet &amp; Cable was founded by Umer, a business and technology professional with a background spanning product management, operations, and telecom retail across the United States. After working closely with carriers and seeing firsthand how confusing, opaque, and unnecessarily expensive the process of finding and switching internet service can be for everyday consumers, Umer launched Adbyte Digital LLC in 2023 with a clear mission: build an authorized dealer operation that puts the customer first — honest comparisons, real agents, zero pressure, and matching standard provider phone pricing. Every carrier relationship we hold is a documented authorized dealer agreement. We answer to our customers, not to any single provider&apos;s sales quota.</p>
            </div>

          </div>
          <div style={{background:'rgba(124,58,237,0.06)',border:'1px solid rgba(124,58,237,0.12)',borderRadius:24,padding:32,display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            {[['5','Authorized\nCarriers'],['Real Human','Agents']].map(([n,l])=>(
              <div key={l} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'24px 20px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:38,color:'#0f172a',lineHeight:1,marginBottom:8,letterSpacing:'-0.03em'}}>
                  {n.includes('+') ? <>{n.replace('+','')}<span style={{color:'#a78bfa'}}>+</span></> :
                   n.startsWith('All') ? <><span style={{fontSize:24}}>All </span><span style={{color:'#a78bfa'}}>50</span></> : n}
                </div>
                <div style={{fontSize:11,color:'#94a3b8',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',whiteSpace:'pre-line',lineHeight:1.4}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section style={{background:'#f8fafc',padding:'80px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <span style={S.tag}>Our Difference</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3.5vw,40px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',textAlign:'center'}}>What Makes Us <span className="gradient-text">Different</span></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
            {[['🏆','Independent Authorized Dealer','We hold direct dealer agreements with each carrier — not affiliate links. Same plans as carrier stores, plus dealer-exclusive promotions not available online.'],
              ['👥','Real Human Agents','No chatbots. When you call, a trained human agent answers and finds the best fit for your budget.'],
              ['🆓','Always Free','Carriers pay our fee. We match standard provider phone pricing.'],
              ['✅','Honest Comparisons','We sell multiple carriers, so we give honest pros and cons for every option.'],
              
              ['🗣️','Bilingual Support','Support in English and Spanish to better serve all customers.'],
            ].map(([icon,title,desc])=>(
              <div key={String(title)} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'26px 22px',transition:'all 0.25s'}}>
                <div style={{fontSize:28,marginBottom:12}}>{icon}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:8}}>{title}</h3>
                <p style={{color:'#64748b',fontSize:13,lineHeight:1.6}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier partners */}
      <section style={{background:'#ffffff',padding:'80px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={S.tag}>Our Partners</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3.5vw,40px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',textAlign:'center'}}>Our Authorized Carriers</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:12}}>
            {list.map(p=>(
              <Link key={p.slug} href={`/providers/${p.slug}`} style={{
                background:'#ffffff',border:'1.5px solid #e2e8f0',
                borderRadius:16,padding:'24px 16px',textAlign:'center',textDecoration:'none',transition:'all 0.2s'
              }}>
                <div style={{height:48,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:6}}><ProviderLogo slug={p.slug} variant="authorized" height={40} /></div>
                <div style={{fontSize:12,color:'#475569',fontWeight:600,marginTop:4}}>{p.technology}</div>
                <div style={{fontSize:11,color:'#64748b',marginTop:3}}>{p.availability}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{background:'#f8fafc',padding:'80px 24px'}} id="contact">
        <div style={{maxWidth:640,margin:'0 auto',textAlign:'center'}}>
          <span style={S.tag}>Get in Touch</span>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:32,fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',marginBottom:12}}>We're a Real Team —<br/>Don't Hesitate to Call</h2>
          <p style={{color:'#64748b',fontSize:16,marginBottom:32,lineHeight:1.7}}>Whether you have a question or need help choosing a plan, our team is here.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',marginBottom:20}}>
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-white">📞 {siteConfig.phone}</a>
            <div style={{padding:'14px 24px',border:'1.5px solid #e2e8f0',borderRadius:12,textAlign:'left'}}>
              <div style={{fontSize:10,color:'#94a3b8',fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:4}}>Hours</div>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14}}>{siteConfig.hours}</div>
            </div>
          </div>
          <p style={{fontSize:12,color:'#cbd5e1',lineHeight:1.6}}>{siteConfig.legalName}<br/>{siteConfig.address}</p>
        </div>
      </section>
    </>
  )
}
