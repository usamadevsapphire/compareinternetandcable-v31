import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ProviderLogo from '@/components/ProviderLogo'
import ZipWidget from '@/components/ZipWidget'
import PageHero from '@/components/PageHero'

const S = {
  section: { padding:'72px 24px', background:'#ffffff' } as React.CSSProperties,
  sectionAlt: { padding:'72px 24px', background:'#f8fafc' } as React.CSSProperties,
  inner: { maxWidth:900, margin:'0 auto' } as React.CSSProperties,
  innerWide: { maxWidth:1280, margin:'0 auto' } as React.CSSProperties,
  tag:  { fontSize:11, fontWeight:700 as const, fontFamily:'var(--font-display)', textTransform:'uppercase' as const, letterSpacing:'0.1em', color:'#7c3aed', display:'block', marginBottom:10 } as React.CSSProperties,
  h2:   { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(24px,3.5vw,36px)' as any, color:'#0f172a', letterSpacing:'-0.025em', lineHeight:1.2, marginBottom:16 } as React.CSSProperties,
  lead: { color:'#475569', fontSize:17, lineHeight:1.8, marginBottom:20 } as React.CSSProperties,
  body: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:16 } as React.CSSProperties,
  h3:   { fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'#0f172a', marginBottom:12, marginTop:32, letterSpacing:'-0.01em' } as React.CSSProperties,
  h4:   { fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'#0f172a', marginBottom:8 } as React.CSSProperties,
}

export const metadata: Metadata = {
  title: 'Fiber vs Cable Internet 2026: Complete Guide, Speed, Gaming, Streaming',
  description: 'Fiber vs cable internet, complete comparison for 2026. Speeds, gaming performance, streaming quality, pricing, and which is right for your home. Updated March 2026.',
  keywords: ['fiber vs cable internet','fiber internet gaming','cable internet streaming','fiber vs cable speed','is fiber internet worth it','fiber internet 2026','best internet for gaming','fiber vs cable ping latency'],
  alternates: { canonical: 'https://compareinternetandcable.com/guide/fiber-vs-cable' },
  openGraph: { title: 'Fiber vs Cable Internet 2026: Guide', description: 'Everything you need to choose between fiber and cable internet. Gaming, streaming, pricing, and availability explained.' },
}

