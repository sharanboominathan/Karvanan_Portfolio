import { motion } from 'framer-motion'
import { Aperture } from 'lucide-react'
import { experienceAreas } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-base-800">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-4"
        >
          4 Years of Craft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-white/50 mb-20"
        >
          Photography &amp; Videography
        </motion.p>

        <div className="relative pl-10 sm:pl-14">
          {/* glowing vertical line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {experienceAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex items-start gap-5"
              >
                <span className="absolute -left-10 sm:-left-14 top-1 flex h-8 w-8 items-center justify-center rounded-full neu-pressed text-accent shadow-[0_0_16px_rgba(25,191,255,0.35)]">
                  <Aperture size={14} />
                </span>
                <div className="w-full rounded-neu neu-card px-6 py-5">
                  <p className="font-display font-bold text-white text-base">{area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
