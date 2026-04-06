const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'data', 'provider_data_requirements.xlsx')
const targets = [
  path.join(__dirname, '..', '.next', 'server', 'data', 'provider_data_requirements.xlsx'),
  path.join(__dirname, '..', 'public', 'data', 'provider_data_requirements.xlsx'),
]

if (!fs.existsSync(src)) {
  console.log('[prebuild] No xlsx found at', src, '— using fallback data')
  process.exit(0)
}

targets.forEach(dest => {
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
  console.log('[prebuild] Copied xlsx to', dest)
})
