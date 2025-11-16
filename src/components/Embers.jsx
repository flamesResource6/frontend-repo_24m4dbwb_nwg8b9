import React from 'react'
import { motion } from 'framer-motion'

export default function Embers() {
  const particles = Array.from({ length: 30 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-orange-300/70 shadow-[0_0_10px_2px_rgba(255,150,80,0.5)]"
          initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + Math.random() * 200, opacity: 0 }}
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
