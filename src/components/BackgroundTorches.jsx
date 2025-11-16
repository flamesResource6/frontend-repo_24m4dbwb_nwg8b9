import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundTorches() {
  const [count, setCount] = useState(6)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 380) setCount(3)
      else if (w < 640) setCount(4)
      else if (w < 1024) setCount(5)
      else setCount(6)
    }
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

  return (
    <div className="absolute inset-x-0 bottom-6 z-10 flex items-end justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative h-16 sm:h-20 w-1.5 sm:w-2 bg-stone-700/80 rounded-sm border border-stone-500/40">
          {!reduceMotion && (
            <motion.span
              className="absolute -top-6 left-1/2 -translate-x-1/2 h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-orange-400/70 blur-[2px]"
              animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -1, 0] }}
              transition={{ duration: 1.4 + Math.random(), repeat: Infinity }}
            />
          )}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-amber-300" />
        </div>
      ))}
    </div>
  )
}
