import { motion } from 'framer-motion'
import { AboutIllustration } from './illustrations/Illustrations'

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center gap-12 px-5 py-16 lg:flex-row lg:px-28 lg:py-24">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <AboutIllustration className="h-auto w-full" />
      </motion.div>
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold lg:text-4xl">About Me</h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-[#71717A] lg:text-base">
          <p>
            I&apos;m a full-stack engineer in Beirut. I ship React and TypeScript products with real
            data models underneath them — Postgres with tenant isolation, Node/Express APIs, and
            React Native when the work belongs on a phone.
          </p>
          <p>
            I hold a Bachelor of Science and a Master 1 in Computer Science from Lebanese University,
            and I&apos;ve been accepted to the Master 2 in Information Systems and Data Intelligence
            (ISDI). City Care was my M1 thesis: a live civic platform, not a slide deck.
          </p>
          <p>
            Day to day I own delivery end to end — UI, API, schema, deploy — and sit with a technical
            lead on architecture calls. I read AI-generated diffs the same way I read my own: tenancy,
            authz, and money first.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
