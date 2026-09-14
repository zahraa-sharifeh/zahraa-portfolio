import { motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { IoLogoLinkedin } from 'react-icons/io5'
import { site } from '../data/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      website ? `Website: ${website}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Portfolio — ${name || 'Hello'}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="px-5 py-16 lg:my-8 lg:px-28">
      <h2 className="text-center text-2xl font-semibold lg:text-4xl">Contact Me</h2>
      <div className="mt-12 flex flex-col justify-between gap-12 lg:flex-row">
        <motion.form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-4 lg:w-[42%]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded border-2 border-black px-4 py-3 outline-none"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded border-2 border-black px-4 py-3 outline-none"
          />
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Your website (If exists)"
            className="rounded border-2 border-black px-4 py-3 outline-none"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help?*"
            rows={6}
            className="rounded border-2 border-black px-4 py-3 outline-none"
          />
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            <button
              type="submit"
              className="rounded bg-black px-5 py-3 font-medium text-white hover:shadow-lg"
            >
              Get In Touch
            </button>
            <div className="flex gap-3">
              {[
                { href: `mailto:${site.email}`, icon: BiLogoGmail, label: 'Email' },
                { href: site.linkedin, icon: IoLogoLinkedin, label: 'LinkedIn' },
                { href: site.github, icon: BsGithub, label: 'GitHub' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="rounded border-2 border-black bg-white p-3 hover:bg-black hover:text-white"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </motion.form>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold lg:text-5xl">
            Let&apos;s talk for
            <br />
            Something special
          </h3>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#71717A] lg:text-base">
            If you need someone who can sit with a CTO, own a slice of a multi-tenant platform, and
            ship React, Postgres, and integrations without theatre — write to me.
          </p>
          <a href={`mailto:${site.email}`} className="mt-8 flex items-center gap-2 text-lg font-medium">
            <IoMdMail /> {site.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
