import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function Embers() {
  const [dim, setDim] = useState({ w: 1024, h: 768 })
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const update = () => setDim({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onRM = () => setReduceMotion(mql.matches)
    onRM()
    mql.addEventListener?.('change', onRM)
    return () => {
      window.removeEventListener('resize', update)
      mql.removeEventListener?.('change', onRM)
    }
  }, [])

  const count = Math.max(10, Math.min(30, Math.floor(dim.w / 50)))
  const particles = useMemo(() => Array.from({ length: count }).map((_, i) => i), [count])

  if (reduceMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-orange-300/70 shadow-[0_0_10px_2px_rgba(255,150,80,0.5)]"
          initial={{ x: Math.random() * dim.w, y: dim.h + Math.random() * 200, opacity: 0 }}
          animate={{
            y: [-20, -200 - Math.random() * 300],
            x: `+=${(Math.random() - 0.5) * 120}`,
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
