import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { TbDownload } from 'react-icons/tb'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (id: string) => {
    setIsOpen(false)
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-50 w-full bg-white px-5 py-5 transition-shadow duration-300 lg:px-28 ${
        hasShadow ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <span className="flex size-9 items-center justify-center rounded border-2 border-black bg-black text-sm font-bold text-white">
            ZS
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Zahraa Sharifeh</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {sections.map((section) => (
            <li key={section.id} className="group">
              <button type="button" className="cursor-pointer text-sm font-medium" onClick={() => goToSection(section.id)}>
                {section.label}
                <span className="flex h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <Link to="/resume" className="btn-resume hidden lg:inline-block">
          <span className="edge" />
          <span className="front inline-flex items-center gap-2">
            Resume <TbDownload />
          </span>
        </Link>

        <button type="button" className="text-2xl lg:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Menu">
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-5 border-t border-black/10 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {sections.map((section) => (
                <li key={section.id} className="border-b border-black/10 pb-3">
                  <button type="button" className="w-full text-left text-lg" onClick={() => goToSection(section.id)}>
                    {section.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/resume" className="inline-flex items-center gap-2 font-semibold" onClick={() => setIsOpen(false)}>
                  Resume <TbDownload />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
