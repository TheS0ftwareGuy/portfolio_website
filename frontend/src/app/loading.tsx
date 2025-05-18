import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 font-mono text-green-400 border border-green-400">
          <span className="animate-pulse">Loading</span>
          <span className="terminal-cursor ml-1"></span>
        </div>
        <p className="mt-4 text-gray-400 font-mono text-sm">Initializing portfolio...</p>
      </div>
    </div>
  )
}