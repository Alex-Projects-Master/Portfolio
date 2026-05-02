'use client'

import { motion } from 'framer-motion'

export default function Currently() {
  return (
    <section id="currently" className="py-32">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12">
        <div className="border-t border-b border-border py-8">
          <motion.h1
            className="text-h1 text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Currently
          </motion.h1>

          <motion.p
            className="text-body text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Update this section with your current projects, focus areas, and what you are working on right now. This is a great way to show visitors what you are currently busy with.
          </motion.p>

          <motion.p
            className="text-mono text-text-tertiary mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last updated 2026-01-01
          </motion.p>
        </div>
      </div>
    </section>
  )
}