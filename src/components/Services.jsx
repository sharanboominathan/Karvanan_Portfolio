import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Aperture, Camera, Clapperboard, Film, Sparkles } from 'lucide-react'
import { services } from '../data'

const icons = [Sparkles, Camera, Film, Clapperboard, Aperture]

function ServiceCard({ service, Icon, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -10, y: px * 10 })
  }

  const reset = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="group relative rounded-neu neu-card p-7 transition-shadow duration-300 hover:shadow-neu-glow"
    >
      <div className="flex items-start justify-between mb-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl neu-pressed text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon size={18} />
        </span>
        <span className="font-display text-3xl font-extrabold text-white/10 group-hover:text-accent/25 transition-colors duration-300">
          {service.id}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{service.desc}</p>
      <div className="absolute inset-0 rounded-neu opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(220px circle at 50% 0%, rgba(25,191,255,0.08), transparent 70%)' }} />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="relative py-28 sm:py-36 bg-base-700">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Specialization
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} Icon={icons[i % icons.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
