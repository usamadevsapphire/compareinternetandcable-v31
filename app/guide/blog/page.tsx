import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import PageHero from '@/components/PageHero'

export const metadata = { title: 'Internet Tips, Guides & News, Blog | Compare Internet & Cable' }

export default function BlogPage() {
  const { siteConfig } = getSheetData()
  const articles = [
    {href:'/guide/fiber-vs-cable',bg:'rgba(124,58,237,0.08)',icon:'⚡',color:'#a78bfa',tag:'Buying Guide',title:'Fiber vs Cable Internet: Which Is Right for You in 2026?',desc:'Complete honest breakdown, speeds, pricing, reliability, and when each technology wins.',time:'6 min read',live:true},
    {href:'/guide/moving-checklist',bg:'rgba(245,158,11,0.08)',icon:'📦',color:'#f59e0b',tag:'Moving Guide',title:'Internet Moving Checklist: Set Up Service Before You Unpack',desc:'A 30-day timeline for setting up internet when you move so you\'re never without connection.',time:'7 min read',live:true},
    {href:'#',bg:'rgba(16,185,129,0.06)',icon:'💰',color:'#34d399',tag:'Money Saving',title:"Hidden Internet Fees ISPs Don't Tell You About",desc:'Equipment fees, post-promo hikes, early termination, and how to avoid every one of them.',time:'8 min read',live:false},
    {href:'#',bg:'rgba(6,182,212,0.06)',icon:'🎮',color:'#67e8f9',tag:'Gaming',title:'What Internet Speed Do You Actually Need for Gaming?',desc:'Latency, upload speed, download, what actually matters for competitive play vs casual gaming.',time:'5 min read',live:false},
    {href:'#',bg:'rgba(249,115,22,0.06)',icon:'💼',color:'#fb923c',tag:'Work From Home',title:'The Best Internet Plans for Remote Workers in 2026',desc:'Upload speeds, reliability, backup options, and which providers our WFH customers prefer.',time:'6 min read',live:false},
    {href:'#',bg:'rgba(239,68,68,0.06)',icon:'📉',color:'#f87171',tag:'Tips',title:'How to Get a Lower Internet Bill Without Switching',desc:'Negotiation scripts, loyalty discounts, and the exact words to say when you call your provider.',time:'4 min read',live:false},
  ]

  return (
    <>
      <PageHero crumbs={[{label:'Home',href:'/'},{label:'Guide',href:'/guide'},{label:'Blog'}]}
        title={<>Internet Tips, <span className="gradient-text">Guides & News</span></>}
        subtitle="Written by people who help thousands of customers find better internet every month." />

      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
            {articles.map(a=>(
              a.live ? (
                <Link key={a.href} href={a.href} style={{background:a.bg,border:`1px solid ${a.color}20`,borderRadius:20,overflow:'hidden',textDecoration:'none',display:'flex',flexDirection:'column',transition:'all 0.25s'}}>
                  <div style={{height:100,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,background:`${a.bg}`}}>{a.icon}</div>
                  <div style={{padding:'20px',flex:1,display:'flex',flexDirection:'column'}}>
                    <span style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:a.color,marginBottom:8}}>{a.tag}</span>
                    <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,lineHeight:1.35,marginBottom:8}}>{a.title}</h3>
                    <p style={{color:'#94a3b8',fontSize:12,lineHeight:1.6,flex:1}}>{a.desc}</p>
                  </div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderTop:`1px solid ${a.color}15`}}>
                    <span style={{color:'#94a3b8',fontSize:11}}>📖 {a.time}</span>
                    <span style={{color:a.color,fontSize:12,fontWeight:700,fontFamily:'var(--font-display)'}}>Read →</span>
                  </div>
                </Link>
              ) : (
                <div key={a.title} style={{background:a.bg,border:`1px solid ${a.color}15`,borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'column',opacity:0.55}}>
                  <div style={{height:100,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>{a.icon}</div>
                  <div style={{padding:'20px',flex:1,display:'flex',flexDirection:'column'}}>
                    <span style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:a.color,marginBottom:8}}>{a.tag}</span>
                    <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,lineHeight:1.35,marginBottom:8}}>{a.title}</h3>
                    <p style={{color:'#94a3b8',fontSize:12,lineHeight:1.6,flex:1}}>{a.desc}</p>
                  </div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderTop:`1px solid ${a.color}15`}}>
                    <span style={{color:'#cbd5e1',fontSize:11}}>📖 {a.time}</span>
                    <span style={{background:'#ffffff',color:'#94a3b8',fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',padding:'3px 10px',borderRadius:100}}>Coming Soon</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
