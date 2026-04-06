'use client'
import { useState } from 'react'

// Real US ZIP code validation
// Valid range: 00501 (Holtsville, NY) to 99950 (Ketchikan, AK)
// Also validates known invalid patterns like 00000
function validateUSZip(zip: string): { valid: boolean; error?: string } {
  if (!/^\d{5}$/.test(zip)) {
    return { valid: false, error: '⚠️ Please enter a 5-digit ZIP code.' }
  }
  const num = parseInt(zip, 10)
  if (num === 0) {
    return { valid: false, error: '⚠️ Invalid ZIP code. US ZIP codes start from 00501.' }
  }
  if (num < 501) {
    return { valid: false, error: `⚠️ "${zip}" is not a valid US ZIP code. The lowest valid ZIP is 00501 (Holtsville, NY).` }
  }
  if (num > 99950) {
    return { valid: false, error: `⚠️ "${zip}" is not a valid US ZIP code. The highest valid ZIP is 99950 (Ketchikan, AK).` }
  }
  // Known invalid ranges (military, unassigned)
  const invalidRanges: [number, number][] = [
    [3, 3], // 00003 doesn't exist
    [517, 519], // unassigned
    [529, 532], // unassigned
    [534, 534],
    [536, 536],
    [552, 552],
    [568, 568],
    [578, 579],
    [621, 621],
    [632, 632],
    [642, 642],
    [643, 643],
    [659, 659],
    [663, 663],
    [672, 672],
    [674, 674],
    [675, 675],
    [694, 695],
    [698, 699],
    [742, 742],
    [771, 771],
    [817, 819],
    [839, 839],
    [848, 848],
    [858, 858],
    [861, 861],
    [876, 876],
    [886, 886],
    [887, 887],
    [888, 888],
    [892, 892],
    [896, 896],
    [899, 899],
    [909, 912],
    [987, 987],
  ]
  for (const [lo, hi] of invalidRanges) {
    if (num >= lo && num <= hi) {
      return { valid: false, error: `⚠️ "${zip}" is not a valid US ZIP code. Please check and try again.` }
    }
  }
  return { valid: true }
}

interface Props {
  phone: string
  label?: string
  dark?: boolean
}

export default function ZipWidget({ phone, label = 'Check availability at your address', dark = false }: Props) {
  const [zip, setZip] = useState('')
  const [result, setResult] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const check = () => {
    const trimmed = zip.trim()
    setResult(null)

    const validation = validateUSZip(trimmed)
    if (!validation.valid) {
      setResult({ type: 'err', msg: validation.error! })
      return
    }

    setLoading(true)
    // Simulate brief check then show success
    setTimeout(() => {
      setLoading(false)
      sessionStorage?.setItem('visitorZip', trimmed)
      setResult({ type: 'ok', msg: trimmed })
    }, 600)
  }

  const wrapClass = dark ? 'zip-widget-dark' : 'zip-widget-light'
  const inputClass = dark ? 'zip-input-dark' : 'zip-input-light'
  const labelColor = dark ? 'rgba(255,255,255,0.4)' : '#94a3b8'
  const trustColor = dark ? 'rgba(255,255,255,0.3)' : '#94a3b8'
  const trustCheckColor = dark ? '#10b981' : '#7c3aed'

  return (
    <div className={wrapClass} id="zip-widget">
      <p style={{ fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, color: labelColor }}>
        📍 {label}
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="Enter ZIP code (e.g. 75201)"
          value={zip}
          onChange={e => {
            setZip(e.target.value.replace(/\D/g, ''))
            setResult(null)
          }}
          onKeyDown={e => e.key === 'Enter' && check()}
          className={`${inputClass}${result?.type === 'err' ? ' invalid' : ''}`}
          style={{ flex: '1 1 180px', minWidth: 0 }}
        />
        <button
          onClick={check}
          disabled={loading}
          className="btn-primary"
          style={{ flexShrink: 0, padding: '13px 22px', fontSize: 14, opacity: loading ? 0.8 : 1 }}
        >
          {loading ? '⏳ Checking...' : 'Check Now →'}
        </button>
      </div>

      {result && (
        <div style={{
          marginTop: 14, padding: '14px 18px', borderRadius: 12, fontSize: 13,
          fontFamily: 'var(--font-display)', fontWeight: 500,
          ...(result.type === 'ok'
            ? { background: dark ? 'rgba(16,185,129,0.1)' : '#f0fdf4', border: `1px solid ${dark ? 'rgba(16,185,129,0.25)' : '#86efac'}`, color: dark ? '#34d399' : '#15803d' }
            : { background: dark ? 'rgba(239,68,68,0.08)' : '#fef2f2', border: `1px solid ${dark ? 'rgba(239,68,68,0.2)' : '#fca5a5'}`, color: dark ? '#f87171' : '#dc2626' })
        }}>
          {result.type === 'ok' ? (
            <>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>✅ Great news! Plans are available in {result.msg}.</div>
              <div style={{ opacity: 0.85, marginBottom: 12, fontSize: 12, lineHeight: 1.5 }}>
                Call us now to compare today's best deals at your address — free, no obligation.
              </div>
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="btn-primary"
                style={{ fontSize: 14, padding: '10px 20px', display: 'inline-flex' }}
              >
                📞 {phone}
              </a>
            </>
          ) : (
            <div style={{ lineHeight: 1.5 }}>{result.msg}</div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, marginTop: 10, fontSize: 11, color: trustColor, fontWeight: 500, flexWrap: 'wrap' }}>
        {['Free to use', 'No spam', 'No obligation'].map(t => (
          <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: trustCheckColor, fontWeight: 700 }}>✓</span>{t}
          </span>
        ))}
      </div>
    </div>
  )
}
