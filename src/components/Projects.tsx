import { motion } from 'framer-motion'
import { TbExternalLink } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectMock } from './ProjectMock'

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-16 lg:px-28 lg:py-24">
      <motion.h2
        className="text-center text-2xl font-semibold lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="mt-16 flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`flex flex-col items-center justify-between gap-10 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-[48%]">
              <ProjectMock project={project} />
            </div>
            <div className="w-full lg:w-[48%]">
              <p className="text-4xl font-bold text-zinc-300 lg:text-6xl">{project.number}</p>
              <h3 className="mt-3 text-2xl font-semibold lg:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#71717A] lg:text-base">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 rounded border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
                >
                  Case study
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded border-2 border-black px-4 py-2 text-sm font-medium"
                  >
                    Live <TbExternalLink />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
