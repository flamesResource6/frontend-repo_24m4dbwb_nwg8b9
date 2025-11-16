import React from 'react'
import { motion } from 'framer-motion'

export default function Details() {
  return (
    <section className="min-h-[90vh] py-24 bg-gradient-to-b from-[#0a0c14] via-[#0e1120] to-[#0a0c14] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-amber-200">Game Details</h2>
        <div className="space-y-10">
          <StoryBlock title="A Crash in the Dusk">
            Players awaken on a mysterious island after a plane crash. Ruined castles loom on the cliffs, torches flicker in the distance, and strange echoes ride the wind.
          </StoryBlock>
          <StoryBlock title="Cannibals & Five Unique Bosses">
            Cel-shaded creatures stalk the jungle. Face five handcrafted bosses—each with a twist—and carve a path through the ruins.
          </StoryBlock>
          <StoryBlock title="The Mission">
            Defeat every boss, collect scattered plane parts, and rebuild your escape craft before the island consumes you.
          </StoryBlock>
          <StoryBlock title="Play Together">
            1–6 player co-op survival adventure, built for Roblox.
          </StoryBlock>
        </div>
      </div>
    </section>
  )
}

function StoryBlock({ title, children }) {
  return (
    <motion.div
      className="rounded-xl border border-white/10 p-6 backdrop-blur bg-white/5 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -inset-14 bg-[radial-gradient(circle_at_top_left,rgba(255,200,140,0.15),transparent_60%)]"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-amber-200 mb-2">{title}</h3>
        <p className="text-amber-50/90 leading-relaxed">{children}</p>
      </div>
    </motion.div>
  )
}
