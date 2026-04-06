import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Advertising Disclosure | Compare Internet & Cable',
  description: 'How Compare Internet & Cable makes money and why our advice is always in your interest.',
}

const S = {
  section: { background:'#ffffff', padding:'72px 24px' } as React.CSSProperties,
  inner: { maxWidth:860, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'#0f172a', marginBottom:12, marginTop:36, letterSpacing:'-0.01em' } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
}

export default function AdvertisingDisclosurePage() {
  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Advertising Disclosure'}]}
        title="Advertising Disclosure"
        subtitle="Our commitment to honest, transparent practices, how we make money and why it doesn't affect our advice."
      />
      <section style={S.section}>
        <div style={S.inner}>

          {/* Hero callout */}
          <div style={{background:'#faf5ff',border:'2px solid #7c3aed',borderRadius:18,padding:'28px 32px',marginBottom:40}}>
            <h2 style={{...S.h2,marginTop:0,color:'#7c3aed',fontSize:18}}>Our Commitment to Honest Practices</h2>
            <p style={{...S.p,marginBottom:0}}>
              <strong style={{color:'#0f172a'}}>Compare Internet and Cable</strong> is an open, independent resource dedicated to helping you make the best internet and cable decision for your home and budget. We believe in full transparency about how we operate and how we generate revenue, so you can trust the information we provide.
            </p>
          </div>

          <h2 style={S.h2}>Who We Are</h2>
          <p style={S.p}>We are <strong style={{color:'#0f172a'}}>Adbyte Digital LLC DBA Compare Internet and Cable</strong>, an independent authorized dealer for internet and cable service providers including AT&T, Xfinity, Frontier, Optimum, T-Mobile, Kinetic by Windstream, and EarthLink. We operate the website <a href="https://compareinternetandcable.com" style={{color:'#7c3aed'}}>compareinternetandcable.com</a>.</p>
          <p style={S.p}>We are not owned by, officially affiliated with, or employed by any of the carriers we represent. We are an independent business that holds authorized dealer agreements, similar to how a car dealership sells vehicles from multiple manufacturers without being owned by any of them.</p>

          <h2 style={S.h2}>How We Make Money</h2>
          <p style={S.p}>We are compensated by the internet service providers (ISPs) when we successfully connect a customer with a service provider and that customer activates a new plan. This is similar to how a real estate agent earns a commission from the seller, <strong style={{color:'#0f172a'}}>you never pay us directly, and your plan price is never higher because of our involvement.</strong></p>
          <p style={S.p}>The commission we receive varies by provider and plan type. This means we may earn different amounts depending on which provider you choose. However, our goal is always to match you with the plan that best fits <em>your</em> needs, budget, and location, regardless of which one pays us the most.</p>

          <h2 style={S.h2}>Does This Affect Our Recommendations?</h2>
          <p style={S.p}>We take this question seriously. Here is how we protect the integrity of our recommendations:</p>
          <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:20}}>
            {[
              ['We carry multiple providers','Because we are authorized dealers for multiple carriers, we have no financial reason to push you toward one provider over another. We compare all available options at your address.'],
              ['We show real pricing','Prices displayed on our website reflect standard provider phone pricing. We do not inflate prices. Our dealer agreement means carriers pay us, not you.'],
              ['We disclose conflicts','If a provider\'s commission structure changes in a way that could affect our editorial content, we will disclose it clearly.'],
              ['We give honest pros and cons','Our guides and content reflect genuine assessments of each provider\'s strengths and weaknesses, including limitations that may make them a poor fit for some customers.'],
            ].map(([title,desc])=>(
              <div key={String(title)} style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:12,padding:'16px 20px',display:'flex',gap:14}}>
                <span style={{color:'#7c3aed',fontWeight:800,fontSize:16,flexShrink:0,marginTop:1}}>✓</span>
                <div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#0f172a',fontSize:14,marginBottom:4}}>{title}</div>
                  <div style={{color:'#64748b',fontSize:13,lineHeight:1.6}}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Authorized Dealer Status</h2>
          <p style={S.p}>As an authorized dealer, we hold agreements directly with the carriers we represent. These agreements allow us to:</p>
          <ul style={{color:'#475569',fontSize:15,lineHeight:1.85,marginBottom:14,paddingLeft:20,display:'flex',flexDirection:'column',gap:6}}>
            <li>Offer standard provider plans and phone pricing</li>
            <li>Access exclusive promotions and deals not always available online</li>
            <li>Process new activations and service orders on behalf of the carriers</li>
            <li>Provide customer support during the ordering and installation process</li>
          </ul>
          <p style={S.p}>Our authorized dealer status is subject to each carrier's dealer agreement. The provider logos displayed on our website are used under these authorized dealer agreements and remain the intellectual property of their respective owners.</p>

          <h2 style={S.h2}>Pricing Disclaimer</h2>
          <p style={S.p}>All prices displayed on this website are promotional rates that may change at any time. Listed prices typically require AutoPay enrollment and paperless billing. Taxes, equipment fees, and other charges are not included unless stated. We strongly encourage you to confirm all pricing and terms with your agent before placing an order.</p>
          <p style={S.p}><em>All prices are subject to change by their respective providers. Adbyte Digital LLC DBA Compare Internet and Cable is not responsible for pricing changes made by providers after publication.</em></p>

          <h2 style={S.h2}>Third-Party Links</h2>
          <p style={S.p}>Our website may contain links to provider websites and third-party resources. We are not responsible for the content, privacy practices, or accuracy of information on those sites.</p>

          <h2 style={S.h2}>Questions?</h2>
          <p style={S.p}>If you have any questions about this disclosure or how we operate, please reach out:</p>
          <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:14,padding:'20px 24px',marginTop:8}}>
            <p style={{...S.p,marginBottom:6}}><strong style={{color:'#0f172a'}}>Adbyte Digital LLC DBA Compare Internet and Cable</strong></p>
            <p style={{...S.p,marginBottom:6}}>📧 <a href="mailto:info@compareinternetandcable.com" style={{color:'#7c3aed'}}>info@compareinternetandcable.com</a></p>
            <p style={{...S.p,marginBottom:6}}>📞 <a href="tel:18449546634" style={{color:'#7c3aed'}}>(844) 954-6634</a></p>
            <p style={{...S.p,marginBottom:0}}>📍 5830 E 2nd St, Ste 7000-26401, Casper, WY 82609, USA</p>
          </div>

          <div style={{marginTop:40,paddingTop:24,borderTop:'1px solid #f1f5f9',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/privacy" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Privacy Policy →</Link>
            <Link href="/terms" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Terms & Conditions →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
