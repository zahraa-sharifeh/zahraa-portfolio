import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-8 bg-black px-5 py-8 text-white lg:px-28">
      <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row lg:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="max-w-xl text-zinc-400">
          Layout adapted from{' '}
          <a
            className="underline decoration-zinc-500 underline-offset-4 hover:text-white"
            href="https://www.figma.com/community/file/1318529372146880502/illustration-based-portfolio-website-template"
            target="_blank"
            rel="noreferrer"
          >
            Jhanvi Shah&apos;s illustration portfolio template
          </a>{' '}
          (
          <a
            className="underline decoration-zinc-500 underline-offset-4 hover:text-white"
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY 4.0
          </a>
          ).
        </p>
      </div>
    </footer>
  )
}
