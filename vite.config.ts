import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {},
		}),
	],
	resolve: {
		alias: {
			'@/app': path.resolve(__dirname, './src/app'),
			'@/entities': path.resolve(__dirname, './src/entities'),
			'@/features': path.resolve(__dirname, './src/features'),
			'@/widgets': path.resolve(__dirname, './src/widgets'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/shared': path.resolve(__dirname, './src/shared'),
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
})
