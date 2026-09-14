import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { site } from '../data/site'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

const social = [
  { href: `mailto:${site.email}`, icon: BiLogoGmail, label: 'Email' },
  { href: site.linkedin, icon: IoLogoLinkedin, label: 'LinkedIn' },
  { href: site.github, icon: BsGithub, label: 'GitHub' },
]

function Heading({ children }: { children: string }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{children}</h3>
  )
}

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 110, behavior: 'smooth' })
    }
  }

  return (
    <footer className="mt-8 bg-black px-5 py-14 text-white lg:px-28 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Home">
            <span className="flex size-10 items-center justify-center border-2 border-white bg-white text-sm font-bold text-black">
              ZS
            </span>
            <span className="font-script text-2xl font-normal">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm font-medium">
            {site.title} · {site.location}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            I ship production React and TypeScript systems with Postgres tenancy, Node APIs, and
            React Native. Day to day I own delivery end to end — UI, API, schema, deploy — and sit
            with a technical lead on architecture.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            Lebanese University — BSc and Master 1 in Computer Science. Accepted to Master 2,
            Information Systems and Data Intelligence (ISDI). City Care was my thesis: a live civic
            platform, not a slide deck.
          </p>
        </div>

        <div className="lg:col-span-3">
          <Heading>Contact</Heading>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-start gap-2 text-zinc-300 hover:text-white"
              >
                <HiOutlineMail className="mt-0.5 shrink-0 text-base" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
              >
                <HiOutlinePhone className="shrink-0 text-base" aria-hidden />
                {site.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-zinc-300">
              <HiOutlineLocationMarker className="shrink-0 text-base" aria-hidden />
              {site.location}, Lebanon
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {social.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="rounded border-2 border-white p-2 hover:bg-white hover:text-black"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <Heading>Explore</Heading>
          <ul className="mt-5 space-y-3 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className="cursor-pointer text-zinc-300 hover:text-white"
                  onClick={() => goToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
            <li>
              <Link to="/resume" className="text-zinc-300 hover:text-white">
                Resume
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <Heading>Selected work</Heading>
          <ul className="mt-5 space-y-3 text-sm">
            {projects.map((project) => (
              <li key={project.id}>
                <Link to={`/work/${project.id}`} className="text-zinc-300 hover:text-white">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Open to full-stack roles — React, TypeScript, Node, Postgres.</p>
      </div>
    </footer>
  )
}
