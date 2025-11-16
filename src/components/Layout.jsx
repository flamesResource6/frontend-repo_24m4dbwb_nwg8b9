import React from 'react'
import Nav from './Nav'
import AudioAmbience from './AudioAmbience'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0c14]">
      <Nav />
      {children}
      <AudioAmbience />
      <footer className="text-center text-xs text-white/50 py-6">69 Days in Cannibal Island — Roblox</footer>
    </div>
  )
}
