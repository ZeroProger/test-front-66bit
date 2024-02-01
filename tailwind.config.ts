import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '460px',
			sm: '660px',
			md: '800px',
			lg: '980px',
			xl: '1200px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				background: 'hsl(var(--background))',
				'main-color': 'var(--main-color)',
				'second-color': 'var(--second-color)',
				'text-color': 'var(--text-color)',
			},
			spacing: {
				layout: '1rem',
				'layout-sm': '0.75rem',
				'layout-xs': '0.5rem',
			},
			fontSize: {
				md: '1rem',
			},
			fontFamily: {
				sans: ['Rubik'],
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.content-container': {
					maxWidth: 'var(--container-max-width)',
					width: '100%',
					margin: '0 auto',
				},
			})
		}),
	],
}

export default config
