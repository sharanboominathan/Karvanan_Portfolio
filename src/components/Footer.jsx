import { Aperture } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-base-900 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full neu-pressed text-accent">
            <Aperture size={14} />
          </span>
          <div>
            <p className="font-display font-bold text-white text-sm">S. Karvannan</p>
            <p className="text-[11px] text-white/40">Photography • Videography • Cinematography</p>
          </div>
        </div>
        <p className="text-xs text-white/35">© 2026 S. Karvannan. All rights reserved.</p>
      </div>
    </footer>
  )
}
