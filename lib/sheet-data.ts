/**
 * lib/sheet-data.ts
 *
 * Reads provider_data_requirements.xlsx at build time.
 *
 * HOW TO UPDATE DATA:
 * 1. Open your Google Sheet
 * 2. File → Download → Microsoft Excel (.xlsx)
 * 3. Replace /data/provider_data_requirements.xlsx
 * 4. Run: npm run build
 * 5. Deploy /out folder to Cloudflare Pages
 *
 * AUTO-SYNC (CI/CD):
 * Set GOOGLE_SHEET_ID + GOOGLE_API_KEY in Cloudflare Pages env vars.
 * Change build command to: node scripts/fetch-sheet.js && npm run build
 */

import * as XLSX from 'xlsx'
import * as fs from 'fs'
import * as path from 'path'

// ── TYPES ─────────────────────────────────────────────────────────────────────

export interface Plan {
  name: string
  down: string
  up: string
  price: string
  promo: string
  contract: string
  cap: string
  sym: boolean
}

export interface ProviderData {
  slug: string
  name: string
  legal: string
  color: string
  color2: string
  technology: string
  badge: string
  tagline: string
  maxSpeed: string
  fromPrice: string
  availability: string
  noContract: boolean
  noDataCap: boolean
  freeInstall: boolean
  freeEquipment: boolean
  rating: number
  reviewCount: number
  scores: Record<string, number>
  plans: Plan[]
  pros: string[]
  cons: string[]
  promo: string
  promoDetail: string
  bundles: Record<string, string>
  autopayDiscount: string
}

export interface DealData {
  provider: string
  slug: string
  color: string
  plan: string
  badge: string
  price: string
  promoPrice: string
  perks: string[]
  expiry: string
  autopay: string
}

export interface SiteConfig {
  phone: string
  hours: string
  email: string
  legalName: string
  address: string
  foundedYear: string
}

export interface SheetData {
  providers: Record<string, ProviderData>
  deals: DealData[]
  siteConfig: SiteConfig
}

// ── PROVIDER META (brand colors, not in the sheet) ───────────────────────────

const PROVIDER_META: Record<string, {
  slug: string; color: string; color2: string; badge: string; tagline: string
}> = {
  'AT&T':     { slug:'att',      color:'#00A8E0', color2:'#005A9C', badge:'⭐ Best Fiber',       tagline:'Pure fiber speeds with symmetrical upload, built for power users.' },
  'Xfinity':  { slug:'xfinity',  color:'#CC0000', color2:'#990000', badge:'📡 Widest Coverage',  tagline:'The widest broadband network in America, fast, reliable, flexible.' },
  'Frontier': { slug:'frontier', color:'#E31837', color2:'#b01228', badge:'⚡ Fastest Upload',   tagline:'100% pure fiber, the fastest upload speeds available anywhere.' },
  'Optimum':  { slug:'northeast-internet',  color:'#0057B8', color2:'#003d8a', badge:'💰 Best Value',       tagline:'Competitive pricing and growing fiber network across the Northeast US.' },
  'T-Mobile': { slug:'tmobile',  color:'#E20074', color2:'#b8005d', badge:'📶 No Installation', tagline:'No wires, no technician, plug in and connect in minutes.' },
}

// ── FILE FINDER ───────────────────────────────────────────────────────────────

function findXlsx(): string | null {
  // Try multiple locations for resilience across different environments
  const candidates = [
    path.resolve(process.cwd(), 'data', 'provider_data_requirements.xlsx'),
    path.resolve(process.cwd(), '.next', 'server', 'data', 'provider_data_requirements.xlsx'),
    path.resolve(process.cwd(), 'public', 'data', 'provider_data_requirements.xlsx'),
    path.resolve(__dirname, '..', 'data', 'provider_data_requirements.xlsx'),
    path.resolve(__dirname, '..', '..', 'data', 'provider_data_requirements.xlsx'),
    path.resolve(__dirname, '..', '..', '..', 'data', 'provider_data_requirements.xlsx'),
    path.resolve(__dirname, '..', '..', '..', '..', 'data', 'provider_data_requirements.xlsx'),
  ]
  for (const p of candidates) {
    try {
      fs.accessSync(p, fs.constants.R_OK)
      return p
    } catch {
      // try next
    }
  }
  return null
}

