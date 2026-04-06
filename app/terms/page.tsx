import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Compare Internet & Cable',
  description: 'Terms and Conditions for Adbyte Digital LLC DBA Compare Internet and Cable.',
}

const S = {
  section: { background:'#ffffff', padding:'72px 24px' } as React.CSSProperties,
  inner: { maxWidth:860, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'#0f172a', marginBottom:12, marginTop:36, letterSpacing:'-0.01em' } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Terms & Conditions'}]}
        title="Terms & Conditions"
        subtitle="Adbyte Digital LLC DBA Compare Internet and Cable, last updated February 5, 2026."
      />
      <section style={S.section}>
        <div style={S.inner}>
          <div style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:14,padding:'20px 24px',marginBottom:32}}>
            <p style={{...S.p,marginBottom:4}}><strong style={{color:'#0f172a'}}>Effective Date:</strong> October 15, 2025</p>
            <p style={{...S.p,marginBottom:4}}><strong style={{color:'#0f172a'}}>Last Updated:</strong> February 5, 2026</p>
            <p style={{...S.p,marginBottom:0}}><strong style={{color:'#0f172a'}}>Website:</strong> <a href="https://compareinternetandcable.com" style={{color:'#7c3aed'}}>compareinternetandcable.com</a></p>
          </div>

          <p style={S.p}>These Terms and Conditions govern your use of <a href="https://compareinternetandcable.com" style={{color:'#7c3aed'}}>compareinternetandcable.com</a>, operated by Adbyte Digital LLC DBA Compare Internet and Cable ("we," "us," or "our"). By using this Site, you agree to these terms.</p>

          <h2 style={S.h2}>1. Nature of Agency & Non-Affiliation</h2>
          <p style={S.p}>You acknowledge that Adbyte Digital LLC DBA Compare Internet and Cable acts as an independent third-party intermediary and authorized dealer. We provide information and facilitate connections to service providers including AT&T, Xfinity (Comcast), Frontier, Optimum, and T-Mobile.</p>
          <p style={S.p}>We do not own, manage, or maintain any internet or cable infrastructure. We are not employed by or officially affiliated with any of the carriers we represent, beyond our authorized dealer agreements. All service contracts are ultimately between you and the specific provider you choose.</p>

          <h2 style={S.h2}>2. Accuracy of Pricing & Availability</h2>
          <p style={S.p}>Availability and pricing provided on this website or over the phone are based on information supplied by third-party internet service providers at a specific point in time. Prices, promotions, and plan availability are subject to change without notice.</p>
          <p style={S.p}>We make reasonable efforts to keep information current but are not responsible for discrepancies in final billing, service speeds delivered, or changes made by providers after your order is placed. Always confirm current pricing and terms directly with the provider before completing any transaction.</p>

          <h2 style={S.h2}>3. TCPA Consent, Phone & SMS</h2>
          <p style={S.p}>By calling us or providing your phone number on this website, you provide express written consent to be contacted by Adbyte Digital LLC DBA Compare Internet and Cable, or the third-party providers we connect you with, regarding your service request, even if your number appears on a state or federal "Do Not Call" registry. Standard message and data rates may apply.</p>

          <h2 style={S.h2}>4. Limitation of Liability</h2>
          <p style={S.p}>Adbyte Digital LLC DBA Compare Internet and Cable shall not be liable for any service interruptions, equipment failures, billing disputes, speed shortfalls, or any other issues arising from your agreement with the final service provider. Our role is strictly limited to consultation, comparison, and referral.</p>
          <p style={S.p}>In no event shall our total liability to you exceed the greater of (a) the amount you paid us, or (b) $100 USD. We are not liable for indirect, consequential, or punitive damages of any kind.</p>

          <h2 style={S.h2}>5. Authorized Dealer Status</h2>
          <p style={S.p}>Compare Internet and Cable is an authorized dealer for the providers listed on this website. As an authorized dealer, we match standard provider phone pricing, and in many cases, exclusive promotions not available on carrier websites. You are never charged an additional fee for using our service.</p>

          <h2 style={S.h2}>6. Pricing Disclaimer</h2>
          <p style={S.p}>All prices displayed on this website are promotional rates and subject to change at any time. Prices typically require AutoPay enrollment and paperless billing. Taxes, equipment fees, and other charges may apply and are not included in listed prices. Post-promotional rates may be higher. We strongly encourage you to ask your agent about pricing after any promotional period ends before committing to a plan.</p>

          <h2 style={S.h2}>7. Intellectual Property</h2>
          <p style={S.p}>All content on this Site, including text, graphics, logos, and design, is the property of Adbyte Digital LLC or its content licensors and is protected by applicable intellectual property laws. Provider logos and trademarks are the property of their respective owners and are used for informational and identification purposes only under our authorized dealer agreements.</p>

          <h2 style={S.h2}>8. Governing Law</h2>
          <p style={S.p}>These Terms shall be governed by the laws of the State of Wyoming, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Natrona County, Wyoming.</p>

          <h2 style={S.h2}>9. Changes to These Terms</h2>
          <p style={S.p}>We reserve the right to update these Terms at any time. The "Last Updated" date will reflect any changes. Continued use of the Site constitutes acceptance of the updated terms.</p>

          <h2 style={S.h2}>10. Contact Us</h2>
          <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:14,padding:'20px 24px',marginTop:8}}>
            <p style={{...S.p,marginBottom:6}}><strong style={{color:'#0f172a'}}>Adbyte Digital LLC DBA Compare Internet and Cable</strong></p>
            <p style={{...S.p,marginBottom:6}}>📧 <a href="mailto:info@compareinternetandcable.com" style={{color:'#7c3aed'}}>info@compareinternetandcable.com</a></p>
            <p style={{...S.p,marginBottom:6}}>📞 <a href="tel:18449546634" style={{color:'#7c3aed'}}>(844) 954-6634</a></p>
            <p style={{...S.p,marginBottom:0}}>📍 5830 E 2nd St, Ste 7000-26401, Casper, WY 82609, USA</p>
          </div>

          <div style={{marginTop:40,paddingTop:24,borderTop:'1px solid #f1f5f9',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/privacy" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Privacy Policy →</Link>
            <Link href="/advertising-disclosure" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Advertising Disclosure →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
