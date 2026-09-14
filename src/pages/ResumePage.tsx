import { TbDownload, TbPrinter } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { site } from '../data/site'

export default function ResumePage() {
  return (
    <div className="print-resume mx-auto max-w-3xl px-5 pt-28 pb-20">
      <div className="no-print mb-8 flex flex-wrap gap-3">
        <Link to="/" className="rounded border-2 border-black px-4 py-2 text-sm font-medium">
          Back to site
        </Link>
        <a
          href={site.resumePdf}
          download
          className="inline-flex items-center gap-2 rounded border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white"
        >
          <TbDownload /> Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded border-2 border-black px-4 py-2 text-sm font-medium"
        >
          <TbPrinter /> Print
        </button>
      </div>

      <header className="border-b-2 border-black pb-6">
        <h1 className="text-4xl font-semibold">{site.name}</h1>
        <p className="mt-2 text-lg">
          {site.title} · {site.location}
        </p>
        <p className="mt-3 text-sm">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {' · '}
          <a href={site.linkedin}>linkedin.com/in/zahraa-sharifeh</a>
          {' · '}
          <a href={site.github}>github.com/zahraa-sharifeh</a>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Summary</h2>
        <p className="mt-3 leading-7">
          Full-stack engineer building production React/TypeScript systems with Postgres tenancy,
          Node APIs, and React Native. Recent work: multi-tenant nonprofit SaaS, construction
          pricing/tender commerce, a Lebanon marketplace with chat and dispatch, and a civic
          reporting platform (Master 1 thesis).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Selected work</h2>
        {projects.map((project) => (
          <div key={project.id} className="mt-5">
            <h3 className="font-semibold">
              {project.title}
              {project.liveUrl && (
                <span className="font-normal text-zinc-500"> — {project.liveUrl.replace(/^https?:\/\//, '')}</span>
              )}
            </h3>
            <p className="mt-1 text-sm leading-6">{project.summary}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Education</h2>
        <p className="mt-3 font-semibold">Lebanese University — Faculty of Sciences</p>
        <ul className="mt-2 list-disc pl-5 text-sm leading-6">
          <li>Master 2, Information Systems and Data Intelligence (ISDI) — accepted</li>
          <li>Master 1, Computer Science — City Care thesis (live civic platform)</li>
          <li>Bachelor of Science, Computer Science</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Earlier</h2>
        <p className="mt-3 font-semibold">MERN stack — Techlarious / Two of Us, Jbeil</p>
        <p className="mt-1 text-sm leading-6">
          HTML, CSS, JavaScript, Git; React + Node shipment and to-do apps; team e-commerce; API
          work with Postman and MongoDB.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Skills</h2>
        <p className="mt-3 text-sm leading-6">
          React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, React Native / Expo, Next.js,
          Supabase (Auth, RLS), Go APIs and workers, Tailwind, Git. Production deploys on Vercel,
          Railway, Netlify, Supabase.
        </p>
      </section>
    </div>
  )
}
