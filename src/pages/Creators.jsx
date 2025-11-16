import React from 'react'
import { motion } from 'framer-motion'

const creators = [
  { name: 'ZAIM AKA ECLIPSE', color: 'from-amber-300 to-amber-500' },
  { name: 'SKY', color: 'from-blue-300 to-sky-500' },
]

export default function Creators() {
  return (
    <section className="min-h-[80vh] py-24 bg-gradient-to-b from-[#0a0c14] via-[#0c0f1c] to-[#0a0c14] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-amber-200">Creators</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {creators.map((c, i) => (
            <motion.div
              key={c.name}
              className="relative rounded-xl border border-white/10 p-6 backdrop-blur bg-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`absolute -inset-20 bg-gradient-to-br ${c.color} opacity-20 blur-3xl`}
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-400/20 border border-amber-300/30" />
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">{c.name}</h3>
                </div>
                <div className="relative">
                  <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMxNjc0NDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center h-52 border border-white/10" />
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ boxShadow: [
                      'inset 0 0 0 0 rgba(0,0,0,0)',
                      'inset 0 0 30px 4px rgba(255,210,120,0.15)',
                      'inset 0 0 0 0 rgba(0,0,0,0)'
                    ]}}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 rounded-md border-2 border-amber-500/60 bg-amber-200/20 text-amber-100 font-semibold backdrop-blur"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Glowing Runes ✦ ✧ ✦
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
