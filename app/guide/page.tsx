import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import PageHero from '@/components/PageHero'

export const metadata = { title: 'Internet Guide — Fiber vs Cable, Moving Checklist | Compare Internet & Cable' }

export default function GuidePage() {
  const { siteConfig } = getSheetData()
  return (
    <>
      <PageHero crumbs={[{label:'Home',href:'/'},{label:'Internet Guide'}]}
        title={<>Your Complete <span className="gradient-text">Internet Buying</span> Guide</>}
        subtitle="Everything you need to know before choosing an internet plan — written by people who help thousands of customers switch every month." />

      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}}>
            <span style={{fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:'#a78bfa',marginBottom:12,display:'block'}}>Topics</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(26px,3.5vw,40px)',fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>What Would You Like to Learn?</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:64}}>
            {[{href:'/guide/fiber-vs-cable',icon:'⚡',title:'Fiber vs Cable',color:'#7c3aed',tag:'Buying Guide',desc:'Which technology is right for you? Speeds, reliability, pricing, and availability compared.',bg:'rgba(124,58,237,0.08)'},
              {href:'/guide/moving-checklist',icon:'📦',title:'Moving Checklist',color:'#f59e0b',tag:'Moving Guide',desc:'Setting up internet when you move — 30 days out, moving day, first week.',bg:'rgba(245,158,11,0.08)'},
              {href:'/guide/blog',icon:'💰',title:'Money Saving',color:'#10b981',tag:'Money Saving',desc:'Hidden fees, negotiation tips, discount programs, how to lower your monthly bill.',bg:'rgba(16,185,129,0.08)'},
            ].map(t=>(
              <Link key={t.href} href={t.href} style={{background:t.bg,border:`1px solid ${t.color}20`,borderRadius:20,padding:'32px 24px',textAlign:'center',textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center',transition:'all 0.25s'}}>
                <div style={{width:60,height:60,borderRadius:18,background:`${t.color}18`,border:`1px solid ${t.color}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,marginBottom:18}}>{t.icon}</div>
                <span style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:t.color,marginBottom:8}}>{t.tag}</span>
                <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:17,marginBottom:10}}>{t.title}</h3>
                <p style={{color:'#64748b',fontSize:13,lineHeight:1.6,flex:1,marginBottom:16}}>{t.desc}</p>
                <span style={{color:t.color,fontSize:12,fontWeight:700,fontFamily:'var(--font-display)'}}>Read guide →</span>
              </Link>
            ))}
          </div>

          {/* Glossary */}
          <div style={{textAlign:'center',marginBottom:32}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:800,color:'#0f172a',letterSpacing:'-0.025em'}}>Internet Terms, Plain English</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12}}>
            {[['Mbps','Megabits per second — the unit for internet speed. Higher = faster.'],
              ['Gbps','Gigabits per second. 1 Gbps = 1,000 Mbps — for the fastest fiber plans.'],
              ['Fiber','Internet delivered via glass fiber-optic cables. Fastest, most reliable.'],
              ['Latency','Delay in milliseconds before data reaches its destination. Lower = better.'],
              ['Data Cap','Monthly limit on data usage. Exceeding it may cause slowdowns or fees.'],
              ['Modem','Device that connects your home to the internet via your provider.'],
              ['Router','Device that creates Wi-Fi in your home. Often combined with modem.'],
              ['ISP','Internet Service Provider — the company selling you internet.'],
            ].map(([term,def])=>(
              <div key={String(term)} style={{background:'#ffffff',border:'1.5px solid #e2e8f0',borderRadius:12,padding:'18px 16px',transition:'border-color 0.2s'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#a78bfa',fontSize:14,marginBottom:6}}>{term}</div>
                <div style={{color:'#64748b',fontSize:12,lineHeight:1.6}}>{def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
