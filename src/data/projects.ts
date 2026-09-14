export type Project = {
  id: string
  number: string
  title: string
  tagline: string
  summary: string
  liveUrl?: string
  extraLinks?: { label: string; href: string }[]
  stack: string[]
  problem: string
  architecture: string[]
  hardParts: { title: string; body: string }[]
  owned: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    id: 'ngoreality',
    number: '01',
    title: 'NGOreality',
    tagline: 'Multi-tenant trust infrastructure for nonprofits',
    summary:
      'A production SaaS for charity verification, a public directory, staff CRM, membership billing, and a schema-per-tenant workspace for case records. Closest analogue I have to a regulated multi-tenant platform: two data planes, Postgres, row-level security, and a payment ledger.',
    liveUrl: 'https://www.ngoreality.com/',
    stack: [
      'React',
      'TypeScript',
      'Supabase Postgres',
      'RLS',
      'Go workers',
      'Vercel',
      'Railway',
    ],
    problem:
      'Charities need a public, trusted presence. Their beneficiary records cannot live in the same blast radius as a public directory. The product has to isolate tenants, take membership money, import a national registry, and keep staff CRM and NGO portals on one identity.',
    architecture: [
      'Public trust layer: React + Supabase Postgres (auth, RLS, directory, badges, memberships, website monitors).',
      'Private tenant layer: Go CRM on its own Railway Postgres, schema-per-tenant (`tenant_<slug>`).',
      'One identity: Supabase Auth JWTs (ES256 / JWKS). The CRM verifies the same token — no second password.',
      'Isolation boundary: `registry.Acquire` pins `search_path` to one tenant schema; `public` is excluded so queries cannot fall through.',
      'Background work: Go worker for uptime monitors, notification events, and retries — not a request-path job.',
    ],
    hardParts: [
      {
        title: 'Tenant isolation',
        body: 'Shared-schema RLS for the public registry; schema-per-tenant for case records. A compromise of the directory must not reach client notes. Isolation is tested, not assumed.',
      },
      {
        title: 'Registry import',
        body: 'Imported ~29k charity records with upsert on `(source_registry, external_id)` so re-runs do not duplicate. Staff lists paginate; aggregates go through RPCs, not `select *` in the browser.',
      },
      {
        title: 'Pricing and money',
        body: 'GST-exclusive membership prices, payment references per organisation, and a ledger of organisation payments. Webhook-shaped flows are designed for idempotent application — money rows are not updated twice for the same event.',
      },
      {
        title: 'Jobs and monitors',
        body: 'Website monitors and notification queues run as a worker with retries. Same job class as BullMQ: scheduled work, failure, retry, no duplicate sends.',
      },
    ],
    owned: [
      'React/TypeScript product surfaces: public site, staff CRM, NGO portal.',
      'Postgres schema and RLS-aware data access for directory, memberships, and payments.',
      'Workspace CRM flows against the tenant API.',
      'Reviewing generated code before it ships, with a technical lead in the loop.',
    ],
    outcome:
      'Live at ngoreality.com. The architecture is the one I would defend to a CTO: two data planes, one identity, tenant isolation as a single function, not a policy copied onto every table.',
  },
  {
    id: 'qsme',
    number: '02',
    title: 'QSME',
    tagline: 'Plans → BOQ → tenders → contracts → payments',
    summary:
      'Construction SaaS for New Zealand quantity surveying and project cost. The product is a pricing and commerce engine: generate a bill of quantities, invite trades, level quotes, award contracts, track variations, and move progress payments.',
    liveUrl: 'https://qsme.io',
    extraLinks: [{ label: 'qsme.co.nz', href: 'https://qsme.co.nz' }],
    stack: [
      'React',
      'TypeScript',
      'Postgres',
      'Multi-role access',
      'GST / NZBN rules',
    ],
    problem:
      'Owner-builders and developers run cost, tender, and payment in spreadsheets. Quotes arrive in different shapes. GST, NZBN, and contract variations make naive CRUD unsafe. The platform has to keep money consistent across roles.',
    architecture: [
      'Multi-role product: clients, builders, and trades on one project, with different write rights.',
      'Domain pipeline: plans and takeoff → bill of quantities → tender pack → quote comparison (levelling) → contract + milestones → variations → progress claims.',
      'NZ tax and identity: GST-exclusive amounts, GST registration threshold logic, NZBN-aware organisations.',
      'Contract fields that must not duplicate when a contact already exists on the platform — identity is joined, not copied.',
    ],
    hardParts: [
      {
        title: 'Pricing engine',
        body: 'BOQ lines, quote levelling, commissions and fees in commercial language. This is the same class of problem as negotiated clinic/pharmacy pricing: rates differ by party, and totals must reconcile.',
      },
      {
        title: 'Money movement',
        body: 'Progress claims and variations change the contract value after award. The ledger has to stay auditable — you cannot silently overwrite a signed figure.',
      },
      {
        title: 'Roles',
        body: 'A trade must not see competing quotes. A client sees the comparison. Access is a product rule, not a CSS hide.',
      },
    ],
    owned: [
      'End-to-end product screens for tenders, contracts, and payments.',
      'GST/NZBN-correct behaviour in forms and totals.',
      'Data model work so contacts, contracts, and organisations stay linked instead of duplicated.',
    ],
    outcome:
      'Live at qsme.io. For a healthcare commerce role, this is the case that shows I have already built pricing, roles, and payment state — not a to-do app.',
  },
  {
    id: 'lebalist',
    number: '03',
    title: 'Lebalist',
    tagline: 'Lebanon marketplace, feed, chat, and calls',
    summary:
      'A React Native / Expo app with a Next.js public site and super-admin, backed by a Go API and Postgres. Listings, community feed, chat, on-demand dispatch, and local payments (OMT, Whish, cash) — built for how Lebanon actually transacts.',
    liveUrl: 'https://lebalist.com',
    stack: [
      'React Native',
      'Expo',
      'Next.js',
      'TypeScript',
      'Go',
      'Postgres',
      'Railway',
    ],
    problem:
      'Lebanon does not have one trusted marketplace. Facebook groups and WhatsApp are the default. Card gateways are unreliable. The product has to work in Arabic and English, without forcing cards, with real geography (governorates, districts, areas).',
    architecture: [
      'Mobile app (Expo / React Native) is the product: listings, feed, chat, dispatch.',
      'Next.js 15 public site for SEO browse + super-admin (moderation, bans, audit log) talking to the same Postgres.',
      'Go `net/http` + `pgx` API, ordered SQL migrations, module layout (listings, feed, dispatch, auth, wallet).',
      'Dispatch as the reference module: handler / service / queries / worker — background loops for on-demand jobs.',
      'Storage via presigned uploads; the API stores https URLs, never device `file://` paths.',
    ],
    hardParts: [
      {
        title: 'React Native in production',
        body: 'The job lists React Native as a major plus. Lebalist is a real app: auth, listings, media, chat, and admin — not a tutorial.',
      },
      {
        title: 'Postgres + jobs',
        body: 'Listings, geo, full-text search, and a dispatch worker. Optional services (storage, live) disable cleanly when unconfigured instead of crashing the API.',
      },
      {
        title: 'Local commerce',
        body: 'No card-checkout requirement. Payments are designed around OMT, Whish, bank transfer, or cash with confirmation — integrations with retries, not a Stripe happy path.',
      },
    ],
    owned: [
      'Mobile and admin product work across listings, services, and operations UI.',
      'API and schema work on the Go/Postgres side where the feature needed it.',
      'Branding and admin UX so the console matches the product, not a generic dashboard.',
    ],
    outcome:
      'Live at lebalist.com. Marketplace + mobile + Postgres is the integration and client-app story; NGOreality is the tenancy story. Together they cover the stack this role is hiring for.',
  },
  {
    id: 'city-care',
    number: '04',
    title: 'City Care',
    tagline: 'Smart city issue reporting for Lebanon',
    summary:
      'Master 1 thesis: citizens report urban issues with photos and GPS; district admins triage only their area; a super admin sees the country. Node.js, Express, MongoDB, two React apps, Arabic/English RTL. Public demos are live.',
    liveUrl: 'https://citycarelb.netlify.app',
    extraLinks: [
      { label: 'Admin demo', href: 'https://citycareadminlb.netlify.app' },
    ],
    stack: [
      'Node.js',
      'Express',
      'MongoDB',
      'React',
      'JWT',
      'Leaflet',
      'i18next',
      'Netlify',
    ],
    problem:
      'Municipal issues in Lebanon are reported by phone and WhatsApp, with no district routing, no status, and no public record. Citizens need a map-first report; admins need scoped access so a district cannot edit another district’s queue.',
    architecture: [
      'Two React SPAs (citizen + admin) → Express REST API → MongoDB.',
      'JWT roles: citizen, DISTRICT_ADMIN (scoped to `districtId`), SUPER_ADMIN.',
      'GeoJSON Point with a 2dsphere index; reverse geocode to Lebanon’s 8 governorates / 26 districts.',
      'Duplicate suggestions within 500 m, same district and category.',
      'Bilingual UI (en/ar) with RTL; API stays English enums.',
    ],
    hardParts: [
      {
        title: 'Node.js in production shape',
        body: 'This is the cleanest Node/Express story: auth, uploads, geospatial queries, notifications, PDF export, and role checks in `reportAccess` — not a toy API.',
      },
      {
        title: 'Scoped admin access',
        body: 'District admins receive 403 if their `districtId` does not match the report. Super admin can filter the whole country. Isolation is enforced on the server.',
      },
      {
        title: 'Civic UX',
        body: 'GPS auto-pin, 1–5 images, nearby-similar warning, public community feed, in-app notifications, district spotlight content.',
      },
    ],
    owned: [
      'Full-stack design and implementation of citizen app, admin app, and API.',
      'Lebanon location seed, admin seeding per district, Arabic/RTL.',
      'Deployment: Netlify frontends + hosted API.',
    ],
    outcome:
      'Defended as the Lebanese University Master 1 project. Citizen demo at citycarelb.netlify.app; admin at citycareadminlb.netlify.app.',
  },
]
