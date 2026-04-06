import type { Metadata } from 'next'
import Link from 'next/link'
import { getSheetData } from '@/lib/sheet-data'
import ZipWidget from '@/components/ZipWidget'
import ProviderSlider from '@/components/ProviderSlider'
import PriceDisclaimer from '@/components/PriceDisclaimer'
import PartnerLogosGrid from '@/components/PartnerLogosGrid'
import ProviderLogo from '@/components/ProviderLogo'

export const metadata: Metadata = {
  title: 'Compare Internet Plans & Cable Deals, Best Prices at Your Address',
  description: 'Compare AT&T, Xfinity, Frontier, Optimum & T-Mobile internet plans. Authorized dealer, exclusive deals you won\'t find online. Same price as going direct. Call (844) 954-6634.',
  keywords: ['compare internet plans','best internet deals 2026','internet providers near me','AT&T fiber deals','Xfinity promotions','Frontier fiber internet','Optimum internet deals','T-Mobile home internet','authorized internet dealer'],
  alternates: { canonical: 'https://compareinternetandcable.com' },
  openGraph: {
    title: 'Compare Internet Plans, Exclusive Authorized Dealer Deals',
    description: 'Find the best internet plan at your address. Free comparison service, authorized dealer pricing.',
    url: 'https://compareinternetandcable.com',
  },
}

