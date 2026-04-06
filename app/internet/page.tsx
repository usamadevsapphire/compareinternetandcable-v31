import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import ProviderLogo from '@/components/ProviderLogo'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Internet Plans. Fiber, Cable, 5G & Affordable Options | Compare Internet & Cable',
  description: 'Find the right internet plan type for your home. Compare fiber, cable, 5G home internet, and cost-effective plans. Authorized dealer for all major providers.',
  keywords: ['fiber internet plans','cable internet plans','5G home internet','affordable internet','high speed internet near me','internet plan types','best internet type','fiber vs cable internet'],
  alternates: { canonical: 'https://compareinternetandcable.com/internet' },
}

export default function InternetPage() {
  const { providers, siteConfig } = getSheetData()
  const list = Object.values(providers)
  const types = [
    {href:'/internet/fiber',icon:'⚡',title:'Fiber Internet',color:'#7c3aed',tagline:'Fastest & Most Reliable',desc:'Symmetrical speeds, no data caps. AT&T and Frontier.'},
    {href:'/internet/cable',icon:'📺',title:'Cable Internet',color:'#06b6d4',tagline:'Wide Coverage',desc:'Available in 88% of US homes. Xfinity and Optimum.'},
    {href:'/internet/5g',icon:'📶',title:'5G Home Internet',color:'#e20074',tagline:'No Wires, No Install',desc:'Plug in and connect in minutes. T-Mobile.'},
    {href:'/internet/cheap',icon:'💰',title:'Cost-effective Internet',color:'#10b981',tagline:'Plans Under $50/mo',desc:'Affordable plans, including carrier-specific discounted options.'},
  ]
  return (
    <>
      <PageHero crumbs={[{label:'Home',href:'/'},{label:'Internet Plans'}]}
        title={<>Compare <span className="gradient-text">Internet Plans</span> Nationwide</>}
        subtitle="Fiber, cable, 5G, or budget, we compare every option at your address and find the best rate.">
        <ZipWidget phone={siteConfig.phone} />
      </PageHero>

      <section style={{background:'#f8fafc',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <span style={{fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:'#a78bfa',marginBottom:12,display:'block'}}>Internet Types</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3.5vw,40px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>What Type Are You <span className="gradient-text">Looking For?</span></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginBottom:72}}>
            {types.map(t=>(
              <Link key={t.href} href={t.href} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:20,padding:'28px 20px',textAlign:'center',textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center',transition:'all 0.25s'}}>
                <div style={{width:56,height:56,borderRadius:16,background:`${t.color}18`,border:`1px solid ${t.color}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,marginBottom:16}}>{t.icon}</div>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,marginBottom:4}}>{t.title}</h3>
                <p style={{color:'#94a3b8',fontSize:11,marginBottom:8,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em'}}>{t.tagline}</p>
                <p style={{color:'#94a3b8',fontSize:12,lineHeight:1.5,flex:1,marginBottom:14}}>{t.desc}</p>
                <span style={{color:t.color,fontSize:12,fontWeight:700,fontFamily:'var(--font-display)'}}>Explore →</span>
              </Link>
            ))}
          </div>

          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em',marginBottom:32}}>All Providers We Carry</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
            {list.map(p=>{
              const [spNum,spUnit=''] = p.maxSpeed.split(' ')
              return (
                <div key={p.slug} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'column'}}>
                  <div style={{height:3,background:`linear-gradient(90deg,${p.color},${p.color2})`}}/>
                  <div style={{padding:'20px',flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
                      <div style={{height:44,display:'flex',alignItems:'center'}}><ProviderLogo slug={p.slug} variant="authorized" height={38} /></div>
                      <span style={{fontSize:10,background:'#ffffff',color:'#94a3b8',padding:'3px 10px',borderRadius:100,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase'}}>{p.technology}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:12}}>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:32,color:'#0f172a',letterSpacing:'-0.03em',lineHeight:1}}>{spNum}</span>
                      <span style={{color:'#94a3b8',fontSize:13}}>{spUnit}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:14,borderTop:'1px solid #f1f5f9',marginTop:'auto'}}>
                      <div style={{display:'flex',alignItems:'baseline',gap:4}}>
                        <span style={{fontSize:11,color:'#94a3b8'}}>from</span>
                        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:22,color:'#0f172a'}}>{p.fromPrice}</span>
                        <span style={{fontSize:11,color:'#94a3b8'}}>/mo</span>
                      </div>
                      <div style={{display:'flex',gap:8}}>
                        <Link href={`/providers/${p.slug}`} style={{padding:'7px 12px',borderRadius:8,fontSize:11,fontWeight:600,fontFamily:'var(--font-display)',border:'1.5px solid #e2e8f0',color:'#475569',textDecoration:'none'}}>Details</Link>
                        <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-glow" style={{fontSize:11,padding:'7px 12px'}}>📞 Call</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section style={{background:'#f8fafc',padding:'32px 24px'}}><div style={{maxWidth:1280,margin:'0 auto'}}><PriceDisclaimer variant="compact" /></div></section>
    </>
  )
}
