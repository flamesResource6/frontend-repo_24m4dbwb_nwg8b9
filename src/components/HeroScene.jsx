import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const HeroScene = ({ children }) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic dusk gradient and vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(10,12,20,0.5)] via-[rgba(15,10,25,0.35)] to-[rgba(10,8,20,0.85)]" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 160px 40px rgba(0,0,0,0.55)' }} />

      {/* Subtle drifting fog */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_top,rgba(200,200,255,0.06),transparent_60%)]"
        animate={{ x: [0, 30, -20, 0], opacity: [0.4, 0.55, 0.45, 0.4] }}
        transition={{ duration: 24, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        {children}
      </div>
    </section>
  )
}

export default HeroScene
