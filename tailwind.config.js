const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		typography: theme => ({}),
		extend: {
			colors: {
				gray: {
					0: '#fff',
					100: '#eeeeee',
					200: '#e0e0e0',
					300: '#bbbbbb',
					400: '#666666',
					500: '#444444',
					600: '#2a2a2a',
					700: '#1f1f1f',
					800: '#181818',
					900: '#0f0f0f',
				},
			},
			fontFamily: {
				sans: ['IBM Plex Sans', ...fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
};
