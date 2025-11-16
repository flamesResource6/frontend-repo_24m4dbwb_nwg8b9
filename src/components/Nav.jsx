import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sword, Users, Info, Image as ImageIcon, MessageSquare, ShoppingBag, Home } from 'lucide-react'

const linkBase = 'px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors'

export default function Nav() {
  const navItem = ({ to, children, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `${linkBase} ${isActive ? 'bg-amber-500/20 text-amber-200' : 'text-amber-100/80 hover:text-amber-100 hover:bg-amber-500/10'}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <div className="flex items-center gap-2">
        <Icon size={18} aria-hidden />
        <span className="tracking-wide hidden xs:inline sm:inline">{children}</span>
      </div>
    </NavLink>
  )

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full px-3">
      <nav className="mx-auto max-w-3xl overflow-x-auto no-scrollbar backdrop-blur-md bg-[rgba(15,10,25,0.45)] border border-white/10 shadow-xl rounded-full px-2 sm:px-4 py-2 flex items-center gap-1 sm:gap-2">
        {navItem({ to: '/', children: 'Home', icon: Home })}
        {navItem({ to: '/creators', children: 'Creators', icon: Users })}
        {navItem({ to: '/details', children: 'Game Details', icon: Info })}
        {navItem({ to: '/gallery', children: 'Gallery', icon: ImageIcon })}
        {navItem({ to: '/community', children: 'Community', icon: MessageSquare })}
        {navItem({ to: '/shop', children: 'Shop', icon: ShoppingBag })}
      </nav>
    </header>
  )
}
