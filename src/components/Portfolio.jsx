import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Camera } from 'lucide-react'
import { portfolioCategories, portfolioItems } from '../data'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false })

  const filtered = filter === 'All' ? portfolioItems : portfolioItems.filter((i) => i.category === filter)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 bg-base-800">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-10"
        >
          Selected Work
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                filter === c ? 'neu-pressed text-accent' : 'neu-card text-white/60 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setGlow((g) => ({ ...g, visible: false }))}
          className="relative columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {glow.visible && (
            <div
              className="pointer-events-none absolute h-64 w-64 rounded-full opacity-40 blur-3xl transition-transform duration-100 hidden lg:block"
              style={{
                background: 'radial-gradient(circle, rgba(25,191,255,0.35), transparent 70%)',
                transform: `translate(${glow.x - 128}px, ${glow.y - 128}px)`,
              }}
            />
          )}
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setActive(item)}
                className={`group relative block w-full overflow-hidden rounded-neu neu-card text-left ${
                  item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ background: 'linear-gradient(150deg, #202932, #0F1215)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <Camera size={40} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">{item.category}</span>
                  <p className="mt-1 font-display font-bold text-white text-base">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-neu-lg neu-card overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(150deg, #202932, #0F1215)' }}>
                <Camera size={64} className="text-white/15" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">{active.category}</span>
                <p className="mt-1 font-display font-bold text-white text-xl">{active.title}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass-panel text-white"
                aria-label="Close preview"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
