import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-8 bg-black px-5 py-8 text-white lg:px-28">
      <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row lg:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          <a
            className="text-zinc-400 underline decoration-zinc-500 underline-offset-4 hover:text-white"
            href={site.phoneHref}
          >
            {site.phone}
          </a>
        </p>
      </div>
    </footer>
  )
}
