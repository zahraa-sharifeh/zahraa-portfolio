import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

const palettes: Record<string, { bg: string; accent: string; label: string }> = {
  ngoreality: { bg: '#0B0B0B', accent: '#C8F169', label: 'Directory · Badge · CRM' },
  qsme: { bg: '#1B3A2F', accent: '#E8D5A3', label: 'BOQ · Tender · Pay' },
  lebalist: { bg: '#111827', accent: '#F97316', label: 'Market · Chat · Dispatch' },
  'city-care': { bg: '#0F2A44', accent: '#7DD3FC', label: 'Map · Report · Admin' },
}

export function ProjectMock({ project }: { project: Project }) {
  const p = palettes[project.id] ?? palettes.ngoreality

  return (
    <Link
      to={`/work/${project.id}`}
      className="block w-full overflow-hidden rounded-md border-2 border-black bg-zinc-100 shadow-[8px_8px_0_0_#000]"
      aria-label={`${project.title} case study`}
    >
      <div className="flex items-center gap-1.5 border-b-2 border-black bg-white px-3 py-2">
        <span className="size-2.5 rounded-full bg-black/20" />
        <span className="size-2.5 rounded-full bg-black/20" />
        <span className="size-2.5 rounded-full bg-black/20" />
        <span className="ml-3 truncate font-mono text-[10px] text-zinc-500">
          {project.liveUrl?.replace(/^https?:\/\//, '')}
        </span>
      </div>
      <div className="relative min-h-[220px] p-6 lg:min-h-[260px]" style={{ background: p.bg }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: p.accent }}>
          {p.label}
        </p>
        <p className="mt-6 max-w-xs text-3xl font-semibold leading-tight text-white">{project.title}</p>
        <p className="mt-3 max-w-sm text-sm text-white/70">{project.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded border px-2 py-1 text-[11px] text-white"
              style={{ borderColor: `${p.accent}66` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
