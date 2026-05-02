'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    letter: 'P',
    title: 'PriceTrackr',
    description: 'A personal grocery price tracker to monitor price changes on products you frequently buy.',
    tag: 'Personal',
    href: 'https://price-trackr.pages.dev/',
    span: 'sm:col-span-2 sm:row-span-2',
    padding: 'p-8 sm:p-10',
    letterSize: 'text-[320px] sm:text-[400px]',
    letterStyle: 'font-mono font-bold',
    letterPos: '-right-6 -bottom-12 sm:-right-8 sm:-bottom-16',
  },
  {
    letter: 'S',
    title: 'Project Beta',
    description: 'Coming soon.',
    tag: 'Coming Soon',
    href: '#',
    span: 'sm:row-span-2',
    padding: 'p-6 sm:p-8',
    letterSize: 'text-[200px]',
    letterStyle: 'font-sans font-black',
    letterPos: '-right-4 -bottom-8',
  },
  {
    letter: 'R',
    title: 'Project Gamma',
    description: 'Coming soon.',
    tag: 'Coming Soon',
    href: '#',
    span: '',
    padding: 'p-5 sm:p-6',
    letterSize: 'text-[200px]',
    letterStyle: 'font-sans font-semibold italic',
    letterPos: '-right-4 -bottom-8',
  },
  {
    letter: 'C',
    title: 'Project Delta',
    description: 'Coming soon.',
    tag: 'Coming Soon',
    href: '#',
    span: '',
    padding: 'p-5 sm:p-6',
    letterSize: 'text-[200px]',
    letterStyle: 'font-mono font-light tracking-[0.15em]',
    letterPos: '-right-4 -bottom-8',
  },
  {
    letter: 'E',
    title: 'Project Epsilon',
    description: 'Coming soon.',
    tag: 'Coming Soon',
    href: '#',
    span: '',
    padding: 'p-5 sm:p-6',
    letterSize: 'text-[200px]',
    letterStyle: 'font-sans font-bold italic',
    letterPos: '-right-4 -bottom-8',
  },
]

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1080px] mx-auto px-6 sm:px-12">
        <motion.h1
          className="text-h1 text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-bg-secondary/40 rounded-[12px] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full" style={{ aspectRatio: '1 / 1' }}>
            {projects.map((project, index) => (
              <div key={project.letter} className={`${project.span} relative`}>
                <motion.a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block bg-bg-secondary/40 border border-border rounded-[12px] text-left w-full h-full overflow-hidden relative z-10 group ${project.padding}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="absolute inset-0 img-bg pointer-events-none z-0" />

                  <span
                    className={`absolute select-none pointer-events-none leading-[0.75] text-text-primary/[0.035] ${project.letterSize} ${project.letterStyle} ${project.letterPos}`}
                  >
                    {project.letter}
                  </span>

                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="flex flex-col justify-end">
                      <p className={`text-mono text-text-tertiary ${index === 0 ? 'mb-3' : 'mb-2'}`}>{project.tag}</p>
                      <h2 className={`text-text-primary text-wrap-balance ${index === 0 ? 'text-h1' : index === 1 ? 'text-h2' : 'text-h3'}`}>{project.title}</h2>
                      <p className={`text-text-secondary mt-2 ${index === 0 ? 'text-body max-w-[520px]' : 'text-small'}`}>{project.description}</p>
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}