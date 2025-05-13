'use client'

import React, { useState, useEffect } from 'react'

const links = [
  { id: 'adam', label: '_hello' },
  { id: 'projects', label: '_projects' },
  { id: 'contact', label: '_contact-me' },
]

export default function Navbar() {
  const [active, setActive] = useState('adam')

  useEffect(() => {
    const onScroll = () => {
      const midpoint = window.scrollY + window.innerHeight / 2
      for (const link of links) {
        const section = document.getElementById(link.id)
        if (section && section.offsetTop <= midpoint && section.offsetTop + section.offsetHeight > midpoint) {
          setActive(link.id)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f111a] border-b border-gray-800 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6">
        <ul className="flex space-x-6 pt-4 pb-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`inline-block px-4 py-2 border-b-2 ${
                  active === link.id
                    ? 'text-orange-400 border-orange-400 font-semibold'
                    : 'text-gray-400 border-transparent hover:text-gray-200'
                } transition-colors duration-200`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