export default function FiberVsCablePage() {
  const { siteConfig, providers } = getSheetData()
  const fiberProviders = [providers['att'], providers['frontier']].filter(Boolean)
  const cableProviders = [providers['xfinity'], providers['northeast-internet']].filter(Boolean)

  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Guide',href:'/guide'},{label:'Fiber vs Cable'}]}
        title={<>Fiber vs Cable Internet:<br/><span className="gradient-text">The Complete 2026 Guide</span></>}
        subtitle="Everything you need to make the right choice, gaming, streaming, remote work, pricing, reliability, and availability explained in plain English."
      >
        <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
          <span style={{background:'#ede9fe',border:'1px solid #ddd6fe',color:'#7c3aed',padding:'6px 16px',borderRadius:100,fontSize:12,fontWeight:600,fontFamily:'var(--font-display)',display:'inline-block'}}>📖 15 min read</span>
          <span style={{color:'#94a3b8',fontSize:13}}>Last updated: March 2026</span>
        </div>
      </PageHero>

      {/* ── QUICK ANSWER ── */}
      <div style={{background:'#f5f3ff',borderBottom:'1px solid #ede9fe',padding:'32px 24px'}}>
        <div style={S.inner}>
          <div style={{background:'white',border:'2px solid #7c3aed',borderRadius:20,padding:'28px 32px'}}>
            <div style={{fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',letterSpacing:'0.1em',color:'#7c3aed',marginBottom:10}}>⚡ Quick Answer</div>
            <p style={{color:'#0f172a',fontSize:16,lineHeight:1.7,fontWeight:500,marginBottom:0}}>
              <strong>If fiber is available at your address, choose fiber, every time.</strong> It's faster, more reliable, has symmetrical upload speeds, and costs nearly the same as cable today. If fiber isn't available (it's only in ~25% of US homes), cable delivers excellent performance for most households.
            </p>
          </div>
        </div>
      </div>

      {/* ── TABLE OF CONTENTS ── */}
      <section style={{...S.section, padding:'48px 24px'}}>
        <div style={S.inner}>
          <h2 style={{...S.h2,fontSize:20,marginBottom:16}}>What's in This Guide</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {[
              ['1','How fiber and cable technology work','#how-it-works'],
              ['2','Side-by-side speed comparison','#speed-comparison'],
              ['3','Fiber for gaming, why it matters','#fiber-gaming'],
              ['4','Fiber for streaming, 4K, HDR, and more','#fiber-streaming'],
              ['5','Why some people still prefer cable','#why-cable'],
              ['6','Upload speed: the hidden advantage','#upload-speed'],
              ['7','Reliability and outage comparison','#reliability'],
              ['8','Pricing in 2026, is fiber worth it?','#pricing'],
              ['9','Installation: what to expect','#installation'],
              ['10','Our verdict and recommendations','#verdict'],
            ].map(([n,label,anchor])=>(
              <a key={n} href={anchor} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:'#f8fafc',borderRadius:10,textDecoration:'none',color:'#334155',fontSize:14,border:'1px solid #e2e8f0',transition:'all 0.15s'}}>
                <span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#7c3aed',fontSize:13,flexShrink:0}}>{n}.</span>
                <span style={{fontWeight:500}}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={S.sectionAlt} id="speed-comparison">
        <div style={S.inner}>
          <span style={S.tag}>At a Glance</span>
          <h2 style={S.h2}>Fiber vs Cable, <span className="gradient-text">Side by Side</span></h2>
          <div style={{overflowX:'auto',borderRadius:16,border:'1.5px solid #e2e8f0',boxShadow:'0 4px 16px rgba(0,0,0,0.06)'}}>
            <table style={{width:'100%',borderCollapse:'separate',borderSpacing:0,minWidth:600}}>
              <thead>
                <tr style={{background:'#0f172a'}}>
                  {['Criteria','⚡ Fiber Internet','📺 Cable Internet','Winner'].map((h,i)=>(<th key={i} style={{padding:'14px 20px',textAlign:'left',fontSize:11,fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:i===1?'#7c3aed':i===2?'#0369a1':'#64748b'}}>{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Max Download Speed','Up to 5 Gbps','Up to 1.2 Gbps','Fiber'],
                  ['Upload Speed','Symmetrical, matches download','10–35 Mbps typical','Fiber'],
                  ['Latency / Ping','1–5 ms','10–30 ms','Fiber'],
                  ['Reliability','Excellent, unaffected by weather','Good, slows at peak hours','Fiber'],
                  ['Jitter (gaming consistency)','Extremely low','Moderate','Fiber'],
                  ['US Availability','~25% of US homes','~88% of US homes','Cable'],
                  ['Starting Price','$35–$65/mo','$25–$55/mo','Cable (slightly)'],
                  ['Price Stability','Very consistent','Often increases after promo','Fiber'],
                  ['Equipment Fee','Usually included','Usually included','Tie'],
                  ['Contract Required','No (our plans)','No (our plans)','Tie'],
                  ['Data Cap','None (our plans)','None (our plans)','Tie'],
                  ['Installation','Tech visit required','Tech or self-install','Cable'],
                  ['Best for Gaming','Excellent, lowest ping','Good','Fiber'],
                  ['Best for 4K Streaming','Excellent','Good','Fiber'],
                  ['Best for Remote Work','Excellent','Good','Fiber'],
                ].map(([crit,f,ca,w],i)=>(
                  <tr key={i} style={{borderBottom:'1px solid #f1f5f9',background:i%2===0?'white':'#fafbff'}}>
                    <td style={{padding:'14px 20px',fontFamily:'var(--font-display)',fontWeight:600,color:'#334155',fontSize:13}}>{crit}</td>
                    <td style={{padding:'14px 20px',color:'#475569',fontSize:13}}>{f}</td>
                    <td style={{padding:'14px 20px',color:'#475569',fontSize:13}}>{ca}</td>
                    <td style={{padding:'14px 20px'}}>
                      <span style={{background:w==='Fiber'?'#ede9fe':w==='Cable'?'#e0f2fe':w.startsWith('Tie')?'#f1f5f9':'#f1f5f9',color:w==='Fiber'?'#7c3aed':w==='Cable'?'#0369a1':w.startsWith('Tie')?'#64748b':'#64748b',fontSize:11,fontWeight:700,fontFamily:'var(--font-display)',padding:'3px 10px',borderRadius:100}}>{w}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={S.section} id="how-it-works">
        <div style={S.inner}>
          <span style={S.tag}>Technology</span>
          <h2 style={S.h2}>How Fiber and Cable Actually Work</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:32}}>
            <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:18,padding:28}}>
              <div style={{fontSize:28,marginBottom:12}}>⚡</div>
              <h3 style={{...S.h3,marginTop:0,color:'#7c3aed',fontSize:18}}>How Fiber Works</h3>
              <p style={{...S.body,marginBottom:12}}>Fiber-optic internet transmits data as pulses of light through thin glass or plastic cables, each thinner than a human hair. Light travels at approximately 200,000 km/s through fiber, which is why latency is so incredibly low.</p>
              <p style={{...S.body,marginBottom:12}}>Because there's no electrical signal involved, fiber is immune to electromagnetic interference, weather changes, and the "congestion at peak hours" problem that cable suffers from.</p>
              <p style={S.body}>The most important technical feature: fiber is <strong style={{color:'#0f172a'}}>symmetrical</strong>. Your upload speed matches your download speed exactly. This single characteristic makes fiber dramatically better for gaming, video calling, and remote work.</p>
            </div>
            <div style={{background:'#eff6ff',border:'1.5px solid #bfdbfe',borderRadius:18,padding:28}}>
              <div style={{fontSize:28,marginBottom:12}}>📺</div>
              <h3 style={{...S.h3,marginTop:0,color:'#1d4ed8',fontSize:18}}>How Cable Works</h3>
              <p style={{...S.body,marginBottom:12}}>Cable internet runs on the same coaxial infrastructure originally built for cable TV. It's been significantly upgraded with DOCSIS technology (the current standard is DOCSIS 3.1), which delivers fast download speeds to over 88% of US homes.</p>
              <p style={{...S.body,marginBottom:12}}>The key limitation: cable is a <strong style={{color:'#0f172a'}}>shared medium</strong>. Your connection runs on the same infrastructure as your neighbors. During peak evening hours (7–10 PM), you may notice slowdowns as everyone in your area is online simultaneously.</p>
              <p style={S.body}>Cable's biggest advantage is reach. It's available almost everywhere fiber isn't, including suburbs, rural towns, and older neighborhoods where fiber hasn't yet been deployed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMING ── */}
      <section style={S.sectionAlt} id="fiber-gaming">
        <div style={S.inner}>
          <span style={S.tag}>Gaming</span>
          <h2 style={S.h2}>🎮 Why Fiber Internet Wins for Gaming</h2>
          <p style={S.lead}>If you play online games, casually or competitively, fiber internet will noticeably improve your experience in ways that raw download speed numbers don't fully capture.</p>

          <h3 style={S.h3}>The 3 Numbers That Actually Matter for Gaming</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:32}}>
            {[
              {label:'Ping / Latency',fiber:'1–5 ms',cable:'15–40 ms',icon:'⚡',color:'#7c3aed',bg:'#faf5ff',border:'#ede9fe',why:'Ping is the delay between your controller input and what happens on screen. In a fast-paced shooter, a 5ms advantage over your opponent is the difference between winning and losing a gun fight.'},
              {label:'Jitter',fiber:'<1 ms',cable:'5–20 ms',icon:'📊',color:'#059669',bg:'#f0fdf4',border:'#bbf7d0',why:'Jitter is inconsistency in latency. Cable\'s shared infrastructure causes micro-spikes that appear as stutters and rubber-banding. Fiber\'s dedicated path virtually eliminates jitter.'},
              {label:'Upload Speed',fiber:'500 Mbps–5 Gbps',cable:'10–35 Mbps',icon:'📡',color:'#d97706',bg:'#fffbeb',border:'#fde68a',why:'Many people forget uploads matter for gaming. Game servers receive your inputs via your upload. Slow upload = your character "registers" late in the game world, causing lag even with low ping.'},
            ].map(m=>(
              <div key={m.label} style={{background:m.bg,border:`1.5px solid ${m.border}`,borderRadius:16,padding:22}}>
                <div style={{fontSize:24,marginBottom:10}}>{m.icon}</div>
                <h4 style={{...S.h4,color:m.color}}>{m.label}</h4>
                <div style={{display:'flex',gap:12,marginBottom:12}}>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',color:'#94a3b8',marginBottom:3}}>Fiber</div>
                    <div style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#0f172a',fontSize:14}}>{m.fiber}</div>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',color:'#94a3b8',marginBottom:3}}>Cable</div>
                    <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#475569',fontSize:14}}>{m.cable}</div>
                  </div>
                </div>
                <p style={{color:'#64748b',fontSize:12,lineHeight:1.6,margin:0}}>{m.why}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>Game-by-Game Impact</h3>
          <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:32}}>
            {[
              {game:'Call of Duty / Valorant / CS2',icon:'🎯',fiber:true,cable:'Acceptable',detail:"These titles are the most latency-sensitive games on the market. Professional players use fiber and often run ethernet directly from the router. Fiber's 1–5ms ping vs cable's 15–30ms is a genuine competitive advantage. You'll notice it in gun fights, reaction shots, and hit registration."},
              {game:'Fortnite / Apex Legends / PUBG',icon:'🏆',fiber:true,cable:'Good',detail:"Battle royale games are moderately latency-sensitive. Cable is fine for casual play, but fiber gives you more consistent performance during the high-action moments (final circles, multi-squad fights) when many packets are sent simultaneously."},
              {game:'World of Warcraft / Final Fantasy XIV (MMOs)',icon:'🧙',fiber:true,cable:'Good',detail:"MMOs depend heavily on upload speed since they constantly send your position and actions to the server. Fiber's symmetrical speeds mean smoother raid performance, especially during boss fights with 20+ players simultaneously reporting actions."},
              {game:'FIFA / NBA 2K / Madden (Sports Games)',icon:'⚽',fiber:true,cable:'Acceptable',detail:"Online sports games are very sensitive to jitter. The rubber-banding and input lag many players experience on cable disappears almost entirely on fiber. The consistency is more noticeable than the raw speed improvement."},
              {game:'Minecraft / Stardew Valley / Casual Games',icon:'🏡',fiber:false,cable:'Perfect',detail:"These titles require very little bandwidth and are not latency-sensitive. Cable (or even DSL) is completely fine. You won't notice any difference between fiber and cable for these games."},
              {game:'Game Downloads / Patch Updates',icon:'💾',fiber:true,cable:'Good',detail:"This is where speed matters. A 100GB game update downloads in ~3 minutes on 5 Gbps fiber vs ~13 minutes on 1 Gbps cable vs 2+ hours on a 100 Mbps connection. If you game on PC and frequently update large games, faster speeds genuinely matter."},
            ].map(item=>(
              <div key={item.game} style={{background:'white',border:'1.5px solid #e2e8f0',borderRadius:14,padding:'18px 22px',display:'grid',gridTemplateColumns:'auto 1fr auto auto',gap:16,alignItems:'start'}}>
                <div style={{fontSize:24,marginTop:2}}>{item.icon}</div>
                <div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:5}}>{item.game}</div>
                  <p style={{color:'#64748b',fontSize:13,lineHeight:1.6,margin:0}}>{item.detail}</p>
                </div>
                <div style={{textAlign:'center',minWidth:60}}>
                  <div style={{fontSize:9,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',color:'#94a3b8',marginBottom:4}}>Fiber</div>
                  <span style={{background:item.fiber?'#dcfce7':'#f1f5f9',color:item.fiber?'#15803d':'#64748b',fontSize:11,fontWeight:700,padding:'3px 8px',borderRadius:100,fontFamily:'var(--font-display)'}}>{item.fiber?'Best':'OK'}</span>
                </div>
                <div style={{textAlign:'center',minWidth:60}}>
                  <div style={{fontSize:9,fontWeight:700,fontFamily:'var(--font-display)',textTransform:'uppercase',color:'#94a3b8',marginBottom:4}}>Cable</div>
                  <span style={{background:item.cable==='Perfect'?'#dcfce7':item.cable==='Good'?'#dbeafe':'#fff3cd',color:item.cable==='Perfect'?'#15803d':item.cable==='Good'?'#1d4ed8':'#92400e',fontSize:11,fontWeight:700,padding:'3px 8px',borderRadius:100,fontFamily:'var(--font-display)'}}>{item.cable}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:16,padding:24}}>
            <h4 style={{...S.h4,color:'#7c3aed',marginBottom:8}}>💡 Pro Tip: Always Use Ethernet</h4>
            <p style={{...S.body,margin:0}}>Regardless of whether you have fiber or cable, connecting your gaming device via ethernet cable (not Wi-Fi) will reduce your latency by 5–15ms and eliminate jitter almost entirely. For competitive gaming, this single change matters more than upgrading from cable to fiber. Get both for the best possible experience.</p>
          </div>
        </div>
      </section>

      {/* ── STREAMING ── */}
      <section style={S.section} id="fiber-streaming">
        <div style={S.inner}>
          <span style={S.tag}>Streaming</span>
          <h2 style={S.h2}>📺 Fiber for Streaming, 4K, HDR, and Multi-Device</h2>
          <p style={S.lead}>For most streaming use cases, cable internet is perfectly adequate. But fiber becomes the clear winner in households with multiple TVs, heavy users, or premium video formats.</p>

          <h3 style={S.h3}>What Bandwidth Different Streaming Qualities Actually Need</h3>
          <div style={{overflowX:'auto',borderRadius:14,border:'1.5px solid #e2e8f0',marginBottom:32}}>
            <table style={{width:'100%',borderCollapse:'separate',borderSpacing:0}}>
              <thead>
                <tr style={{background:'#f8fafc'}}>
                  {['Quality','Platform','Required Speed','What Can Break It'].map(h=><th key={h} style={{padding:'12px 18px',textAlign:'left',fontSize:11,fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:'#64748b',borderBottom:'2px solid #e2e8f0'}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['HD 1080p','Netflix, Hulu, Disney+','5–8 Mbps','Network congestion, packet loss'],
                  ['4K HDR','Netflix, Disney+, Apple TV+','15–25 Mbps per stream','Cable congestion at peak hours'],
                  ['4K HDR Dolby Vision','Apple TV+, Netflix Premium','25+ Mbps per stream','Jitter causes buffering despite fast average speed'],
                  ['8K content (emerging)','YouTube, some streaming','50–100 Mbps','Requires fiber for consistent delivery'],
                  ['Live sports HD','Peacock, ESPN+, YouTube TV','10–15 Mbps','Latency spikes cause audio/video desync'],
                  ['Live sports 4K','ESPN+ 4K, Amazon Thursday Night Football','20–30 Mbps','Peak-hour cable slowdown hits live events hardest'],
                  ['Twitch/YouTube streaming (upload)','Streaming your own gameplay','6–15 Mbps upload','Cable\'s low upload is the #1 limiter for streamers'],
                ].map(([q,p,s,w],i)=>(
                  <tr key={i} style={{borderBottom:'1px solid #f1f5f9',background:i%2===0?'white':'#fafbff'}}>
                    <td style={{padding:'14px 18px',fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:13}}>{q}</td>
                    <td style={{padding:'14px 18px',color:'#64748b',fontSize:12}}>{p}</td>
                    <td style={{padding:'14px 18px'}}><span style={{background:'#ede9fe',color:'#7c3aed',fontSize:12,fontWeight:700,padding:'3px 8px',borderRadius:100,fontFamily:'var(--font-display)',whiteSpace:'nowrap'}}>{s}</span></td>
                    <td style={{padding:'14px 18px',color:'#94a3b8',fontSize:12}}>{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>The Multi-Device Reality</h3>
          <p style={S.body}>The average US household now has 11+ connected devices. Not all use bandwidth simultaneously, but streaming households commonly run 3–5 video streams at once. Here's how that adds up:</p>
          <div style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:14,padding:24,marginBottom:24}}>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:15,marginBottom:14}}>Example: Family of 4, Evening Usage</div>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>
              {[['Parent A','4K Netflix stream','25 Mbps'],['Parent B','4K Disney+ stream','25 Mbps'],['Teen','Twitch gaming stream (upload) + 1080p Discord video','20 Mbps + 8 Mbps upload'],['Kid','4K YouTube Kids','15 Mbps'],['Smart devices','Security cameras, smart speakers, phone updates','10 Mbps']].map(([w,a,b])=>(
                <div key={w} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',background:'white',borderRadius:10,border:'1px solid #f1f5f9'}}>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:600,color:'#334155',fontSize:13,width:90,flexShrink:0}}>{w}</span>
                  <span style={{color:'#64748b',fontSize:13,flex:1}}>{a}</span>
                  <span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#7c3aed',fontSize:14,flexShrink:0}}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'12px 14px',background:'#ede9fe',borderRadius:10}}>
              <span style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#5b21b6',fontSize:14}}>Total Required</span>
              <span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#7c3aed',fontSize:16}}>~103 Mbps download + ~8 Mbps upload</span>
            </div>
          </div>
          <p style={S.body}>A 300 Mbps plan (fiber or cable) handles this easily on paper. But cable's network congestion means your 300 Mbps plan might deliver only 150 Mbps at 8 PM when everyone in your neighborhood is also streaming. Fiber's dedicated path delivers your full plan speed reliably.</p>

          <h3 style={S.h3}>The Upload Speed Streaming Secret</h3>
          <p style={S.body}>If you or anyone in your household streams their own content, gaming on Twitch, YouTube videos, TikTok live, Instagram Live, or even just video calls, upload speed is critical. Cable's 10–35 Mbps upload is often the bottleneck. Fiber gives you 500 Mbps to 5 Gbps upload, meaning you can stream at 4K quality with zero compression artifacts even while others in the house are using the internet.</p>
        </div>
      </section>

      {/* ── WHY CABLE ── */}
      <section style={S.sectionAlt} id="why-cable">
        <div style={S.inner}>
          <span style={S.tag}>Cable Internet</span>
          <h2 style={S.h2}>📡 Why Many People Still Prefer Cable Internet</h2>
          <p style={S.lead}>Fiber is technically superior in almost every measurable way, but cable internet has real, legitimate advantages that make it the right choice for millions of American households. Here's the honest case for cable.</p>

          <div style={{display:'flex',flexDirection:'column',gap:20,marginBottom:40}}>
            {[
              {icon:'🌍',title:'Availability. Cable Goes Where Fiber Doesn\'t',color:'#1d4ed8',bg:'#eff6ff',border:'#bfdbfe',content:[
                'This is the biggest factor for most people: fiber simply isn\'t available at their address. Currently about 75% of US homes cannot get fiber. Cable internet, by contrast, reaches over 88% of US addresses including most suburbs, small towns, and rural areas.',
                'If you\'re in a neighborhood, small city, or any area not yet served by AT&T Fiber, Frontier Fiber, or another fiber provider, cable isn\'t a compromise, it\'s your best broadband option. And it\'s a very good one.',
                'Xfinity alone covers 41 states and over 60 million homes. Optimum covers the Northeast densely. If fiber isn\'t available, cable through one of our carriers will give you speeds from 300 Mbps to 1.2 Gbps, more than enough for any household.',
              ]},
              {icon:'💰',title:'Price. Cable Plans Start Lower',color:'#059669',bg:'#f0fdf4',border:'#bbf7d0',content:[
                'Cable internet plans consistently start lower than fiber. You can get a 300 Mbps cable plan starting at $35–$40/month, while comparable fiber plans often start at $50–$65/month. For budget-conscious households, that $15–25/month difference adds up to $180–$300 per year.',
                'Cable providers also frequently run aggressive promotions, two-year price locks, free equipment for the first year, bonus promotions, that fiber providers don\'t always match.',
                'For a single person or a couple with basic streaming needs, a $40/month 300 Mbps cable plan delivers excellent value. Not everyone needs gigabit symmetrical fiber, and there\'s no sense paying for more than you use.',
              ]},
              {icon:'📦',title:'Bundles, TV, Phone, and Internet Together',color:'#d97706',bg:'#fffbeb',border:'#fde68a',content:[
                'If you still subscribe to traditional cable TV or a home phone line, bundling with a cable internet provider often saves significant money. Xfinity bundles, for example, can reduce your combined cable TV + internet bill by $20–40/month compared to buying them separately.',
                'Major cable providers also offer competitively priced mobile phone plans. Xfinity Mobile uses Verizon\'s network but charges significantly less, many customers pay $30–35/month for their mobile plan by bundling it with Xfinity internet. Optimum Mobile works similarly.',
                'Fiber providers like AT&T also offer wireless bundling, but their TV package is a streaming service (DIRECTV Stream), not traditional cable. If you want a traditional channel lineup, cable bundles remain the more straightforward option.',
              ]},
              {icon:'🏗️',title:'No Installation Wait, Sometimes Self-Install',color:'#7c3aed',bg:'#faf5ff',border:'#ede9fe',content:[
                'Some cable plans, especially those from Xfinity and Optimum, offer a self-install option. Your equipment arrives by mail in 1–2 days, you plug it in, and you\'re online. No technician appointment, no waiting for a 4-hour install window.',
                'This matters enormously for renters who move frequently, people in situations where they need internet quickly (new job starting Monday, for example), and households in buildings where scheduling a technician visit is complicated.',
                'Fiber always requires a professional installation because it involves running new physical cable into your home. Even in buildings where fiber is "available," you still need a technician visit scheduled, which typically takes 5–10 business days.',
              ]},
              {icon:'⚡',title:'Speeds Are Genuinely Fast Enough for Most Households',color:'#db2777',bg:'#fdf2f8',border:'#fbcfe8',content:[
                'Modern cable technology (DOCSIS 3.1) delivers download speeds up to 1.2 Gbps, more than enough for households with 5–8 simultaneous users streaming, gaming, and working from home. The average US household uses less than 30 Mbps at any given moment.',
                'Unless you\'re in a household with 4+ simultaneous 4K streams, competitive multiplayer gaming, or someone who regularly uploads large files or video content, a 300–500 Mbps cable plan will never feel slow.',
                'The "fiber is so much faster" marketing can be misleading. Yes, fiber\'s ceiling is higher. But a 500 Mbps cable connection and a 500 Mbps fiber connection feel identical for Netflix, Zoom calls, and web browsing.',
              ]},
            ].map(s=>(
              <div key={s.title} style={{background:s.bg,border:`1.5px solid ${s.border}`,borderRadius:18,padding:'28px 30px'}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
                  <span style={{fontSize:28}}>{s.icon}</span>
                  <h3 style={{...S.h3,marginTop:0,marginBottom:0,color:s.color,fontSize:18}}>{s.title}</h3>
                </div>
                {s.content.map((p,i)=><p key={i} style={{...S.body,marginBottom:i<s.content.length-1?14:0}}>{p}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPLOAD SPEED ── */}
      <section style={S.section} id="upload-speed">
        <div style={S.inner}>
          <span style={S.tag}>Upload Speed</span>
          <h2 style={S.h2}>📤 The Hidden Advantage: Upload Speed</h2>
          <p style={S.lead}>Most internet plan marketing focuses entirely on download speed. Upload speed is rarely mentioned, but it's the metric that fiber wins most decisively, and it matters far more than most people realize.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:28}}>
            <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:16,padding:24}}>
              <h4 style={{...S.h4,color:'#7c3aed',marginBottom:12}}>Fiber Upload: 500 Mbps, 5 Gbps</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                {['Video calls look crystal clear (you send your video via upload)','Twitch/YouTube streaming at 4K quality','Upload 100GB to Google Drive in minutes','Gaming inputs register instantly on servers','Smart security cameras stream without lag','Remote desktop feels like local machine'].map(item=>(
                  <li key={item} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#475569',fontSize:13}}>
                    <span style={{color:'#7c3aed',fontWeight:700,flexShrink:0}}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background:'#eff6ff',border:'1.5px solid #bfdbfe',borderRadius:16,padding:24}}>
              <h4 style={{...S.h4,color:'#1d4ed8',marginBottom:12}}>Cable Upload: 10–35 Mbps</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                {['Zoom calls work fine for 1–2 people','Twitch streaming limited to 1080p 60fps max','Large cloud uploads take hours','Gaming uploads adequate for most games','Security cameras: 1–2 streams max','Remote desktop: noticeable input lag'].map(item=>(
                  <li key={item} style={{display:'flex',alignItems:'flex-start',gap:8,color:'#475569',fontSize:13}}>
                    <span style={{color:'#64748b',fontWeight:700,flexShrink:0}}>~</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={S.body}>Upload speed matters for: video calls (Zoom, Teams, Google Meet), live streaming on Twitch/YouTube/TikTok, backing up photos/files to the cloud, sending large email attachments, and gaming. If any of these are regular activities, fiber's symmetrical speeds are a real quality-of-life upgrade.</p>
        </div>
      </section>

      {/* ── RELIABILITY ── */}
      <section style={S.sectionAlt} id="reliability">
        <div style={S.inner}>
          <span style={S.tag}>Reliability</span>
          <h2 style={S.h2}>🔒 Reliability: Which One Goes Down Less?</h2>
          <p style={S.lead}>Fiber internet is generally more reliable than cable, but the reasons aren't just about the technology, they're also about the infrastructure age and network architecture.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
            <div style={{background:'white',border:'1.5px solid #e2e8f0',borderRadius:16,padding:24}}>
              <h4 style={{...S.h4,color:'#0f172a',marginBottom:12}}>Why Fiber Goes Down Less</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
                {[['Glass doesn\'t corrode','Fiber cables don\'t rust, oxidize, or degrade like copper coax'],['Immune to electricity','Lightning, power surges, and EMI can\'t disrupt light-based signals'],['Newer infrastructure','Fiber networks are recently built with modern hardware and redundancy'],['Dedicated path','Your signal isn\'t shared with neighbors, so their usage doesn\'t affect your reliability'],['No speed fluctuation','You get your plan speed 24/7, not just during off-peak hours']].map(([t,d])=>(
                  <li key={t} style={{display:'flex',alignItems:'flex-start',gap:10,paddingBottom:9,borderBottom:'1px solid #f1f5f9'}}>
                    <span style={{color:'#10b981',fontWeight:700,fontSize:14,flexShrink:0,marginTop:1}}>✓</span>
                    <div>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:600,color:'#0f172a',fontSize:13,marginBottom:2}}>{t}</div>
                      <div style={{color:'#64748b',fontSize:12,lineHeight:1.5}}>{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background:'white',border:'1.5px solid #e2e8f0',borderRadius:16,padding:24}}>
              <h4 style={{...S.h4,color:'#0f172a',marginBottom:12}}>Cable Reliability Factors</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:9}}>
                {[['Weather sensitivity','Coaxial cable can be affected by heavy rain, temperature extremes, and physical damage'],['Shared infrastructure','Peak-hour congestion affects speed reliability even if the connection stays active'],['Aging infrastructure','Some cable networks run on infrastructure installed 20+ years ago'],['Node-based architecture','Problems at a neighborhood node affect all customers on that node'],['Still very reliable overall','Modern cable providers have >99% uptime, issues are the exception, not the rule']].map(([t,d])=>(
                  <li key={t} style={{display:'flex',alignItems:'flex-start',gap:10,paddingBottom:9,borderBottom:'1px solid #f1f5f9'}}>
                    <span style={{color:'#94a3b8',fontWeight:700,fontSize:14,flexShrink:0,marginTop:1}}>~</span>
                    <div>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:600,color:'#0f172a',fontSize:13,marginBottom:2}}>{t}</div>
                      <div style={{color:'#64748b',fontSize:12,lineHeight:1.5}}>{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{background:'#f0fdf4',border:'1.5px solid #bbf7d0',borderRadius:14,padding:20}}>
            <p style={{...S.body,margin:0,fontSize:14}}>🔌 <strong style={{color:'#0f172a'}}>Bottom line:</strong> Both fiber and cable providers typically guarantee 99.9%+ uptime. Most customers on both types of connections experience outages only a few times per year, lasting minutes to an hour. Fiber is slightly more reliable and consistent, but cable is far from unreliable.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={S.section} id="pricing">
        <div style={S.inner}>
          <span style={S.tag}>Pricing in 2026</span>
          <h2 style={S.h2}>💰 Is Fiber Worth the Extra Cost?</h2>
          <p style={S.lead}>The price gap between fiber and cable has narrowed dramatically in the past 3 years. Today, many fiber plans cost the same or less than equivalent cable plans, especially when you factor in long-term price stability.</p>
          <div style={{overflowX:'auto',borderRadius:14,border:'1.5px solid #e2e8f0',marginBottom:24}}>
            <table style={{width:'100%',borderCollapse:'separate',borderSpacing:0}}>
              <thead>
                <tr style={{background:'#f8fafc'}}>
                  {['Plan','Speed','Monthly Price','Contract','Post-Promo Price'].map(h=><th key={h} style={{padding:'12px 18px',textAlign:'left',fontSize:11,fontFamily:'var(--font-display)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.07em',color:'#64748b',borderBottom:'2px solid #e2e8f0'}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['AT&T Fiber 300','300 Mbps sym.','$65/mo','No contract','Stays the same'],
                  ['AT&T Fiber 1 Gig','1 Gbps sym.','$90/mo','No contract','Stays the same'],
                  ['Frontier Fiber 200','200 Mbps sym.','$39.99/mo','No contract','Stays the same'],
                  ['Frontier Fiber 1 Gig','1 Gbps sym.','$49.99/mo','No contract','Stays the same'],
                  ['Xfinity 300','300 Mbps / 10 Mbps up','$40/mo','No contract','~$55–65/mo after 12 mos'],
                  ['Xfinity 1 Gig','1.2 Gbps / 35 Mbps up','$50/mo','No contract','~$75–85/mo after 12 mos'],
                  ['Optimum 300','300 Mbps / 20 Mbps up','$35/mo','No contract','~$55/mo after promo'],
                ].map(([pl,sp,pr,co,pp],i)=>(
                  <tr key={i} style={{borderBottom:'1px solid #f1f5f9',background:i%2===0?'white':'#fafbff'}}>
                    <td style={{padding:'13px 18px',fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:13}}>{pl}</td>
                    <td style={{padding:'13px 18px',color:'#475569',fontSize:13}}>{sp}</td>
                    <td style={{padding:'13px 18px'}}><span style={{fontFamily:'var(--font-display)',fontWeight:800,color:'#7c3aed',fontSize:14}}>{pr}</span></td>
                    <td style={{padding:'13px 18px'}}><span style={{background:'#dcfce7',color:'#15803d',fontSize:11,fontWeight:700,padding:'3px 8px',borderRadius:100,fontFamily:'var(--font-display)'}}>{co}</span></td>
                    <td style={{padding:'13px 18px',color:'#94a3b8',fontSize:12}}>{pp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{background:'#fffbeb',border:'1.5px solid #fde68a',borderRadius:14,padding:20}}>
            <p style={{...S.body,margin:0,fontSize:14}}>⚠️ <strong style={{color:'#0f172a'}}>Important note on promotional pricing:</strong> Cable providers often offer attractive promotional rates for 12 months that increase significantly after the promo period. Frontier and AT&T Fiber prices tend to stay flat. Always ask what your price will be after the promotional period ends before signing up.</p>
          </div>
        </div>
      </section>

      {/* ── VERDICT ── */}
      <section style={S.sectionAlt} id="verdict">
        <div style={S.inner}>
          <span style={S.tag}>Our Verdict</span>
          <h2 style={S.h2}>🏆 Our Recommendation, Who Should Get What</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:32}}>
            <div style={{background:'#faf5ff',border:'2px solid #7c3aed',borderRadius:18,padding:28}}>
              <h3 style={{...S.h3,marginTop:0,color:'#7c3aed',fontSize:20}}>⚡ Get Fiber If...</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                {["Fiber is available at your address","You play online games (especially competitive)","Multiple people stream simultaneously","You work from home and do video calls","You stream your own content (Twitch, YouTube)","You regularly back up large files to the cloud","You want price stability, no surprise increases","You're future-proofing for the next 5+ years"].map(item=>(
                  <li key={item} style={{display:'flex',alignItems:'flex-start',gap:10,color:'#334155',fontSize:14}}>
                    <span style={{color:'#7c3aed',fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background:'#eff6ff',border:'2px solid #3b82f6',borderRadius:18,padding:28}}>
              <h3 style={{...S.h3,marginTop:0,color:'#1d4ed8',fontSize:20}}>📡 Choose Cable If...</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10}}>
                {["Fiber is not available at your address","Budget is a top priority","You mainly stream and browse casually","1–3 people in your household","You want a TV + internet bundle","You need internet fast (self-install option)","You're renting and might move soon","Casual gaming only, no competitive multiplayer"].map(item=>(
                  <li key={item} style={{display:'flex',alignItems:'flex-start',gap:10,color:'#334155',fontSize:14}}>
                    <span style={{color:'#1d4ed8',fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{background:'white',border:'1.5px solid #e2e8f0',borderRadius:18,padding:28,textAlign:'center'}}>
            <h3 style={{...S.h3,marginTop:0,textAlign:'center',marginBottom:12}}>Not Sure Which Is Available at Your Address?</h3>
            <p style={{...S.body,textAlign:'center',marginBottom:24,maxWidth:480,margin:'0 auto 24px'}}>Call us free and our agents will check every provider available at your exact address in seconds, and find you the best current deal.</p>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-primary" style={{fontSize:16,padding:'14px 32px'}}>📞 Call {siteConfig.phone}</a>
              <Link href="/#zip-widget" className="btn-secondary">Check My ZIP →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVIDER CARDS ── */}
      <section style={S.section}>
        <div style={S.innerWide}>
          <div style={{textAlign:'center',marginBottom:40}}>
            <span style={S.tag}>Our Fiber & Cable Providers</span>
            <h2 style={S.h2}>Compare Plans From Our Authorized Carriers</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:24,marginBottom:24}}>
            <div>
              <h3 style={{...S.h3,marginTop:0,color:'#7c3aed',fontSize:18,marginBottom:16}}>⚡ Fiber Providers</h3>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {fiberProviders.map(p=>(
                  <div key={p.slug} style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:14,padding:20,display:'flex',alignItems:'center',gap:16}}>
                    <div style={{flex:1}}>
                      <div style={{height:44,display:'flex',alignItems:'center',marginBottom:4}}><ProviderLogo slug={p.slug} variant="authorized" height={38} /></div>
                      <div style={{color:'#64748b',fontSize:13}}>From {p.fromPrice}/mo · {p.maxSpeed} max · {p.availability}</div>
                    </div>
                    <Link href={`/providers/${p.slug}`} className="btn-primary" style={{fontSize:12,padding:'8px 16px',flexShrink:0}}>View Plans</Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{...S.h3,marginTop:0,color:'#1d4ed8',fontSize:18,marginBottom:16}}>📡 Cable Providers</h3>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {cableProviders.map(p=>(
                  <div key={p.slug} style={{background:'#eff6ff',border:'1.5px solid #bfdbfe',borderRadius:14,padding:20,display:'flex',alignItems:'center',gap:16}}>
                    <div style={{flex:1}}>
                      <div style={{height:44,display:'flex',alignItems:'center',marginBottom:4}}><ProviderLogo slug={p.slug} variant="authorized" height={38} /></div>
                      <div style={{color:'#64748b',fontSize:13}}>From {p.fromPrice}/mo · {p.maxSpeed} max · {p.availability}</div>
                    </div>
                    <Link href={`/providers/${p.slug}`} className="btn-primary" style={{fontSize:12,padding:'8px 16px',flexShrink:0}}>View Plans</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{textAlign:'center',color:'#94a3b8',fontSize:12}}>*Prices require autopay enrollment. Taxes and fees extra. Availability varies by address.</p>
        </div>
      </section>
    </>
  )
}
