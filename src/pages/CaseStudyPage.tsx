import { Link, Navigate, useParams } from 'react-router-dom'
import { TbArrowLeft, TbExternalLink } from 'react-icons/tb'
import { projects } from '../data/projects'
import { ProjectMock } from '../components/ProjectMock'

export default function CaseStudyPage() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="mx-auto max-w-4xl px-5 pt-28 pb-20 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium">
        <TbArrowLeft /> Back
      </Link>
      <p className="mt-8 font-mono text-sm text-zinc-400">{project.number}</p>
      <h1 className="mt-2 text-4xl font-semibold lg:text-6xl">{project.title}</h1>
      <p className="mt-4 text-lg text-[#71717A]">{project.tagline}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Live product <TbExternalLink />
          </a>
        )}
        {project.extraLinks?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border-2 border-black px-4 py-2 text-sm font-medium"
          >
            {link.label} <TbExternalLink />
          </a>
        ))}
      </div>

      <div className="mt-10">
        <ProjectMock project={project} />
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="mt-4 leading-8 text-[#3F3F46]">{project.problem}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-8 text-[#3F3F46]">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The hard engineering</h2>
        <div className="mt-6 grid gap-5">
          {project.hardParts.map((part) => (
            <div key={part.title} className="rounded-md border-2 border-black p-5">
              <h3 className="text-lg font-semibold">{part.title}</h3>
              <p className="mt-2 leading-7 text-[#3F3F46]">{part.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What I owned</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-8 text-[#3F3F46]">
          {project.owned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p className="mt-4 leading-8 text-[#3F3F46]">{project.outcome}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded border-2 border-black px-3 py-1 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>
    </article>
  )
}
