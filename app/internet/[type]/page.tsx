import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import ProviderLogo from '@/components/ProviderLogo'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import PageHero from '@/components/PageHero'

const TYPE_META: Record<string, {icon:string;title:string;tagline:string;desc:string;color:string;slugs:string[]}> = {
  fiber:  {icon:'⚡',title:'Fiber Internet',tagline:'Fastest & Most Reliable',desc:'Fiber-optic internet delivers the fastest, most consistent speeds available. Symmetrical upload speeds for video calls, remote work, and gaming.',color:'#7c3aed',slugs:['att','frontier']},
  cable:  {icon:'📺',title:'Cable Internet',tagline:'Wide Coverage, Fast Speeds',desc:'Cable internet reaches over 88% of US households. Fast download speeds perfect for streaming, browsing, and everyday household use.',color:'#06b6d4',slugs:['xfinity','northeast-internet']},
  '5g':   {icon:'📶',title:'5G Home Internet',tagline:'No Wires, No Installation',desc:'No technician visit required. Plug in the gateway and connect in minutes. Perfect for renters, movers, and rural areas.',color:'#e20074',slugs:['tmobile','att']},
  cheap:  {icon:'💰',title:'Cost-effective Internet',tagline:'Reliable Plans Under $50/mo',desc:"Find the most affordable internet plans available at your address, including carrier-specific low-income discounted plans.",color:'#10b981',slugs:['xfinity','northeast-internet','frontier']},
}

export async function generateStaticParams() { return Object.keys(TYPE_META).map(type=>({type})) }

export default async function InternetTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  const meta = TYPE_META[type]
  if (!meta) notFound()
  const { providers, siteConfig } = getSheetData()
  const typeProviders = meta.slugs.map(s=>providers[s]).filter(Boolean)

  // Filter plans to match the technology type exactly
  function filterPlan(plan: {name:string, sym:boolean}, type: string): boolean {
    const name = plan.name.toLowerCase()
    if (type === 'fiber') return (name.includes('fiber') || plan.sym) && !name.includes('air') && !name.includes('5g') && !name.includes('wireless')
    if (type === 'cable') return !name.includes('fiber') && !plan.sym && !name.includes('air') && !name.includes('5g')
    if (type === '5g') return name.includes('air') || name.includes('wireless') || name.includes('home internet') || name.includes('rely') || name.includes('amplified') || name.includes('all-in')
    return true // cheap: show all
  }


  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Internet',href:'/internet'},{label:meta.title}]}
        badge={meta.tagline}
        title={<>{meta.title} Plans —<br/><span className="gradient-text">Find the Best Deal</span></>}
        subtitle={meta.desc}
      >
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary">📞 Call an Expert, {siteConfig.phone}</a>
        </div>
      </PageHero>

      {/* CHANGE 8 — dealer disclaimer */}
      <div style={{background:'#f8fafc',borderBottom:'1px solid #e2e8f0',padding:'10px 24px',textAlign:'center'}}>
        <p style={{margin:0,fontSize:12,color:'#64748b'}}>All providers shown are sold through Adbyte Digital LLC as an independent authorized dealer. We are not affiliated with any carrier.</p>
      </div>

      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{marginBottom:40}}>
            <span style={{fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:'#a78bfa',marginBottom:12,display:'block'}}>Available Plans</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,38px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>{meta.title} Plans We Offer</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:48}}>
            {typeProviders.map(p=>{
              const [spNum,spUnit=''] = p.maxSpeed.split(' ')
              return (
                <div key={p.slug} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
                  <div style={{height:3,background:`linear-gradient(90deg,${p.color},${p.color2})`}}/>
                  <div style={{position:'absolute',top:3,right:14,fontSize:10,fontWeight:800,fontFamily:'var(--font-display)',color:'#0f172a',padding:'4px 10px',borderRadius:'0 0 8px 8px',textTransform:'uppercase',background:`linear-gradient(135deg,${p.color},${p.color2})`}}>{p.badge}</div>
                  <div style={{padding:'22px',flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
                      <div style={{height:48,display:'flex',alignItems:'center'}}><ProviderLogo slug={p.slug} variant="authorized" height={42} /></div>
                      <span style={{fontSize:10,background:'#ffffff',color:'#94a3b8',padding:'3px 10px',borderRadius:100,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase'}}>{p.technology}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:4}}>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:38,color:'#0f172a',letterSpacing:'-0.03em',lineHeight:1}}>{spNum}</span>
                      <span style={{color:'#94a3b8',fontSize:14}}>{spUnit}</span>
                    </div>
                    <p style={{fontSize:11,color:'#94a3b8',marginBottom:14,textTransform:'uppercase',letterSpacing:'0.06em'}}>Max speed</p>
                    <ul style={{listStyle:'none',marginBottom:16,flex:1,display:'flex',flexDirection:'column',gap:7}}>
                      {p.pros.slice(0,4).map((pro,i)=>(<li key={i} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#475569',fontSize:13}}><span style={{color:'#10b981',fontWeight:700,fontSize:11,flexShrink:0}}>✓</span>{pro}</li>))}
                    </ul>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:14,borderTop:'1px solid #f1f5f9'}}>
                      <div style={{display:'flex',alignItems:'baseline',gap:4}}>
                        <span style={{fontSize:11,color:'#94a3b8'}}>from</span>
                        <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:24,color:'#0f172a'}}>{p.fromPrice}</span>
                        <span style={{fontSize:11,color:'#94a3b8'}}>/mo</span>
                      </div>
                      <div style={{display:'flex',gap:8}}>
                        <Link href={`/providers/${p.slug}`} style={{padding:'8px 14px',borderRadius:9,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)',border:'1.5px solid #e2e8f0',color:'#475569',textDecoration:'none'}}>Details</Link>
                        <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:12,padding:'8px 14px'}}>📞 Call</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* All plans table */}
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0'}}>
            <table className="data-table" style={{minWidth:600}}>
              <thead>
                <tr>{['Provider','Plan','Download','Upload','Price','Contract','Order'].map(h=><th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {typeProviders.flatMap(p=>p.plans.filter(plan=>filterPlan(plan,type)).map((plan,i)=>(
                  <tr key={`${p.slug}-${i}`}>
                    <td><ProviderLogo slug={p.slug} variant="authorized" height={30} /></td>
                    <td><span style={{fontFamily:'var(--font-display)',fontWeight:600,color:'#0f172a'}}>{plan.name}</span></td>
                    <td>{plan.down}</td>
                    <td><span>{plan.up}</span>{plan.sym&&<span style={{marginLeft:4,color:'#06b6d4',fontSize:10,fontWeight:700}}> SYM</span>}</td>
                    <td><span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#a78bfa',fontSize:14}}>{plan.price}</span></td>
                    <td><span style={{background:'#dcfce7',color:'#15803d',fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:100}}>{plan.contract}</span></td>
                    <td><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:10,padding:'6px 12px',whiteSpace:'nowrap'}}>📞 Call</a></td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section style={{background:'#f8fafc',padding:'32px 24px'}}><div style={{maxWidth:1280,margin:'0 auto'}}><PriceDisclaimer variant="compact" /></div></section>
    </>
  )
}
