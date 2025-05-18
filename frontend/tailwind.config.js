// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // If you have or plan to add a 'components' directory
	  // Add any other paths where you might use Tailwind classes
	],
	theme: {
	  extend: {
		colors: {
		  // You can extend your theme colors here if needed
		  // Example:
		  // 'custom-green': '#00FF00',
		},
		fontFamily: {
		  // If using custom fonts defined via CSS variables in globals.css
		  // ensure they are correctly set up there.
		  // For example, if you have --font-geist-sans in globals.css:
		  // sans: ['var(--font-geist-sans)', 'sans-serif'],
		  // mono: ['var(--font-geist-mono)', 'monospace'],
		},
		// Add other theme extensions like animation, keyframes, etc.
		// The matrix animations are currently in globals.css, which is fine.
	  },
	},
	plugins: [
	  // Add any Tailwind plugins here if you use them
	],
  };