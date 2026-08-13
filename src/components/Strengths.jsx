import { motion } from 'framer-motion'
import { Flame, Heart, Lightbulb, Hammer } from 'lucide-react'
import { strengths } from '../data'

const icons = [Hammer, Heart, Lightbulb, Flame]

export default function Strengths() {
  return (
    <section className="relative py-24 sm:py-32 bg-base-700">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Personal Qualities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          What Drives Me
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-neu neu-card p-6 text-center flex flex-col items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full neu-pressed text-accent shadow-[0_0_18px_rgba(25,191,255,0.3)]">
                  <Icon size={18} />
                </span>
                <p className="text-sm text-white/75 leading-relaxed">{s}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
