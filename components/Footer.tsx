import Link from 'next/link'
import SiteLogo from '@/components/SiteLogo'
import type { ProviderData, SiteConfig } from '@/lib/sheet-data'

export default function Footer({ siteConfig, providers }: { siteConfig: SiteConfig; providers: Record<string, ProviderData> }) {
  const list = Object.values(providers)

  // Column definitions, matching ibex.png layout
  const columns = [
    {
      title: 'Providers',
      links: [
        ...list.map(p => [p.name, `/providers/${p.slug}`] as [string,string]),
        ['Compare All →', '/providers'],
      ],
    },
    {
      title: 'Internet',
      links: [
        ['Fiber Internet',   '/internet/fiber'],
        ['Cable Internet',   '/internet/cable'],
        ['5G Internet',      '/internet/5g'],
        ['Cost-effective Plans',      '/internet/cheap'],
        ['Current Deals',    '/deals'],
      ] as [string,string][],
    },
    {
      title: 'Internet Guide',
      links: [
        ['Fiber vs Cable',     '/guide/fiber-vs-cable'],
        ['Moving Checklist',   '/guide/moving-checklist'],
        ['Blog',               '/guide/blog'],
        ['All Guides',         '/guide'],
      ] as [string,string][],
    },
    {
      title: 'Company',
      links: [
        ['About Us',           '/about'],
        ['Deals',              '/deals'],
        ['Privacy Policy',     '/privacy'],
        ['Terms of Service',   '/terms'],
        ['Advertising Disclosure', '/advertising-disclosure'],
      ] as [string,string][],
    },
  ]

  return (
    <>
      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0c1a3a 100%)',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position:'absolute', top:'-20%', left:'50%', transform:'translateX(-50%)', width:'70%', height:'80%', background:'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)', filter:'blur(40px)', pointerEvents:'none' }}/>
        <div style={{ position:'relative', zIndex:1, maxWidth:640, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(28px,4vw,46px)', color:'white', letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:16 }}>
            Ready to Find a Better<br/><span className="gradient-text">Internet Plan?</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:17, marginBottom:36, lineHeight:1.6 }}>Our experts are standing by, free, no obligation. Best deal at your address.</p>
          <div className="cta-btns" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap' }}>
            <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-white">📞 {siteConfig.phone}</a>
            <Link href="/#zip-widget" className="btn-outline-dark">Check My ZIP →</Link>
          </div>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, marginTop:20 }}>{siteConfig.hours} &nbsp;·&nbsp; Free &nbsp;·&nbsp; No Obligation</p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer style={{
        background: '#111827',  /* slightly lighter than pure black, ibex reference */
        padding: '60px 24px 0',
      }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>

          {/* Main grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr 1fr 1fr 1fr',
            gap: '0 40px',
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>

            {/* Brand column */}
            <div>
              <div style={{marginBottom:18}}>
                <SiteLogo variant="white" height={44} />
              </div>

              <p style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.65)',  /* was 0.3, now clearly readable */
                lineHeight: 1.75,
                maxWidth: 220,
                marginBottom: 20,
              }}>
                {siteConfig.legalName}, authorized retailer for all major internet providers nationwide.
              </p>

              <a
                href={`tel:${siteConfig.phone.replace(/\D/g,'')}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: '#a78bfa',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                📞 {siteConfig.phone}
              </a>
            </div>

            {/* Link columns */}
            {columns.map(col => (
              <div key={col.title}>
                {/* Column header, clearly visible */}
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'white',          /* was rgba(255,255,255,0.5), now solid white */
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: 20,
                }}>
                  {col.title}
                </h4>

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} style={{
                        color: 'rgba(255,255,255,0.75)',  /* was 0.35, now clearly readable */
                        fontSize: 14,
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                        transition: 'color 0.15s',
                        display: 'block',
                        lineHeight: 1.4,
                      }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            paddingBottom: 24,
          }}>
            {/* Trust badges */}
            <div style={{ display:'flex', gap:24, flexWrap:'wrap', alignItems:'center' }}>
              {[
                ['🔒', 'PCI DSS Certified'],
                              ].map(([icon, text]) => (
                <span key={text} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: 'rgba(255,255,255,0.6)',  /* was 0.25, now readable */
                }}>
                  <span style={{fontSize:14}}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            {/* Copyright + contact */}
            <div style={{ display:'flex', flexDirection:'column', gap:4, alignItems:'flex-end' }}>
              <span style={{ fontSize:12, color:'rgba(255,255,255,0.55)', fontFamily:'var(--font-display)' }}>
                © {new Date().getFullYear()} {siteConfig.legalName}
              </span>
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)', fontFamily:'var(--font-display)' }}>
                {siteConfig.address} &nbsp;·&nbsp;
                <a href={`mailto:${siteConfig.email}`} style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none' }}>{siteConfig.email}</a>
              </span>
            </div>
          </div>

          {/* Independent Authorized Dealer Disclaimer — Required for Google Ads compliance */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 20,
            paddingBottom: 16,
          }}>
            <p style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Independent Authorized Dealer — Not a Carrier
            </p>
            <p style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              maxWidth: 1100,
            }}>
              Adbyte Digital LLC DBA Compare Internet and Cable is an independent authorized dealer for the providers listed on this website. We hold direct dealer agreements authorizing us to sell their plans. We are not employed by, officially affiliated with, or acting as a representative of any carrier. All trademarks shown belong to their respective owners. Our authorization to sell Optimum, Frontier, T-Mobile, AT&T and Xfinity plans operates through Perfect Vision and DSI, an authorized master dealer.
            </p>
          </div>



        </div>
      </footer>
    </>
  )
}
