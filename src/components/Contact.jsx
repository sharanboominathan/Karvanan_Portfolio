import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-base-800">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-4xl sm:text-5xl text-white mb-5"
        >
          Let's Create Something Beautiful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/55 text-base mb-14 max-w-md mx-auto"
        >
          Have a story worth capturing? Let's turn your moments into memorable visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-neu-lg neu-card p-8 sm:p-10 mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full neu-pressed text-accent">
                <Phone size={16} />
              </span>
              <p className="text-sm text-white/75">{profile.phone}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full neu-pressed text-accent">
                <Mail size={16} />
              </span>
              <p className="text-sm text-white/75 break-all">{profile.email}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full neu-pressed text-accent">
                <MapPin size={16} />
              </span>
              <p className="text-sm text-white/75">{profile.location}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${profile.phone}`}
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-base-900 shadow-neu-glow transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Call Me
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto rounded-full glass-panel px-8 py-3.5 text-sm font-semibold text-white/90 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
