import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const

const social = [
  { href: `mailto:${site.email}`, icon: BiLogoGmail, label: 'Email' },
  { href: site.linkedin, icon: IoLogoLinkedin, label: 'LinkedIn' },
  { href: site.github, icon: BsGithub, label: 'GitHub' },
]

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
    <footer className="bg-black px-5 py-6 text-white lg:px-28">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Home">
          <span className="flex size-8 shrink-0 items-center justify-center border border-white bg-white text-xs font-bold text-black">
            ZS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">{site.name}</span>
            <span className="block text-xs text-zinc-400">
              {site.title} · {site.location}
            </span>
          </span>
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-300">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className="cursor-pointer hover:text-white"
                  onClick={() => goToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
            <li>
              <Link to="/resume" className="hover:text-white">
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="hidden text-sm text-[#3BB8D4] hover:text-white sm:inline"
          >
            {site.email}
          </a>
          <a href={site.phoneHref} className="text-sm text-[#3BB8D4] hover:text-white">
            {site.phone}
          </a>
          <div className="flex gap-2">
            {social.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="rounded border border-zinc-600 p-1.5 text-zinc-300 hover:border-white hover:bg-white hover:text-black"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
