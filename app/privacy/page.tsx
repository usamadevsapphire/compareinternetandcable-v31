import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Compare Internet & Cable',
  description: 'Privacy Policy for Adbyte Digital LLC DBA Compare Internet and Cable.',
}

const S = {
  section: { background:'#ffffff', padding:'72px 24px' } as React.CSSProperties,
  inner: { maxWidth:860, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'#0f172a', marginBottom:12, marginTop:36, letterSpacing:'-0.01em' } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
  ul: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14, paddingLeft:20, display:'flex', flexDirection:'column' as const, gap:6 } as React.CSSProperties,
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Privacy Policy'}]}
        title="Privacy Policy"
        subtitle="Adbyte Digital LLC DBA Compare Internet and Cable, last updated February 5, 2026."
      />
      <section style={S.section}>
        <div style={S.inner}>
          <div style={{background:'#f8fafc',border:'1.5px solid #e2e8f0',borderRadius:14,padding:'20px 24px',marginBottom:32}}>
            <p style={{...S.p,marginBottom:4}}><strong style={{color:'#0f172a'}}>Effective Date:</strong> October 15, 2025</p>
            <p style={{...S.p,marginBottom:4}}><strong style={{color:'#0f172a'}}>Last Updated:</strong> February 5, 2026</p>
            <p style={{...S.p,marginBottom:0}}><strong style={{color:'#0f172a'}}>Website:</strong> <a href="https://compareinternetandcable.com" style={{color:'#7c3aed'}}>compareinternetandcable.com</a></p>
          </div>

          <p style={S.p}>Adbyte Digital LLC DBA Compare Internet and Cable ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <a href="https://compareinternetandcable.com" style={{color:'#7c3aed'}}>compareinternetandcable.com</a> (the "Site").</p>
          <p style={S.p}>We adopt this policy to comply with applicable privacy laws, including the California Online Privacy Protection Act (CalOPPA), California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA), General Data Protection Regulation (GDPR), Personal Information Protection and Electronic Documents Act (PIPEDA), and similar privacy laws.</p>
          <p style={S.p}>By accessing or using the Site, you agree to this Privacy Policy. If you do not agree with the terms, please do not use the Site.</p>

          <h2 style={S.h2}>1. Information We Collect</h2>
          <p style={S.p}>We collect only the personal data you voluntarily provide when you fill out forms or contact us. This may include:</p>
          <ul style={S.ul}>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service or mailing address</li>
          </ul>
          <p style={S.p}>We do not collect payment information, social security numbers, or require user accounts or passwords.</p>
          <p style={S.p}>In addition, we may automatically collect certain non-personal information through cookies and similar technologies, such as browser type, device type, and pages visited.</p>

          <h2 style={S.h2}>2. How We Use Your Information</h2>
          <p style={S.p}>We use your personal information to:</p>
          <ul style={S.ul}>
            <li>Respond to your inquiries and requests</li>
            <li>Connect you with telecommunications or cable service providers</li>
            <li>Facilitate eligibility checks and referrals</li>
            <li>Communicate about services and next steps</li>
            <li>Improve website performance and user experience</li>
          </ul>
          <p style={S.p}>We do not sell, rent, or lease your personal identifying information or caller data to third-party marketing agencies.</p>

          <h2 style={S.h2}>3. Cookies & Tracking Technologies</h2>
          <p style={S.p}>We may use cookies and similar technologies to analyze usage trends, administer the Site, and improve functionality. You can disable cookies through your browser settings, but some features of the Site may not work if cookies are disabled.</p>
          <p style={S.p}>Under CalOPPA, we disclose whether we respond to "Do Not Track" signals. We currently do not alter our data collection practices in response to Do Not Track signals.</p>

          <h2 style={S.h2}>4. How We Share Information</h2>
          <p style={S.p}>We may share your personal information with:</p>
          <ul style={S.ul}>
            <li>Authorized third-party providers to fulfill service requests (e.g., internet/cable partners including AT&T, Xfinity, Frontier, Optimum, and T-Mobile)</li>
            <li>Service providers that support website operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p style={S.p}>We do not share personal information for third-party marketing without your consent.</p>

          <h2 style={S.h2}>5. International Transfers</h2>
          <p style={S.p}>If you access the Site from outside the United States, your data may be transferred, processed, and stored in the U.S. or other jurisdictions. By using the Site, you consent to this transfer.</p>

          <h2 style={S.h2}>6. Your Privacy Rights</h2>
          <p style={S.p}><strong style={{color:'#0f172a'}}>California (CCPA/CPRA)</strong>, California residents may have rights to:</p>
          <ul style={S.ul}>
            <li>Know what personal information is collected and why</li>
            <li>Request access to or deletion of their data</li>
            <li>Opt out of certain data sharing</li>
          </ul>
          <p style={S.p}>To exercise these rights, contact us at the information below.</p>

          <h2 style={S.h2}>7. Data Retention</h2>
          <p style={S.p}>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>

          <h2 style={S.h2}>8. Data Security</h2>
          <p style={S.p}>We use administrative, physical, and technical safeguards to protect your data. However, no system is completely secure and we cannot guarantee absolute security.</p>

          <h2 style={S.h2}>9. Children's Privacy</h2>
          <p style={S.p}>This Site is not directed to individuals under 13, and we do not knowingly collect data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.</p>

          <h2 style={S.h2}>10. Changes to This Policy</h2>
          <p style={S.p}>We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will reflect any changes. Continued use of the Site after changes constitutes acceptance of the updated policy.</p>

          <h2 style={S.h2}>11. Contact Us</h2>
          <p style={S.p}>If you have questions or wish to exercise your privacy rights, please contact us:</p>
          <div style={{background:'#faf5ff',border:'1.5px solid #ede9fe',borderRadius:14,padding:'20px 24px',marginTop:8}}>
            <p style={{...S.p,marginBottom:6}}><strong style={{color:'#0f172a'}}>Adbyte Digital LLC DBA Compare Internet and Cable</strong></p>
            <p style={{...S.p,marginBottom:6}}>📧 <a href="mailto:info@compareinternetandcable.com" style={{color:'#7c3aed'}}>info@compareinternetandcable.com</a></p>
            <p style={{...S.p,marginBottom:6}}>📞 <a href="tel:18449546634" style={{color:'#7c3aed'}}>(844) 954-6634</a></p>
            <p style={{...S.p,marginBottom:0}}>📍 5830 E 2nd St, Ste 7000-26401, Casper, WY 82609, USA</p>
          </div>

          <div style={{marginTop:40,paddingTop:24,borderTop:'1px solid #f1f5f9',display:'flex',gap:16,flexWrap:'wrap'}}>
            <Link href="/terms" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Terms & Conditions →</Link>
            <Link href="/advertising-disclosure" style={{color:'#7c3aed',fontFamily:'var(--font-display)',fontWeight:600,fontSize:14,textDecoration:'none'}}>Advertising Disclosure →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