// ── SHEET PARSER ──────────────────────────────────────────────────────────────

function parseProviders(wb: XLSX.WorkBook): Record<string, ProviderData> {
  const ws = wb.Sheets['📡 Provider Plans']
  if (!ws) return buildFallbackProviders()

  const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }) as string[][]

  const headerRow = raw.find(r => r.some(c => c === 'AT&T'))
  if (!headerRow) return buildFallbackProviders()

  const providerCols: Record<string, number> = {}
  headerRow.forEach((cell, i) => {
    const n = String(cell).trim()
    if (PROVIDER_META[n]) providerCols[n] = i
  })

  const labelMap: Record<string, string[]> = {}
  raw.forEach(row => {
    const label = String(row[1] || '').trim()
    if (label && label.length > 0) {
      labelMap[label] = row.map(c => String(c || '').trim())
    }
  })

  const providers: Record<string, ProviderData> = {}

  for (const [pName, meta] of Object.entries(PROVIDER_META)) {
    const col = providerCols[pName]
    if (col === undefined) continue

    const get = (label: string): string => labelMap[label]?.[col] || ''

    const plans: Plan[] = []
    for (let i = 1; i <= 4; i++) {
      const planName = get(`Plan ${i}, Name`)
      if (!planName || planName.startsWith('[') || planName.startsWith('e.g.')) continue
      plans.push({
        name:     planName,
        down:     get(`Plan ${i}, Download speed`),
        up:       get(`Plan ${i}, Upload speed`),
        price:    get(`Plan ${i}, Monthly price`),
        promo:    get(`Plan ${i}, Monthly price`),
        contract: get(`Plan ${i}, Contract term`) || 'No contract',
        cap:      get(`Plan ${i}, Data cap`) || 'None',
        sym:      get(`Plan ${i}, Upload speed`).toLowerCase().includes('sym'),
      })
    }

    const fromP = (() => {
      if (!plans.length) return '$40'
      const prices = plans
        .map(p => parseFloat(p.price.replace(/[^0-9.]/g, '')))
        .filter(n => !isNaN(n) && n > 0)
      return prices.length ? `$${Math.min(...prices)}` : '$40'
    })()

    providers[meta.slug] = {
      slug:            meta.slug,
      name:            pName,
      legal:           get('Provider legal name') || pName,
      color:           meta.color,
      color2:          meta.color2,
      technology:      get('Technology type') || 'Fiber',
      badge:           meta.badge,
      tagline:         meta.tagline,
      maxSpeed:        get('Max download speed offered') || '1 Gbps',
      fromPrice:       fromP,
      availability:    get('States served (list or count)') || 'Nationwide',
      noContract:      get('Contract required?').toLowerCase() === 'no',
      noDataCap:       (get('Plan 1, Data cap') || 'None').toLowerCase() === 'none',
      freeInstall:     (get('Installation fee') || '$0').includes('$0') || get('Installation fee').toLowerCase().includes('free'),
      freeEquipment:   (get('Equipment / modem fee') || '$0').includes('$0'),
      rating:          4.5,
      reviewCount:     50,
      scores:          { Speed:5, Reliability:5, Value:5, Service:5, Installation:5 },
      plans,
      pros: [
        'No annual contract required',
        'No data caps on any plan',
        'Free equipment included',
        'Free professional installation',
      ],
      cons: [
        `Available in ${get('States served (list or count)') || 'select areas'}, check your address`,
        '[Update with agent experience notes]',
      ],
      promo:           'Contact us for current promotions at your address',
      promoDetail:     'New customers only. Requires autopay. Taxes extra.',
      bundles:         {},
      autopayDiscount: get('Autopay / paperless discount') || '$10/mo',
    }
  }

  // Merge: fallback provides all 5 providers, xlsx data overrides where available
  const fallback = buildFallbackProviders()
  return { ...fallback, ...providers }
}

