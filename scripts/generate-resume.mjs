import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'Zahraa_Sharifeh_Resume.pdf')

const black = rgb(0, 0, 0)
const gray = rgb(0.25, 0.25, 0.27)

function wrap(text, font, size, maxWidth) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(next, size) > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

const doc = await PDFDocument.create()
const page = doc.addPage([612, 792])
const font = await doc.embedFont(StandardFonts.Helvetica)
const bold = await doc.embedFont(StandardFonts.HelveticaBold)

let y = 742
const left = 54
const width = 504

const h1 = (text) => {
  page.drawText(text, { x: left, y, size: 22, font: bold, color: black })
  y -= 22
}
const h2 = (text) => {
  y -= 10
  page.drawLine({ start: { x: left, y: y + 14 }, end: { x: left + width, y: y + 14 }, thickness: 1, color: black })
  y -= 6
  page.drawText(text.toUpperCase(), { x: left, y, size: 9, font: bold, color: black })
  y -= 16
}
const para = (text, size = 10) => {
  for (const line of wrap(text, font, size, width)) {
    if (y < 60) break
    page.drawText(line, { x: left, y, size, font, color: gray })
    y -= size + 4
  }
  y -= 4
}
const item = (title, body) => {
  page.drawText(title, { x: left, y, size: 11, font: bold, color: black })
  y -= 14
  para(body, 10)
}

h1('Zahraa Sharifeh')
page.drawText('Full-Stack Engineer  ·  Beirut', { x: left, y, size: 12, font, color: gray })
y -= 16
for (const line of wrap(
  'zahraasharifeh2003@gmail.com  ·  linkedin.com/in/zahraa-sharifeh-2a7614276  ·  github.com/zahraa-sharifeh',
  font,
  9,
  width,
)) {
  page.drawText(line, { x: left, y, size: 9, font, color: gray })
  y -= 12
}
y -= 4

h2('Summary')
para(
  'Full-stack engineer building production React/TypeScript systems with Postgres tenancy, Node APIs, and React Native. Recent work: multi-tenant nonprofit SaaS, construction pricing and tender commerce, a Lebanon marketplace with chat and dispatch, and a civic reporting platform (Master 1 thesis).',
)

h2('Selected work')
item(
  'NGOreality  —  ngoreality.com',
  'Multi-tenant trust platform for nonprofits: public directory and badges on Supabase Postgres with RLS; schema-per-tenant Go CRM for case records; membership pricing (GST-exclusive), payment ledger, website monitors and notification jobs. React + TypeScript product surfaces (public, staff CRM, NGO portal). Isolation is a single acquire path, not a shared-table guess.',
)
item(
  'QSME  —  qsme.io',
  'Construction SaaS: plans to bill of quantities, tender levelling, contracts, variations, and progress payments. Multi-role access (client / builder / trade). NZ GST and NZBN rules. Pricing and money-movement work in the same class as negotiated commerce.',
)
item(
  'Lebalist  —  lebalist.com',
  'Lebanon marketplace: Expo / React Native app, Next.js public site and super-admin, Go API, Postgres. Listings, feed, chat, on-demand dispatch, local payments (OMT, Whish, cash) without a card-checkout requirement.',
)
item(
  'City Care  —  citycarelb.netlify.app',
  'Master 1 thesis. Citizens report urban issues with photos and GPS; district admins see only their area. Node.js, Express, MongoDB, two React apps, JWT roles, GeoJSON, Arabic/English RTL. Admin demo: citycareadminlb.netlify.app.',
)

h2('Education')
page.drawText('Lebanese University — Faculty of Sciences', { x: left, y, size: 11, font: bold, color: black })
y -= 14
para('Master 2, Information Systems and Data Intelligence (ISDI) — accepted.')
para('Master 1, Computer Science — City Care thesis (live civic platform).')
para('Bachelor of Science, Computer Science.')

h2('Earlier')
page.drawText('MERN stack — Techlarious / Two of Us, Jbeil', { x: left, y, size: 11, font: bold, color: black })
y -= 14
para('HTML, CSS, JavaScript, Git; React + Node apps; team e-commerce; API work with Postman and MongoDB.')

h2('Skills')
para(
  'React, TypeScript, JavaScript, HTML/CSS, Next.js, Tailwind, React Native / Expo, Node.js, Express, Go, PostgreSQL, MongoDB, Supabase (Auth, RLS), JWT. Deploys on Vercel, Railway, Netlify. Git, GitHub, Postman, Vite. AI agents: Cursor, Claude, ChatGPT, GitHub Copilot, MCP.',
)

await mkdir(dirname(outPath), { recursive: true })
await writeFile(outPath, await doc.save())
console.log('Wrote', outPath)
