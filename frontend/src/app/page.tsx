'use client'

import * as React from 'react'
import Image from 'next/image'
import { FaLinkedin as _FaLinkedin, FaGithub as _FaGithub } from 'react-icons/fa'

// Cast to the React component type TS wants:
const FaLinkedin = _FaLinkedin as React.ComponentType<React.SVGProps<SVGSVGElement>>
const FaGithub   = _FaGithub   as React.ComponentType<React.SVGProps<SVGSVGElement>>

export default function HomePage() {
  // Build enough “01” pairs to fill 100 characters
  const line = Array(100).fill('01').join(' ')
  // Repeat into 30 rows to cover full height
  const rows = Array(30).fill(line)

  return (
    <section
      id="home"
      className="relative flex items-center justify-between min-h-screen px-8 lg:px-32 overflow-x-hidden"
    >
      {/* Matrix background */}
      <div className="matrix">
        {rows.map((txt, i) => (
          <div key={i}>{txt}</div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto gap-12">

        {/* Left: Text Block */}
        <div className="text-center lg:text-left space-y-4 max-w-md">
        	<h1 className="text-5xl font-bold text-white">
				Hi, I’m Adam! <span>👋</span>
			</h1>
          	<p className="text-lg text-gray-200">
            I’m a Software Engineering student at Northwestern University,
            currently working on natural language processing (NLP) with Python.
          	</p>
        </div>

        {/* Right: Photo + Social Buttons*/}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          <Image
            src="/me.jpeg"
            alt="Photo of Adam"
            width={240}
            height={240}
            className="rounded-full border-4 border-green-400 object-cover"
          />
		  <div className="flex space-x-6 text-4xl text-white">
			<a
				href="https://linkedin.com/in/adam"
				target="_blank"
				rel="noopener noreferer"
			>
				<FaLinkedin />
			</a>
			<a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
		  </div>
        </div>
      </div>
    </section>
  )
}
