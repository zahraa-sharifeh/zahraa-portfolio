import { motion } from 'framer-motion'

const items = [
  {
    title: 'Tenant isolation',
    body: 'Schema-per-tenant workspaces and row-level security on shared registries. Isolation is a single acquire path, then tests — not a CSS hide or a comment in a PR.',
  },
  {
    title: 'Money and integrity',
    body: 'Membership ledgers, GST-exclusive prices, progress claims, local payment confirmation. Totals have to reconcile after the fact, not only on the happy path.',
  },
  {
    title: 'AI-generated code',
    body: 'I ship with an AI-augmented loop: generate, then review for tenancy leaks, idempotency, and migrations. The bar is production, not a passing demo.',
  },
]

export default function HowIWork() {
  return (
    <section className="bg-black px-5 py-16 text-white lg:px-28 lg:py-24">
      <motion.h2
        className="text-center text-2xl font-semibold lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How I work
      </motion.h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-5">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className="rounded-md border border-[#D4D4D8] bg-black p-6 transition-colors hover:bg-[#27272A]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold lg:text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300 lg:text-base">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
