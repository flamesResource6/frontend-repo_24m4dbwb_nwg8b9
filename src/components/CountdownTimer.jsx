import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function pad(n) {
  return n.toString().padStart(2, '0')
}

const unitStyle = 'flex flex-col items-center'

export default function CountdownTimer({ targetDate }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = useMemo(() => {
    const total = Math.max(0, targetDate.getTime() - now.getTime())
    const s = Math.floor(total / 1000)
    const days = Math.floor(s / 86400)
    const hours = Math.floor((s % 86400) / 3600)
    const mins = Math.floor((s % 3600) / 60)
    const secs = s % 60
    return { days, hours, mins, secs }
  }, [now, targetDate])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-amber-200 drop-shadow-[0_2px_10px_rgba(255,200,120,0.45)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Countdown to Release
        </motion.h2>
      </div>

      <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-8 text-center">
        <TimeUnit label="Days" value={diff.days} />
        <Divider />
        <TimeUnit label="Hours" value={diff.hours} />
        <Divider />
        <TimeUnit label="Minutes" value={diff.mins} />
        <Divider />
        <TimeUnit label="Seconds" value={diff.secs} />
      </div>

      {/* Animated parchment banner */}
      <motion.div
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="mx-auto mt-8 w-[280px] sm:w-[340px] md:w-[420px]"
      >
        <div className="relative">
          <div className="absolute -left-6 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-amber-700/70 blur-sm" />
          <div className="absolute -right-6 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-amber-700/70 blur-sm" />
          <motion.div
            className="relative z-10 rounded-md border-4 border-amber-900 bg-gradient-to-b from-amber-200/90 to-amber-300/80 px-6 py-2 text-center font-black tracking-widest text-amber-900 shadow-[inset_0_10px_20px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.35)]"
            initial={{ y: -10 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Home
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function TimeUnit({ label, value }) {
  return (
    <div className={`${unitStyle}`}>
      <div className="relative">
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-400 drop-shadow-[0_4px_20px_rgba(255,180,100,0.35)]"
          animate={{ textShadow: [
            '0 0 10px rgba(255,200,120,0.3)',
            '0 0 14px rgba(255,200,120,0.55)',
            '0 0 10px rgba(255,200,120,0.3)'
          ]}}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {pad(value)}
        </motion.div>
        <motion.div
          className="absolute -inset-3 rounded-xl bg-amber-500/10 blur-xl"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-amber-200/80">{label}</div>
    </div>
  )
}

function Divider() {
  return <span className="text-amber-400/50 text-2xl sm:text-3xl md:text-4xl">·</span>
}
