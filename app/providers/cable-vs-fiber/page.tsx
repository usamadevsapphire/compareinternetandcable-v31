import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import ProviderLogo from '@/components/ProviderLogo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cable vs Fiber Internet 2026 — Full Comparison | Compare Internet & Cable',
  description: 'Cable vs Fiber Internet: complete head-to-head comparison for 2026. Speeds, pricing, reliability, upload speeds, gaming, streaming. Find out which is better for your home.',
  keywords: ['cable vs fiber internet','cable vs fiber 2026','fiber internet vs cable','cable internet comparison','fiber vs cable speed','is fiber better than cable','cable vs fiber gaming','cable vs fiber upload speed'],
  alternates: { canonical: 'https://compareinternetandcable.com/providers/cable-vs-fiber' },
}

const S = {
  section: { padding:'72px 24px', background:'#ffffff' } as React.CSSProperties,
  sectionAlt: { padding:'72px 24px', background:'#f8fafc' } as React.CSSProperties,
  inner: { maxWidth:1000, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(24px,3.5vw,34px)', color:'#0f172a', letterSpacing:'-0.025em', lineHeight:1.2, marginBottom:16 } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
  tag: { fontSize:11, fontWeight:700 as const, fontFamily:'var(--font-display)', textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#7c3aed', display:'block', marginBottom:10 } as React.CSSProperties,
}

const CRITERIA = [
  {cat:'Max Download Speed',spec:'Up to 1 Gbps',att:'Up to 5 Gbps',winner:'att',note:'AT&T fiber goes 5x faster at max tier'},
  {cat:'Upload Speed',spec:'Up to 35 Mbps',att:'Symmetrical (matches download)',winner:'att',note:'Critical for WFH, streaming, gaming'},
  {cat:'Technology',spec:'Cable (coaxial)',att:'100% Fiber Optic',winner:'att',note:'Fiber is a newer, more reliable medium'},
  {cat:'Starting Price',spec:'$49.99/mo',att:'$65/mo',winner:'cable',note:'Cable typically starts lower at entry tier'},
  {cat:'Price After Promo',spec:'Increases $20-40/mo',att:'Stays the same',winner:'att',note:'AT&T is more stable long-term'},
  {cat:'Data Cap',spec:'No data cap',att:'No data cap',winner:'tie',note:'Both include unlimited data'},
  {cat:'Contract',spec:'No contract',att:'No contract',winner:'tie',note:'Both are month-to-month'},
  {cat:'Latency (Gaming)',spec:'15-30 ms typical',att:'1-5 ms typical',winner:'att',note:'Fiber wins significantly for gaming'},
  {cat:'Peak Hour Speed',spec:'May slow 10-20%',att:'Consistent 24/7',winner:'att',note:'Fiber dedicated line vs shared cable'},
  {cat:'Availability',spec:'41 states',att:'21 states',winner:'cable',note:'Cable internet has broader coverage'},
  {cat:'Installation',spec:'Self-install option',att:'Tech visit required',winner:'cable',note:'Cable self-install often available'},
]

const USE_CASES = [
  {icon:'💻',title:'Work From Home',winner:'AT&T',reason:'Symmetrical upload speeds are essential for video calls, file uploads, and remote desktop. Spectrum\'s 35 Mbps upload can bottleneck during busy household hours. AT&T fiber gives 300-5,000 Mbps upload depending on plan.'},
  {icon:'🎮',title:'Gaming',winner:'AT&T',reason:'AT&T fiber\'s 1-5 ms latency vs Spectrum\'s 15-30 ms is a real competitive advantage in fast-paced games. Lower jitter also means fewer rubber-banding issues.'},
  {icon:'📺',title:'4K Streaming',winner:'Tie',reason:'Both providers deliver sufficient download speeds for 4K streaming. AT&T fiber is more consistent during peak hours (7-10 PM), but cable internet is perfectly adequate for most streaming households.'},
  {icon:'💰',title:'Budget-Conscious',winner:'Cable Internet',reason:'Spectrum\'s $49.99 starting price is lower than AT&T\'s $65. If fiber isn\'t available or budget is the priority and upload speed isn\'t critical, Spectrum\'s entry tier is competitive.'},
]

export default function CableVsFiberPage() {
  const { siteConfig, providers } = getSheetData()
  const att = providers['att']

  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Providers',href:'/providers'},{label:'Cable vs Fiber'}]}
        title={<>Cable vs <span className="gradient-text">Fiber Internet</span><br/>2026 Comparison</>}
        subtitle="Full head-to-head comparison of cable internet vs fiber — speeds, pricing, gaming, streaming, reliability and which is right for your home."
      >
        <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
          <span style={{background:'#fffbeb',border:'1px solid #fde68a',color:'#92400e',padding:'6px 14px',borderRadius:100,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)'}}>
            ⚠️ Independent Authorized Dealer
          </span>
          <span style={{color:'#64748b',fontSize:13}}>We are an AT&T authorized dealer. Updated March 2026.</span>
        </div>
      </PageHero>

      {/* Non-affiliation disclaimer */}
      <div style={{background:'#fef2f2',borderBottom:'1px solid #fecaca',padding:'14px 24px',textAlign:'center'}}>
        <p style={{color:'#991b1b',fontSize:13,margin:0,maxWidth:900,marginLeft:'auto',marginRight:'auto'}}>
          <strong>Disclosure:</strong> Compare Internet and Cable (Adbyte Digital LLC) is an authorized dealer for AT&T Fiber. This is an independent editorial comparison of cable vs fiber internet technology based on publicly available data.
        </p>
      </div>

      {/* VS Scoreboard */}
      <section style={{...S.section,padding:'48px 24px'}}>
        <div style={S.inner}>
          <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:24,alignItems:'center'}}>
            {/* Cable */}
            <div style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:20,padding:'32px 28px',textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:32,color:'#003057',letterSpacing:'-0.02em',marginBottom:8}}>Cable Internet</div>
              

              <div style={{marginTop:16,color:'#64748b',fontSize:13}}>Cable Internet<br/>Up to 1 Gbps download<br/>Up to 35 Mbps upload</div>
            </div>
            {/* VS */}
            <div style={{textAlign:'center',fontFamily:'var(--font-display)',fontWeight:900,fontSize:28,color:'#94a3b8'}}>VS</div>
            {/* AT&T */}
            <div style={{background:'#faf5ff',border:'2px solid #7c3aed',borderRadius:20,padding:'32px 28px',textAlign:'center',position:'relative'}}>
              <div style={{position:'absolute',top:-12,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#7c3aed,#5b21b6)',color:'white',fontFamily:'var(--font-display)',fontWeight:800,fontSize:10,padding:'4px 14px',borderRadius:100,textTransform:'uppercase',letterSpacing:'0.08em',whiteSpace:'nowrap'}}>Our Pick</div>
              <div style={{marginBottom:12}}>
                {att && <ProviderLogo slug="att" variant="authorized" height={44} style={{margin:'0 auto'}} />}
              </div>

              <div style={{marginTop:16,color:'#475569',fontSize:13}}>100% Fiber Optic<br/>Up to 5 Gbps<br/>Symmetrical upload speeds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section style={S.sectionAlt}>
        <div style={S.inner}>
          <span style={S.tag}>Full Comparison</span>
          <h2 style={S.h2}>Cable vs Fiber — Every Metric</h2>
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0',boxShadow:'0 4px 16px rgba(0,0,0,0.06)'}}>
            <table style={{width:'100%',borderCollapse:'separate',borderSpacing:0}}>
              <thead>
                <tr style={{background:'#0f172a'}}>
                  {['Criteria','Cable Internet','AT&T Fiber','Winner'].map((h,i)=>(
                    <th key={h} style={{padding:'13px 18px',textAlign:'left',fontSize:11,fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:i===2?'#a78bfa':i===1?'#94a3b8':'rgba(255,255,255,0.6)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((row,i) => (
                  <tr key={row.cat} style={{borderBottom:'1px solid #f1f5f9',background:i%2===0?'white':'#fafbff'}}>
                    <td style={{padding:'13px 18px'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:600,color:'#334155',fontSize:13}}>{row.cat}</div>
                      <div style={{color:'#94a3b8',fontSize:11,marginTop:2}}>{row.note}</div>
                    </td>
                    <td style={{padding:'13px 18px',color:'#64748b',fontSize:13}}>{row.spec}</td>
                    <td style={{padding:'13px 18px',color:'#475569',fontSize:13,fontWeight:row.winner==='att'?600:400}}>{row.att}</td>
                    <td style={{padding:'13px 18px'}}>
                      <span style={{background:row.winner==='att'?'#ede9fe':row.winner==='cable'?'#f0fdf4':'#f1f5f9',color:row.winner==='att'?'#7c3aed':row.winner==='cable'?'#15803d':'#64748b',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:100,fontFamily:'var(--font-display)',whiteSpace:'nowrap'}}>
                        {row.winner==='att'?'AT&T':row.winner==='cable'?'Cable Internet':'Tie'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use case breakdowns */}
      <section style={S.section}>
        <div style={S.inner}>
          <span style={S.tag}>Use Case Breakdown</span>
          <h2 style={S.h2}>Which Is Better For Your Situation?</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
            {USE_CASES.map(uc => (
              <div key={uc.title} style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'24px'}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                  <span style={{fontSize:28}}>{uc.icon}</span>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15}}>{uc.title}</div>
                    <span style={{background:uc.winner==='AT&T'?'#ede9fe':uc.winner==='Cable Internet'?'#f0fdf4':'#f1f5f9',color:uc.winner==='AT&T'?'#7c3aed':uc.winner==='Cable Internet'?'#15803d':'#64748b',fontSize:11,fontWeight:700,padding:'2px 8px',borderRadius:100,fontFamily:'var(--font-display)'}}>
                      Winner: {uc.winner}
                    </span>
                  </div>
                </div>
                <p style={{...S.p,marginBottom:0,fontSize:13}}>{uc.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict + CTA */}
      <section style={S.sectionAlt}>
        <div style={S.inner}>
          <span style={S.tag}>Our Verdict</span>
          <h2 style={S.h2}>Bottom Line</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:36}}>
            <div style={{background:'#faf5ff',border:'2px solid #7c3aed',borderRadius:16,padding:'24px'}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#7c3aed',fontSize:17,marginBottom:12}}>Choose AT&T If...</h3>
              {['AT&T fiber is available at your address','You work from home and need reliable upload speeds','You play online games (low latency matters)','You want stable pricing that doesn\'t increase after 12 months','Your household streams 4K on multiple devices simultaneously'].map(item=>(
                <div key={item} style={{display:'flex',gap:10,color:'#334155',fontSize:13,marginBottom:8,alignItems:'flex-start'}}>
                  <span style={{color:'#7c3aed',fontWeight:700,flexShrink:0}}>✓</span>{item}
                </div>
              ))}
            </div>
            <div style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'24px'}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#334155',fontSize:17,marginBottom:12}}>Spectrum May Work If...</h3>
              {['AT&T fiber is not available at your address','You mainly browse, stream, and check email casually','Budget is the top priority and upload speed isn\'t critical','You want a TV bundle with a familiar provider','You prefer self-install over scheduling a tech visit'].map(item=>(
                <div key={item} style={{display:'flex',gap:10,color:'#334155',fontSize:13,marginBottom:8,alignItems:'flex-start'}}>
                  <span style={{color:'#64748b',fontWeight:700,flexShrink:0}}>·</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div style={{background:'white',border:'1.5px solid #e2e8f0',borderRadius:16,padding:'28px',textAlign:'center'}}>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:18,marginBottom:10}}>Check If AT&T Fiber Is Available at Your Address</h3>
            <p style={{color:'#64748b',fontSize:14,marginBottom:24,maxWidth:480,margin:'0 auto 24px'}}>We'll confirm availability in seconds and tell you today's best AT&T deal at your address.</p>
            <div style={{maxWidth:520,margin:'0 auto'}}>
              <ZipWidget phone={siteConfig.phone} />
            </div>
          </div>
          <p style={{color:'#94a3b8',fontSize:11,marginTop:16,textAlign:'center'}}>
            Spectrum data from publicly available sources. Not affiliated with Spectrum.{' '}
            <Link href="/advertising-disclosure" style={{color:'#7c3aed',textDecoration:'none'}}>Advertising Disclosure</Link>
          </p>
        </div>
      </section>
    </>
  )
}
