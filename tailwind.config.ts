import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
	darkMode: ['class'],
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
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			spacing: {
				layout: '1.5rem',
			},
			fontSize: {
				'2xs': ['10px', '12px'],
				xs: ['12px', '14px'],
				sm: ['14px', '16px'],
				md: ['16px', '18px'],
				lg: ['18px', '21px'],
				xl: ['20px', '24px'],
				'2xl': ['24px', '28px'],
				'3xl': ['32px', '37px'],
				'4xl': ['40px', '47px'],
			},
			borderRadius: {
				sm: 'calc(var(--radius) - 2px)',
				md: 'calc(var(--radius))',
				lg: 'calc(var(--radius) + 2px)',
				xl: 'calc(var(--radius) + 4px)',
			},
			fontFamily: {
				sans: ['Railway, sans-serif'],
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
				'.shadow-header': {
					boxShadow: 'var(--header-shadow)',
				},
				'.shadow-select': {
					boxShadow: 'var(--select-shadow)',
				},
			})
		}),
	],
}

export default config
