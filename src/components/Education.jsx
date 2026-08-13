import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36 bg-base-800">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          Academic Journey
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.course}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-neu-lg glass-panel p-7 shadow-neu-raised-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl neu-pressed text-accent mb-6">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display font-bold text-white text-lg mb-1">{ed.course}</h3>
              <p className="text-sm text-white/50 mb-6">{ed.institution}</p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <p className="text-[10px] tracking-widest text-white/40">YEAR</p>
                  <p className="font-display font-semibold text-white text-sm">{ed.year}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-widest text-white/40">SCORE</p>
                  <p className="font-display font-semibold text-accent text-sm">{ed.percentage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
