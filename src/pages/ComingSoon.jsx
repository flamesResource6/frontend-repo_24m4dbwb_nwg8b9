import React from 'react'
import { motion } from 'framer-motion'

export default function ComingSoon({ title }) {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-gradient-to-b from-[#0a0c14] via-[#0e1120] to-[#0a0c14] text-white py-24">
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 h-20 w-64 rounded-md border-4 border-amber-900 bg-gradient-to-b from-amber-300/80 to-amber-400/70 text-amber-900 font-black tracking-widest grid place-items-center shadow-[inset_0_12px_20px_rgba(255,255,255,0.25),0_20px_40px_rgba(0,0,0,0.35)]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.div>
        <p className="text-amber-100/80">Coming Soon</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Torch />
          <Torch />
          <Torch />
        </div>
      </div>
    </section>
  )
}

function Torch() {
  return (
    <div className="relative h-10 w-3 bg-stone-700 rounded-sm border border-stone-500/60">
      <motion.span
        className="absolute -top-5 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-orange-400/70 blur-[2px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
    </div>
  )
}
