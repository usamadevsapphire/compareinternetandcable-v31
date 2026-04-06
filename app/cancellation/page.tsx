import PageHero from '@/components/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Compare Internet and Cable',
  description: 'Understand cancellation and refund policies for internet service plans ordered through Compare Internet and Cable.',
}

const S = {
  section: { padding:'72px 24px', background:'#ffffff' } as React.CSSProperties,
  inner: { maxWidth:800, margin:'0 auto' } as React.CSSProperties,
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, color:'#0f172a', marginBottom:12, marginTop:32, letterSpacing:'-0.02em' } as React.CSSProperties,
  p: { color:'#475569', fontSize:15, lineHeight:1.85, marginBottom:14 } as React.CSSProperties,
}

export default function CancellationPage() {
  return (
    <>
      <PageHero
        crumbs={[{label:'Home',href:'/'},{label:'Cancellation Policy'}]}
        title="Cancellation & Refund Policy"
        subtitle="Important information about cancelling or modifying internet service ordered through our platform."
      />
      <section style={S.section}>
        <div style={S.inner}>

          <h2 style={S.h2}>Our Role as an Authorized Dealer</h2>
          <p style={S.p}>
            Compare Internet and Cable (Adbyte Digital LLC) is an independent authorized dealer. We facilitate the ordering of internet service plans on behalf of carriers including AT&T, Xfinity/Comcast, Frontier, Optimum, and T-Mobile. We do not bill you directly — all billing, service agreements, and account management are handled by the carrier you sign up with.
          </p>

          <h2 style={S.h2}>No Refunds from Compare Internet and Cable</h2>
          <p style={S.p}>
            Because we do not collect payment from customers, we do not issue refunds. Any charges you pay are billed directly by the carrier and are subject to that carrier's refund and cancellation policies.
          </p>

          <h2 style={S.h2}>Cancelling Your Service</h2>
          <p style={S.p}>
            To cancel or modify your internet service plan, you must contact the carrier directly:
          </p>
          <ul style={{ color:'#475569', fontSize:15, lineHeight:2, marginBottom:20, paddingLeft:24 }}>
            <li><strong>AT&amp;T:</strong> 1-800-288-2020 or att.com/myatt</li>
            <li><strong>Xfinity:</strong> 1-800-934-6489 or xfinity.com/support</li>
            <li><strong>Frontier:</strong> 1-800-921-8101 or frontier.com/local/support</li>
            <li><strong>Optimum:</strong> 1-866-200-7273 or optimum.net/support</li>
            <li><strong>T-Mobile Home Internet:</strong> 1-844-275-9310 or t-mobile.com/support</li>
          </ul>

          <h2 style={S.h2}>Early Termination Fees (ETFs)</h2>
          <p style={S.p}>
            All plans we sell are no-contract and do not carry early termination fees. However, if a carrier separately requires a contract for equipment financing, promotional credits, or bundled services, early cancellation may trigger fees set by that carrier. Always confirm the contract terms with your agent before activating service.
          </p>

          <h2 style={S.h2}>Installation & Activation Fees</h2>
          <p style={S.p}>
            Some carriers charge one-time installation or activation fees. These fees are set and collected by the carrier — not by us. We will always disclose any known fees before you order. If an installation appointment is cancelled by you after it is scheduled, the carrier may charge a cancellation fee. Check with your carrier for their specific policy.
          </p>

          <h2 style={S.h2}>Promotional Pricing</h2>
          <p style={S.p}>
            Many plans include promotional pricing for an introductory period (typically 12 months). After that period ends, the price reverts to the carrier's standard rate. We are required to disclose and will always tell you the post-promotional price before you activate.
          </p>

          <h2 style={S.h2}>Contact Us</h2>
          <p style={S.p}>
            If you have questions about an order placed through Compare Internet and Cable or need help reaching your carrier, contact us:
          </p>
          <ul style={{ color:'#475569', fontSize:15, lineHeight:2, marginBottom:20, paddingLeft:24 }}>
            <li><strong>Phone:</strong> (844) 954-6634 &nbsp;·&nbsp; Mon–Sun, 9am–5pm CST</li>
            <li><strong>Email:</strong> support@compareinternetandcable.com</li>
            <li><strong>Address:</strong> 5830 E 2nd St, Ste 7000-26401, Casper, WY 82609</li>
          </ul>

          <p style={{ color:'#94a3b8', fontSize:12, marginTop:32, borderTop:'1px solid #e2e8f0', paddingTop:16 }}>
            Last updated: March 2026. This policy applies to all orders facilitated by Adbyte Digital LLC DBA Compare Internet and Cable.
          </p>
        </div>
      </section>
    </>
  )
}
