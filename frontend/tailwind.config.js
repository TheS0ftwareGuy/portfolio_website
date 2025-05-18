// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  primary: 'var(--primary)',
		  secondary: 'var(--secondary)',
		  accent: 'var(--accent)',
		},
		fontFamily: {
		  sans: ['var(--font-geist-sans)', 'sans-serif'],
		  mono: ['var(--font-geist-mono)', 'monospace'],
		},
		// Add other theme extensions like animation, keyframes, etc.
		// The matrix animations are currently in globals.css, which is fine.
	  },
	},
	plugins: [],
  };