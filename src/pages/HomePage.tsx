import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!scrollTo) return
    const section = document.getElementById(scrollTo)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 110, behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
