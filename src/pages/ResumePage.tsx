import { TbArrowLeft, TbPrinter } from 'react-icons/tb'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import ResumeButton from '../components/ResumeButton'
import { projects } from '../data/projects'
import { site } from '../data/site'

export default function ResumePage() {
  return (
    <div className="bg-zinc-100">
      <div className="print-resume mx-auto max-w-3xl px-5 pt-28 pb-16 lg:px-8">
        <Link
          to="/"
          className="no-print mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black"
        >
          <TbArrowLeft /> Back to site
        </Link>

        <div className="no-print mb-8 flex flex-col gap-4 border-2 border-black bg-white p-4 shadow-[8px_8px_0_0_#000] sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
              <HiOutlineDocumentText className="text-2xl" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">PDF</p>
              <p className="mt-1 font-semibold leading-tight">Zahraa_Sharifeh_Resume.pdf</p>
              <p className="mt-1 text-sm text-zinc-500">One page · download or print</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ResumeButton variant="solid" className="w-full sm:w-auto">
              Download PDF
            </ResumeButton>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-black bg-white px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white"
            >
              <TbPrinter className="text-lg" aria-hidden />
              Print
            </button>
          </div>
        </div>

        <article className="resume-paper border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-10 lg:p-12">
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
                    <span className="font-normal text-zinc-500">
                      {' '}
                      — {project.liveUrl.replace(/^https?:\/\//, '')}
                    </span>
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
        </article>
      </div>
    </div>
  )
}
