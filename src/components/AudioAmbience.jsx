import React, { useEffect, useRef, useState } from 'react'

export default function AudioAmbience() {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled && ref.current) {
      ref.current.volume = 0.25
      const play = () => ref.current?.play().catch(() => {})
      // Attempt play when toggled and also when user interacts (mobile autoplay)
      play()
      const onTap = () => play()
      window.addEventListener('pointerdown', onTap, { once: true })
      return () => window.removeEventListener('pointerdown', onTap)
    }
  }, [enabled])

  return (
    <div className="fixed bottom-4 right-4 left-auto z-50">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`px-3 py-2 rounded-md text-sm font-semibold backdrop-blur bg-black/40 border border-white/10 ${enabled ? 'text-amber-200' : 'text-white/80'}`}
        aria-pressed={enabled}
        aria-label={enabled ? 'Turn ambient sound off' : 'Turn ambient sound on'}
      >
        {enabled ? 'Sound: On' : 'Sound: Off'}
      </button>
      <audio ref={ref} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_7d816c2fd3.mp3?filename=dramatic-battle-ambience-20374.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
