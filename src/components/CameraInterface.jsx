import { motion } from 'framer-motion'
import { Aperture, Circle } from 'lucide-react'

const readouts = [
  { label: 'ISO', value: '400' },
  { label: 'SHUTTER', value: '1/125' },
  { label: 'APERTURE', value: 'f/2.8' },
  { label: 'FRAME RATE', value: '24 FPS' },
]

export default function CameraInterface() {
  return (
    <section className="relative py-28 sm:py-36 bg-base-700 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Inside The Frame
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          The Viewfinder
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto rounded-neu-lg neu-card p-6 sm:p-10"
        >
          {/* viewfinder frame */}
          <div className="relative aspect-video w-full rounded-neu overflow-hidden neu-pressed">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 40%, #1D262D, #0D1013 80%)' }} />

            {/* corner brackets */}
            {['top-4 left-4 border-t border-l', 'top-4 right-4 border-t border-r', 'bottom-4 left-4 border-b border-l', 'bottom-4 right-4 border-b border-r'].map((pos, i) => (
              <div key={i} className={`absolute h-8 w-8 border-accent/50 ${pos}`} />
            ))}

            {/* REC indicator */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulseGlow" />
              <span className="text-[11px] font-semibold tracking-widest text-white/90">REC</span>
            </div>

            {/* center reticle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-accent/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(25,191,255,0.8)]" />
              </div>
            </div>

            {/* readouts */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap justify-between gap-3">
              {readouts.map((r) => (
                <div key={r.label} className="text-left">
                  <p className="text-[9px] tracking-widest text-white/40">{r.label}</p>
                  <p className="font-display text-sm font-bold text-accent">{r.value}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-5 right-5">
              <Aperture size={18} className="text-white/40" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-base-900 shadow-neu-glow transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Circle size={12} />
              Explore My Visual World
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
