'use client'
import Image from 'next/image'

type Slug = 'att' | 'xfinity' | 'frontier' | 'optimum' | 'northeast-internet' | 'tmobile' | 'kinetic' | 'earthlink'

interface LogoConfig { src: string; naturalW: number; naturalH: number; alt: string }

const LOGOS: Record<Slug, { official: LogoConfig; authorized: LogoConfig }> = {
  att: {
    official:   { src:'/logos/att-official.svg',        naturalW:180,  naturalH:64,  alt:'AT&T' },
    authorized: { src:'/logos/att-authorized.jpg',      naturalW:349,  naturalH:144, alt:'AT&T' },
  },
  xfinity: {
    official:   { src:'/logos/xfinity-official.svg',    naturalW:200,  naturalH:56,  alt:'Xfinity' },
    authorized: { src:'/logos/xfinity-authorized.jpg',  naturalW:951,  naturalH:232, alt:'Xfinity' },
  },
  frontier: {
    official:   { src:'/logos/frontier-official.svg',   naturalW:230,  naturalH:56,  alt:'Frontier' },
    authorized: { src:'/logos/frontier-authorized.jpg', naturalW:1920, naturalH:692, alt:'Frontier' },
  },
  optimum: {
    official:   { src:'/logos/optimum-official.svg',    naturalW:200,  naturalH:56,  alt:'Optimum' },
    authorized: { src:'/logos/optimum-authorized.jpg',  naturalW:1920, naturalH:561, alt:'Optimum' },
  },
  'northeast-internet': {
    official:   { src:'/logos/optimum-official.svg',    naturalW:200,  naturalH:56,  alt:'Northeast Internet' },
    authorized: { src:'/logos/optimum-authorized.jpg',  naturalW:1920, naturalH:561, alt:'Northeast Internet' },
  },
  tmobile: {
    official:   { src:'/logos/tmobile-official.svg',    naturalW:200,  naturalH:54,  alt:'T-Mobile' },
    authorized: { src:'/logos/tmobile-authorized.jpg',  naturalW:266,  naturalH:93,  alt:'T-Mobile' },
  },
  kinetic: {
    official:   { src:'/logos/kinetic-authorized.jpg',  naturalW:1920, naturalH:622, alt:'Kinetic by Windstream' },
    authorized: { src:'/logos/kinetic-authorized.jpg',  naturalW:1920, naturalH:622, alt:'Kinetic by Windstream' },
  },
  earthlink: {
    official:   { src:'/logos/earthlink-authorized.jpg',naturalW:1500, naturalH:519, alt:'EarthLink' },
    authorized: { src:'/logos/earthlink-authorized.jpg',naturalW:1500, naturalH:519, alt:'EarthLink' },
  },
}

interface Props {
  slug: string
  variant?: 'official' | 'authorized'
  height?: number
  className?: string
  style?: React.CSSProperties
}

export default function ProviderLogo({ slug, variant = 'authorized', height = 40, className, style }: Props) {
  const map = LOGOS[slug as Slug]
  if (!map) return null
  const logo = map[variant] ?? map.authorized
  const displayW = Math.round(height * (logo.naturalW / logo.naturalH))
  return (
    <Image src={logo.src} alt={logo.alt} width={displayW} height={height}
      className={className}
      style={{ objectFit:'contain', maxWidth:'100%', display:'block', ...style }}
      unoptimized />
  )
}

export const PROVIDER_SLUGS: Slug[] = ['att','xfinity','frontier','northeast-internet','tmobile']
export const ALL_PARTNER_SLUGS: Slug[] = ['att','xfinity','frontier','northeast-internet','tmobile','kinetic','earthlink']
