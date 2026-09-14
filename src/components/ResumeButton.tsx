import { TbDownload, TbFileText } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

type ResumeButtonProps = {
  action?: 'download' | 'view'
  variant?: 'offset' | 'solid'
  className?: string
  children?: string
  onClick?: () => void
}

export default function ResumeButton({
  action = 'download',
  variant = 'offset',
  className = '',
  children,
  onClick,
}: ResumeButtonProps) {
  const label = children ?? (action === 'download' ? 'Download resume' : 'Resume')
  const Icon = action === 'download' ? TbDownload : TbFileText

  const stretch = className.split(/\s+/).includes('w-full') ? 'w-full' : ''

  const inner =
    variant === 'solid' ? (
      <span
        className={`inline-flex items-center justify-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 ${stretch}`}
      >
        <Icon className="text-lg" aria-hidden />
        {label}
      </span>
    ) : (
      <>
        <span className="absolute inset-0 translate-x-1 translate-y-1 bg-black" aria-hidden />
        <span
          className={`relative inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-1 group-active:translate-y-1 ${stretch}`}
        >
          <Icon className="text-lg" aria-hidden />
          {label}
        </span>
      </>
    )

  const classes =
    variant === 'solid'
      ? `inline-flex cursor-pointer ${className}`
      : `group relative inline-flex cursor-pointer ${className}`

  if (action === 'view') {
    return (
      <Link to="/resume" className={classes} onClick={onClick}>
        {inner}
      </Link>
    )
  }

  return (
    <a href={site.resumePdf} download="Zahraa_Sharifeh_Resume.pdf" className={classes} onClick={onClick}>
      {inner}
    </a>
  )
}
