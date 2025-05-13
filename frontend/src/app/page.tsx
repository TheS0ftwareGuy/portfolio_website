'use client'

import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function HomePage() {
  // Typewriter for “Software Engineer” in multiple languages
  const [text] = useTypewriter({
    words: [
      'Software Engineer',
      'Développeur Logiciel',
      'Ingeniero de Software',
      'ソフトウェアエンジニア',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  // Matrix background data
  const line = Array(100).fill('01').join(' ')
  const rows = Array(30).fill(line)

  // Helper to open external links in a new tab
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Navbar />

      <section id="adam" className="relative overflow-x-hidden bg-black">
        {/* Matrix background */}
        <div className="matrix absolute inset-0">
          {rows.map((row, i) => (
            <div key={i}>{row}</div>
          ))}
        </div>

        {/* Hero grid */}
        <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-2 items-center min-h-[calc(100vh-3rem)] pt-16 px-8 md:px-0 gap-12">
          {/* Left content */}
          <div className="justify-self-center md:justify-self-start space-y-4 text-white">
            <h2 className="text-lg font-mono text-gray-300">Hey there! I'm</h2>
            <h1 className="text-6xl font-bold">Adam</h1>
            <div className="flex items-center text-3xl font-mono text-green-300">
              {text}
              <Cursor cursorStyle="|" />
            </div>
          </div>

          {/* Photo + Social Buttons */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <Image
              src="/me.jpeg"
              alt="Photo of Adam"
              width={280}
              height={280}
              className="rounded-full border-4 border-green-400 object-cover"
            />

            {/* Pill-shaped social buttons */}
            <div className="flex space-x-6 pt-6 text-lg">
              {/* GitHub Button */}
              <button
                type="button"
                onClick={() => openLink('https://github.com/TheS0ftwareGuy')}
                className="flex items-center gap-x-3 px-6 py-4 text-lg w-52 rounded-full bg-black text-gray-300 font-semibold border-2 border-gray-600 shadow-md hover:shadow-lg transition-all"
              >
				<span>GitHub</span>
                <FaGithub className="w-5 h-5" />
              </button>

              {/* LinkedIn Button */}
              <button
                type="button"
                onClick={() => openLink('https://www.linkedin.com/in/-adam-mohamed/')}
                className="flex items-center gap-x-3 px-6 py-4 text-lg w-52 rounded-full bg-black text-gray-300 font-semibold border-2 border-gray-600 shadow-md hover:shadow-lg transition-all"
              >
				<span>LinkedIn</span>
                <FaLinkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
