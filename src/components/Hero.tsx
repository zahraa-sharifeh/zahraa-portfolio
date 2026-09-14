import { motion } from 'framer-motion'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io5'
import { site } from '../data/site'
import ResumeButton from './ResumeButton'
import { HeroIllustration } from './illustrations/Illustrations'

const social = [
  { href: `mailto:${site.email}`, icon: BiLogoGmail, label: 'Email' },
  { href: site.linkedin, icon: IoLogoLinkedin, label: 'LinkedIn' },
  { href: site.github, icon: BsGithub, label: 'GitHub' },
]

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-between gap-10 px-5 pt-28 pb-16 lg:flex-row lg:px-28 lg:pt-32">
      <motion.div
        className="lg:w-[45%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="mt-8 flex flex-col gap-2 text-3xl font-medium lg:mt-0 lg:gap-4 lg:text-5xl">
          <h1>
            Hello I&apos;m{' '}
            <span className="font-script text-4xl font-normal lg:text-6xl">{site.name}</span>
          </h1>
          <h2>
            Fullstack{' '}
            <span className="relative inline-block">
              Developer
              <span className="absolute inset-x-0 -bottom-1 -z-10 h-3 bg-yellow-300/80" />
            </span>
          </h2>
          <h2>Based In {site.location}.</h2>
        </div>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#71717A] lg:text-base">
          I build production full-stack systems where tenancy, money, and data integrity cannot be
          wrong — React and TypeScript on the client, Postgres in the data layer, Node where the API
          is Node, and React Native when the product lives on a phone.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-14">
          <ResumeButton />
          <div className="flex items-center gap-x-4">
            {social.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="rounded border-2 border-black bg-white p-2 lg:p-3"
                whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="text-xl lg:text-2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-[55%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <HeroIllustration className="h-auto w-full" />
      </motion.div>
    </section>
  )
}
