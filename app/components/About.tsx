'use client'

import { motion } from 'framer-motion'

const aboutParagraphs = [
  'Add your first bio paragraph here. Describe your background, interests, and what drives you as a developer. This is where visitors learn about your story.',
  'Second paragraph - mention your current focus, projects you are working on, or areas of expertise. You can update this section as your career evolves.',
  'Third paragraph - include any relevant achievements, communities you are part of, or future goals. Keep it concise and authentic.',
]

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12">
        <motion.h1
          className="text-h1 text-text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h1>

        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-body text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}