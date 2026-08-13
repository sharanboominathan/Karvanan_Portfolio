import { motion } from 'framer-motion'
import { Camera, Film, Clapperboard, Sparkles, ArrowDown } from 'lucide-react'
import { profile } from '../data'
import profilePhoto from '../assets/profile.jpg'

const floatingCards = [
  { icon: Sparkles, top: '-6%', left: '-8%', delay: 0, big: '4+', small: 'Years Experience' },
  { icon: Camera, top: '36%', left: '-14%', delay: 1.1, big: 'PHOTO', small: 'Candid & Traditional' },
  { icon: Clapperboard, top: '4%', right: '-12%', delay: 0.6, big: 'VIDEO', small: 'Cinematography' },
  { icon: Film, top: '68%', right: '-10%', delay: 1.7, big: 'EDIT', small: 'DaVinci Resolve' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-base-800 pt-32 pb-20 lg:pt-24 lg:pb-0">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(17,20,23,0.55) 0%, rgba(17,20,23,0.75) 55%, rgba(17,20,23,0.98) 100%), url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%221600%22 height=%22900%22><defs><radialGradient id=%22g%22 cx=%2230%25%22 cy=%2225%25%22 r=%2280%25%22><stop offset=%220%25%22 stop-color=%22%23233038%22/><stop offset=%22100%25%22 stop-color=%22%230f1215%22/></radialGradient></defs><rect width=%221600%22 height=%22900%22 fill=%22url(%23g)%22/></svg>')",
          }}
        />
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(25,191,255,0.25), transparent 55%)' }} />
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.7)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.3em] text-accent uppercase"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient accent-glow"
          >
            S. KARVANNAN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mx-auto lg:mx-0 mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed"
          >
            Creative photography and visual storytelling with 4 years of hands-on experience in candid photography,
            traditional photography, videography and cinematography.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#portfolio"
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-base-900 shadow-neu-glow transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full glass-panel px-8 py-3.5 text-sm font-semibold text-white/90 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <motion.div
            aria-hidden="true"
            className="absolute -inset-4 rounded-neu-lg"
            style={{ background: 'radial-gradient(circle, rgba(25,191,255,0.35), transparent 70%)' }}
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative aspect-[4/5] rounded-neu-lg neu-card p-2.5 shadow-neu-raised">
            <div className="relative h-full w-full overflow-hidden rounded-[26px]">
              <motion.img
                src={profilePhoto}
                alt="S. Karvannan — Photographer, Videographer & Cinematographer"
                loading="eager"
                initial={{ scale: 1.12, filter: 'grayscale(40%) brightness(0.85)' }}
                animate={{ scale: 1, filter: 'grayscale(0%) brightness(1)' }}
                transition={{ duration: 1.6, delay: 0.5, ease: 'easeOut' }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {floatingCards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                className="hidden sm:flex absolute flex-col gap-2 rounded-neu glass-panel px-4 py-3.5 shadow-neu-raised animate-float"
                style={{ top: c.top, left: c.left, right: c.right, animationDelay: `${c.delay}s` }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 + c.delay * 0.15 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full neu-pressed text-accent">
                  <Icon size={14} />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-white leading-none">{c.big}</p>
                  <p className="text-[10px] text-white/50 mt-1 whitespace-nowrap">{c.small}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full neu-pressed text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  )
}
