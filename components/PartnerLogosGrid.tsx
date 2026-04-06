import Image from 'next/image'
import Link from 'next/link'

const PARTNERS = [
  { src:'/logos/att-authorized.jpg',      w:349,  h:144, displayH:60, alt:'AT&T',          href:'/providers/att'      },
  { src:'/logos/xfinity-authorized.jpg',  w:951,  h:232, displayH:50, alt:'Xfinity',    href:'/providers/xfinity'  },
  { src:'/logos/frontier-authorized.jpg', w:1920, h:692, displayH:56, alt:'Frontier', href:'/providers/frontier' },
  { src:'/logos/optimum-authorized.jpg',  w:1920, h:561, displayH:52, alt:'Optimum',     href:'/providers/northeast-internet'  },
  { src:'/logos/tmobile-authorized.jpg',  w:266,  h:93,  displayH:48, alt:'T-Mobile',      href:'/providers/tmobile'  },
  { src:'/logos/kinetic-authorized.jpg',  w:1920, h:622, displayH:52, alt:'Kinetic',        href:'/internet'           },
  { src:'/logos/earthlink-authorized.jpg',w:1500, h:519, displayH:46, alt:'EarthLink',   href:'/internet'           },
]

export default function PartnerLogosGrid() {
  return (
    <section style={{ background:'#ffffff', padding:'80px 24px', borderTop:'1px solid #f1f5f9' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>

        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span style={{ fontSize:11, fontWeight:700, fontFamily:'var(--font-display)', textTransform:'uppercase', letterSpacing:'0.12em', color:'#7c3aed', display:'block', marginBottom:14 }}>
            Providers We Work With
          </span>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(28px,4vw,44px)', color:'#0f172a', letterSpacing:'-0.03em', lineHeight:1.15, marginBottom:10 }}>
            Meet the Internet Providers{' '}
            <span className="gradient-text">We Partner With</span>
          </h2>
          <p style={{ fontSize:13, color:'#64748b', marginBottom:18, textAlign:'center' }}>Compare Internet & Cable (Adbyte Digital LLC) is an independent authorized dealer — not an employee, official representative, or corporate affiliate of any internet service provider shown below. All carrier names, logos, and trademarks are the property of their respective owners and are displayed here under our authorized dealer agreements.</p>
          <p style={{ color:'#64748b', fontSize:16, maxWidth:560, margin:'0 auto', lineHeight:1.75 }}>
          </p>
        </div>

        {/* 7 logos — 4 top row, 3 bottom row centered */}
        <div style={{ display:'flex', flexDirection:'column', gap:20, marginBottom:44 }}>
          {/* Row 1: 4 logos */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {PARTNERS.slice(0,4).map((p,i) => {
              const dW = Math.round(p.displayH * (p.w / p.h))
              return (
                <Link key={i} href={p.href} style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'36px 28px', background:'#ffffff', border:'1.5px solid #e8eaf0', borderRadius:18, textDecoration:'none', minHeight:130 }}>
                  <Image src={p.src} alt={p.alt} width={dW} height={p.displayH} style={{ objectFit:'contain', maxWidth:'100%', maxHeight:p.displayH }} unoptimized />
                </Link>
              )
            })}
          </div>
          {/* Row 2: 3 logos centered */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, maxWidth:825, margin:'0 auto', width:'100%' }}>
            {PARTNERS.slice(4).map((p,i) => {
              const dW = Math.round(p.displayH * (p.w / p.h))
              return (
                <Link key={i} href={p.href} style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'36px 28px', background:'#ffffff', border:'1.5px solid #e8eaf0', borderRadius:18, textDecoration:'none', minHeight:130 }}>
                  <Image src={p.src} alt={p.alt} width={dW} height={p.displayH} style={{ objectFit:'contain', maxWidth:'100%', maxHeight:p.displayH }} unoptimized />
                </Link>
              )
            })}
          </div>
        </div>

        <div style={{ textAlign:'center' }}>
          <Link href="/providers" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'#7c3aed', fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, textDecoration:'none', padding:'13px 32px', border:'1.5px solid #ddd6fe', borderRadius:12, background:'#faf5ff' }}>
            See All Providers →
          </Link>
        </div>
      </div>
    </section>
  )
}
