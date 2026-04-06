import Image from 'next/image'

const LOGOS = [
  { src:'/logos/att-authorized.jpg',      naturalW:349,  naturalH:144, displayH:40, alt:'AT&T'          },
  { src:'/logos/xfinity-authorized.jpg',  naturalW:951,  naturalH:232, displayH:36, alt:'Xfinity'    },
  { src:'/logos/frontier-authorized.jpg', naturalW:1920, naturalH:692, displayH:38, alt:'Frontier' },
  { src:'/logos/optimum-authorized.jpg',  naturalW:1920, naturalH:561, displayH:36, alt:'Optimum'     },
  { src:'/logos/tmobile-authorized.jpg',  naturalW:266,  naturalH:93,  displayH:34, alt:'T-Mobile'      },
  { src:'/logos/kinetic-authorized.jpg',  naturalW:1920, naturalH:622, displayH:36, alt:'Kinetic'        },
  { src:'/logos/earthlink-authorized.jpg',naturalW:1500, naturalH:519, displayH:32, alt:'EarthLink'   },
]

export default function AuthorizedLogoBar({ dark = false }: { dark?: boolean }) {
  const bg     = dark ? 'rgba(255,255,255,0.03)' : '#f8fafc'
  const border = dark ? 'rgba(255,255,255,0.08)' : '#e2e8f0'
  const label  = dark ? 'rgba(255,255,255,0.3)'  : '#94a3b8'
  const tripled = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <div style={{ background:bg, borderTop:`1px solid ${border}`, borderBottom:`1px solid ${border}`, padding:'18px 0', overflow:'hidden' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center' }}>
        <div style={{ flexShrink:0, paddingRight:24, fontSize:10, fontWeight:700, fontFamily:'var(--font-display)', color:label, textTransform:'uppercase', letterSpacing:'0.1em', whiteSpace:'nowrap', borderRight:`1px solid ${border}`, marginRight:24 }}>
          Providers We Work With
        </div>
        <div style={{ flex:1, overflow:'hidden' }}>
          <div style={{ display:'flex', alignItems:'center', gap:56, width:'max-content', animation:'marquee-ltr 36s linear infinite' }}>
            {tripled.map((logo, i) => {
              const dW = Math.round(logo.displayH * (logo.naturalW / logo.naturalH))
              return (
                <Image key={i} src={logo.src} alt={logo.alt} width={dW} height={logo.displayH}
                  style={{ objectFit:'contain', flexShrink:0, opacity:0.9 }} unoptimized />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
