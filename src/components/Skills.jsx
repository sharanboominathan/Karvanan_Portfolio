import { motion } from 'framer-motion'
import { Camera, FileSpreadsheet, MonitorPlay, Presentation } from 'lucide-react'
import { skillGroups } from '../data'

const groupIcons = [Camera, Presentation]
const itemIcons = { PowerPoint: Presentation, Excel: FileSpreadsheet }

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-base-700">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl text-white mb-16"
        >
          Skill Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => {
            const GroupIcon = groupIcons[gi % groupIcons.length]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: gi * 0.15 }}
                className="rounded-neu-lg neu-card p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl neu-pressed text-accent">
                    <GroupIcon size={16} />
                  </span>
                  <h3 className="font-display font-bold text-white text-lg">{group.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, i) => {
                    const ItemIcon = itemIcons[item] || MonitorPlay
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-3 rounded-2xl neu-pressed px-4 py-3.5 transition-shadow duration-300 hover:shadow-neu-glow"
                      >
                        <span className="text-accent shrink-0">
                          <ItemIcon size={14} />
                        </span>
                        <span className="text-xs sm:text-sm text-white/80 leading-snug">{item}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