export default function HomePage() {
  const { providers, deals, siteConfig } = getSheetData()
  const providerList = Object.values(providers)


  return (
    <>
      {/* ── HERO, WHITE THEME (localcabledeals.com style) ── */}
      <section style={{
        background: 'linear-gradient(180deg, #eef5fc 0%, #f5f9ff 40%, #ffffff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 24px 0',
      }}>
        {/* Subtle decorative dots top-left & top-right */}
        <div style={{ position:'absolute', top:40, left:60, width:40, height:40, opacity:0.12, pointerEvents:'none' }}>
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <div key={`${row}-${col}`} style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'#7c3aed', top:row*8, left:col*8 }}/>
          )))}
        </div>
        <div style={{ position:'absolute', top:40, right:60, width:40, height:40, opacity:0.12, pointerEvents:'none' }}>
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <div key={`${row}-${col}`} style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'#7c3aed', top:row*8, left:col*8 }}/>
          )))}
        </div>

        {/* Hero text, centered */}
        <div style={{ textAlign:'center', maxWidth:860, position:'relative', zIndex:2 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            color: '#0f172a',
            fontSize: 'clamp(36px,6vw,72px)',
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            marginBottom: 20,
          }}>
            Finding Internet, TV, and<br/>
            <span className="gradient-text">Bundle Deals Made Easy</span>
          </h1>

          <p style={{
            color: '#64748b',
            fontSize: 18,
            lineHeight: 1.7,
            marginBottom: 44,
            maxWidth: 560,
            margin: '0 auto 44px',
          }}>
            Explore internet and cable offers from top providers in your area by ZIP code. Authorized dealer, matching standard provider pricing, exclusive deals.
          </p>

          {/* ZIP Widget, light theme, centered */}
          <div style={{ maxWidth:560, margin:'0 auto 36px' }}>
            <ZipWidget phone={siteConfig.phone} />
          </div>

          {/* Trust badges */}
          <div style={{ display:'flex', gap:28, justifyContent:'center', flexWrap:'wrap', marginBottom:60 }}>
            {['✓ Real-Time Offers','✓ Secure & Private','✓ Free to Use'].map(t => (
              <span key={t} style={{ color:'#475569', fontFamily:'var(--font-display)', fontWeight:600, fontSize:14 }}>{t}</span>
            ))}
          </div>
        </div>


      </section>

      {/* ── CALL BAR ── */}
      <div style={{ background:'#0f172a', padding:'16px 24px', textAlign:'center', marginTop:0 }}>
        <span style={{ color:'rgba(255,255,255,0.7)', fontFamily:'var(--font-display)', fontWeight:500, fontSize:15 }}>
          Call For Best Internet, Phone and Cable Deals &nbsp;
          <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} style={{ color:'#06b6d4', fontWeight:800, textDecoration:'none', fontSize:17 }}>
            {siteConfig.phone}
          </a>
        </span>
      </div>

      {/* ── PARTNER LOGOS GRID ── */}
      <PartnerLogosGrid />

      {/* ── HOW IT WORKS ── */}
      <section style={{ background:'#f8fafc', padding:'80px 24px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="section-tag-light">How It Works</span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,4vw,44px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em', marginBottom:14 }}>
              Find Your Plan in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p style={{ color:'#64748b', fontSize:17, maxWidth:480, margin:'0 auto' }}>No stores. No pressure. Best plan at your address in minutes.</p>
          </div>
          <div className="grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, position:'relative' }}>
            <div className="hide-mobile" style={{ position:'absolute', top:38, left:'calc(16.66% + 16px)', right:'calc(16.66% + 16px)', height:2, background:'linear-gradient(90deg,#7c3aed,#06b6d4)', opacity:0.25, zIndex:0 }}/>
            {[
              ['1','Enter Your ZIP Code','We check every major provider available at your exact address, real data, no guesswork.','#7c3aed'],
              ['2','We Compare Options','Our agents match your needs with every plan including exclusive deals not found online.','#5b21b6'],
              ['3','You Get the Best Deal','One call and you\'re set. Matches standard provider pricing, plus perks only authorized dealers offer.','#06b6d4'],
            ].map(([n,t,d,col]) => (
              <div key={n} className="card" style={{ padding:'36px 28px', textAlign:'center', background:'#ffffff', position:'relative', zIndex:1 }}>
                <div style={{ width:52, height:52, borderRadius:'50%', background:`linear-gradient(135deg,${col},${col}cc)`, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', fontFamily:'var(--font-display)', fontSize:20, fontWeight:800, color:'white', boxShadow:`0 4px 16px ${col}40` }}>{n}</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, color:'#0f172a', marginBottom:10 }}>{t}</h3>
                <p style={{ color:'#64748b', fontSize:14, lineHeight:1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVIDER SLIDER ── */}
      <section style={{ background:'#ffffff', padding:'80px 0', overflow:'hidden' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 48px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:40, flexWrap:'wrap', gap:16 }}>
            <div>
              <span className="section-tag-light">Compare Plans</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em' }}>
                Compare <span className="gradient-text">Top Internet Providers</span>
              </h2>
            </div>
            <Link href="/providers" style={{ color:'#7c3aed', fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, textDecoration:'none' }}>
              Compare all in detail →
            </Link>
          </div>
          <ProviderSlider providers={providerList} phone={siteConfig.phone} />
        </div>
      </section>

      {/* ── WHY US, light version ── */}
      <section style={{ background:'#f8fafc', padding:'80px 24px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div className="grid-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
            <div>
              <span className="section-tag-light">Why Choose Us</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,42px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em', lineHeight:1.1, marginBottom:20 }}>
                We Work For You —<br/><span className="gradient-text">Not the Carriers</span>
              </h2>
              <p style={{ color:'#64748b', fontSize:16, lineHeight:1.75, marginBottom:28, maxWidth:480 }}>We are an independent authorized dealer with direct carrier agreements — which means pricing that matches standard provider phone rates, plus dealer-exclusive promotions not available on their websites.</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12, marginBottom:32 }}>
                {['Independent authorized dealer — we hold direct dealer agreements with each carrier we represent, not an affiliate link or ad referral','Dealer-exclusive promotions — we access pricing and offers that are not listed on carrier websites or available to the general public','Real human agents — when you call, a trained person answers. No automated systems, no chatbots, no hold queues','Always free to use — carriers pay our fee when you activate. Your plan price matches standard provider phone pricing, never higher','Bilingual support — we serve customers in English and Spanish'].map(item => (
                  <li key={item} style={{ display:'flex', alignItems:'flex-start', gap:12, color:'#334155', fontSize:15, lineHeight:1.5 }}>
                    <div style={{ width:20, height:20, borderRadius:6, background:'linear-gradient(135deg,#7c3aed,#06b6d4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'white', flexShrink:0, marginTop:2 }}>✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-secondary">Learn About Us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNET TYPES ── */}
      <section style={{ background:'#ffffff', padding:'80px 24px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <span className="section-tag-light">Internet Types</span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em' }}>
              What Type Are You <span className="gradient-text">Looking For?</span>
            </h2>
          </div>
          <div className="grid-4" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
            {[
              {href:'/internet/fiber',icon:'⚡',title:'Fiber Internet',color:'#7c3aed',bg:'#faf5ff',border:'#ede9fe',desc:'Fastest & most reliable. Symmetrical speeds for every device.'},
              {href:'/internet/cable',icon:'📺',title:'Cable Internet',color:'#2563eb',bg:'#eff6ff',border:'#bfdbfe',desc:'Wide coverage, fast downloads for streaming and browsing.'},
              {href:'/internet/5g',icon:'📶',title:'5G Home Internet',color:'#db2777',bg:'#fdf2f8',border:'#fbcfe8',desc:'No wires, no installation. Plug in and connect immediately.'},
              {href:'/internet/cheap',icon:'💰',title:'Cost-effective Internet',color:'#059669',bg:'#ecfdf5',border:'#a7f3d0',desc:'Affordable plans under $50/mo including discount programs.'},
            ].map(t => (
              <Link key={t.href} href={t.href} style={{ background:t.bg, border:`1.5px solid ${t.border}`, borderRadius:18, padding:'28px 20px', textAlign:'center', textDecoration:'none', display:'flex', flexDirection:'column', alignItems:'center', transition:'all 0.25s' }}>
                <div style={{ width:56, height:56, borderRadius:14, background:'white', border:`1.5px solid ${t.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:14, boxShadow:`0 4px 12px ${t.color}18` }}>{t.icon}</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, color:'#0f172a', fontSize:15, marginBottom:8 }}>{t.title}</h3>
                <p style={{ color:'#64748b', fontSize:13, lineHeight:1.55, flex:1, marginBottom:14 }}>{t.desc}</p>
                <span style={{ color:t.color, fontSize:12, fontWeight:700, fontFamily:'var(--font-display)' }}>Explore plans →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── DEALS ── */}
      <section style={{ background:'#fffbeb', borderTop:'1px solid #fde68a', padding:'80px 24px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
            <div>
              <span style={{ fontSize:12, fontWeight:700, fontFamily:'var(--font-display)', color:'#d97706', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:10 }}>🔥 This Week's Deals</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em' }}>Exclusive <span className="gradient-text-warm">Promotions</span></h2>
            </div>
            <Link href="/deals" style={{ color:'#d97706', fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, textDecoration:'none' }}>See all deals →</Link>
          </div>
          <div className="grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {deals.slice(0,3).map((d,i) => (
              <div key={i} style={{ background:'white', border:'1.5px solid #fde68a', borderRadius:18, padding:'24px', position:'relative', overflow:'hidden', boxShadow:'0 4px 16px rgba(245,158,11,0.08)', transition:'all 0.25s' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${d.color},${d.color}80)` }}/>
                <span style={{ display:'inline-flex', alignItems:'center', gap:4, background:'#fef3c7', color:'#d97706', fontSize:10, fontWeight:800, fontFamily:'var(--font-display)', padding:'4px 10px', borderRadius:100, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:14 }}>{d.badge}</span>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:18, color:'#0f172a', marginBottom:3 }}>{d.provider}</div>
                <div style={{ color:'#64748b', fontSize:13, marginBottom:14 }}>{d.plan}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:10, marginBottom:12 }}>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:34, color:'#0f172a', letterSpacing:'-0.03em', lineHeight:1 }}>
                    <sup style={{fontSize:16}}>$</sup>{d.promoPrice.replace('$','')}<sub style={{fontSize:13,color:'#475569',fontWeight:600}}>/mo</sub>
                  </div>
                  <div style={{fontSize:10,color:'#475569',fontWeight:600,marginTop:1}}>w/ AutoPay*</div>
                  {d.price !== d.promoPrice.replace('$','') && <div style={{ color:'#94a3b8', fontSize:13, textDecoration:'line-through' }}>${d.price}/mo</div>}
                </div>
                <ul style={{ listStyle:'none', marginBottom:14, display:'flex', flexDirection:'column', gap:6 }}>
                  {d.perks.map((perk,j) => <li key={j} style={{ fontSize:12, color:'#475569', display:'flex', alignItems:'flex-start', gap:6 }}>🎁 {perk}</li>)}
                </ul>
                <div style={{ color:'#d97706', fontSize:11, fontWeight:600, marginBottom:14 }}>⏰ {d.expiry}</div>
                <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} style={{ display:'block', width:'100%', textAlign:'center', padding:'12px', borderRadius:12, background:'linear-gradient(135deg,#d97706,#b45309)', color:'white', fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, textDecoration:'none' }}>
                  📞 Call to Claim This Deal
                </a>
              </div>
            ))}
          </div>
          <PriceDisclaimer variant="compact" />
        </div>
      </section>

      {/* ── GUIDE TEASER ── */}
      <section style={{ background:'#ffffff', padding:'80px 24px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
            <div>
              <span className="section-tag-light">Internet Guide</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#0f172a', letterSpacing:'-0.025em' }}>
                Learn Before <span className="gradient-text">You Buy</span>
              </h2>
            </div>
            <Link href="/guide" style={{ color:'#7c3aed', fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, textDecoration:'none' }}>Visit full guide →</Link>
          </div>
          <div className="grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {[
              {href:'/guide/fiber-vs-cable',  bg:'linear-gradient(135deg,#ede9fe,#ddd6fe)', icon:'⚡ vs 📺', tc:'#7c3aed', tag:'Buying Guide', title:'Fiber vs Cable: Which Is Right for You in 2026?',   desc:'Complete breakdown, speeds, gaming, streaming, reliability, pricing.', time:'15 min read'},
              {href:'/guide/moving-checklist',bg:'linear-gradient(135deg,#fef3c7,#fde68a)', icon:'📦',        tc:'#d97706', tag:'Moving Guide', title:'Internet Moving Checklist: Set Up Before You Unpack',desc:"30-day timeline so you're never without internet on moving day.",        time:'7 min read'},
              {href:'/guide/blog',            bg:'linear-gradient(135deg,#dcfce7,#bbf7d0)', icon:'💰',        tc:'#059669', tag:'Money Saving', title:"Hidden Internet Fees ISPs Don't Tell You About",   desc:'Equipment charges, post-promo hikes, ETFs, and how to avoid them.',   time:'8 min read'},
            ].map(g => (
              <Link key={g.href} href={g.href} className="card" style={{ textDecoration:'none', display:'flex', flexDirection:'column', overflow:'hidden' }}>
                <div style={{ height:110, display:'flex', alignItems:'center', justifyContent:'center', fontSize:44, background:g.bg }}>{g.icon}</div>
                <div style={{ padding:'20px', flex:1, display:'flex', flexDirection:'column' }}>
                  <span style={{ fontSize:11, fontWeight:700, fontFamily:'var(--font-display)', textTransform:'uppercase', letterSpacing:'0.08em', color:g.tc, marginBottom:8 }}>{g.tag}</span>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, color:'#0f172a', fontSize:15, lineHeight:1.35, marginBottom:8 }}>{g.title}</h3>
                  <p style={{ color:'#64748b', fontSize:12, lineHeight:1.6, flex:1 }}>{g.desc}</p>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 20px', borderTop:'1px solid #f1f5f9' }}>
                  <span style={{ color:'#94a3b8', fontSize:11 }}>📖 {g.time}</span>
                  <span style={{ color:g.tc, fontSize:12, fontWeight:700, fontFamily:'var(--font-display)' }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is it more expensive to order internet through a dealer?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. As an authorized dealer for AT&T, Xfinity, Frontier, Optimum, and T-Mobile, we match standard provider pricing, and often access exclusive promotions not available on carrier websites.' } },
          { '@type': 'Question', name: 'What internet providers do you offer?',
            acceptedAnswer: { '@type': 'Answer', text: 'We are an authorized dealer for AT&T Fiber, Xfinity (Comcast), Frontier Fiber, Optimum, T-Mobile Home Internet, Kinetic by Windstream, and EarthLink.' } },
          { '@type': 'Question', name: 'How fast is fiber internet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Fiber internet plans offer speeds from 200 Mbps up to 5 Gbps with symmetrical upload and download speeds. AT&T and Frontier offer plans up to 5 Gbps.' } },
          { '@type': 'Question', name: 'Can I get internet with no annual contract?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. All plans we sell are no-contract. You can cancel at any time without early termination fees.' } },
        ],
      }) }} />
    </>
  )
}