function parseDeals(wb: XLSX.WorkBook, providers: Record<string, ProviderData>): DealData[] {
  const ws = wb.Sheets['🎁 Deals & Promotions']
  if (!ws) return buildFallbackDeals(providers)

  const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }) as string[][]
  const headerRow = raw.find(r => r.some(c => c === 'AT&T'))
  if (!headerRow) return buildFallbackDeals(providers)

  const providerCols: Record<string, number> = {}
  headerRow.forEach((cell, i) => {
    const n = String(cell).trim()
    if (PROVIDER_META[n]) providerCols[n] = i
  })

  const labelMap: Record<string, string[]> = {}
  raw.forEach(row => {
    const label = String(row[1] || '').trim()
    if (label) labelMap[label] = row.map(c => String(c || '').trim())
  })

  const deals: DealData[] = []

  for (const [pName, meta] of Object.entries(PROVIDER_META)) {
    const col = providerCols[pName]
    if (col === undefined) continue
    const get = (label: string) => labelMap[label]?.[col] || ''

    const promoName   = get('Current promo name / label')
    const giftCard    = get('Gift card amount ($)')
    const freeInstall = get('Installation fee waived?')
    const freeEquip   = get('Equipment fee waived?')
    const freeMonths  = get('Free months included?')

    const perks: string[] = []
    if (promoName && !promoName.startsWith('[') && !promoName.startsWith('e.g.')) perks.push(promoName)
    if (giftCard && giftCard !== '0' && giftCard !== 'No' && giftCard.length) perks.push(`Promotional gift card valued at \$${giftCard} with new activation`)
    if (freeInstall === 'Yes') perks.push('Free installation included')
    if (freeEquip === 'Yes')   perks.push('Free equipment included')
    if (freeMonths && freeMonths !== 'No' && freeMonths.length) perks.push(`${freeMonths} free`)

    const prov = providers[meta.slug]
    const fromPrice = prov?.fromPrice?.replace('$','') || '40'

    if (perks.length > 0) {
      deals.push({
        provider:   pName,
        slug:       meta.slug,
        color:      meta.color,
        plan:       prov?.plans[2]?.name || prov?.plans[0]?.name || 'Internet Plan',
        badge:      (giftCard && giftCard !== '0' && giftCard !== 'No') ? '⚡ Fast Upload' : '🔥 Current Deal',
        price:      fromPrice,
        promoPrice: fromPrice,
        perks,
        expiry:     'Limited time',
        autopay:    get('Promo requires autopay?') || 'Yes',
      })
    }
  }

  return deals.length ? deals : buildFallbackDeals(providers)
}

function parseSiteConfig(): SiteConfig {
  return {
    phone:       '(844) 954-6634',
    hours:       'Mon–Sun · 9am–5pm CST',
    email:       'support@compareinternetandcable.com',
    legalName:   'Adbyte Digital LLC DBA Compare Internet and Cable',
    address:     '5830 E 2nd St, Ste 7000-26401, Casper, WY 82609',
    foundedYear: '2023',
  }
}

// ── FALLBACKS ─────────────────────────────────────────────────────────────────

