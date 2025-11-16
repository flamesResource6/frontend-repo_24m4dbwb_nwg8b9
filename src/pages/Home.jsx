import React from 'react'
import HeroScene from '../components/HeroScene'
import CountdownTimer from '../components/CountdownTimer'
import Embers from '../components/Embers'
import BackgroundTorches from '../components/BackgroundTorches'

const releaseDate = new Date('2026-01-01T00:00:00Z')

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0c14] text-white">
      <HeroScene>
        <div className="relative w-full max-w-5xl">
          <CountdownTimer targetDate={releaseDate} />
          <Embers />
          <BackgroundTorches />
        </div>
      </HeroScene>
    </div>
  )
}
