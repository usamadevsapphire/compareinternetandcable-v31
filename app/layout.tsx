import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import AffiliateBar from '@/components/AffiliateBar'
import Footer from '@/components/Footer'
import { getSheetData } from '@/lib/sheet-data'

const SITE_URL = 'https://compareinternetandcable.com'
const SITE_NAME = 'Compare Internet & Cable'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Compare Internet & Cable Plans — Best Deals at Your Address',
    template: '%s | Compare Internet & Cable',
  },
  description: 'Compare AT&T, Xfinity, Frontier, Optimum & T-Mobile internet plans side by side. Authorized dealer — get exclusive deals, matching standard provider pricing. Free to use. Call (844) 954-6634.',
  keywords: [
    'compare internet plans','best internet deals','internet service providers near me',
    'AT&T internet','Xfinity internet deals','Frontier fiber internet',
    'Optimum internet','T-Mobile home internet','fiber internet plans',
    'cable internet','5G home internet','cheap internet plans',
    'authorized internet dealer','internet promotions 2026','bundle deals internet cable',
    'high speed internet','broadband deals','internet near me',
  ],
  authors: [{ name: 'Adbyte Digital LLC DBA Compare Internet and Cable' }],
  creator: 'Adbyte Digital LLC',
  publisher: 'Compare Internet and Cable',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [{ url: '/logos/site-icon.svg', type: 'image/svg+xml' }],
    apple: '/logos/site-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Compare Internet & Cable Plans — Exclusive Authorized Dealer Deals',
    description: 'Find the best internet plan at your address. We compare AT&T, Xfinity, Frontier, Optimum & T-Mobile — authorized dealer pricing, exclusive promotions, free to use.',
    images: [{ url: '/logos/site-logo.svg', width: 200, height: 200, alt: 'Compare Internet & Cable' }],
  },
  twitter: {
    card: 'summary',
    title: 'Compare Internet & Cable Plans',
    description: 'Authorized dealer for AT&T, Xfinity, Frontier, Optimum & T-Mobile. Find exclusive internet deals at your address.',
  },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { siteConfig, providers } = getSheetData()

  // JSON-LD structured data
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compare Internet and Cable',
    legalName: 'Adbyte Digital LLC DBA Compare Internet and Cable',
    url: SITE_URL,
    telephone: siteConfig.phone,
    email: 'info@compareinternetandcable.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5830 E 2nd St, Ste 7000-26401',
      addressLocality: 'Casper',
      addressRegion: 'WY',
      postalCode: '82609',
      addressCountry: 'US',
    },
    openingHours: 'Mo-Su 09:00-17:00',
    priceRange: 'Free service',
    description: 'Authorized dealer for AT&T, Xfinity, Frontier, Optimum and T-Mobile internet service providers. Compare plans, find exclusive deals, and get the best internet price at your address.',
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: 'Internet Service Comparison and Sales',
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/providers/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/site-icon.svg" type="image/svg+xml" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </head>
      <body>
        <AffiliateBar />
        <Header siteConfig={siteConfig} providers={providers} />
        <main>{children}</main>
        <Footer siteConfig={siteConfig} providers={providers} />
        {/* Mobile sticky CTA */}
        <div className="show-mobile" style={{
          position:'fixed', bottom:0, left:0, right:0, zIndex:50,
          background:'linear-gradient(135deg,#7c3aed,#5b21b6)',
          padding:'14px 24px', textAlign:'center',
          boxShadow:'0 -4px 24px rgba(124,58,237,0.3)',
        }}>
          <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} style={{
            color:'white', textDecoration:'none', fontFamily:'var(--font-display)',
            fontWeight:700, fontSize:'15px', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
          }}>
            📞 Call Free: {siteConfig.phone}
          </a>
        </div>
      </body>
    </html>
  )
}
