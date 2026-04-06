import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Internet Moving Checklist 2026, Set Up Service Before You Unpack',
  description: 'Step-by-step internet moving checklist. How to transfer, cancel, or set up new internet service when moving. 30-day timeline to never be without internet on moving day.',
  keywords: ['internet moving checklist','transfer internet when moving','set up internet new home','new home internet setup','moving internet service','internet installation moving day'],
  alternates: { canonical: 'https://compareinternetandcable.com/guide/moving-checklist' },
}

export default function MovingChecklistPage() {
  const { siteConfig } = getSheetData()
  const phases = [
    {title:'30 Days Before Moving',color:'#7c3aed',icon:'📅',steps:[
      ['Check provider availability at your new address',`Enter your new ZIP at compareinternetandcable.com or call us at ${siteConfig.phone}. Find out which carriers serve your new address before you move.`],
      ['Decide whether to transfer or switch','If your current provider serves the new address, you can transfer service. If not, or if a better deal is available, now is the time to switch. Call us and we\'ll compare your options.'],
      ['Schedule installation early','Installation slots fill up fast in moving season (May–August). Schedule at least 3–4 weeks ahead for your preferred time window.'],
      ['Check for early termination fees','If you\'re leaving a provider mid-contract, check if there\'s an ETF. Many carriers waive ETFs if you\'re moving outside their service area.'],
    ]},
    {title:'2 Weeks Before Moving',color:'#e31837',icon:'🗓️',steps:[
      ['Confirm your installation appointment','Call to confirm the appointment is still scheduled and the technician has your correct new address.'],
      ['Order self-install equipment early','If your new provider offers self-install (like T-Mobile 5G), order equipment now so it arrives before moving day.'],
      [`Ask about new customer promotions`,`Even if transferring service, you may qualify for new promotions. Call us at ${siteConfig.phone} to check.`],
      ['Notify your current provider of your move date','Give your current provider the exact date so they can schedule disconnection and avoid double-billing.'],
    ]},
    {title:'Moving Day',color:'#10b981',icon:'🏠',steps:[
      ['Confirm technician arrival window','Most installations are scheduled in 4-hour windows. Confirm the night before so someone is home to let the technician in.'],
      ['Know where your router will go','Decide where you want the router, ideally central in your home, away from walls. This affects where they run the cable.'],
      ['Test speeds immediately after install','Once the technician leaves, run a speed test at fast.com. If speeds don\'t match your plan, call before the technician gets too far.'],
      ['Set up your Wi-Fi name and password','Change your Wi-Fi name and password from the defaults immediately for security.'],
    ]},
    {title:'First Week in New Home',color:'#f59e0b',icon:'✅',steps:[
      ['Enroll in autopay for discount','Most providers offer a $10/mo autopay discount. Do this immediately after your first bill to lock in promotional pricing.'],
      ['Return old equipment','Return your old modem/router within 30 days to avoid equipment charges.'],
      ['Check your first bill carefully','Your first bill may include prorated charges. Review it against what you were quoted. If anything looks off, call us.'],
      ['Download the provider app','Most carriers have apps for account management, monitoring usage, and troubleshooting.'],
    ]},
  ]

  return (
    <>
      <PageHero crumbs={[{label:'Home',href:'/'},{label:'Guide',href:'/guide'},{label:'Moving Checklist'}]}
        title={<>Internet Moving Checklist:<br/><span className="gradient-text">Set Up Before You Unpack</span></>}
        subtitle="Move to a new home without losing internet for a single day. Here's the exact timeline our agents walk every customer through.">
        <span style={{background:'#ffffff',border:'1.5px solid #e2e8f0',color:'#475569',padding:'6px 16px',borderRadius:100,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)',display:'inline-block'}}>📖 7 min read</span>
      </PageHero>

      <section style={{background:'#ffffff',padding:'72px 24px'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          {phases.map(phase=>(
            <div key={phase.title} style={{marginBottom:52}}>
              <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:24,paddingBottom:16,borderBottom:`2px solid ${phase.color}20`}}>
                <div style={{width:48,height:48,borderRadius:14,background:`${phase.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{phase.icon}</div>
                <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#0f172a',fontSize:22,letterSpacing:'-0.02em'}}>{phase.title}</h2>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:18}}>
                {phase.steps.map(([step,detail],i)=>(
                  <div key={i} style={{display:'flex',gap:16}}>
                    <div style={{width:28,height:28,borderRadius:'50%',background:`${phase.color}18`,border:`2px solid ${phase.color}40`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:800,fontSize:12,color:phase.color,flexShrink:0,marginTop:2}}>{i+1}</div>
                    <div>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:5}}>{step}</div>
                      <div style={{color:'#64748b',fontSize:13,lineHeight:1.7}}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{background:'rgba(124,58,237,0.08)',border:'2px solid rgba(124,58,237,0.25)',borderRadius:20,padding:'32px',textAlign:'center'}}>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#0f172a',fontSize:22,marginBottom:10,letterSpacing:'-0.02em'}}>Ready to Set Up Internet at Your New Address?</h3>
            <p style={{color:'#64748b',fontSize:14,marginBottom:20}}>Call us and we'll compare every provider available, and schedule installation for you.</p>
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:15,padding:'13px 28px'}}>📞 Call {siteConfig.phone}, Free, No Obligation</a>
          </div>
        </div>
      </section>
    </>
  )
}
