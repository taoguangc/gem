/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1600px',
		},
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary))',
				secondary: 'rgb(var(--color-secondary))',
				light: 'rgb(var(--color-light))',
				border: 'rgb(var(--color-border))',
			},
			boxShadow: {
				xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
				default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
				outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
				none: 'none',
			},
			letterSpacing: {
				tighter: '-0.1em',
				tight: '-0.05em',
				normal: '0',
				wide: '0.05em',
				wider: '0.1em',
				widest: '0.2em',
			},
			lineHeight: {
				'extra-loose': '2.5',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
