import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Check } from 'lucide-react'
import { profile, experienceAreas } from '../data'
import profilePhoto from '../assets/profile.jpg'

function CountUp({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.6, ease: 'easeOut' })
      const unsub = rounded.on('change', (v) => setDisplay(v))
      return () => {
        controls.stop()
        unsub()
      }
    }
  }, [inView])

  return <span ref={ref}>{display}</span>
}

export default function About() {
  const circumference = 2 * Math.PI * 54
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-base-800">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          Behind the Lens
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] rounded-neu-lg neu-card p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <img
                  src={profilePhoto}
                  alt="S. Karvannan portrait"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900/50 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full glass-panel flex items-center justify-center shadow-neu-raised animate-floatSlow">
              <span className="font-display text-lg font-bold text-accent">4Y</span>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="text-white/70 leading-relaxed text-base mb-8">{profile.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {experienceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl neu-card px-4 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full neu-pressed text-accent">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-white/80">{area}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="relative h-32 w-32 shrink-0">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#1B2025" strokeWidth="8" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#19BFFF"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference * 0.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                    style={{ filter: 'drop-shadow(0 0 6px rgba(25,191,255,0.6))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-3xl font-extrabold text-white">
                    <CountUp target={4} />
                  </span>
                  <span className="text-[10px] tracking-widest text-white/50">YEARS</span>
                </div>
              </div>
              <p className="text-sm text-white/50 max-w-[220px]">
                Hands-on experience across photography and videography, refined project after project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
