import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Aperture } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl rounded-full px-3 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass-panel shadow-glass' : 'bg-base-800/40 border border-white/5'
        }`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
          <a href="#home" onClick={() => handleClick('#home')} className="flex items-center gap-2 pl-1 font-display font-bold text-sm tracking-wide text-white justify-self-start">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full neu-pressed text-accent">
              <Aperture size={16} />
            </span>
            <span className="hidden sm:inline whitespace-nowrap">S. KARVANNAN</span>
          </a>

          <div className="hidden xl:flex items-center justify-center gap-1 justify-self-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className={`relative whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  active === l.href
                    ? 'neu-pressed text-accent'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="justify-self-end">
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden flex h-9 w-9 items-center justify-center rounded-full neu-pressed text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            <span className="hidden xl:block h-8 w-8" aria-hidden="true" />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm rounded-neu glass-panel p-4 xl:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    active === l.href ? 'neu-pressed text-accent' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
