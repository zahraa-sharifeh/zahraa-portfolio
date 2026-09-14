import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-16 lg:px-28 lg:py-24">
      <motion.h2
        className="text-center text-2xl font-semibold lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#71717A] lg:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Production stack I ship with, plus the agents and protocols I use to build faster without
        skipping tenancy, auth, or money.
      </motion.p>

      <div className="mt-12 space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em]">{group.title}</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-5">
              {group.skills.map((skill, skillIndex) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="flex h-32 w-32 cursor-default flex-col items-center justify-center gap-3 rounded border-2 border-black bg-white transition-colors hover:bg-black hover:text-white lg:h-40 lg:w-40"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: groupIndex * 0.08 + skillIndex * 0.03 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="text-4xl lg:text-5xl" />
                    <p className="px-2 text-center text-sm font-medium">{skill.name}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