function buildFallbackProviders(): Record<string, ProviderData> {
  return {
    att: {
      slug:'att', name:'AT&T', legal:'AT&T Inc.', color:'#00A8E0', color2:'#005A9C',
      technology:'Fiber + 5G Air', badge:'⭐ Best Fiber', tagline:'Pure fiber speeds with symmetrical upload.',
      maxSpeed:'5 Gbps', fromPrice:'$65', availability:'21 states',
      noContract:true, noDataCap:true, freeInstall:true, freeEquipment:true,
      rating:4.5, reviewCount:55, scores:{Speed:5,Reliability:5,Value:5,Service:5,Installation:5},
      plans:[
        {name:'AT&T Fiber 300',   down:'300 Mbps',   up:'300 Mbps',   price:'$65/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'AT&T Fiber 500',   down:'500 Mbps',   up:'500 Mbps',   price:'$75/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'AT&T Fiber 1 Gig', down:'1,000 Mbps', up:'1,000 Mbps', price:'$90/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'AT&T Air (5G Fixed Wireless)', down:'Up to 300 Mbps', up:'Up to 25 Mbps', price:'$60/mo', promo:'w/ AutoPay ($65/mo without AutoPay)', contract:'No contract', cap:'None', sym:false},
      ],
      pros:['Symmetrical upload & download speeds','No data caps on any plan','No annual contract','Free equipment & installation'],
      cons:['Limited to 21 states, check your address','Availability varies by neighborhood'],
      promo:'Get 1 Gig for the price of 300 Mbps', promoDetail:'New customers. Requires autopay. Taxes extra.',
      bundles:{TV:'AT&T TV', Mobile:'AT&T Wireless'}, autopayDiscount:'$10/mo',
    },
    xfinity: {
      slug:'xfinity', name:'Xfinity', legal:'Comcast / Xfinity', color:'#CC0000', color2:'#990000',
      technology:'Cable + Fiber', badge:'📡 Widest Coverage', tagline:'The widest broadband network in America.',
      maxSpeed:'1.2 Gbps', fromPrice:'$40', availability:'41 states',
      noContract:true, noDataCap:true, freeInstall:true, freeEquipment:true,
      rating:4.3, reviewCount:3240, scores:{Speed:4,Reliability:4,Value:5,Service:4,Installation:4},
      plans:[
        {name:'Xfinity 300',  down:'300 Mbps',   up:'300 Mbps',   price:'$40/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Xfinity 500',  down:'500 Mbps',   up:'500 Mbps',   price:'$45/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Xfinity 1 Gig',     down:'1,000 Mbps', up:'1,000 Mbps', price:'$50/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:false},
      ],
      pros:['Widest coverage across 41 states','Flexible plans for every budget','Bundle with Xfinity Mobile','Free equipment & installation'],
      cons:['Upload speeds lower than fiber','1.2 TB data cap on some cable plans'],
      promo:'Check availability for current Xfinity promotions at your address', promoDetail:'New customers. Requires autopay. Taxes extra.',
      bundles:{TV:'Xfinity TV', Mobile:'Xfinity Mobile', Security:'Xfinity Home'}, autopayDiscount:'$10/mo',
    },
    frontier: {
      slug:'frontier', name:'Frontier', legal:'Frontier Communications', color:'#E31837', color2:'#b01228',
      technology:'100% Fiber', badge:'⚡ Fastest Upload', tagline:'100% pure fiber, fastest upload speeds anywhere.',
      maxSpeed:'5 Gbps', fromPrice:'$40', availability:'25 states',
      noContract:true, noDataCap:true, freeInstall:true, freeEquipment:true,
      rating:4.5, reviewCount:1203, scores:{Speed:5,Reliability:5,Value:5,Service:4,Installation:4},
      plans:[
        {name:'Frontier Fiber 200',  down:'200 Mbps',   up:'200 Mbps',   price:'$39.99/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Frontier Fiber 500',  down:'500 Mbps',   up:'500 Mbps',   price:'$29.99/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Frontier Fiber 1 Gig',down:'1,000 Mbps', up:'1,000 Mbps', price:'$49.99/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
      ],
      pros:['100% pure fiber network','Symmetrical upload & download','No data caps','Fastest symmetrical upload speeds'],
      cons:['Available in 25 states, check your address'],
      promo:'3 free months with autopay + fastest upload speeds', promoDetail:'New customers. $49.99/mo after 3 months. Taxes extra.',
      bundles:{TV:'Frontier TV'}, autopayDiscount:'$10/mo',
    },
    'northeast-internet': {
      slug:'northeast-internet', name:'Northeast Internet', legal:'Northeast Internet (via PerfectVision)', color:'#0057B8', color2:'#003d8a',
      technology:'Fiber + Cable', badge:'💰 Best Value', tagline:'Competitive pricing and growing fiber network across the Northeast US.',
      maxSpeed:'2 Gbps', fromPrice:'$35', availability:'NY, NJ, CT, PA & more',
      noContract:true, noDataCap:true, freeInstall:true, freeEquipment:true,
      rating:4.2, reviewCount:892, scores:{Speed:4,Reliability:4,Value:5,Service:4,Installation:4},
      plans:[
        {name:'Northeast 300 Mbps Fiber', down:'300 Mbps',   up:'300 Mbps',   price:'$35/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Northeast 500 Mbps Fiber', down:'500 Mbps',   up:'500 Mbps',   price:'$45/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:true},
        {name:'Northeast 1 Gig Fiber',    down:'1,000 Mbps', up:'1,000 Mbps', price:'$55/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:false},
      ],
      pros:['Lowest starting prices in our lineup','No data caps on any plan','No annual contract','Mobile bundle available'],
      cons:['Primarily Northeast US coverage','Fiber availability varies by address'],
      promo:'Check availability for current promotions at your address', promoDetail:'New customers. Requires autopay. Taxes extra.',
      bundles:{TV:'Northeast TV', Mobile:'Northeast Mobile'}, autopayDiscount:'$10/mo',
    },
    tmobile: {
      slug:'tmobile', name:'T-Mobile', legal:'T-Mobile Home Internet', color:'#E20074', color2:'#b8005d',
      technology:'5G / 4G LTE', badge:'📶 No Installation', tagline:'No wires, no technician, plug in and connect.',
      maxSpeed:'245 Mbps avg', fromPrice:'$55', availability:'Most US ZIP codes',
      noContract:true, noDataCap:true, freeInstall:true, freeEquipment:true,
      rating:4.1, reviewCount:2156, scores:{Speed:4,Reliability:3,Value:4,Service:4,Installation:5},
      plans:[
        {name:'T-Mobile Rely Home Internet',      down:'Up to 300 Mbps', up:'Up to 300 Mbps', price:'$55/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:false},
        {name:'T-Mobile Amplified Home Internet', down:'Up to 400 Mbps', up:'Up to 400 Mbps', price:'$65/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:false},
        {name:'T-Mobile All-In Home Internet',    down:'Up to 400 Mbps', up:'Up to 400 Mbps', price:'$75/mo', promo:'for 12 mos. + taxes', contract:'No contract', cap:'None', sym:false},
      ],
      pros:['No installation appointment needed','Gateway shipped to your door','No annual contract','Discounts for T-Mobile customers'],
      cons:['Speed varies by network congestion','Lower average speeds than fiber'],
      promo:'Check availability for current T-Mobile promotions at your address', promoDetail:'New customers. Requires autopay. Taxes extra.',
      bundles:{Mobile:'T-Mobile Wireless'}, autopayDiscount:'$10/mo',
    },
  }
}

function buildFallbackDeals(providers: Record<string, ProviderData>): DealData[] {
  return [
    { provider:'AT&T Fiber', slug:'att', color:'#00A8E0', plan:'1 Gig Internet', badge:'🎁 Best Value',
      price:'90', promoPrice:'65', perks:['Get 1 Gig for the price of 300 Mbps','Free installation','No annual contract'], expiry:'Limited time', autopay:'Yes' },
    { provider:'Frontier', slug:'frontier', color:'#E31837', plan:'Fiber 1 Gig', badge:'⚡ Fast Upload',
      price:'65', promoPrice:'49.99', perks:['Blazing fast symmetrical upload speeds','3 months free with autopay','Pure 1 Gbps fiber speeds'], expiry:'Limited time', autopay:'Yes' },
    { provider:'T-Mobile', slug:'tmobile', color:'#E20074', plan:'Home Internet', badge:'📶 No Install',
      price:'65', promoPrice:'55', perks:['No installation appointment needed','Gateway shipped free to your door','No annual contract'], expiry:'While supplies last', autopay:'Yes' },
  ]
}

// ── PUBLIC API ─────────────────────────────────────────────────────────────────

let _cache: SheetData | null = null

export function getSheetData(): SheetData {
  if (_cache) return _cache

  const xlsxPath = findXlsx()

  if (!xlsxPath) {
    console.warn('[sheet-data] xlsx not found, using fallback data')
    _cache = {
      providers:  buildFallbackProviders(),
      deals:      buildFallbackDeals(buildFallbackProviders()),
      siteConfig: parseSiteConfig(),
    }
    return _cache
  }

  try {
    const wb = XLSX.readFile(xlsxPath)
    const providers = parseProviders(wb)
    _cache = {
      providers,
      deals:      parseDeals(wb, providers),
      siteConfig: parseSiteConfig(),
    }
  } catch (e) {
    console.warn('[sheet-data] Error reading xlsx, using fallback:', e)
    _cache = {
      providers:  buildFallbackProviders(),
      deals:      buildFallbackDeals(buildFallbackProviders()),
      siteConfig: parseSiteConfig(),
    }
  }

  return _cache
}
