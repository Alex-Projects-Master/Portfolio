'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-32">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12">
        <motion.h1
          className="text-h1 text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h1>

        <div className="relative">
          <div className="absolute inset-0 img-bg pointer-events-none z-0" />
          <motion.div
            className="relative bg-bg-secondary/40 border border-border rounded-[12px] overflow-hidden p-8 sm:p-10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="relative z-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-3">
              <p className="text-mono text-text-tertiary">Degree</p>
              <p className="text-mono text-text-tertiary">Year — Year</p>
            </div>
            <h2 className="text-h2 text-text-primary text-wrap-balance">University Name</h2>
            <p className="text-body text-text-secondary mt-2">Program or Major</p>

            <ul className="mt-6 space-y-3">
              <li className="text-small text-text-secondary flex items-start gap-3">
                <span className="mt-[7px] block h-[5px] w-[5px] rounded-full bg-text-tertiary shrink-0" />
                Achievement or focus area one
              </li>
              <li className="text-small text-text-secondary flex items-start gap-3">
                <span className="mt-[7px] block h-[5px] w-[5px] rounded-full bg-text-tertiary shrink-0" />
                Achievement or focus area two
              </li>
              <li className="text-small text-text-secondary flex items-start gap-3">
                <span className="mt-[7px] block h-[5px] w-[5px] rounded-full bg-text-tertiary shrink-0" />
                Achievement or focus area three
              </li>
            </ul>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}