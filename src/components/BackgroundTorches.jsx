import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundTorches() {
  return (
    <div className="absolute inset-x-0 bottom-6 z-10 flex items-end justify-center gap-10 sm:gap-16 md:gap-24">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="relative h-20 w-2 bg-stone-700/80 rounded-sm border border-stone-500/40">
          <motion.span
            className="absolute -top-6 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-orange-400/70 blur-[2px]"
            animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -1, 0] }}
            transition={{ duration: 1.4 + Math.random(), repeat: Infinity }}
          />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-amber-300" />
        </div>
      ))}
    </div>
  )
}
