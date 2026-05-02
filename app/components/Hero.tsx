'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <section id="hero" className="min-h-screen flex flex-col items-start justify-end px-6 sm:px-12 pb-32 sm:pb-40 relative overflow-hidden">
      <div className="w-full">
        <motion.p
          className="text-mono text-text-tertiary uppercase tracking-[0.15em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Software Engineer
        </motion.p>

        <motion.h1
          className="text-[6rem] leading-[1.1] font-bold text-text-primary select-none text-wrap-balance cursor-default"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Alex Bell
        </motion.h1>

        <motion.div
          className="h-px bg-text-primary mt-6 mb-6 sm:mt-8 sm:mb-8 origin-left w-32 sm:w-48"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="text-body text-text-secondary max-w-[480px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Placeholder text.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/public/Alex_Bell's_CV.pdf" download className="relative inline-flex items-center gap-2 text-mono text-text-tertiary min-h-[44px]">
            <span>Download CV</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2v8" />
              <path d="M3.5 7L7 10.5 10.5 7" />
              <path d="M2.5 12h9" />
            </svg>
            <span className="absolute bottom-2 left-0 h-px bg-text-primary origin-left w-[calc(100%-22px)] scale-x-0 group-hover:scale-x-100 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-6 sm:left-12"
        initial={{ opacity: 0 }}
        animate={scrolled ? { opacity: 0 } : { opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 0.6, repeat: Infinity, repeatType: 'mirror', duration: 1.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  )
}