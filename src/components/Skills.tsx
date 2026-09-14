import type { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiGo, SiMongodb, SiSupabase } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const skills: { name: string; icon: IconType }[] = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: BiLogoTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'PostgreSQL', icon: BiLogoPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'Next.js', icon: RiNextjsFill },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Go', icon: SiGo },
  { name: 'Tailwind', icon: RiTailwindCssFill },
  { name: 'Git', icon: FaGitAlt },
]

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

      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              className="flex h-36 w-36 cursor-default flex-col items-center justify-center gap-4 rounded border-2 border-black bg-white transition-colors hover:bg-black hover:text-white lg:h-44 lg:w-44"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Icon className="text-5xl lg:text-6xl" />
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
