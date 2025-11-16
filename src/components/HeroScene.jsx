import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const HeroScene = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    onResize()
    window.addEventListener('resize', onResize)
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateRm = () => setReduceMotion(mql.matches)
    updateRm()
    mql.addEventListener?.('change', updateRm)
    return () => {
      window.removeEventListener('resize', onResize)
      mql.removeEventListener?.('change', updateRm)
    }
  }, [])

  return (
    <section className={`relative w-full overflow-hidden ${isMobile ? 'h-[70vh]' : 'h-[90vh]'}`}>
      <div className="absolute inset-0">
        {/* Fallback static background for mobile or reduced motion */}
        {(isMobile || reduceMotion) ? (
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        ) : (
          <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        )}
      </div>

      {/* Cinematic dusk gradient and vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(10,12,20,0.55)] via-[rgba(15,10,25,0.35)] to-[rgba(10,8,20,0.9)]" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 180px 50px rgba(0,0,0,0.6)' }} />

      {/* Subtle drifting fog (disabled if reduce motion) */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_top,rgba(200,200,255,0.06),transparent_60%)]"
          animate={{ x: [0, 30, -20, 0], opacity: [0.4, 0.55, 0.45, 0.4] }}
          transition={{ duration: 24, ease: 'easeInOut', repeat: Infinity }}
        />
      )}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}

export default HeroScene
